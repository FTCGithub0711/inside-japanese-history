# Document Index

このファイルは、プロジェクト内の `.md`、`.docx`、調査資料を探すための入口です。作業を再開するときは、まずこのファイルと `task/current_status_ja.md` を確認します。

## まず見るファイル

1. `task/current_status_ja.md`  
   現在のサイト状態、直近で完了したこと、次にやる候補。

2. `README.md`  
   プロジェクト全体のフォルダ構成と基本コマンド。

3. `AGENTS.md`  
   Codex/AIがこのリポジトリで作業するときのルール。

4. `seo-research/README.md`  
   事業計画、SEO、参考文献、競合調査の目次。

5. `article-workspace/README.md`  
   記事ごとの資料、下書き、写真、父チェック用ファイルの置き場所。

## 主なフォルダ

| フォルダ | 役割 | 主なファイル |
|---|---|---|
| `site/` | 公開サイト本体 | `site/src/pages/`, `site/src/layouts/`, `site/public/images/` |
| `article-workspace/` | 記事制作の作業場 | `origins-to-heian/`, `top-topics/`, `hidden-japan-travel/` |
| `deep-research/` | Deep Research結果 | `03-japan-creation-dawn/research_note.md` |
| `seo-research/` | SEO・事業・文体・競合調査 | `16_site_and_content_blueprint_ja.md`, `17_overseas_japan_blog_top10_style_research_ja.md` |
| `task/` | 実行用チェックリスト | `article_creation_schedule_ja.md`, `affiliate_setup_checklist_ja.md` |
| `exports/` | 共有・保存用docx | `exports/docx/` |

## 記事制作で見る場所

### 1本目の公開記事

- 実装済み英語記事: `site/src/pages/articles/japan-creation-dawn.astro`
- 実装済み日本語記事: `site/src/pages/ja/articles/japan-creation-dawn.astro`
- 実装済みドイツ語記事: `site/src/pages/de/articles/japan-creation-dawn.astro`
- 写真フォルダ: `site/public/images/articles/japan-creation-dawn/`
- 元ドラフト: `article-workspace/origins-to-heian/01-japan-creation-and-dawn-of-transformation/drafts/`
- Deep Research: `deep-research/03-japan-creation-dawn/`

### 今後の記事候補

- 原始〜平安シリーズ: `article-workspace/origins-to-heian/README.md`
- 人気SEO記事10本: `article-workspace/top-topics/topic_index.md`
- 歴史旅・穴場史跡: `article-workspace/hidden-japan-travel/README.md`

## ファイルの置き方

- 読むための完成寄り資料は、可能なら `.docx` も作る。
- AIやCodexが参照する作業メモは `.md` で置く。
- 父チェック用は各記事の `Eiji_check/` に置く。
- 翻訳前の確認済み原稿は `translate/` に置く。
- 公開サイトに出す文章は `site/src/pages/` に実装する。

## 触らないもの

- `site/dist/`: ビルド生成物。手で編集しない。
- `site/node_modules/`: 依存関係。手で編集しない。
- `~$*.docx`: Wordの一時ファイル。Gitには入れない。
- 未整理の画像は、記事内で使うことが決まるまで移動しない。
