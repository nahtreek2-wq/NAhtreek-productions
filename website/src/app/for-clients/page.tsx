import {
  PageHero,
  Section,
  Heading,
  Steps,
  CTA,
  InfoGrid,
  Action,
} from "@/components/marketing/Primitives";
import { AiShowcaseSection } from "@/components/sections/AiShowcaseSection";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "NAHTREEK Home app for property owners",
  "Find verified engineers and home-service pros, plan with NAHTREEK AI, chat in-app and track every job with the NAHTREEK Home app.",
  "/for-clients",
);
const steps = [
  {
    title: "Plan with AI",
    description:
      "Describe the work in plain words — optionally with site photos — and get a structured plan with findings, urgency and next steps.",
  },
  {
    title: "Discover verified pros",
    description:
      "Browse engineers and service professionals by discipline, area and real completed-job reviews.",
  },
  {
    title: "Raise a request",
    description:
      "Share property details, photos and timeline once. Interested pros respond with written quotes.",
  },
  {
    title: "Chat and agree scope",
    description:
      "Discuss everything in-app and lock the scope, price and schedule before work begins.",
  },
  {
    title: "Track the job",
    description:
      "Follow visits, milestones and handover stage by stage, with a record you can revisit anytime.",
  },
  {
    title: "Review real work",
    description:
      "Rate completed jobs, rebook favourites in one tap, and keep your home's full history.",
  },
];
export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="NAHTREEK Home app"
        title="Everything your home project needs, in one place."
        image="living"
        action={{ href: "/contact", label: "Get started" }}
      >
        Whether you are building, renovating, fixing a problem or planning
        maintenance — find verified pros, plan with AI and track every job
        from your phone.
      </PageHero>
      <Section tone="white">
        <Heading
          eyebrow="More than a contact list"
          title="Give your project a proper starting point."
        >
          Referrals and search results give you names. NAHTREEK Home gives you
          verified experts, structured plans and a written record of everything
          agreed.
        </Heading>
        <InfoGrid
          items={[
            {
              title: "Verified discovery",
              description:
                "Engineers, plumbers, electricians, painters and more — every profile reviewed before it appears.",
            },
            {
              title: "Scope before commitment",
              description:
                "AI plans plus written quotes mean you agree the work, price and exclusions up front.",
            },
            {
              title: "Track to handover",
              description:
                "Requests, chats, visits and completion live in one timeline — no lost threads.",
            },
          ]}
        />
      </Section>
      <AiShowcaseSection />
      <Section tone="soft">
        <div className="split top">
          <div>
            <Heading
              eyebrow="Your journey"
              title="From discovery to a finished job."
            >
              Six steps, one app. Here is how a typical Home engagement flows
              from first idea to final review.
            </Heading>
            <div className="actions">
              <Action href="/contact">Discuss your requirement</Action>
            </div>
          </div>
          <Steps items={steps} />
        </div>
      </Section>
      <CTA
        title="Not sure which service you need?"
        description="Describe the issue in your own words — NAHTREEK AI will help you understand it before you commit to anything."
        href="/contact"
        label="Start with AI planning"
      />
    </>
  );
}
