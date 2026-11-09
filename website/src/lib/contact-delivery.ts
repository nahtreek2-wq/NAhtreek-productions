import type { Enquiry } from "./contact-validation";
import { EMAIL } from "./site";
export function deliveryConfigured() {
  return (
    process.env.CONTACT_PROVIDER === "resend" &&
    Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL)
  );
}
export async function deliverEnquiry(data: Enquiry, key: string) {
  if (!deliveryConfigured()) throw new Error("DELIVERY_NOT_CONFIGURED");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "Idempotency-Key": key,
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [EMAIL],
      reply_to: data.email,
      subject: `NAHTREEK enquiry: ${data.subject}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nType: ${data.userType}\n\n${data.message}\n\nConsent: permission to respond to this enquiry.`,
    }),
    signal: AbortSignal.timeout(12000),
  });
  if (!response.ok) throw new Error("DELIVERY_UNAVAILABLE");
  const body = await response.json();
  if (typeof body.id !== "string") throw new Error("DELIVERY_UNCONFIRMED");
}
