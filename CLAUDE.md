<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.

<!--VITE PLUS END-->

## Deploy Configuration (configured by /setup-deploy)

- Platform: Coolify (self-hosted PaaS) + Docker
- Production URL: TBD (not configured yet in Coolify)
- Deploy workflow: auto-deploy on push to main (Coolify git webhook)
- Deploy status command: HTTP health check on production URL
- Merge method: squash
- Project type: static site (TanStack Router SPA / nginx)
- Post-deploy health check: TBD (set once production URL is known)

### Custom deploy hooks

- Pre-merge: `vp check && vp test`
- Deploy trigger: automatic on push to main (Coolify webhook)
- Deploy status: poll production URL until HTTP 200
- Health check: TBD (set production URL once configured)

### Coolify dashboard settings (Docker)

Configure these in your Coolify application settings:

- **Build type**: Dockerfile
- **Port**: 80
- **No env vars required** — the app is fully static, served by nginx
