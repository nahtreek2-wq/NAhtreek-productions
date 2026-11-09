import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Heading, Section, Reveal } from "@/components/marketing/Primitives";
import { CATEGORIES } from "@/data/services";

const CATEGORY_BLURBS = {
  civil: "Foundations, structures, extensions and engineering review.",
  mep: "Electrical layouts, plumbing, drainage and building services.",
  finishing: "Painting, carpentry, kitchens and interior upgrades.",
  maintenance: "Inspections, waterproofing and long-term care.",
} as const;

export function CategorySection() {
  return (
    <Section tone="white" id="categories">
      <Heading title="Every trade your property needs.">
        Four disciplines, one standard: verified experts, written scope and
        tracked delivery.
      </Heading>
      <Reveal>
        <div className="index-list">
          {(Object.keys(CATEGORIES) as (keyof typeof CATEGORIES)[]).map(
            (key, index) => (
              <article className="index-row" key={key}>
                <span className="index-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{CATEGORIES[key]}</h3>
                <p>{CATEGORY_BLURBS[key]}</p>
                <Link
                  href="/services"
                  className="text-link"
                  aria-label={`Browse ${CATEGORIES[key]} services`}
                >
                  Browse services
                  <ArrowRight aria-hidden="true" />
                </Link>
              </article>
            ),
          )}
        </div>
      </Reveal>
    </Section>
  );
}
