import { createHash } from "node:crypto";
import { validateEnquiry } from "@/lib/contact-validation";
import { deliverEnquiry, deliveryConfigured } from "@/lib/contact-delivery";
import { SITE_URL } from "@/lib/site";
export const runtime = "nodejs";
// Per-instance backstop only. Configure an edge rate-limit rule before public form launch.
const limits = new Map<string, { count: number; until: number }>();
const pending = new Map<string, Promise<void>>();
const json = (body: object, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const allowed = new Set([
    SITE_URL,
    ...(process.env.NODE_ENV !== "production"
      ? ["http://localhost:3000", "http://127.0.0.1:3000"]
      : []),
  ]);
  // Allow same-origin local production QA, never a client-supplied forwarding host.
  const url = new URL(request.url);
  if (
    !process.env.VERCEL &&
    ["localhost", "127.0.0.1"].includes(url.hostname)
  ) {
    allowed.add("http://localhost:3000");
    allowed.add("http://127.0.0.1:3000");
  }
  if (!origin || !allowed.has(origin))
    return json(
      {
        message:
          "This request could not be accepted. Please use the website form.",
      },
      403,
    );
  if (!request.headers.get("content-type")?.includes("application/json"))
    return json({ message: "Expected a JSON enquiry." }, 415);
  const ip = request.headers.get("x-vercel-forwarded-for") || "local";
  const now = Date.now();
  for (const [k, v] of limits) if (v.until < now) limits.delete(k);
  if (limits.size > 5000)
    return json(
      { message: "The enquiry service is busy. Please try later." },
      429,
    );
  const token = createHash("sha256").update(ip).digest("hex");
  const limit = limits.get(token) || { count: 0, until: now + 60000 };
  limit.count++;
  limits.set(token, limit);
  if (limit.count > 5)
    return json(
      {
        message: "Too many attempts. Please wait a minute before trying again.",
      },
      429,
    );
  let raw: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return json({ message: "An enquiry is required." }, 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 20000) {
        await reader.cancel();
        return json({ message: "Your enquiry is too large." }, 413);
      }
      chunks.push(value);
    }
    raw = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return json({ message: "Please check the enquiry and try again." }, 400);
  }
  const input =
    raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  if (input.website)
    return json({ message: "This request could not be accepted." }, 400);
  const { data, errors } = validateEnquiry(raw);
  if (Object.keys(errors).length)
    return json(
      { message: "Please correct the highlighted fields.", errors },
      422,
    );
  if (
    typeof input.requestId !== "string" ||
    !/^[a-f0-9-]{36}$/i.test(input.requestId)
  )
    return json({ message: "Please reload the form and try again." }, 400);
  if (!deliveryConfigured())
    return json(
      {
        message:
          "Online enquiries are temporarily unavailable. Please email nahtreek2@gmail.com. Your message has not been sent.",
      },
      503,
    );
  const key =
    "enquiry/" +
    createHash("sha256")
      .update(JSON.stringify(data) + input.requestId)
      .digest("hex");
  try {
    let job = pending.get(key);
    if (!job) {
      job = deliverEnquiry(data, key);
      pending.set(key, job);
    }
    await job;
    return json({
      message:
        "Your enquiry has been accepted for email delivery to our team. Thank you for getting in touch.",
    });
  } catch {
    return json(
      {
        message:
          "We could not confirm delivery. Please retry with the same details, or contact nahtreek2@gmail.com.",
      },
      502,
    );
  } finally {
    pending.delete(key);
  }
}
