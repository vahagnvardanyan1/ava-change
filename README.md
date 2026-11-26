# Ava Exchange

USD / AMD / RUB → USDT exchange site. Built on the arm-bitcoin template.


Next.js 16 starter template with MUI 7, Zustand 5, next-intl 4, TypeScript 5, and React 19.

## Tech Stack

- **[Next.js 16](https://nextjs.org/)** — App Router, server components by default
- **[React 19](https://react.dev/)** — UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** — type safety
- **[MUI 7](https://mui.com/)** — component library with Emotion CSS-in-JS
- **[Zustand 5](https://zustand.docs.pmnd.rs/)** — lightweight state management
- **[next-intl 4](https://next-intl.dev/)** — internationalization (en, hy, ru)
- **[ESLint 9](https://eslint.org/) + [Prettier](https://prettier.io/)** — linting and formatting

## Getting Started

Requires Node 22.12+ (`nvm use`).

```bash
npm install
cp .env.example .env.local   # fill in the Sanity project ID
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Fee (Sanity CMS)

The calculator fee is edited in Sanity Studio, embedded at [`/studio`](http://localhost:3000/studio).

1. Create a project at https://www.sanity.io/manage and put its ID in `NEXT_PUBLIC_SANITY_PROJECT_ID`.
2. In the project's API settings, add `http://localhost:3000` (and the production URL) as CORS origins with credentials.
3. Open `/studio` → **Site settings** → set **Exchange fee (%)** → Publish.

The fee is read through Sanity's CDN on every page load, so a published change shows within a few seconds. Until the settings document is published, the home page errors with a message saying so.

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint check |
| `npm run lint-fix` | ESLint auto-fix |
| `npm test` | Vitest unit tests |

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   └── [locale]/           # Locale-based routing (en, hy, ru)
│       ├── layout.tsx      # Locale layout with providers
│       └── page.tsx        # Home page
├── components/             # Reusable UI components (each in own directory)
├── hooks/                  # Custom React hooks
├── i18n/                   # next-intl config (routing, request, navigation)
├── providers/              # Context providers (ThemeProvider)
├── store/                  # Zustand store + slices
│   ├── index.ts            # Main store composition
│   └── slices/             # State slices (state only, no actions)
├── proxy.ts                # i18n middleware
└── theme.ts                # MUI theme (CSS variables, light/dark)
messages/                   # Translation JSON files (en.json, hy.json, ru.json)
```

## Architecture

- **App Router only** — all routes under `src/app/[locale]/`
- **Server components by default** — add `"use client"` only when hooks, event handlers, or browser APIs are needed
- **Emotion CSS-in-JS** — MUI's styling engine with `AppRouterCacheProvider` for SSR
- **Zustand slices hold state only** — no setters or actions in slices; mutations via `setAppStore()`, reads via external selectors
- **next-intl middleware** — locale detection and redirects via `src/proxy.ts`
- **MUI theme with CSS variables** — `data-color-scheme` attribute for light/dark mode

## Documentation

For detailed guides, see the `docs/` directory:

- [Getting Started](docs/getting-started/getting-started.md) — setup, tech stack, request flow, theming
- [Code Conventions](docs/contributing/code.md) — engineering principles (code patterns)
- [Architecture](docs/contributing/architecture.md) — engineering principles (architecture)
- [Component Structure](docs/contributing/component-structure.md) — component organization with examples
- [ESLint Rules](docs/contributing/eslint.md) — ESLint rules mapped to principles
- [Store Reference](docs/reference/store.md) — Zustand architecture, adding slices
- [Integrations](docs/reference/integrations.md) — MUI, Zustand, Emotion, next-intl details
- [SEO](docs/reference/seo.md) — metadata, canonical URLs, robots.txt, sitemap
