# Tech Tweakers brand assets

Not part of the site build: nothing here is deployed.

## `star/` — the Tech Tweakers mark

Five hands closing a star. This is the mark we keep.

- `original-195px.png`: the only original we have (195 px). Everything else is derived from it.
- `tweakers-star-on-dark.svg`: vectorised with vtracer from an 8x upscale of the original, on the site background (`#140d0d`).
- `tweakers-star-transparent.svg`: the same without the background rectangle.
- `tweakers-star-on-dark-{512,1024,2048}.png`: raster exports (1024 is a good LinkedIn avatar).
- `og-tweakers-1200x630.png`: link-preview image.

Known limits of the vector: gradients became flat colours, edges are slightly uneven when zoomed in, and the file is heavy (about 650 KB, 250 KB gzipped), so do not use the SVG in the site header, where `public/logo.png` is enough. The "transparent" SVG still has a thin dark outline on light backgrounds.

## `xct-hourglass/` — mark for XCT-Core / TxAI

Two Ts (one upside down) crossing an X, read as an hourglass. It did not replace the star, but it fits XCT-Core and TxAI: the Ts are the "Tx", the crossing is the X of XCT.

- `tweakers-symbol-*.svg`: copper on dark, copper on light, and the old five colours.
- `tweakers-icon.svg`, `icon-*.png`, `favicon.ico`: rounded copper tile.
- `tweakers-lockup-on-dark.svg`: symbol plus wordmark. The wordmark is live text (Ubuntu), not outlines.

Palette: background `#140d0d`, copper `#c98b5a`, light copper `#e3b184`.
