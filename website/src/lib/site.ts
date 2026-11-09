import type { Metadata } from "next";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://nahtreek-website.vercel.app"
).replace(/\/$/, "");
export const EMAIL = "nahtreek2@gmail.com";
export const NAVIGATION = [
  ["Home", "/"],
  ["About", "/about"],
  ["For Clients", "/for-clients"],
  ["For Professionals", "/for-professionals"],
  ["Services", "/services"],
  ["How It Works", "/how-it-works"],
  ["Contact", "/contact"],
] as const;
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | NAHTREEK`,
      description,
      url: path,
      siteName: "NAHTREEK",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "NAHTREEK — From plot to home",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | NAHTREEK`,
      description,
      images: ["/opengraph-image"],
    },
  };
}
