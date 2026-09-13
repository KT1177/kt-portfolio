# KT Portfolio

A fresh static Astro site with Tailwind CSS (Vite integration) and strict TypeScript.

## Development

Requires Node.js 22.12+ and pnpm.

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
```

The static build is written to `dist/`. No deployment is configured yet.

## Portfolio image quality standard

Follow the [permanent portfolio image standard](docs/portfolio-image-standard.md) for all future page work. Cloudflare R2 remains the master media source, high-quality WebP is the preferred uploaded photographic master, and Astro handles responsive delivery. Visual fidelity takes priority over byte savings; use visually approved high-quality AVIF with WebP fallback and preserve creative crop control.

The Smart City opening hero and 13 Section 03 carousel photographs are established references. The carousel uses AVIF 70 / WebP 85, an 800px desktop-only floor from 1024px viewport width, the existing mobile/tablet ladder, and useful native-width candidates. Other image categories require separate authorization.

Portfolio galleries should normally enable the [shared optional lightbox](docs/portfolio-lightbox.md), which supports gallery defaults and per-image overrides and loads full-size photography only when opened.

## Structure

- `src/layouts/BaseLayout.astro`: shared document, metadata, header and footer.
- `src/components/site/`: navigation and footer.
- `src/components/sections/`: homepage sections and shared placeholder content.
- `src/components/ui/`: reusable container and media components.
- `src/pages/`: Home, Work, About, Contact and 404 routes.
- `src/styles/global.css`: Tailwind import, theme tokens and global defaults.
- `src/data/navigation.ts`: navigation links.
- `src/data/media.ts`: typed R2 media map.
- `src/lib/media.ts`: public media URL resolution.

## R2 media

Copy `.env.example` to `.env` and set `PUBLIC_R2_BASE_URL` to your public R2 custom-domain URL. Leave it blank until ready; the Media component renders a placeholder. Only public media is supported by this starter. Never put R2 access keys or secret credentials in `PUBLIC_` variables.

Add records to `src/data/media.ts`, using original (not URL-encoded) object keys:

```ts
hero: { key: 'portfolio/hero.jpg', alt: 'Describe the image', width: 1600, height: 900 }
```

Then import `media` and `Media` into a section and render `<Media asset={media.hero} />`. Rebuild after changing environment variables. No bucket, media files, or domain have been provisioned.

## GitHub

Remote: https://github.com/KT1177/kt-portfolio.git

Authenticate with GitHub CLI using `gh auth login --hostname github.com --git-protocol https --web`, then `gh auth setup-git`. Run `git fetch origin` before pushing to inspect existing remote history; do not force-push over existing work.

## Smart City

`/smart-city/` renders the supplied eight-chapter story plus its hero. Chapters and page navigation live in `src/components/smart-city/`; scoped styling lives in `src/styles/smart-city.css`. `Layout.astro` provides document metadata without adding duplicate navigation or main landmarks.

Smart City defaults to `https://pub-e185fd1db9bf4dd59d2b99be455217bd.r2.dev`, using the exact object keys in `src/data/smart-city-media.ts`. Override `PUBLIC_R2_BASE_URL` and rebuild to change the media origin. Explicitly set it to an empty string to restore placeholders and disable the patent link. Film buttons remain disabled until real film URLs are supplied. Recognition is an explicit placeholder. The four additional navigation destinations have placeholder routes.
