# Nahtreek Production Codebase

This tree builds and runs PRODUCTION only. Placeholders, never real secrets.

| Part | Folder | Notes |
|---|---|---|
| Home app | `apps/production-Home/` | package `com.nahtreek.client`, live API |
| Pro app | `apps/production-Pro/` | live API |
| API | `apps/production-Api/` | placeholders in `apps/production-Api/.env` |
| Admin web | `apps/production-Admin/` | production |
| Admin panel | `builds/admin/` | points at `https://api.nahtreek.com/api/v1` |
| Output | `builds/android/` (AAB/APK at release) | |

Build Home production (requires release credentials — never commit them):

```sh
cd apps/production-Home/android
JAVA_HOME=/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home \
NAHTREEK_API_BASE_URL="https://<live-api-host>/api/v1" \
NAHTREEK_SIGNING_FILE="<keystore.jks>" \
NAHTREEK_SIGNING_PASSWORD="<store-pass>" \
NAHTREEK_SIGNING_ALIAS="<alias>" \
GEOAPIFY_API_KEY="<live-key>" \
./gradlew :app:assembleRelease \
  -PNAHTREEK_VERSION_CODE=<next> -PNAHTREEK_VERSION_NAME="1.0"
```

Changes here do NOT flow to `Nahtreek-preview`.
