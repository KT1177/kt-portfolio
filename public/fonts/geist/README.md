# Geist 1.7.2

Source: https://github.com/vercel/geist-font/releases/tag/v1.7.2

Official regular and italic variable TTFs converted to WOFF2 with fontTools.
Complete character sets and weight axes (100–900) retained; no subsetting or outline changes.
Distributed under the included SIL Open Font License (OFL.txt).

The primary family is declared once in src/styles/fonts.css and selected through
--font-sans in src/styles/global.css. Both page shells use SiteFonts.astro to
preload the same regular font URL. Existing intentional monospace accents remain
monospace. Font sizes, weights, line heights and tracking are independent of this
family change. Font metric differences may naturally alter line wrapping.
