# サイト公開準備チェックリスト

作成日: 2026-05-04

記事本文の作成前に、サイトを公開できる最低限の土台を整える。

## 1. 実装済み

- `Privacy Policy` ページ
- `Affiliate Disclosure` ページ
- `Contact` ページ
- フッターの法務リンク
- デフォルトOGP画像 `site/public/og-default.png`
- Google Analytics用コンポーネント
- sitemap生成
- robots.txt

## 2. ドメイン

候補ドメイン:

`insidejapanesehistory.com`

やること:

1. ドメインを購入する。
2. `site/astro.config.mjs` の `site` が正しいか確認する。
3. `site/src/consts.ts` の `SITE.url` が同じか確認する。
4. Substackを使う場合、サブドメインを決める。

推奨:

- Astroサイト: `https://insidejapanesehistory.com`
- Substack: `https://posts.insidejapanesehistory.com`

## 3. デプロイ

推奨は Vercel か Cloudflare Pages。

ビルド設定:

- Framework: Astro
- Root directory: `site`
- Build command: `npm run build`
- Output directory: `dist`

## 4. Analytics

Google Analyticsを使う場合:

1. GA4プロパティを作る。
2. Measurement IDを取得する。
3. ホスティング側の環境変数に入れる。

環境変数:

`PUBLIC_GA_ID=G-XXXXXXXXXX`

ローカルでは `.env` に入れる。ただし `.env` はコミットしない。

## 5. Google Search Console

公開後にやること:

1. プロパティを追加する。
2. DNSまたはHTMLタグで所有権を確認する。
3. sitemapを送信する。

Sitemap:

`https://insidejapanesehistory.com/sitemap-index.xml`

## 6. 公開前の確認

```bash
cd site
npm run build
npm run preview
```

確認するページ:

- `/`
- `/sengoku/`
- `/bakumatsu/`
- `/hidden-japan/`
- `/de/`
- `/de/sengoku/`
- `/de/bakumatsu/`
- `/de/hidden-japan/`
- `/ja/`
- `/ja/sengoku/`
- `/ja/bakumatsu/`
- `/ja/hidden-japan/`
- `/about/`
- `/contact/`
- `/privacy/`
- `/affiliate-disclosure/`

## 7. まだ後でよいもの

- AdSense
- 本格的な記事投稿
- SNS毎日の運用
- 有料商品
- PDFリードマグネット完成版
