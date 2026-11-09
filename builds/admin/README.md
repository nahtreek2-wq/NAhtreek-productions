# Production admin panel (built, live)

Built operations console for production.
API base `https://api.nahtreek.com/api/v1`
(placeholder until the prod API is live), environment `production`.

Refresh from source (`apps/production-Admin/`):

```bash
cd ../apps/production-Admin
ADMIN_ENV=production NAHTREEK_API_BASE_URL=https://api.nahtreek.com/api/v1 \
  node scripts/build.mjs
cp -R dist/. ../../builds/admin/
```

Host the folder on the admin subdomain per
`../../PRODUCTION_DEPLOY_GUIDE.md`.
