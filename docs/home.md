# Home app (production)

Customer app for homeowners: find verified professionals, book work,
track requests, chat, review, and plan with NAHTREEK AI (₹99/mo).

- Source: `apps/production-Home/` — `src/` is shared by Android + iOS;
  `android/` and `ios/` hold the native shells only.
- Backend: `https://api.nahtreek.com/api/v1` (live at deploy).
- Installables: generated at release into `builds/android/` (AAB/APK)
  and `builds/ios/` (archive/IPA). See `../../PRODUCTION_DEPLOY_GUIDE.md`.
- Package: `com.nahtreek.client` (release keystore).

Release is gated: HTTPS API URL, `environment=production`, signing
credentials, version code above published, Geoapify key — the build
fails with a clear error if any is missing.

Every change here must match the preview tree's `apps/preview-Home/`
(same relative path); only env URLs/keys differ.
