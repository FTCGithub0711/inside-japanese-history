# Inside Japanese History

副題: Beneath the Rising Sun

英語圏向けに、日本史の記事・史跡導線・旅行アフィリエイトを育てるための作業フォルダです。

## フォルダ構成

| フォルダ | 用途 |
|---|---|
| `site/` | 公開サイト本体。Astroのページ、コンポーネント、画像、ビルド設定を置く。 |
| `seo-research/` | SEO、競合調査、参考文献、収益化、成長計画などの戦略資料。 |
| `article-workspace/` | 記事制作の作業場。各記事ごとに資料、メモ、草稿、画像を分けて置く。 |
| `task/` | 実行スケジュール、TODO、記事作成計画。 |
| `exports/` | docxなど、外部共有・保存用に書き出した成果物。 |

## よく使う場所

- 文書全体の索引を見る: `DOCUMENT_INDEX.md`
- 今の作業状況を見る: `task/current_status_ja.md`
- トップページやデザインを直す: `site/src/pages/`、`site/src/components/`
- 写真を追加する: `site/public/images/hero/`
- 人気記事の資料を入れる: `article-workspace/top-topics/<記事フォルダ>/references/`
- 記事の構成や下書きを作る: `article-workspace/top-topics/<記事フォルダ>/drafts/`
- docx原稿をMarkdown化する: `site/article-drafts/docx-inbox/` に入れて `cd site && npm run import:docx`
- 戦略・SEO・参考文献を見る: `seo-research/README.md`
- 今後の作業順を見る: `task/article_creation_schedule_ja.md`

## 開発コマンド

サイトを動かすときは `site/` に移動して実行します。

```bash
cd site
npm install
npm run dev
npm run build
```

- `npm run dev`: ローカル確認用の開発サーバーを起動
- `npm run build`: 本番用にビルドできるか確認

## 運用ルール

- ルート直下には、入口になるファイルと主要フォルダだけを置く。
- 記事資料は必ず記事ごとの `references/` に入れる。
- 公開前の草稿は `article-workspace/`、公開サイトの実装は `site/` に置く。
- docxや共有用ファイルは `exports/` に置く。
- `.DS_Store`、`node_modules/`、`dist/` は作業対象にしない。
