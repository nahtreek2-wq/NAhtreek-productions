"use client";

import { use, useEffect, useState } from "react";
import { PageHero, Section, Action } from "@/components/marketing/Primitives";

const API = (process.env.NEXT_PUBLIC_API_URL || "https://nahtreek-api.vercel.app/api/v1").replace(/\/$/, "");

type Review = {id: string; rating: number; comment: string; createdAt: string; clientName: string};
type Provider = {id: string; fullName: string; title: string; baseCity: string; baseState: string;
  averageRating: number; totalReviewsCount: number; verificationStatus: string; reviews: Review[]};

export default function ProviderPage({params}: {params: Promise<{id: string}>}) {
  const {id} = use(params);
  const [pro, setPro] = useState<Provider | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let live = true;
    fetch(`${API}/discovery/providers/${encodeURIComponent(id)}`)
      .then(res => { if (!res.ok) throw new Error("missing"); return res.json(); })
      .then(data => { if (live) setPro(data); })
      .catch(() => { if (live) setFailed(true); });
    return () => { live = false; };
  }, [id]);

  return (
    <>
      <PageHero eyebrow="Verified professional" title={pro ? pro.fullName : "Professional reviews"}>
        {pro ? `${pro.title || "NAHTREEK professional"} · ${[pro.baseCity, pro.baseState].filter(Boolean).join(", ") || "India"}` : "Loading this professional\u2019s ratings\u2026"}
      </PageHero>
      <Section>
        {failed ? (
          <p>This ratings link is not recognized. Ask the professional to show their QR again.</p>
        ) : !pro ? (
          <p>Loading ratings\u2026</p>
        ) : (
          <>
            <p>
              <strong>★ {pro.averageRating.toFixed(1)}</strong> · {pro.totalReviewsCount} review{pro.totalReviewsCount === 1 ? "" : "s"}
              {pro.verificationStatus === "VERIFIED" ? " · Verified" : ""}
            </p>
            {pro.reviews.map(review => (
              <article key={review.id}>
                <p><strong>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</strong> · {review.clientName}</p>
                <p>{review.comment}</p>
              </article>
            ))}
            <p>
              <Action href={`nahtreek://p/${pro.id}`}>Open in the NAHTREEK app</Action>
            </p>
            <p>Have the app? The ratings open directly. New here? Get NAHTREEK Home to book verified professionals.</p>
          </>
        )}
      </Section>
    </>
  );
}
