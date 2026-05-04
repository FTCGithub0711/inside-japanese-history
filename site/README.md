# Inside Japanese History — site/

Minimal Astro static site that:
- Hosts pillar pages (Sengoku / Bakumatsu / Modern) and About on the **custom domain**
- Emits JSON-LD `Person`, `Article`, `PodcastSeries` schema (Substack can't)
- Generates `sitemap-index.xml` automatically (`@astrojs/sitemap`)
- Links to Substack as the email, RSS, and podcast distribution layer

## Setup

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Deploy

Recommended: **Vercel** or **Cloudflare Pages** (both free). Either auto-builds Astro on `git push`.

After DNS for `insidejapanesehistory.com` points to your host, *also* point a `CNAME` for the **Substack custom domain** (Substack docs → Settings → Custom Domain). Keep root `/` on Astro and serve Substack at e.g. `posts.insidejapanesehistory.com` — or vice versa. Decide before deploy.

## What lives where

| Concern | Astro (this repo) | Substack |
|---|---|---|
| Pillar pages | ✅ | — |
| About / E-E-A-T | ✅ | About page (mirror) |
| `Person` / `Article` schema | ✅ | Limited |
| `Podcast` schema | ✅ | Limited |
| SEO articles / pillar posts | ✅ canonical | Email excerpt / link |
| Newsletter-only updates | Optional | ✅ |
| Email delivery | — | ✅ |
| Podcast hosting | — | ✅ |
| Custom domain root | ✅ | Subdomain |

## Article Page Workflow

Reusable article layout:

- `src/layouts/ArticleLayout.astro`: full article shell with headline, metadata, optional image, table of contents, language links, share buttons, sources, related articles, newsletter CTA, and travel links.
- `src/components/ArticleTableOfContents.astro`: in-page section navigation.
- `src/components/SourceList.astro`: source and further-reading list.
- `src/components/RelatedArticles.astro`: read-next cards.
- `src/components/ShareButtons.astro`: X, Facebook, and email share links.
- `src/components/BookAffiliateBox.astro`: article-specific book links.
- `src/components/AffiliateDisclosure.astro`: shared affiliate disclosure text.
- `src/data/monetization.ts`: affiliate IDs, search URL builders, and starter travel/book link data.
- `src/templates/article-page-template.astro`: copy into `src/pages/articles/<slug>.astro` when a new article is ready.

Do not put affiliate links above the article lead. Place travel links after the section where a location becomes relevant, or let `ArticleLayout` render them near the end of the article.

When partner programs are approved, add IDs in `src/data/monetization.ts`:

- `bookingAid`
- `amazonTag`
- `klookPartnerId`
- `viatorPartnerId`

## TODO before launch

- [ ] Confirm domain spelling: `insidejapanesehistory.com`
- [ ] Buy domain
- [x] Decide father's name display vs. pen name (`src/consts.ts`)
- [x] Add `public/og-default.png` (1200×630)
- [x] Add reusable email signup CTA for free PDF lead magnet
- [ ] Wire Substack custom-domain DNS
- [ ] Register in Google Search Console (custom domain)
- [ ] Submit `sitemap-index.xml`
- [x] Add Privacy, Contact, and Affiliate Disclosure pages
