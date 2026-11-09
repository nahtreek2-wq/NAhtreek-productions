export interface PropertyService {
  id: string;
  slug: string;
  scope: string[];
  title: string;
  category: "civil" | "mep" | "finishing" | "maintenance";
  description: string;
  iconName: string;
  popularFor: string[];
  turnaroundTime: string;
}
export const CATEGORIES = {
  civil: "Engineering & Structural",
  mep: "Electrical & Plumbing",
  finishing: "Renovation & Interiors",
  maintenance: "Inspection & Maintenance",
} as const;
export const PROPERTY_SERVICES: PropertyService[] = [
  {
    id: "srv-1",
    slug: "structural-consultation",
    title: "Civil & structural consultation",
    category: "civil",
    description:
      "Discuss foundations, building plans and proposed alterations with a relevant engineering professional.",
    iconName: "Building2",
    scope: [
      "Site and foundation assessment requirements",
      "Structural design and column planning",
      "Engineering review of proposed alterations",
    ],
    popularFor: ["New homes", "Plot planning", "Floor extensions"],
    turnaroundTime: "By agreement",
  },
  {
    id: "srv-2",
    slug: "waterproofing",
    title: "Waterproofing & leak assessment",
    category: "maintenance",
    description:
      "Understand damp areas, possible leak sources and suitable repair options for your property.",
    iconName: "Droplets",
    scope: [
      "Inspection of visible seepage and dampness",
      "Terrace, bathroom and basement treatment options",
      "Repair scope and maintenance recommendations",
    ],
    popularFor: ["Terrace leaks", "Bathroom seepage", "Damp walls"],
    turnaroundTime: "By agreement",
  },
  {
    id: "srv-3",
    slug: "electrical-mep",
    title: "Electrical & MEP services",
    category: "mep",
    description:
      "Plan electrical layouts and building services, or discuss an inspection for an existing installation.",
    iconName: "Zap",
    scope: [
      "Load and distribution planning",
      "Conduit and building-service layouts",
      "Inspection requirements and specialist referrals",
    ],
    popularFor: ["New construction", "Renovations", "Commercial spaces"],
    turnaroundTime: "By agreement",
  },
  {
    id: "srv-4",
    slug: "plumbing-drainage",
    title: "Plumbing & drainage",
    category: "mep",
    description:
      "Get help defining water supply, drainage, pipe repairs and installation requirements.",
    iconName: "Wrench",
    scope: [
      "Water supply and drainage layouts",
      "Pipe and fixture repairs",
      "Tank and water-heater connection requirements",
    ],
    popularFor: ["New homes", "Pipe repairs", "Bathroom upgrades"],
    turnaroundTime: "By agreement",
  },
  {
    id: "srv-5",
    slug: "painting-coatings",
    title: "Painting & protective coatings",
    category: "finishing",
    description:
      "Explore surface preparation, paint selection and interior or exterior finishing work.",
    iconName: "Paintbrush",
    scope: [
      "Surface condition assessment",
      "Paint and coating selection",
      "Preparation, finish and work schedule",
    ],
    popularFor: ["Home refreshes", "Exterior maintenance", "Rental properties"],
    turnaroundTime: "By agreement",
  },
  {
    id: "srv-6",
    slug: "carpentry-interiors",
    title: "Carpentry & interiors",
    category: "finishing",
    description:
      "Discuss fitted storage, doors, kitchens and practical woodwork for your space.",
    iconName: "Hammer",
    scope: [
      "Kitchen and wardrobe requirements",
      "Doors, frames and custom woodwork",
      "Measurements, materials and finish choices",
    ],
    popularFor: ["Kitchens", "Wardrobes", "Interior upgrades"],
    turnaroundTime: "By agreement",
  },
  {
    id: "srv-7",
    slug: "masonry-alterations",
    title: "Masonry & alterations",
    category: "civil",
    description:
      "Plan brickwork, tiling and extensions, with engineering review where structural changes are involved.",
    iconName: "Blocks",
    scope: [
      "Brickwork, compound walls and tiling",
      "Scope and sequencing of extension work",
      "Qualified engineering advice before structural changes",
    ],
    popularFor: ["Extensions", "Tiling", "Compound walls"],
    turnaroundTime: "By agreement",
  },
  {
    id: "srv-8",
    slug: "property-audit",
    title: "Property inspection & valuation",
    category: "maintenance",
    description:
      "Discuss condition assessments, pre-purchase inspections and specialist valuation requirements.",
    iconName: "ClipboardCheck",
    scope: [
      "Pre-purchase inspection requirements",
      "Visible condition and maintenance concerns",
      "Suitably qualified valuation or reporting referrals",
    ],
    popularFor: [
      "Property purchases",
      "Maintenance planning",
      "Valuation enquiries",
    ],
    turnaroundTime: "By agreement",
  },
];
