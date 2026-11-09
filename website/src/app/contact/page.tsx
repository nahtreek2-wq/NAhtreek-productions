import { Suspense } from "react";
import { PageHero, Section } from "@/components/marketing/Primitives";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { ContactFormWithParams } from "@/components/sections/ContactFormWithParams";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Contact & enquiries",
  "Contact NAHTREEK about property services, engineering consultations and professional onboarding.",
  "/contact",
);
export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what you have in mind.">
        A property project, a maintenance concern or
        professional interest — start with a few details so we can discuss
        the right next step.
      </PageHero>
      <Section>
        <Suspense fallback={<ContactFormSection />}>
          <ContactFormWithParams />
        </Suspense>
      </Section>
    </>
  );
}
