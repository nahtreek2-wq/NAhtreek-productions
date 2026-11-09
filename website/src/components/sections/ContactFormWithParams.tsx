"use client";
import { useSearchParams } from "next/navigation";
import { PROPERTY_SERVICES } from "@/data/services";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

/** Reads ?service= / ?type= on the client so /contact stays fully static. */
export function ContactFormWithParams() {
  const query = useSearchParams();
  const service = PROPERTY_SERVICES.find((s) => s.slug === query.get("service"));
  const professional = query.get("type") === "professional";
  return (
    <ContactFormSection
      key={service?.slug || query.get("type") || "general"}
      serviceName={service?.title}
      professional={professional}
    />
  );
}
