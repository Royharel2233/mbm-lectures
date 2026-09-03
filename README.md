# MBM Lectures

React (Vite) rebuild of the original Wix site (roy-700.wixsite.com/mbm1) — same content,
same structure, fully editable code, ready for a real host.

## Run locally

```bash
npm install
npm run dev
```

## Before deploying

1. **Domain**: replace `https://www.mbmlectures.com` in `src/components/Seo.jsx`,
   `index.html`, `public/robots.txt` and `public/sitemap.xml` with your real domain.
2. **Contact form**: `src/pages/Contact.jsx` currently falls back to a `mailto:` link.
   Wire it to a real backend (Formspree, a serverless function, etc.) if you want
   submissions without opening the visitor's mail client.
3. **Book sales**: `src/pages/Book.jsx` is a placeholder — add real copy, price, and
   a checkout flow (Stripe/PayPal/etc.) when ready.
4. **Images**: everything lives in `src/assets/images` — swap in higher-res originals
   any time.
5. **Build**: `npm run build` outputs static files to `dist/` — deploy that folder to
   any static host (Vercel, Netlify, Cloudflare Pages, etc.).

## SEO

- Per-page `<title>`, meta description, canonical URL, Open Graph + Twitter Card tags,
  and JSON-LD structured data live in `src/components/Seo.jsx` and each page under
  `src/pages/`.
- `public/robots.txt` and `public/sitemap.xml` are pre-filled — update the domain there too.
- Content, headings and image alt text match the original site.
