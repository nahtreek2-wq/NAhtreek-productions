# NAHTREEK implementation review

## Scope and initial audit

Preserved the name, plot-to-home identity, core headline, eight service routes and category structure. Replaced the old gold theme with the approved navy/teal/light-neutral system. The header, footer, spacing, cards, forms and secondary pages now use shared primitives.

The initial audit found repeated home sections, dead-end registration/download buttons, nested links/buttons, fictional testimonials, realistic sample licence IDs and unsupported verification, escrow, availability and outcome claims. These have been removed from the rendered product and obsolete source components. An original-source recovery copy is at `/tmp/nahtreek-before-brief.kgIeMV` on this machine (temporary storage, not a permanent backup).

## Current product boundary

This is a service-information and enquiry website, not a live marketplace app. All product/profile previews are labelled as examples. No real profiles, ratings, credentials, scheduling or payment data were supplied. No social accounts or company registration/address details have been invented.

## Contact delivery — launch blocker

The user indicated an existing email provider but has not yet identified it or supplied its configuration. Vercel currently has no delivery environment variables. Real delivery therefore remains **unconfigured and unverified**.

The form and `/api/contact` now implement validation, consent, payload limits, same-origin checking, a honeypot, per-instance request throttling, in-flight deduplication, disabled/loading state, inline errors and honest delivery feedback. No message is marked successful when delivery is unavailable.

`src/lib/contact-delivery.ts` is the isolated provider adapter. A Resend adapter is included as an optional implementation, not selected or activated. It requires `CONTACT_PROVIDER=resend`, `RESEND_API_KEY`, and a verified `CONTACT_FROM_EMAIL`. If the user uses a different provider, implement its adapter before enabling delivery. Never put delivery secrets in `NEXT_PUBLIC_*` variables. The recipient is fixed to `nahtreek2@gmail.com`.

Before enabling production submissions:

- Confirm the actual provider and verified sender; add secrets through Vercel environment settings.
- Configure durable edge rate limiting for `POST /api/contact`; the in-memory limiter is only a per-instance backstop.
- Update provider disclosures in the privacy notice to match the chosen service.
- Run one clearly identified end-to-end delivery test and confirm mailbox receipt.
- Test provider failure, timeout, retries and duplicate protection with that actual adapter.

Resend reference: https://resend.com/docs/api-reference/emails/send-email and https://resend.com/docs/dashboard/emails/idempotency-keys.

## Business/legal review needed

The legal pages describe the current website rather than unbuilt account, payment or document features. They are implementation drafts, not a legal compliance certification. The business should confirm its operating entity, address, retention practices, provider arrangements and jurisdiction with qualified counsel before final launch approval. No unverified entity or governing court has been invented.

Reference materials consulted: [India DPDP Act](https://www.meity.gov.in/static/uploads/2024/02/Digital-Personal-Data-Protection-Act-2023.pdf) and [2025 Rules](https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf). Applicability and staged commencement require business/legal review; the site does not claim statutory compliance.

## SEO and deployment

Unique metadata, canonical URLs, Open Graph/Twitter previews, sitemap, robots and a teal brand icon are implemented. `NEXT_PUBLIC_SITE_URL` defaults to the existing public Vercel alias. Change it to the verified custom domain when one is ready, then redeploy. The old `/for-engineers` path permanently redirects to `/for-professionals`.

## Checks

- Production build and TypeScript compilation passed.
- ESLint passed without warnings on the new source.
- Responsive DOM/layout checks: 18 routes × 9 widths (320, 375, 390, 430, 768, 1024, 1280, 1440, 1920), no horizontal overflow, obscured initial heading, duplicate H1 or nested link/button findings.
- Homepage height at 1440px: 10,193 → 5,706px; at 390px: 21,088 → 9,743px.
- 17 public page routes and 27 internal targets passed HTTP, title/canonical and link checks; custom 404 works.
- Service filters, mobile menu/Escape, app-tab arrow keys and contact validation exercised in-browser.
- Local mocked delivery tests cover validation, malformed/oversized requests, missing configuration, provider errors and concurrent duplicate requests. They do not prove real mailbox delivery.
- Kluster review was unavailable; no Kluster security/compliance pass is claimed.

Run checks from the project directory:

```sh
node --test tests/contact.test.cjs
node node_modules/eslint/bin/eslint.js src
node node_modules/next/dist/bin/next build
```
