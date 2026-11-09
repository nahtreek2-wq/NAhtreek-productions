# Project layout — production tree (real launch)

```text
Nahtreek-production/
├── apps/
│   ├── production-Home/  Home app source (src/ shared; android/ + ios/ native shells)
│   ├── production-Pro/   Professional app source (same split)
│   ├── production-Api/   Backend API (production env, placeholders until keys arrive)
│   └── production-Admin/ Admin website source (production)
├── packages/             Shared code (UI, design, maps, push, types…)
├── builds/               THE installable outputs — one place only (filled at release)
│   ├── android/          AAB/APK via Play Console path
│   ├── ios/              Archive/IPA via TestFlight path
│   └── admin/            Built admin panel (production)
├── docs/                 Guides: home.md, professional.md, shared topics
├── deployments/production/  Live deploy kit (HANDOVER.md)
└── CODEBASE.md           Build commands index
```

Rules: source lives in `apps/`; installables live in `builds/` only;
Android + iOS sources stay together (they share `src/`) while their
outputs stay split (`builds/android/` vs `builds/ios/`). Code matches
the preview tree; only env URLs/keys differ. Release via
`../PRODUCTION_DEPLOY_GUIDE.md`.
