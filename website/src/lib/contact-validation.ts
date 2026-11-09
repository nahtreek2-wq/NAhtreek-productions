export const ENQUIRY_TYPES = [
  "client",
  "professional",
  "business",
  "support",
] as const;
export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  userType: string;
  subject: string;
  message: string;
  consent: boolean;
};
export function validateEnquiry(value: unknown): {
  data: Enquiry;
  errors: Record<string, string>;
} {
  const input =
    value && typeof value === "object"
      ? (value as Record<string, unknown>)
      : {};
  const text = (key: string) =>
    typeof input[key] === "string" ? (input[key] as string).trim() : "";
  const data = {
    name: text("name"),
    email: text("email"),
    phone: text("phone"),
    userType: text("userType"),
    subject: text("subject"),
    message: text("message"),
    consent: input.consent === true,
  };
  const errors: Record<string, string> = {};
  if (
    data.name.length < 2 ||
    data.name.length > 100 ||
    /[\r\n]/.test(data.name)
  )
    errors.name = "Enter your name (2–100 characters).";
  if (data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address.";
  if (
    !/^[+\d()\s.-]{7,25}$/.test(data.phone) ||
    data.phone.replace(/\D/g, "").length < 7
  )
    errors.phone = "Enter a valid phone number, including area code.";
  if (!(ENQUIRY_TYPES as readonly string[]).includes(data.userType))
    errors.userType = "Choose an enquiry type.";
  if (
    data.subject.length < 3 ||
    data.subject.length > 160 ||
    /[\r\n]/.test(data.subject)
  )
    errors.subject = "Enter a subject (3–160 characters).";
  if (data.message.length < 20 || data.message.length > 4000)
    errors.message =
      "Please provide 20–4,000 characters about your requirement.";
  if (!data.consent)
    errors.consent =
      "Please allow us to use these details to respond to your enquiry.";
  return { data, errors };
}
