# Permanent portfolio image standard

Visual fidelity takes priority over byte savings. Preserve the source photography, color, intentional crop, positioning, and layout. Do not upscale generated assets or apply a single compression/resolution rule to every image.

## Masters and delivery

- Cloudflare R2 remains the master media source. High-quality WebP is the preferred uploaded photographic master format. Retain original/native resolution when the layout or full-screen viewing needs it. Preserve appropriate original formats for SVGs, logos, transparency and documents.
- Astro handles responsive image delivery. Authorize intended HTTPS hosts and paths through image.remotePatterns; the Smart City R2 host is authorized for /smart-city/**. Keep full-size masters separate from card delivery.
- High-quality AVIF may be used with WebP fallback when visually approved. Quality numbers are codec-specific and are not guarantees of equivalence. Retain the larger WebP when AVIF visibly degrades the photograph.
- Use truthful sizes based on actual rendered image dimensions. Generate a suitable width ladder, never above the master width. Preserve useful native-width candidates for high-DPR viewing.

## Quality and art direction

Heroes require conservative compression and enough resolution for their visible crop, including tall mobile cover frames. The approved Smart City opening hero uses AVIF 70 with WebP 85 fallback and 1920/2240/2560 widths. AVIF 60 is not approved for that hero. This is a quality reference, not universal settings for other heroes.

Carousel and supporting photography should use responsive sizing appropriate to their rendered dimensions, with a visually reviewed resolution floor when close-to-1× delivery loses fine detail. Review representative text, architectural texture and shadow photographs as a batch; do not repeat a full forensic comparison for every ordinary image. Give unusual or visibly problematic images individual review. Preserve loading priority and lazy loading appropriate to the layout.

Mobile and desktop crops remain creatively adjustable through object-position, layout-specific cover/contain behavior, or dedicated art direction. Delivery optimization should not bake the carousel crop into every derivative or remove future crop control. Explicit dimensions/aspect ratios should reserve layout space. Preserve overlays, gradients, spacing and responsive behavior unless a design change is separately requested.

## Finalized Smart City carousel reference

The 13 Section 03 photographs use AVIF 70 / WebP 85. Generated widths are 320, 400, 480, 640, 800, 960, 1200, and native width (1419, or 1448 for DART-2). Resizing is proportional, with no upscaling.

At viewport widths of 1024px and above, separate media-qualified AVIF and WebP sources offer 800/960/1200/native candidates. This establishes an 800px desktop floor without falsifying sizes or imposing it on smaller devices. Below 1024px, the existing complete width ladder and sizes remain intact, including tablet and mobile selections. It is a viewport breakpoint, not device detection; narrow desktop windows also retain the smaller-screen ladder.

Representative selections: 1440px @1× and @2× → 800px; 390px @1× → 320px, @2× → 640px, @3× → 960px; 768px @2× → 400px; 700px @3× → native. Higher-DPR desktop can select larger variants. These values are browser selections under fresh-cache testing; browsers may reuse a larger cached candidate.

The existing 4:3 card crop, position, labels, spacing, counter, controls and lazy loading remain unchanged. Future galleries should derive their own sizes and floor from their layout rather than copy this formula blindly.

## Optional shared lightbox

Full-screen viewing is a reusable optional feature and should normally be enabled for portfolio galleries. PortfolioGallery defaults to lightbox=true; an explicit gallery-wide false disables it, and GalleryImage can override either default per image. See [component usage](portfolio-lightbox.md).

Keep card assets responsive. Request a full-size original or visually approved large optimized image only when opened. Show its natural aspect ratio, independent of the card crop. Smart City uses original R2 WebP photographs on demand, without neighbor prefetching. Preserve the approved minimal dialog, caption, keyboard/touch navigation, focus management and close behavior. Do not add interface chrome or custom zoom controls by default.

## Validation and scope

Build and run Astro checks after integration. Check mobile/desktop selection, geometry, fallback delivery and any lightbox interaction. Confirm full-size lightbox files are not loaded initially. Use concise visual checks; generate extensive comparison packages only for a material quality decision or regression. Optimize only the categories authorized for the current task.

## Approved remaining Smart City heroes — Batch 3 complete

- Call Box retains its approved AVIF 80 / WebP 90 responsive delivery with 1920/2240/2560px candidates.
- JC kiosk retains its approved AVIF 80 / WebP 90 delivery with 2240/2560px candidates.
- Both retain unchanged native WebP masters on high-DPR screens and very wide viewports, as implemented in PhotographicHero.astro.
- **CityPost screens is an explicit original-only exception.** Keep `citypost-screens.webp` as the native 2560×1455 WebP from R2. Do not generate or use AVIF derivatives for this hero. Preserve its transparency, detailed interface imagery, current responsive cover crop, object-position, dimensions, overlays, gradients and loading behavior. Its 710,586-byte payload is approved; quality takes priority over savings. This exception is resolved and approved, not pending further compression review.

All three are approved. Future work must preserve these decisions unless explicitly requested otherwise.

## Completed Smart City raster coverage

The opening hero and all five image batches are complete:

1. Opening hero: approved AVIF 70 with existing WebP 85 fallback; preserve its crop-aware resolution requirements.
2. Thirteen carousel photographs: AVIF 70 / WebP 85; desktop-only 800px floor, independent mobile ladder, native candidates and optional shared lightbox loading originals on demand.
3. Five supporting photographs: conservative per-image delivery. Reno's approved minimum is 960px (no 640/800 candidates), retaining 1200/native options. PoleVolt and other native-master exceptions remain as implemented.
4. Remaining heroes: approved Call Box/JC kiosk delivery; CityPost screens stays original native WebP only, preserving alpha and UI detail.
5. Five transparent awards: WebP quality 100, useful 384/512/native choices; IDC/tall Edison omit 512 when the native master is smaller. Preserve full canvas, transparent padding, height limits and base offsets.
6. Certificate and patent (final document batch): certificate uses **genuinely lossless WebP**, 768px minimum with 1000px native fallback; no lossy encoding. The original PNG stays in R2. Patent drawing remains the untouched 1142×1600 WebP because a tested resized lossless file was larger and line fidelity matters more than small savings.

`src/services/portfolio-image-service.ts` delegates to Astro's normal Sharp service for every image except the exact R2 `ada-sapolin.png` source when producing WebP. For that certificate only, it enables Sharp's `lossless: true`; WebP quality 100 alone is not a lossless guarantee. Validation checks decoded alpha and visible RGB against the uncompressed resize, including the native version. Changing the service entrypoint changes Astro's generated asset URL hashes; previously approved image bytes and encoder settings remain identical.

SVG logos remain untouched. Further changes require an explicit new scope; no deployment is implied by completion.
