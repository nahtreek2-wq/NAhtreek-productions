import { notFound } from "next/navigation";
import Link from "next/link";
import { PROPERTY_SERVICES } from "@/data/services";
import {
  PageHero,
  Section,
  Heading,
  CheckList,
  Action,
  TextLink,
  CTA,
} from "@/components/marketing/Primitives";
import { pageMetadata } from "@/lib/site";
import { SERVICE_PHOTOS } from "@/components/marketing/Photo";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return PROPERTY_SERVICES.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = PROPERTY_SERVICES.find((s) => s.slug === slug);
  return s
    ? pageMetadata(s.title, s.description, `/services/${slug}`)
    : { title: "Service not found", robots: { index: false } };
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = PROPERTY_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();
  const related = PROPERTY_SERVICES.filter(
    (s) => s.category === service.category && s.id !== service.id,
  );
  return (
    <>
      <PageHero
        image={SERVICE_PHOTOS[slug] || "site"}
        eyebrow="Service guide"
        title={service.title}
        action={{
          href: `/contact?service=${slug}`,
          label: "Enquire about this service",
        }}
      >
        {service.description}
      </PageHero>
      <Section tone="white">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/services">Services</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{service.title}</span>
        </nav>
        <div className="contact-grid">
          <article>
            <Heading
              eyebrow="Service overview"
              title="Start with the right scope."
            >
              Use this guide to prepare for a discussion with a verified
              professional — or let NAHTREEK AI turn your requirement into a
              structured plan first.
            </Heading>
            <h2>What can be discussed</h2>
            <CheckList items={service.scope} />
            <div className="mt-4">
              <h2>When this service is useful</h2>
              <CheckList items={service.popularFor} />
            </div>
            <p className="notice">
              An enquiry is not an inspection, technical recommendation or
              confirmed booking. Any design, certification, valuation or
              regulated work must be carried out by a suitably qualified
              professional.
            </p>
          </article>
          <aside className="panel">
            <h2>What you can expect</h2>
            <CheckList
              items={[
                "AI plan from your description and photos",
                "Verified pros matched to your requirement",
                "Written quotes agreed in-app before work",
              ]}
            />
            <p>
              No fixed turnaround, price or outcome is promised on this page.
            </p>
            <div className="actions">
              <Action href={`/contact?service=${slug}`}>
                Discuss your requirement
              </Action>
            </div>
            <p className="form-note mt-4">
              Include the property type, project stage and preferred timeline.
            </p>
          </aside>
        </div>
      </Section>
      <Section tone="soft">
        <Heading eyebrow="Keep exploring" title="Related services" />
        <div className="grid-2">
          {related.map((s) => (
            <article className="panel service-card" key={s.slug}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <TextLink href={`/services/${s.slug}`}>
                Learn more<span className="sr-only"> about {s.title}</span>
              </TextLink>
            </article>
          ))}
        </div>
        <div className="actions">
          <Link className="text-link" href="/services">
            Back to all services →
          </Link>
        </div>
      </Section>
      <CTA />
    </>
  );
}
