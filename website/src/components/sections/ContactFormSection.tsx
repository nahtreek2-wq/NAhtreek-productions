"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Send, Mail, CheckCircle2 } from "lucide-react";
import { validateEnquiry, type Enquiry } from "@/lib/contact-validation";
import { EMAIL } from "@/lib/site";
export function ContactFormSection({
  serviceName,
  professional = false,
}: {
  serviceName?: string;
  professional?: boolean;
}) {
  const [data, setData] = useState<Enquiry>({
    name: "",
    email: "",
    phone: "",
    userType: professional ? "professional" : "client",
    subject: serviceName
      ? `${serviceName} enquiry`
      : professional
        ? "Professional interest"
        : "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");
  const busy = useRef(false);
  const requestId = useRef("");
  const form = useRef<HTMLFormElement>(null);
  const status = useRef<HTMLDivElement>(null);
  function update(key: keyof Enquiry, value: string | boolean) {
    setData({ ...data, [key]: value });
    setErrors({ ...errors, [key]: "" });
  }
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (busy.current || state === "success") return;
    const checked = validateEnquiry(data);
    setErrors(checked.errors);
    if (Object.keys(checked.errors).length) {
      setTimeout(
        () =>
          form.current
            ?.querySelector<HTMLElement>('[aria-invalid="true"]')
            ?.focus(),
        0,
      );
      return;
    }
    busy.current = true;
    setState("sending");
    setFeedback("");
    requestId.current ||= crypto.randomUUID();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...checked.data,
          requestId: requestId.current,
          website: new FormData(form.current!).get("website"),
        }),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok) {
        setErrors(result.errors || {});
        throw new Error(
          result.message || "We couldn’t send the enquiry. Please try again.",
        );
      }
      setState("success");
      setFeedback(result.message);
    } catch (error) {
      setState("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Connection interrupted. Please try again.",
      );
    } finally {
      busy.current = false;
      setTimeout(() => status.current?.focus(), 0);
    }
  }
  const field = (
    key: "name" | "email" | "phone" | "subject",
    label: string,
    type = "text",
    autoComplete?: string,
  ) => (
    <div className="field">
      <label htmlFor={key}>
        {label} <span aria-hidden="true">*</span>
      </label>
      <input
        id={key}
        name={key}
        type={type}
        autoComplete={autoComplete}
        required
        maxLength={key === "email" ? 254 : key === "subject" ? 160 : 100}
        value={data[key]}
        onChange={(e) => update(key, e.target.value)}
        aria-invalid={Boolean(errors[key])}
        aria-describedby={errors[key] ? `${key}-error` : undefined}
      />
      {errors[key] && (
        <span className="field-error" id={`${key}-error`}>
          {errors[key]}
        </span>
      )}
    </div>
  );
  return (
    <div className="contact-grid">
      <div className="panel">
        <h2 className="text-2xl">Send an enquiry</h2>
        <p className="mb-6">
          All marked fields are required. Please do not include confidential
          documents or identity numbers.
        </p>
        {state === "success" ? (
          <div
            className="form-feedback form-success"
            role="status"
            tabIndex={-1}
            ref={status}
          >
            <CheckCircle2 className="mb-3" />
            <h3>Thank you for your enquiry.</h3>
            <p>{feedback}</p>
          </div>
        ) : (
          <form
            ref={form}
            onSubmit={submit}
            noValidate
            className="form-stack"
            aria-busy={state === "sending"}
          >
            <fieldset
              disabled={state === "sending"}
              className="form-stack border-0 p-0 m-0 min-w-0"
            >
              <div className="form-grid">
                {field("name", "Full name", "text", "name")}
                {field("email", "Email address", "email", "email")}
                {field("phone", "Phone number", "tel", "tel")}
                <div className="field">
                  <label htmlFor="userType">Enquiry type *</label>
                  <select
                    id="userType"
                    name="userType"
                    value={data.userType}
                    onChange={(e) => update("userType", e.target.value)}
                    aria-invalid={Boolean(errors.userType)}
                    aria-describedby={
                      errors.userType ? "type-error" : undefined
                    }
                  >
                    <option value="client">Property owner / client</option>
                    <option value="professional">
                      Engineer / service professional
                    </option>
                    <option value="business">Business enquiry</option>
                    <option value="support">Support</option>
                  </select>
                  {errors.userType && (
                    <span id="type-error" className="field-error">
                      {errors.userType}
                    </span>
                  )}
                </div>
              </div>
              {field("subject", "Subject")}
              <div className="field">
                <label htmlFor="message">Your message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  maxLength={4000}
                  placeholder="Tell us the property location, project stage and work needed."
                  value={data.message}
                  onChange={(e) => update("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : "message-hint"
                  }
                />
                <span id="message-hint" className="form-note">
                  20–4,000 characters. Share only what is needed for your
                  enquiry.
                </span>
                {errors.message && (
                  <span className="field-error" id="message-error">
                    {errors.message}
                  </span>
                )}
              </div>
              <div className="honeypot" aria-hidden="true">
                <label htmlFor="website">Leave this empty</label>
                <input
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div>
                <label
                  className="flex gap-3 items-start text-sm"
                  htmlFor="consent"
                >
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    className="mt-1.5 h-4 w-4 shrink-0"
                    checked={data.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                    required
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={
                      errors.consent ? "consent-error" : undefined
                    }
                  />
                  <span>
                    I allow NAHTREEK to use these details to respond to this
                    enquiry. See the{" "}
                    <Link className="text-link" href="/privacy">
                      privacy policy
                    </Link>
                    .
                  </span>
                </label>
                {errors.consent && (
                  <span className="field-error" id="consent-error">
                    {errors.consent}
                  </span>
                )}
              </div>
              <button
                className="button primary"
                type="submit"
                disabled={state === "sending"}
              >
                <Send size={18} />
                {state === "sending" ? "Sending enquiry…" : "Send enquiry"}
              </button>
            </fieldset>
            {state === "error" && (
              <div
                ref={status}
                role="alert"
                tabIndex={-1}
                className="form-feedback"
              >
                {feedback}
              </div>
            )}
            <p className="form-note">
              Your details stay in the form if delivery fails. An enquiry does
              not confirm a booking.
            </p>
          </form>
        )}
      </div>
      <aside className="form-stack">
        <div className="panel">
          <div className="icon-tile">
            <Mail />
          </div>
          <h2 className="text-2xl">Prefer to email us?</h2>
          <p>
            For service questions, professional interest or help with an
            existing enquiry.
          </p>
          <a className="text-link break-all" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
        <div className="panel">
          <h3>A few useful details</h3>
          <p>
            Property type and general location
            <br />
            Current project stage
            <br />
            Work needed and preferred timeline
          </p>
          <p>Availability and any next steps will be discussed individually.</p>
        </div>
        <p className="form-note">
          This is not an emergency service. For urgent safety concerns, contact
          appropriate local assistance.
        </p>
      </aside>
    </div>
  );
}
