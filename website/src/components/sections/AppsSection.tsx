import { House, HardHat, Sparkles, ShieldCheck } from "lucide-react";
import { Heading, Section, Action, Reveal } from "@/components/marketing/Primitives";

const apps = [
  {
    icon: House,
    title: "NAHTREEK Home",
    text: "For homeowners. Find verified engineers and pros, raise requests, chat in-app, track every job — and plan with NAHTREEK AI.",
    points: ["Verified engineer & pro discovery", "Requests, chat and job tracking", "NAHTREEK AI planner built in"],
    cta: { href: "/for-clients", label: "Explore the Home app" },
  },
  {
    icon: HardHat,
    title: "NAHTREEK Pro",
    text: "For engineers and service teams. Receive matched jobs, manage work and earnings, and grow with Pro membership.",
    points: ["Matched job requests", "Profile, reviews and earnings", "₹399/month Pro membership"],
    cta: { href: "/for-professionals", label: "Explore the Pro app" },
  },
];

export function AppsSection() {
  return (
    <Section tone="soft" id="apps">
      <Heading title="Built for both sides of the job.">
        Owners get clarity and control. Professionals get real work and real
        visibility. Both stay in sync from first chat to final handover.
      </Heading>
      <div className="app-grid">
        {apps.map((app, index) => (
          <Reveal key={app.title} delay={index * 0.1}>
            <article className="app-card" style={{ height: "100%" }}>
              <div className="icon-tile">
                <app.icon aria-hidden="true" />
              </div>
              <h3>{app.title}</h3>
              <p>{app.text}</p>
              <ul>
                {app.points.map((point) => (
                  <li key={point}>
                    <ShieldCheck aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="actions">
                <Action href={app.cta.href}>{app.cta.label}</Action>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.15}>
        <p className="availability-note">
          <strong>Early access</strong>
          <span>Both apps are in early access — contact us and the team will onboard you.</span>
        </p>
      </Reveal>
    </Section>
  );
}

export function TrustMarquee() {
  const items = [
    "Verified engineers",
    "AI project plans",
    "In-app chat",
    "Job tracking",
    "Photo analysis",
    "Transparent scope",
    "Pro membership",
    "Review system",
  ];
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee">
        {[...items, ...items].map((item, index) => (
          <span key={index}>
            <Sparkles aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
