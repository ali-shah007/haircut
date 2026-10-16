# Lookbook
A responsive haircut and beard exploration studio with local photo upload, 8 haircut and 6 beard overlays, placement/scale/blend controls, original comparison, and PNG export.

## Run
Requires Node.js 20 or newer. No dependencies or install step.

```sh
npm run dev
```

The server listens on port 3000 (override with `PORT`). Run `npm run check` for JavaScript syntax validation.

Photos stay in browser memory. Try-on previews use adjustable SVG illustrations, not photorealistic AI rendering or automatic face detection. The demo portrait and optional fonts load from Unsplash and Google Fonts; uploaded photos and the core studio work without those services. Styles are a curated gallery, not a live trend ranking.
