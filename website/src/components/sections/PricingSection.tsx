import { Check, Sparkles, Briefcase } from "lucide-react";
import { Heading, Section, Action, Reveal } from "@/components/marketing/Primitives";

const plans = [
  {
    name: "NAHTREEK AI",
    price: "₹99",
    period: "/month",
    tagline: "For homeowners planning a project in the Home app.",
    features: [
      "Unlimited AI chats and project plans",
      "Photo analysis with urgency guidance",
      "5 free chats — no card to start",
      "Cost-aware, Tamil + English support",
    ],
    featured: true,
    flag: "Most popular",
    cta: { href: "/contact", label: "Start planning" },
    icon: Sparkles,
  },
  {
    name: "Pro Membership",
    price: "₹399",
    period: "/month",
    tagline: "For engineers and pros growing on NAHTREEK Pro.",
    features: [
      "7% commission instead of 10%",
      "Higher rank in homeowner discovery",
      "Verified member badge on profile",
      "Priority job matching",
    ],
    featured: false,
    flag: null,
    cta: { href: "/for-professionals", label: "Grow your practice" },
    icon: Briefcase,
  },
];

export function PricingSection() {
  return (
    <Section tone="white" id="plans">
      <Heading center eyebrow="Simple pricing" title="Pay for outcomes, not confusion.">
        One plan for planners, one for professionals. Cancel anytime —
        browsing services and sending enquiries is always free.
      </Heading>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 0.1}>
            <article className={`price-card${plan.featured ? " featured" : ""}`} style={{ height: "100%" }}>
              {plan.flag && <span className="price-flag">{plan.flag}</span>}
              <span className="price-name">{plan.name}</span>
              <p className="price-value">
                {plan.price} <small>{plan.period}</small>
              </p>
              <p>{plan.tagline}</p>
              <ul className="price-list">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="actions">
                <Action href={plan.cta.href} variant={plan.featured ? "primary" : "secondary"}>
                  {plan.cta.label}
                </Action>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
