---
name: deploy
description: Deploy all SimplySent services (web, landing, API) to production
user_invocable: true
---

Deploy all SimplySent services to production using the deploy script from the repo root.

```bash
../utils/deploy.sh
```

This script runs tests, deploys web app (GitHub Pages at app.simplysent.co), deploys landing page (GitHub Pages at www.simplysent.co), and deploys API (Cloud Run).
Stop and report errors if any step fails.

To deploy only the landing page:

```bash
npm run deploy
```
