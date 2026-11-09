# NAHTREEK production tree (real launch)

Four apps, one shared backend, live users at release.

| App | Source | Release output |
|---|---|---|
| Home | `apps/production-Home/` | `builds/android/` (AAB/APK), `builds/ios/` (IPA) |
| Pro | `apps/production-Pro/` | `builds/android/` (AAB/APK) |
| API | `apps/production-Api/` | production backend |
| Admin | `apps/production-Admin/` | `builds/admin/` (built panel) |

Shared code: `packages/`. Guides: `docs/home.md`, `docs/professional.md`.
Map: `PROJECT_LAYOUT.md`. Commands: `CODEBASE.md`.
Release: `../PRODUCTION_DEPLOY_GUIDE.md`.

Code matches the preview tree; only env URLs/keys differ.
