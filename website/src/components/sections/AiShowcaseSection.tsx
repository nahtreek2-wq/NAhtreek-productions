import { Camera, ListChecks, MessageCircle } from "lucide-react";
import { Heading, Section, Action, Reveal } from "@/components/marketing/Primitives";

const points = [
  {
    icon: MessageCircle,
    title: "Talk through your project",
    text: "Describe the work in plain words — English or Tamil — and get a structured plan back.",
  },
  {
    icon: Camera,
    title: "Analyse site photos",
    text: "Upload a photo of the leak, crack or room and get findings, urgency and the right pro to call.",
  },
  {
    icon: ListChecks,
    title: "Get a prioritised plan",
    text: "Stages, checklists and sharp questions to ask — ready before a professional visits.",
  },
];

export function AiShowcaseSection() {
  return (
    <Section tone="dark" id="ai-planner">
      <div className="ai-showcase">
        <div>
          <Heading eyebrow="NAHTREEK AI" title="Your project, planned before the first visit.">
            Stop guessing scope and cost. NAHTREEK AI turns a rough idea into a
            clear, prioritised plan — free to start in the Home app.
          </Heading>
          <div className="ai-points">
            {points.map((point) => (
              <div className="ai-point" key={point.title}>
                <point.icon aria-hidden="true" />
                <div>
                  <strong>{point.title}</strong>
                  <span>{point.text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="actions">
            <Action href="/for-clients#ai-planner">See how it works</Action>
            <Action href="/contact" variant="outline">Get started</Action>
          </div>
        </div>
        <Reveal delay={0.15}>
          <figure className="plan-excerpt" aria-label="Sample NAHTREEK AI plan for a seepage repair">
            <header>
              <strong>Seepage repair plan</strong>
              <span>Sample NAHTREEK AI plan · 2BHK, Chennai</span>
            </header>
            <ul className="plan-rows">
              <li><b>Understood</b>Monsoon seepage near a bedroom window, 8-year-old flat.</li>
              <li><b>Do this first</b>Book a waterproofing pro for a site diagnosis — exterior source first, paint last.</li>
              <li><b>Watch out</b>Repainting inside only hides the stain; water returns unless the frame and sill are sealed.</li>
              <li><b>One question</b>Does the patch grow during heavy rain, or stay constant after?</li>
            </ul>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}

