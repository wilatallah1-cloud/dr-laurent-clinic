# Before/After Patient Gallery

Drop consented patient photos here as `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`.

These are loaded by the penile-enlargement landing page gallery
(`src/app/[lang]/penile-enlargement/content.tsx`).

The gallery is gated behind a "Are you sure?" confirm modal.
When the user confirms, the image at `/before-after/{id}.jpg` is shown.

## Naming

- `1.jpg` — Patient 1 (Silver program · 12 ml HA)
- `2.jpg` — Patient 2 (Gold program · 18 ml HA)
- `3.jpg` — Patient 3 (Combination · PRP + Filler)
- `4.jpg` — Patient 4 (Platinum program · 24 ml HA)

## Format

- Aspect ratio: 3:4 (portrait)
- Recommended size: at least 800x1067, max 1600x2133
- Format: JPEG (compressed, ~200-400kb each for fast loading)
- These are full-color real patient photos, shown only after the confirm modal

## Captions and tier mapping

To change captions, edit `galleryItems` in `content.tsx` (both `en` and `fr` blocks).
