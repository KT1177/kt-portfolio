# Global project detail system

Individual projects containing a body of work are real pages with their own URLs. Advertising, Creative Partner, Creative Diary where appropriate, and future work sections may use this system. Landing pages retain their own designs. Smart City remains its approved narrative/timeline experience.

## Integration

Define editorial data using `ProjectDetailData` from `src/components/project-detail/types.ts`. Create a real Astro route, such as `src/pages/advertising/campaign-name.astro`, importing `ProjectDetailLayout` and passing that project's data:

```astro
---
import ProjectDetailLayout from '../../layouts/ProjectDetailLayout.astro';
import { campaign } from '../../data/projects';
---
<ProjectDetailLayout project={campaign} />
```

This is an integration example, not an existing route or data file. Landing cards should link to `project.href`. The route must match that URL. Create and verify the next project's route before publishing its link. Do not add placeholder projects to the production site merely to demonstrate the system.

## Approved mobile sequence

The layout reuses BaseLayout's navigation, skip link, main landmark, and footer. Content order is: small actual brand logo; project/campaign title; Project Story once; a two-column, two-row definition list (Role, Agency/Client, Recognition, Discipline); full-width stacked images at natural aspect ratio with minimal background separation; a large linked Next Project image and title; existing footer. No repeated story or information beneath the gallery. No thumbnails, numbers, carousel controls, modal, or lightbox. Enter genuine recognition information; never invent awards. Use a factual 'None' or 'Not applicable' when appropriate.

Logos use a consistent 10rem × 4rem contain area, retaining original proportions and transparent padding. The brand identifies the client; the h1 identifies the campaign. Logo optical weight may need a future asset-specific adjustment without distortion. A small client-name fallback is allowed when an actual logo is unavailable.

## Shared visual conventions

Inherit existing `--color-paper`, `--color-ink`, `--font-sans` and headline tracking tokens. Do not introduce a new palette or font. Geist is the global primary typeface, self-hosted through the shared font system. This component inherits it without its own font files or family override. The current global paper token is #f8faf9; any approved future paper update flows through automatically.

## Responsive composition

Data, image delivery, content composition and page shell are separate. `ProjectDetailContent` implements the mobile sequence. Tablet and desktop designs are pending: the current wide-screen holding layout caps this sequence at 48rem rather than stretching it across desktop. It is not an approved desktop composition and no current route uses it.

A future composition can consume the same typed data and `ProjectImage`, then occupy ProjectDetailLayout's default slot. Prefer one semantic DOM with grid areas and media queries for different arrangements. Avoid rendering separate hidden image trees for each breakpoint; that can duplicate downloads. Update image `sizes` whenever the actual rendered width changes. Do not redesign existing pages as part of adopting this architecture.

## Image delivery

R2 remains the master source. Follow portfolio-image-standard.md: visual fidelity first, no upscaling, preserve alpha, native aspect ratio and useful native resolution. Each asset includes native width/height, meaningful alt text and its URL. Original delivery is the safe default for logos, documents and unreviewed assets. Optional `delivery` supplies useful widths and explicit WebP quality; AVIF quality is opt-in only after visual approval. The helper adds native width and removes widths larger than the master. It uses Astro for derivatives, WebP fallback and native fallback; it never crops or flattens the source. Lazy loading and explicit dimensions reserve image space. The logo is requested normally at the top of the page.

Remote optimization requires the actual host/path to be authorized in astro.config.mjs. Only the Smart City path is currently authorized; add a project's exact approved path during integration, not a speculative global wildcard now. The default image sizes match the temporary 48rem-wide composition. Detailed UI/text may need original-only delivery or a reviewed resolution floor.

The existing optional portfolio lightbox still applies to standalone galleries such as Smart City. Opening a multi-asset project is a page-navigation action, and this project-detail gallery does not opt into that lightbox.

## Adoption checks

Before publishing the first real project, validate actual logo scale, image/text fidelity, native aspect ratios, mobile 2×2 metadata, reserved image dimensions, responsive selected sizes, keyboard focus, and the Next Project destination. Confirm the story/metadata appear only once and no gallery controls or lightbox scripts are added. Run Astro checks and the production build. Tablet/desktop composition requires its own design approval.
