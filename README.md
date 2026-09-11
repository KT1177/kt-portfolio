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
