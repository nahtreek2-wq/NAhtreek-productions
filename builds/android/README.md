# Production Android builds (signed, store-ready)

Empty until release: the deploy team generates the signed AAB/APK here
(see `../../../PRODUCTION_DEPLOY_GUIDE.md`):

- `Nahtreek-Home.aab` (Play Store upload) + `Nahtreek-Home.apk`
- `Nahtreek-Pro.aab` + `Nahtreek-Pro.apk`

## How the deploy team builds them

The production codebase already points at the production backend —
`NAHTREEK_API_BASE_URL` (must be `https://…/api/v1`) is passed at build
time, environment defaults to `production`. They add their own
keystore, Geoapify key, and versions, then run (Java 17):

```bash
export JAVA_HOME=/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home
export NAHTREEK_SIGNING_FILE=/secure/path/nahtreek-release.keystore
export NAHTREEK_SIGNING_PASSWORD='<vault>'
export NAHTREEK_SIGNING_ALIAS='<alias>'
export GEOAPIFY_API_KEY='<prod key>'
cd ../apps/production-Home   # or ../apps/production-Pro
./android/gradlew -p android app:assembleRelease \
  -PNAHTREEK_VERSION_CODE=<above 46 for Home, above 12 for Pro> \
  -PNAHTREEK_VERSION_NAME='1.0.0' \
  -PNAHTREEK_API_BASE_URL=https://api.nahtreek.com/api/v1
# output: android/app/build/outputs/apk/release/ + bundle/release/
```

The build validates everything by design and fails with a clear
message if any input is missing. Never point a prod-signed build at
the preview API.
