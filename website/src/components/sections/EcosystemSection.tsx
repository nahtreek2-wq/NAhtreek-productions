import { Action, Heading, Section, Steps } from "@/components/marketing/Primitives";

export function EcosystemSection() {
  return (
    <Section tone="soft" id="how-it-works">
      <div className="split top">
        <div>
          <Heading title="One flow from problem to finished job.">
            Everything happens in one place: no lost phone numbers, no vague
            verbal quotes, no wondering what happens next.
          </Heading>
          <div className="actions">
            <Action href="/how-it-works">See how it works</Action>
          </div>
        </div>
        <Steps
          items={[
            {
              title: "Find verified pros",
              description:
                "Browse engineers and service professionals by discipline, area and reviews. Every profile is reviewed before it appears.",
            },
            {
              title: "Chat and agree scope",
              description:
                "Discuss the work in-app, share photos, and lock a written scope and quote before anyone lifts a tool.",
            },
            {
              title: "Track the job",
              description:
                "Follow progress stage by stage — visits, quotes, work done and handover — with a record you can revisit anytime.",
            },
            {
              title: "Review and rebook",
              description:
                "Rate real completed work. Great pros earn visibility; favourites are one tap away next time.",
            },
          ]}
        />
      </div>
    </Section>
  );
}
