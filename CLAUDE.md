# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev        # Start dev server (Turbopack, outputs to .next/dev)
npm run build      # Production build (Turbopack)
npm run start      # Start production server
npm run lint       # Run ESLint directly (next lint no longer exists)
```

There is no test suite configured yet.

## Architecture

This is a **Next.js 16** App Router project with React 19.2, TypeScript, and Tailwind CSS v4.

- `app/layout.tsx` — root layout with Geist font variables and `<html>`/`<body>` shell
- `app/page.tsx` — home page (the only route so far)
- `app/globals.css` — Tailwind v4 entry (`@import "tailwindcss"`) plus CSS custom properties for light/dark theming; `@theme inline` block maps CSS vars to Tailwind tokens
- `next.config.ts` — currently empty; extend here for `turbopack`, `images`, `cacheComponents`, etc.
- `postcss.config.mjs` — uses `@tailwindcss/postcss` (Tailwind v4 plugin, not the v3 `tailwindcss` plugin)
- `eslint.config.mjs` — ESLint flat config using `eslint-config-next` core-web-vitals + typescript presets
- `tsconfig.json` — path alias `@/*` maps to repo root; bundler module resolution
- `ref/` — static HTML design references (light and dark variants); not served by Next.js

## Key Next.js 16 breaking changes to keep in mind

- **`cookies()`, `headers()`, `draftMode()`, `params`, `searchParams` are now async only** — always `await` them; the old synchronous access was removed.
- **Turbopack is the default bundler** for both `next dev` and `next build`; `--webpack` flag opts out.
- **`middleware.ts` is renamed to `proxy.ts`**; the exported function must be named `proxy`, not `middleware`; `edge` runtime is not supported in proxy.
- **`next lint` command removed** — use `npm run lint` (`eslint` CLI directly); `next build` no longer runs linting.
- **`revalidateTag` requires a second `cacheLife` argument** (e.g. `'max'`); use `updateTag` for immediate cache refresh.
- **`cacheLife`/`cacheTag` are stable** — drop the `unstable_` prefix.
- **PPR uses `cacheComponents: true`** in `next.config.ts`; `experimental.ppr` is gone.
- **Parallel routes require explicit `default.js`** in every slot or builds fail.
- **`serverRuntimeConfig`/`publicRuntimeConfig` removed** — use `process.env` and `NEXT_PUBLIC_` prefix.
- **`next/legacy/image` deprecated** — use `next/image`.
- **`images.domains` deprecated** — use `images.remotePatterns`.
- **Local images with query strings** require `images.localPatterns.search` config.
- **`next dev` outputs to `.next/dev`** (separate from `.next` used by build).

Read the full upgrade guide at `node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md` before adding features that touch routing, caching, or image handling.
