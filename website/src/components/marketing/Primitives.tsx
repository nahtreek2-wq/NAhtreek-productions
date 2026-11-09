import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Photo } from "@/components/marketing/Photo";
import { Reveal } from "@/components/marketing/Reveal";

export { Reveal };

export function Container({ children, narrow = false }: { children: ReactNode; narrow?: boolean }) {
  return <div className={narrow ? "container narrow" : "container"}>{children}</div>;
}

export function Section({
  children,
  tone = "white",
  id,
}: {
  children: ReactNode;
  tone?: "white" | "soft" | "warm" | "dark";
  id?: string;
}) {
  return (
    <section id={id} className={`section ${tone}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Heading({
  eyebrow,
  title,
  center = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  center?: boolean;
  children?: ReactNode;
}) {
  return (
    <Reveal>
      <div className={`section-heading${center ? " center" : ""}`}>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2>{title}</h2>
        {children ? <p>{children}</p> : null}
      </div>
    </Reveal>
  );
}

export function Action({
  href,
  children,
  variant = "primary",
  size,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "lg";
}) {
  return (
    <Link href={href} className={`button ${variant}${size ? ` ${size}` : ""}`}>
      {children}
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-link">
      {children}
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}

export function Hero({
  title,
  accent,
  intro,
  primary,
  secondary,
  stats,
  visual,
}: {
  title: string;
  accent: string;
  intro: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  stats: { value: string; label: string }[];
  visual: ReactNode;
}) {
  return (
    <section className="hero dark">
      <Container>
        <div className="split">
          <div>
            <h1>
              {title} <span className="accent">{accent}</span>
            </h1>
            <p className="intro">{intro}</p>
            <div className="actions">
              <Action href={primary.href} size="lg">{primary.label}</Action>
              <Action href={secondary.href} variant="outline" size="lg">{secondary.label}</Action>
            </div>
            <dl className="hero-stats">
              {stats.map((stat) => (
                <div className="hero-stat" key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hero-visual">{visual}</div>
        </div>
      </Container>
    </section>
  );
}

export function PageHero({
  eyebrow,
  image,
  title,
  action,
  children,
}: {
  eyebrow: string;
  image?: string;
  title: string;
  action?: { href: string; label: string };
  children: ReactNode;
}) {
  return (
    <section className="hero dark">
      <Container>
        <div className={image ? "page-hero-split" : undefined}>
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p className="intro">{children}</p>
            {action && (
              <div className="actions">
                <Action href={action.href}>{action.label}</Action>
              </div>
            )}
          </div>
          {image && <Photo kind={image} priority />}
        </div>
      </Container>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CTA({
  title = "Let's talk about your property.",
  description = "Share your location, project stage and the work you need. We'll help you discuss the next step.",
  href = "/contact",
  label = "Start an enquiry",
}: {
  title?: string;
  description?: string;
  href?: string;
  label?: string;
}) {
  return (
    <Section tone="white">
      <Reveal>
        <div className="cta-panel">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="actions">
            <Action href={href} size="lg">{label}</Action>
            <Action href="/services" variant="outline" size="lg">Explore services</Action>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function InfoGrid({
  items,
}: {
  items: { title: string; description: string; icon?: ReactNode }[];
}) {
  return (
    <div className="grid-auto">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={Math.min(index, 3) * 0.08}>
          <article className="panel" style={{ height: "100%" }}>
            {item.icon && <div className="icon-tile">{item.icon}</div>}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function Steps({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <div className="steps">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={Math.min(i, 3) * 0.06}>
          <article className="step">
            <span className="step-number" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="step-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function FAQ({ items }: { items: [string, string][] }) {
  return (
    <div className="faq-list">
      {items.map(([question, answer]) => (
        <details key={question}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

export function Marquee({ items }: { items: ReactNode[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee">
        {row.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
