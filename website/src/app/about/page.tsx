import { Target, Compass, Users } from "lucide-react";
import {
  PageHero,
  Section,
  Heading,
  InfoGrid,
  CTA,
  CheckList,
} from "@/components/marketing/Primitives";
import { PricingSection } from "@/components/sections/PricingSection";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "About NAHTREEK",
  "NAHTREEK connects homeowners with verified civil engineers and home-service professionals through the Home and Pro apps, planned with AI.",
  "/about",
);
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NAHTREEK"
        image="plans"
        title="Better connections for better property decisions."
      >
        NAHTREEK is a platform connecting homeowners with verified civil
        engineers and home-service professionals — with AI planning, in-app
        chat and job tracking built around every engagement.
      </PageHero>
      <Section tone="white">
        <div className="split">
          <Heading
            eyebrow="Why we exist"
            title="Property work involves more than finding a contact."
          >
            Owners need to understand the expertise involved. Professionals
            need context about the property and the work. NAHTREEK brings
            those conversations together — structured, written and trackable.
          </Heading>
          <div>
            <h3>From plot to home — and beyond.</h3>
            <p className="mt-4">
              Planning, construction, renovation, repairs and maintenance each
              call for different skills. The Home app gives owners verified
              discovery and AI planning; the Pro app gives experts matched
              jobs and a reputation to build on.
            </p>
            <CheckList
              items={[
                "NAHTREEK Home — for property owners and plot buyers",
                "NAHTREEK Pro — for civil engineers and service teams",
                "NAHTREEK AI — project planning in plain words",
              ]}
            />
          </div>
        </div>
      </Section>
      <Section tone="soft">
        <InfoGrid
          items={[
            {
              icon: <Target />,
              title: "Our mission",
              description:
                "Help people describe their property needs and connect with relevant, verified professional expertise.",
            },
            {
              icon: <Compass />,
              title: "Our vision",
              description:
                "A more organised property-services experience, from early decisions to long-term care.",
            },
            {
              icon: <Users />,
              title: "Our approach",
              description:
                "Useful information, realistic expectations and direct conversations between owners and professionals.",
            },
          ]}
        />
      </Section>
      <PricingSection />
      <Section tone="soft">
        <Heading
          eyebrow="Where we are today"
          title="Growing city by city."
        >
          Both apps are live. Get started, plan your
          project with AI, and book verified pros in
          your area.
        </Heading>
        <p className="notice">
          NAHTREEK does not itself certify buildings or guarantee professional
          outcomes. Technical decisions and regulated work must be handled by
          appropriately qualified professionals.
        </p>
      </Section>
      <CTA />
    </>
  );
}
