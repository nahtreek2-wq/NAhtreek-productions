import { Heading, Section, FAQ } from "@/components/marketing/Primitives";

export function HomeFaqSection() {
  return (
    <Section tone="soft">
      <div className="container narrow">
        <Heading center eyebrow="Questions, answered" title="Before you get started.">
          Straight answers about the apps, the AI and how engagements work.
        </Heading>
        <FAQ
          items={[
            [
              "How do I get the NAHTREEK apps?",
              "NAHTREEK Home and Pro are in early access. Contact us and the team will onboard you.",
            ],
            [
              "What does NAHTREEK AI actually do?",
              "It turns a rough description — optionally with site photos — into a structured plan: what it understood, what to do first, what to watch out for, and the one question that matters most. 5 chats are free; unlimited plans cost ₹129/month.",
            ],
            [
              "How are professionals verified?",
              "Engineers and service pros apply with their credentials and experience, and NAHTREEK reviews each profile before it appears in discovery. Verified members carry a badge; Pro members are ranked higher.",
            ],
            [
              "How much will a service cost?",
              "Fees depend on the property, location and agreed scope. NAHTREEK AI gives you a planning starting point, and professionals share written quotes before any work begins — no surprises mid-job.",
            ],
            [
              "Does NAHTREEK certify engineering work?",
              "No. NAHTREEK connects you with qualified professionals and keeps the engagement transparent. Technical advice, designs, inspections and certifications remain the professional's responsibility.",
            ],
            [
              "What should I do for an urgent safety issue?",
              "Do not rely on an enquiry for emergencies. Contact local emergency services or a qualified local professional immediately for anything structurally unsafe, sparking, leaking gas or flooding.",
            ],
          ]}
        />
      </div>
    </Section>
  );
}
