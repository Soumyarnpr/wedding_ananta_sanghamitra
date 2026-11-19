# Ananta and Sanghamitra’s reception invitation

A groom-side Odia Hindu invitation built with React, TypeScript, Vite, Tailwind CSS, and GSAP. It preserves the original couple photographs, music, date reveal, and album, with Ananta first and an emerald and gold theme. The cover features gilded peacocks, mango leaves, and temple details, alongside a redrawn Ganesha emblem and SVG ornaments. Its responsive hero follows the original invitation's layout in `src/hero.css`. See `ARTWORK.md` for asset locations and generation prompts.

The reception is **Sunday, 6 December 2026** at **Chaudhury Destination Point, Pankapala, Rahama, Jagatsinghpur**. The reception time has not been supplied.

## Run locally

Use Node.js 22 or later.

```powershell
npm ci
npm run dev
```

Open the local address printed by Vite. Use `npm run check` to check TypeScript and `npm run build` to create the static site in `dist`. The existing `vercel.json` configures Vercel to build and serve that directory.

## Edit the invitation

Content, dates, photographs, music, theme, and family details are configured in `src/config/wedding.config.json`.

- `wedding.date` remains the primary date field for compatibility with the original app. It now represents the **6 December reception**, and controls the date reveal, countdown, and calendar event. The ceremony entries retain their original 1–2 December dates; the reception event uses 6 December.
- Reception start and end times are empty. Calendar links and downloads create an all-day reception event until both times are supplied. The countdown targets the start of the reception date in `Asia/Kolkata`, without implying a reception start time. Calendar reminders are configured separately.
- `wedding.venue` contains the reception venue and directions. No photograph of the new venue was supplied, so its empty `image` field uses a labeled decorative temple illustration. Add a verified photograph and descriptive `imageAlt` to replace it.
- RSVP is disabled because groom-side contact details and an RSVP form have not been supplied. Add the appropriate `rsvp.contacts`, `formUrl`, or `endpoint`, then set `rsvp.enabled` to `true`. The original bride-side phone numbers are removed.
- Couple portraits use `couple.groom.image` and `couple.bride.image`. Album photographs and captions are listed in `gallery`. Existing files are in `public/assets/images`.
- `theme` and `fonts` control the visual settings. Page metadata is generated from the invitation configuration by the plugin in `vite.config.ts`.

Run a new build after editing the configuration. Deploy `dist` to a static host or deploy the project through Vercel using the included configuration.
