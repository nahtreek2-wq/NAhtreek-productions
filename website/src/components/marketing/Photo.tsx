import Image from "next/image";

export const PHOTOS = {
  interior: { id: "1560185127-6ed189bf02f4", alt: "Bright furnished living space with a seating and dining area" },
  living: { id: "1499955085172-a104c9463ece", alt: "Living room with plants and comfortable seating" },
  roofing: { id: "1763665814965-b5c4b3547908", alt: "Construction workers installing tiles on a residential roof" },
  home: { id: "1626249893783-cc4a9f66880a", alt: "Contemporary residence in Jharkhand, India, with balconies and a landscaped entrance" },
  site: { id: "1541888946425-d81bb19240f5", alt: "Construction professionals reviewing work on a concrete building site" },
  plans: { id: "1542621334-a254cf47733d", alt: "Architectural drawings and pencil used to plan building work" },
  plumbing: { id: "1542013936693-884638332954", alt: "Water running from a bathroom tap" },
  electrical: { id: "1555963966-b7ae5404b6ed", alt: "Technician working on cable connections" },
  painting: { id: "1525909002-1b05e0c869d8", alt: "Paint rollers prepared for finishing work" },
  carpentry: { id: "1544164560-adac3045edb2", alt: "Craftsperson using a woodworking tool on a board" },
} as const;
export type PhotoKind = keyof typeof PHOTOS;
export function Photo({
  kind,
  className = "",
  priority = false,
  sizes = "(max-width: 900px) 100vw, 50vw",
  width = 1400,
}: {
  kind: PhotoKind | string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Source width: match the rendered size (cards 800, heroes 1400). */
  width?: number;
}) {
  const photo = PHOTOS[kind as PhotoKind] || PHOTOS["site"];
  return (
    <div className={`photo ${className}`.trim()}>
      <Image
        src={`https://images.unsplash.com/photo-${photo.id}?auto=format&fit=crop&w=${width}&q=70`}
        alt={photo.alt}
        width={width}
        height={Math.round((width * 3) / 4)}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        priority={priority}
      />
    </div>
  );
}
export const SERVICE_PHOTOS: Record<string, PhotoKind> = {
  "structural-consultation": "plans", waterproofing: "roofing", "electrical-mep": "electrical", "plumbing-drainage": "plumbing", "painting-coatings": "painting", "carpentry-interiors": "carpentry", "masonry-alterations": "site", "property-audit": "living",
};
