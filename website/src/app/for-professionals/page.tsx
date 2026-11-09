import {
  PageHero,
  Section,
  Heading,
  Steps,
  CTA,
  InfoGrid,
  CheckList,
} from "@/components/marketing/Primitives";
import { PricingSection } from "@/components/sections/PricingSection";
import { pageMetadata } from "@/lib/site";
import { Photo } from "@/components/marketing/Photo";
export const metadata = pageMetadata(
  "NAHTREEK Pro app for engineers & professionals",
  "Get matched jobs, manage work and earnings, and grow with Pro membership on the NAHTREEK Pro app for engineers and service teams.",
  "/for-professionals",
);
export default function ProfessionalsPage() {
  return (
    <>
      <PageHero
        eyebrow="NAHTREEK Pro app"
        title="Real jobs, real visibility, real growth."
        image="roofing"
        action={{
          href: "/contact?type=professional",
          label: "Join as a professional",
        }}
      >
        NAHTREEK Pro brings matched job requests to engineers and service
        teams — with profiles, reviews, earnings tracking and a membership
        that rewards great work.
      </PageHero>
      <Section tone="white">
        <Heading
          eyebrow="Who it is for"
          title="Different disciplines. A shared professional standard."
        />
        <div className="grid-2">
          <article className="panel">
            <Photo kind="plans" className="audience-photo" />
            <h3>Civil engineers & consultants</h3>
            <p>
              Structural work, inspections, planning and building-service
              consultation — presented with your qualifications and track
              record.
            </p>
            <CheckList
              items={[
                "Civil and structural engineering",
                "Property inspection and specialist assessment",
                "Planning and building-service consultation",
              ]}
            />
          </article>
          <article className="panel">
            <Photo kind="carpentry" className="audience-photo" />
            <h3>Skilled service professionals</h3>
            <p>
              Plumbing, electrical, painting, carpentry, masonry and
              maintenance — matched to jobs in your operating area.
            </p>
            <CheckList
              items={[
                "Plumbing, electrical and maintenance",
                "Painting, carpentry and interiors",
                "Masonry, waterproofing and repairs",
              ]}
            />
          </article>
        </div>
      </Section>
      <Section tone="soft">
        <Heading
          eyebrow="Why Pro"
          title="Designed around meaningful engagements."
        >
          No cold calling, no race to the bottom. Homeowners arrive with
          structured requests — you respond with written quotes and build a
          reputation on completed work.
        </Heading>
        <InfoGrid
          items={[
            {
              title: "Matched job requests",
              description:
                "Requests arrive with property context, photos and timeline — assess fit in minutes, not site visits.",
            },
            {
              title: "Profile that sells",
              description:
                "Specialisms, experience, service areas and verified reviews in one place clients trust.",
            },
            {
              title: "Earnings, tracked",
              description:
                "Follow completed jobs, payouts and your membership benefits from a single dashboard.",
            },
          ]}
        />
      </Section>
      <PricingSection />
      <Section tone="soft">
        <div className="split top">
          <Heading
            eyebrow="Get onboarded"
            title="Start by introducing your practice."
          >
            Every profile is reviewed before it appears in discovery. Tell us
            about your discipline and service area — no identity documents
            through the enquiry form.
          </Heading>
          <Steps
            items={[
              {
                title: "Share your professional background",
                description:
                  "Tell us your discipline, service area and type of work your team is equipped to handle.",
              },
              {
                title: "Get verified",
                description:
                  "The team reviews credentials and experience. Verified members earn the badge clients look for.",
              },
              {
                title: "Receive jobs, grow rank",
                description:
                  "Matched requests land in your Pro app. Great reviews — and Pro membership — lift you higher.",
              },
            ]}
          />
        </div>
        <p className="notice">
          Professionals are responsible for accurate information, applicable
          permissions and qualifications, the services they provide, and the
          reports or advice they issue. Participation does not guarantee
          enquiries or earnings.
        </p>
      </Section>
      <CTA
        title="Let's learn about your expertise."
        description="Tell us what you do, where you work and the property needs you help address."
        href="/contact?type=professional"
        label="Join as a professional"
      />
    </>
  );
}
