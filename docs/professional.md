# Professional app (production)

Worker app for engineers/service providers: jobs, accept/decline,
chat, schedule, membership, verification, profile.

- Source: `apps/production-Pro/` — `src/` is shared by Android + iOS;
  `android/` and `ios/` hold the native shells only.
- Backend: `https://api.nahtreek.com/api/v1` (live at deploy).
- Installables: generated at release into `builds/android/` (AAB/APK)
  and `builds/ios/` (archive/IPA). See `../../PRODUCTION_DEPLOY_GUIDE.md`.
- Package: `com.nahtreek.professional` (release keystore).

Every change here must match the preview tree's `apps/preview-Pro/`
(same relative path); only env URLs/keys differ.
