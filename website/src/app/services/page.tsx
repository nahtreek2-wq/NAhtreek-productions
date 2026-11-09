import { PageHero, CTA } from "@/components/marketing/Primitives";
import { PropertyServicesSection } from "@/components/sections/PropertyServicesSection";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Engineering & Home Services",
  "Browse civil engineering, plumbing, electrical, waterproofing, painting, carpentry and property inspection services on NAHTREEK.",
  "/services",
);
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Find the right service for your project."
        image="site"
      >
        Eight service guides across engineering, building services, finishing
        and maintenance — each backed by verified pros, AI planning and
        tracked delivery.
      </PageHero>
      <PropertyServicesSection showHeading={false} />
      <CTA
        title="Have a requirement that spans several services?"
        description="Tell us about the overall project — NAHTREEK AI will help you work out which expertise you need first."
        label="Plan it with AI"
      />
    </>
  );
}
