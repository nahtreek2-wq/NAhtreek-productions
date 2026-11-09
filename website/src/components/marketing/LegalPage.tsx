import { PageHero, Section } from "./Primitives";
export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { title: string; text: string }[];
}) {
  return (
    <>
      <PageHero eyebrow={title} title={title}>
        {intro}
      </PageHero>
      <Section tone="white">
        <div className="legal-layout">
          <nav className="legal-toc" aria-label={`${title} contents`}>
            <strong>On this page</strong>
            {sections.map((s, i) => (
              <a href={`#legal-${i + 1}`} key={s.title}>
                {s.title}
              </a>
            ))}
          </nav>
          <article className="legal-body">
            <p className="eyebrow">Last updated: 13 September 2026</p>
            {sections.map((s, i) => (
              <section key={s.title} id={`legal-${i + 1}`}>
                <h2>
                  {i + 1}. {s.title}
                </h2>
                <p>{s.text}</p>
              </section>
            ))}
            <p>
              Questions?{" "}
              <a className="text-link" href="mailto:nahtreek2@gmail.com">
                nahtreek2@gmail.com
              </a>
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
