# Production launch checklist — Nahtreek

Two sibling trees (`Nahtreek-preview/`, `Nahtreek-production/`) hold identical
code; only env URLs/keys differ. All features — yellow UI, push, AI paywall,
photo analysis, rate cards, plan-to-quotes, Tamil + voice — are already in the
production code path. What is missing for launch is credentials, never code.
(Master guide: `../../PRODUCTION_DEPLOY_GUIDE.md`.)

## 1. Backend environment (production host)

Set these on the production API host. No real keys are committed anywhere.

| Variable | Placeholder | Notes |
|---|---|---|
| `DATABASE_URL` | `postgresql://USER:PASSWORD@HOST:5432/postgres?sslmode=require` | Production Postgres (Supabase or other) |
| `JWT_SECRET` | `<generate: openssl rand -base64 48>` | Must differ from preview |
| `APP_ENV` | `production` | Disables all demo/OTP fallbacks |
| `CORS_ORIGINS` | `https://nahtreek.com,https://admin.nahtreek.com` | |
| `SUPABASE_URL` | `https://<prod-ref>.supabase.co` | Or any storage base |
| `SUPABASE_SERVICE_ROLE_KEY` | `<prod service-role key>` | Private buckets: `nahtreek-private` |
| `FIREBASE_SERVICE_ACCOUNT_JSON` | `<prod service-account JSON, single line>` | Push for prod app ID |
| `PUSH_ENABLED` | `true` | |
| `AI_PROVIDER_URL` | `https://api.groq.com/openai/v1/chat/completions` | Or OpenAI-compatible host |
| `AI_PROVIDER_API_KEY` | `<prod AI key>` | Chat model key |
| `AI_MODEL` | `openai/gpt-oss-20b` | Any chat model on the host |
| `AI_VISION_URL` | _(same host or vision host)_ | Optional; defaults to chat host |
| `AI_VISION_API_KEY` | `<prod vision key>` | Optional; needed for real photo vision |
| `AI_VISION_MODEL` | `<vision-capable model id>` | Optional; photo analysis falls back honestly without it |
| `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` | `<live key id/secret>` | Live (non-test) keys |
| `RAZORPAY_AI_PLAN_ID` | `<₹99/mo AI plan id>` | Razorpay dashboard → Subscriptions |
| `RAZORPAY_PRO_PLAN_ID` | `<pro plan id>` | Existing Pro plan |
| `GEOAPIFY_API_KEY` | `<prod key>` | Maps/geocode quota for prod traffic |
| `GMAIL_SMTP_USER` / `GMAIL_SMTP_APP_PASSWORD` | `<prod sender>` | OTP mail |
| `CRON_SECRET` | `<generate: openssl rand -hex 32>` | Reminder/tips cron auth |

Run once against the production database: `npx prisma migrate deploy`
(from `apps/api` with the production `DATABASE_URL`).

## 2. Android (Home + Pro)

- Release keystore: create once, store passwords outside the repo.
  `NAHTREEK_RELEASE_KEYSTORE`, `NAHTREEK_RELEASE_ALIAS`,
  `NAHTREEK_RELEASE_STORE_PASSWORD`, `NAHTREEK_RELEASE_KEY_PASSWORD`.
- `apps/client-mobile/android/app/google-services.json`: production Firebase file.
- Build: `./android/gradlew -p android app:assembleRelease
  -PNAHTREEK_API_BASE_URL=https://api.nahtreek.com/api/v1
  -PNAHTREEK_VERSION_CODE=<next> -PNAHTREEK_VERSION_NAME=<name>`

## 3. DNS / domains

- `api.nahtreek.com` → production API host.
- Admin web deployed to its production host with `API_BASE_URL` pointed at it.

## 4. Launch-day verification (same script as preview)

1. `GET /api/v1/health` → ok.
2. Register → 5 free AI chats → 6th returns 402 with Pro copy.
3. Test Razorpay checkout → webhook confirms → unlimited AI.
4. Upload photo → analyze (Pro) → plan → plan-to-quotes request.
5. Push: booking created → notification arrives with deep link.
6. Admin Memberships → AI revenue + engine status visible.
