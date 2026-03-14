# BICKOSA

**Bishop Cipriano Kihangire Old Students Association** — the official alumni website for former students of Bishop Cipriano Kihangire Senior Secondary School (BCK SSS), Bbiina/Luzira, Kampala.

Preserving legacy, building community, and giving back.

This project is **open source** and hosted in a public organisation and repository. Contributions are welcome.

## Overview

- **Site**: [bickosa.com](https://bickosa.com) (or [bickosa.vercel.app](https://bickosa.vercel.app))
- **Repository**: [github.com/BICKOSA/bickosa-website](https://github.com/BICKOSA/bickosa-website)
- **Purpose**: Alumni community hub — events, stories, news, projects, governance, gallery, contact, and archive.
- **Stack**: React 18, TypeScript, Vite 5, React Router, Tailwind CSS, shadcn/ui, Bento design system (see `docs/BENTO_STYLE.md`).

## Project structure

```
src/
  components/     # Shared UI (Layout, Header, Footer, PageHero, bento/, home/)
  config/         # Metadata, routes, env
  lib/            # Utils (cn, etc.)
  pages/          # Route-level pages (About, Events, Stories, etc.)
  styles/         # Global + bento.css
  assets/         # Images
public/
  favicon.png
  meta/           # OG images per page
  robots.txt
  manifest.webmanifest
docs/
  BENTO_STYLE.md  # Design system reference
```

## Routes

| Path        | Page        |
|------------|-------------|
| `/`        | Home        |
| `/about`   | About BICKOSA |
| `/school`  | BCK SSS (school) |
| `/history` | History & legacy |
| `/stories` | Alumni stories |
| `/news`    | News & updates |
| `/events`  | Events       |
| `/projects`| Projects & giving |
| `/gallery` | Gallery      |
| `/contact` | Contact      |
| `/governance` | Governance |
| `/faq`     | FAQs         |
| `/archive` | Archive      |

## Development

**Requirements**: Node.js 18+ (or use [nvm](https://github.com/nvm-sh/nvm)).

```bash
# Install dependencies
npm install

# Dev server (http://localhost:8080)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

Optional: set `VITE_SITE_URL` (e.g. `https://bickosa.com`) for canonical URLs and absolute OG URLs in production.

## Scripts

| Script           | Description                    |
|-----------------|--------------------------------|
| `npm run dev`   | Start Vite dev server          |
| `npm run build` | Production build               |
| `npm run preview` | Serve production build       |
| `npm run lint`  | Run ESLint                     |
| `npm run test`  | Run Vitest                     |
| `npm run generate:og` | Generate OG images (script) |

## Design system

The UI follows the **Bento grid** style guide: section structure (eyebrow → heading → sub), card variants (`BentoCard`: white, surface, navy-tint, grad-navy, gold, etc.), and design tokens (navy, gold, typography). See `docs/BENTO_STYLE.md`.

## Contributing

We welcome contributions from the community. See **[CONTRIBUTING.md](CONTRIBUTING.md)** for details. In short:

1. **Fork** the repository and clone your fork.
2. Create a **branch** for your change (`git checkout -b fix/your-change` or `feature/your-feature`).
3. Follow the existing **code style** (TypeScript, ESLint, Bento design system in `docs/BENTO_STYLE.md`).
4. Run **lint** and **tests**: `npm run lint` and `npm run test`.
5. **Commit** with a clear message and **push** to your fork, then open a **Pull Request** against the default branch.

Please open an **Issue** first for larger changes or new features so we can align on approach.

## Discovery & meta

- **Meta / OG**: Default tags in `index.html`; per-page title, description, and Open Graph/Twitter tags are set by `PageMeta` (react-helmet-async) from `src/config/metadata.ts`.
- **Manifest**: `public/manifest.webmanifest` for PWA/install and app identity.
- **Robots**: `public/robots.txt` allows common crawlers; add `Sitemap:` when you have a sitemap.
- **LLMs / agents**: `public/llms.txt` provides project summary and key paths for AI tooling.

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.
