# SMB Market — landing page (Next.js)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Layout

- `app/layout.tsx` — `<html>`, metadata, Google Fonts
- `app/page.tsx` — composes the page from section components
- `app/globals.css` — all styles (migrated as-is, original cascade order kept)
- `components/sections/*.tsx` — one component per page section
- `components/PreviewTools.tsx` — hero A/B + font switchers (preview only, remove before launch)
- `components/SiteScripts.tsx` + `lib/site.js` — client-side behaviour (Lenis smooth scroll, reveals,
  carousels, scroll-pinned Buyer System, tutorial player), run once after hydration
- `public/images`, `public/fonts` — static assets
- `legacy/` — the original single-file `index.html` and its backups, for reference only
