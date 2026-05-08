# 現在地メモ

更新日: 2026-05-08

## 現在の状態

- サイト名: `Inside Japanese History`
- 副題: `Beneath the Rising Sun`
- 公開ドメイン: `https://insidejapanesehistory.com/`
- サイト本体: `site/`
- 記事制作作業場: `article-workspace/`
- 調査資料: `seo-research/`, `deep-research/`

## 完了済み

- Astroサイトの基本構成を作成。
- 英語、日本語、ドイツ語のトップページ・カテゴリページを作成。
- 言語切り替えを国旗アイコンで実装。
- Google Analyticsタグを実装。
- Google Search Consoleとサイトマップ送信を実施。
- 1本目の記事 `How Japan Became Japan: Before the Samurai` を公開実装。
- 1本目の記事の日本語版・ドイツ語版も実装。
- 記事内に写真フォルダから自動で画像を差し込む仕組みを実装。
- 記事内の文脈に合わせて旅行アフィリエイト導線を配置。
- 直近で、サイト文言を「論争」ではなく「面白い筋から入る歴史読み物」へ修正。

## 直近の編集方針

今後の記事は、教科書的な説明ではなく、読者が続きを読みたくなる歴史読み物として作る。

- 複数説がある場合は、面白く読める筋を採用する。
- ただし、年代、人物、地名、史実の土台は崩さない。
- 「日本史とは論争である」とは見せない。
- 読者には、謎・人物・事件・現地の痕跡から入ってもらう。
- 記事後半で、現地訪問・宿泊・ツアー導線へ自然につなげる。

## 次にやる候補

1. 1本目の記事の日本語版・ドイツ語版も、英語版と同じ読み物調へ揃える。
2. 1本目の記事に内部リンク予定地を追加する。
   - Himiko / Yamatai
   - Kofun
   - Buddhism and Soga
   - Nara to Heian
   - Rise of samurai
3. `Origins to Heian` の個別記事を1本選んで作る。
4. `Hidden Japan Travel` の親記事を再開する。
5. 旅行アフィリエイトの本登録・リンク置換を進める。

## 再開時に見るファイル

- 文書全体の索引: `DOCUMENT_INDEX.md`
- 原始〜平安シリーズ: `article-workspace/origins-to-heian/README.md`
- 人気記事10本: `article-workspace/top-topics/topic_index.md`
- サイト設計: `seo-research/16_site_and_content_blueprint_ja.md`
- 競合文体調査: `seo-research/17_overseas_japan_blog_top10_style_research_ja.md`
- 公開記事: `site/src/pages/articles/japan-creation-dawn.astro`

## 注意

- 未追跡画像がいくつか残っている。記事内で使うか判断するまで、無理にGitへ入れない。
- `site/dist/` は生成物なので編集しない。
- `site/node_modules/` は依存関係なので編集しない。
