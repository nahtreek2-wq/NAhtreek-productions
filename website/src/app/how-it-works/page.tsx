import {
  PageHero,
  Section,
  Heading,
  Steps,
  CTA,
  FAQ,
} from "@/components/marketing/Primitives";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "How NAHTREEK works",
  "Plan with AI, find verified engineers and pros, agree scope in-app and track every job — how a NAHTREEK engagement flows.",
  "/how-it-works",
);
const steps = [
  {
    title: "Plan with AI",
    description:
      "Describe your property and the work in plain words — add photos if you like. NAHTREEK AI returns findings, urgency and a prioritised plan.",
  },
  {
    title: "Find a verified pro",
    description:
      "Browse engineers and service professionals by discipline, area and completed-job reviews.",
  },
  {
    title: "Raise a request",
    description:
      "Share property details, photos and timeline once. Interested pros respond with written quotes.",
  },
  {
    title: "Agree scope in-app",
    description:
      "Chat, compare quotes and lock the scope, price, schedule and exclusions before work begins.",
  },
  {
    title: "Track the job",
    description:
      "Follow visits, milestones and handover in one timeline — with a record of everything agreed.",
  },
  {
    title: "Review real work",
    description:
      "Rate completed jobs and rebook favourites. Great work earns pros visibility across the platform.",
  },
];
const faqs = [
  [
    "How do I get the apps?",
    "The apps are in early access. Contact us and the team will onboard you — bookings, chat, tracking and AI planning all work in the apps today.",
  ],
  [
    "What does NAHTREEK AI cost?",
    "Your first 5 AI chats are free. Unlimited chats, plans and photo analysis cost ₹129/month in the Home app, cancellable anytime.",
  ],
  [
    "Does NAHTREEK certify engineering work?",
    "No. NAHTREEK connects you with qualified professionals and keeps engagements transparent. Technical advice, designs, inspections and certifications remain the professional's responsibility.",
  ],
  [
    "How much will a service cost?",
    "Fees depend on the property, location and agreed scope. NAHTREEK AI helps you plan, and professionals share written quotes before any work begins.",
  ],
  [
    "Can service professionals join?",
    "Yes. Engineers, consultants and property-service professionals can apply through the contact page. Every profile is reviewed before it appears in discovery.",
  ],
  [
    "What should I do for an urgent safety issue?",
    "Do not rely on an enquiry for emergencies. Contact local emergency services or a qualified local professional immediately for anything structurally unsafe, sparking, leaking gas or flooding.",
  ],
] as [string, string][];
export default function HowPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        image="carpentry"
        title="A clear process, from need to finished job."
        action={{ href: "/contact", label: "Get started" }}
      >
        Good property decisions begin with context, relevant expertise and
        clear agreements. Here is exactly how a NAHTREEK engagement flows.
      </PageHero>
      <Section tone="white">
        <Steps items={steps} />
      </Section>
      <Section tone="soft">
        <div className="container narrow">
          <Heading
            eyebrow="Questions, answered"
            title="Before you get started"
          />
          <FAQ items={faqs} />
        </div>
      </Section>
      <CTA />
    </>
  );
}
