import type { MetadataRoute } from "next";
import { PROPERTY_SERVICES } from "@/data/services";
import { NAVIGATION, SITE_URL } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...NAVIGATION.map(([, path]) => path),
    "/privacy",
    "/terms",
    ...PROPERTY_SERVICES.map((s) => `/services/${s.slug}`),
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services") ? 0.8 : 0.6,
  }));
}
