# Reception artwork

Both hero illustrations were generated with the built-in `image_gen` tool. WebP conversion only optimizes the format; the artwork was not modified programmatically. The SVG assets were redrawn directly as native vectors.

## Final assets

- `public/assets/hero-emerald.webp` — desktop cover, 1536 × 1024.
- `public/assets/hero-emerald-mobile.webp` — phone cover, 1024 × 1536.
- `public/assets/ganesha-emerald.svg` — Ganesha emblem with a temple halo.
- `public/assets/peacock-emblem.svg` — emerald and gold A monogram favicon.
- `public/assets/peacock-vine.svg` — peacock-feather and mango-leaf vines.
- `src/components/ornaments.tsx` — native vector feather, jaali, kalash, mandap, diya, and leaf-and-diamond flourishes.

The active hero follows the original invitation's responsive layout using the landscape cover. `src/hero.css` was extracted from the reference site's public stylesheet, keeping its 800px and 620px breakpoints, cover sizing, and masked decorative edge layers on phones. Hero typography compensates for the reference's 15px root font while the rest of this invitation retains its 16px body font. The generated portrait asset is retained as an optional illustration and is not loaded by the active hero.

## Desktop generation prompt

Use case: illustration-story.
Asset type: production website hero background, brand-new standalone raster artwork, landscape 3:2, 1536x1024.
Primary request: an elegant Indian/Odia groom’s wedding reception background in antique gold foil on deep emerald. A polished, restrained, richly crafted invitation illustration.
Scene/backdrop: a uniform deep emerald green #102f2a field with very subtle high-end letterpress textile texture. No scene or venue depiction.
Subject: symmetrical slender gilded peacocks with folded tails and fine engraved mango-leaf vines confined to the extreme outer 18% edges and lower corners. Delicate Kalinga-inspired temple/jaali arch hints only at the far sides; tiny hanging brass bells in the upper corners. Botanical and peacock-feather linework is delicate, precise, and graceful.
Composition/framing: landscape. ALL of the central 60% and upper-middle area must remain empty uninterrupted deep emerald, providing large negative space for real website heading and religious copy added later. Ornamentation is confined to the extreme edges, with no central objects or dense top border. Balanced, sophisticated symmetry. Distinct from a lotus or maroon border design.
Color palette: deep emerald #102f2a, restrained antique gold #d6b576, very small sage accents. Warm, refined, celebratory.
Materials/textures: fine engraved gold foil, subtle letterpress grain; no harsh gloss or photorealistic metallic reflections.
Constraints: no people, no typography, no letters, no text, no numbers, no logos, no watermarks. Do not create a website screenshot or mockup. Do not depict an actual venue. Avoid clutter. Create the image itself as a complete finished background.

## Mobile generation prompt

The desktop cover was supplied as a style reference.

Use case: illustration-story.
Asset type: production mobile website hero background, portrait 2:3, 1024x1536.
Primary request: create a matching PORTRAIT companion artwork to the supplied emerald-and-gold invitation background. Preserve its refined gold engraving style, deep emerald hue, subtle letterpress texture, and visual language, but recompose specifically for a narrow phone screen. Do not stretch or squeeze any ornament or bird.
Input image: reference image only, for palette, engraving style, peacock anatomy, and material treatment. Recompose the layout for portrait rather than cropping or distorting the landscape.
Scene/backdrop: uniform deep emerald #102f2a with understated fine textile/letterpress grain.
Subject: restrained paired slender antique-gold peacocks with naturally folded tails near the extreme bottom corners, very delicate mango-leaf vines, tiny Kalinga-inspired temple/jaali hints at the far side edges, and small hanging brass bells in the extreme upper corners.
Composition/framing: 1024x1536 portrait. Keep every side ornament confined to the outer 12% of the image on each side; peacocks and low vines may occupy only the bottom 12%. Entire central 76% from top through the upper-middle and down to 88% height must stay empty uninterrupted deep emerald, leaving generous clear space for long stacked invitation names, religious text and buttons that the website adds later. Make the perimeter lighter, narrower and less dense than the reference. Keep upper-middle empty. Gold motifs must not intrude into that clear central text column. No broad arch across the top. Naturally proportioned small birds; do not compress landscape birds to fit portrait.
Color palette: deep emerald #102f2a, antique gold #d6b576, very subtle sage accents. Same warm refined celebratory mood as the reference.
Materials/textures: fine engraved gold foil and subtle high-end letterpress texture, no bright gloss.
Constraints: no typography, no letters, no text, no numbers, no people, no logos, no watermarks. No website screenshot, no UI mockup, no actual venue depiction. Complete finished standalone portrait background.
