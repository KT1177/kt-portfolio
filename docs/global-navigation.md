# Global navigation

`src/data/navigation.ts` is the only top-level link/order source. `src/components/site/Header.astro` is the only global header markup and styling implementation; desktop and mobile both render that array.

Order: Creative Partner, Smart City, Advertising, Venture Lab, Creative Diary, Karl Turkel.

The KT logo and Creative Partner link go to `/`. The homepage uses the same Creative Partner implementation as `/creative-partner/`. Karl Turkel goes to `/about`.

BaseLayout includes Header for ordinary pages. ProjectDetailLayout inherits BaseLayout. Smart City imports the same Header directly within its existing narrative shell to retain its content, background and footer; its old header wrapper and independent navigation CSS are retired. Do not add global navigation markup or styling to page-specific files. In-page project indexes, carousel controls and footer links are distinct from global navigation and remain intact.

Active highlighting uses `activeNavigationSection()` and complete URL segments, including nested project pages. Both Creative Partner URL aliases resolve to the first item. Project data may set `navigationSection` (one of the shared navigation hrefs) for projects whose URL sits outside their parent section, such as `/projects/example`. BaseLayout also accepts `activeSection` for other exceptional routes. Contact, Work and 404 have no matching top-level item and intentionally do not underline an unrelated section.

Validate built output and refresh/restart static previews after source changes; an old preview/build can still display old navigation. Build and checks do not publish the site.
