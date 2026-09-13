# Portfolio galleries and full-screen photographs

Use the shared components for future portfolio carousels and galleries. Smart City Section 03 is the first integration; no other gallery is enabled automatically.

```astro
---
import PortfolioGallery from '../components/gallery/PortfolioGallery.astro';
import GalleryImage from '../components/gallery/GalleryImage.astro';
---
<PortfolioGallery lightbox={true} label="Project photographs">
  <!-- Keep your existing gallery layout, figures and captions. -->
  <GalleryImage
    src={photo.originalUrl}
    alt={photo.alt}
    caption={photo.location}
    width={photo.originalWidth}
    height={photo.originalHeight}
    lightbox={photo.lightbox}
  >
    <!-- Your existing Astro Image/Picture or responsive picture element. -->
  </GalleryImage>
</PortfolioGallery>
```

`PortfolioGallery.lightbox` defaults to `true`. Set `false` to disable the gallery. `GalleryImage.lightbox` is optional: omit it to inherit; explicit `true` or `false` overrides the gallery. Disabled items are skipped by lightbox navigation. Each gallery has its own navigation group. Keep triggers inside their gallery; avoid nesting interactive controls inside a GalleryImage button. Scope carousel navigation selectors to their control container rather than every button in the carousel.

`GalleryImage` adds a reset, full-width block button around the supplied responsive card. Keep the card image's crop and responsive sizing on the supplied image. The gallery wrapper uses display:contents and adds no layout box. Verify geometry when integrating with a new layout. With JavaScript unavailable, card images remain visible and triggers remain disabled.

`src` is the original/native-width URL or an explicitly approved large optimized image; it is stored as metadata only. The dialog creates an image request only when that photograph is opened. Navigation loads only the selected image; no neighboring images are prefetched. Do not put full-size image URLs in preloads or hidden img elements. Smart City uses the original R2 WebP, avoiding another lossy encoding. Card AVIF/WebP settings and width selection remain independent of lightbox delivery.

The shared native dialog is attached to body to avoid page-specific crop styles and stacking contexts. It uses natural image proportions, near-black background, a caption, close/previous/next controls, wraparound navigation, keyboard arrows, Escape, explicit Tab wrapping, modal background isolation, focus return, scroll locking, and horizontal single-finger swipes. Single-image galleries hide navigation. Loading failures show a retry action. Multi-touch and zoomed viewports do not trigger swipe navigation. Browser-native zoom is allowed; there is no custom pinch/zoom engine.

Implementation: `src/components/gallery/PortfolioGallery.astro`, `GalleryImage.astro`, and `portfolio-lightbox.ts`.
