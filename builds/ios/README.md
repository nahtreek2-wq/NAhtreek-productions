# Production iOS builds (signed, store-ready)

Empty until release: the signed archive/IPA is produced at deploy time
(see `../../../PRODUCTION_DEPLOY_GUIDE.md`).

Versions are set and compile-verified (2026-11-09, Xcode 27.2):

- Home 1.0.0 (build 46)
- Pro 1.0.0 (build 12)

Needs before archiving:

- Paid Apple Developer Program membership (Team ID replaces
  `PLACEHOLDER_PROD_TEAM_ID` in the Xcode project, Debug + Release)
- APNs Auth Key in Firebase console (server-to-iPhone pushes)
- App Store Connect record for TestFlight + phased release

Already baked in: `https://api.nahtreek.com/api/v1`,
environment `production`.
