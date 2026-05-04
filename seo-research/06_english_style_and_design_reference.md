# 英語圏収益サイトの文体・デザインリファレンス

作成日: 2026-05-04

---

## 1. 目的

英語圏で読者・購読・広告・会員収益を得ている歴史/日本関連サイトを参考に、**Beneath the Rising Sun 用のAI執筆・Webデザイン指示書**を作る。

方針は模倣ではなく、収益サイトに共通する「読みやすさ、信頼性、導線、ページ構造」を抽出し、独自の文体・デザインへ変換すること。

---

## 2. 参照サイトと学ぶ点

| サイト | 収益/成長の根拠 | 学ぶ点 |
|---|---|---|
| HistoryExtra | 雑誌購読、会員、Podcast、Academy。Aboutで数千万PV/年、Podcast月200万DL規模を明記 | 権威性 + 一般読者向けの読みやすい歴史解説 |
| TheCollector | Aboutで月間400万PV、600人以上の著者、ニュースレター導線を明記 | SEO見出し、カード型一覧、学歴/著者権威の見せ方 |
| Smithsonian Magazine | 雑誌購読、会員、旅行、ストア連動 | 写真・文化・歴史を高品質に見せる編集感 |
| Unseen Japan | Patreon/Insider課金、会員特典、Discord、広告なし版 | 日本特化メディアの会員導線、独立性の訴求 |
| Samurai History & Culture Japan | Sidestack上で2K+無料購読者、月$7/年$70の有料Substack | サムライ特化ニュースレターの価格帯 |
| Tofugu | ニュースレター、学習導線、WaniKani等の周辺商品 | 親しみやすい語り口と教育コンテンツ導線 |
| Following the Shogun | 日本人視点、現地訪問、Shōgun連動、地域/人物別ナビ | 現地性・日本人視点・訪問情報の見せ方 |

---

## 3. 収益サイトに共通する文体

### 共通パターン

- タイトルは検索意図に直接答える: `Is X true?`, `Who was X?`, `Why did X happen?`
- 冒頭100語以内に結論を置く
- 専門用語は出すが、直後に短く説明する
- 段落は短い。1段落2〜4文が中心
- H2は質問形または読者の疑問に近い形にする
- 史実だけでなく「なぜ今読む価値があるか」を入れる
- ドラマ、映画、旅行、現代文化との接続を作る
- 著者や監修者の信頼性を記事内で見せる
- 記事末尾で関連記事、メール登録、有料商品へ自然に誘導する

### 避ける文体

- 学術論文調の長い前置き
- 日本語資料の直訳調
- “Japan is mysterious” 型の異国趣味
- 断定が強すぎる歴史雑学
- 出典や根拠のない「日本人はこう考える」一般化

---

## 4. Beneath the Rising Sun の英語ハウススタイル

### ブランド声質

**Calm, precise, narrative, insider-aware.**

英語圏読者に対して、上から教えるのではなく、「外から見るとこう見えるが、日本側から見ると少し違う」と案内する。

### 文体ルール

- 中学〜高校レベルの英語を基本にする
- 1文は原則15〜25語
- 重要な概念は短い日本語ローマ字を入れて説明する
- 断定の前に根拠を示す
- 父の視点は `From a Japanese perspective...` よりも具体的に書く
- 例: `In many English accounts, this looks like simple loyalty. In Japanese memory, it is closer to a story about duty, shame, and social order.`
- 父が英語を書かないことは隠さず、`researched and checked in Japanese, edited in English` と明示する

### 記事冒頭テンプレート

```text
Most English summaries describe [topic] as [common simplified view].

That is not wrong, but it misses the part that mattered most in Japan: [Japanese-side angle].

This article explains [topic] through three questions:
1. What actually happened?
2. What do English accounts often miss?
3. Why does it still matter today?
```

### 結論先出しテンプレート

```text
Short answer: [clear answer].

Longer answer: [topic] was not simply [myth]. It was shaped by [factor 1], [factor 2], and [factor 3]. To understand it, we need to look at how people in Japan at the time understood [key concept].
```

---

## 5. 記事タイプ別AIプロンプト

### A. 歴史解説記事

```text
Write an English historical explainer for Beneath the Rising Sun.

Audience: English-speaking readers who like Shogun, samurai history, Japanese castles, or Japan travel, but are not academic specialists.

Voice: calm, precise, accessible, narrative, and grounded in a Japanese perspective. Do not imitate any specific publication. Use short paragraphs, clear H2 headings, and explain Japanese terms immediately.

Structure:
- Start with the common English-language understanding of the topic.
- Give a short answer within the first 100 words.
- Explain what happened chronologically.
- Add a section on what English accounts often miss.
- Add a section based on the Japanese-side interpretation provided in the notes.
- Connect the topic to modern readers, Shogun, travel, or cultural memory.
- End with related reading and a newsletter/PDF CTA.

Avoid: academic jargon, exoticizing Japan, unsupported claims about what all Japanese people think, and direct imitation of another writer.
```

### B. 神話破壊記事

```text
Write a myth-vs-reality article.

Opening:
- Name the myth clearly.
- Say what is partly true.
- Say what is misleading.

Use this section pattern:
1. The popular myth
2. What the historical record shows
3. Why the myth became popular
4. How Japanese sources or memory frame it differently
5. What readers should remember

Tone: explanatory, not scolding. The reader should feel smarter, not embarrassed.
```

### C. Shōgun連動記事

```text
Write a Shogun-related article for readers who watched the FX series.

Rules:
- Mention the show only as an entry point.
- Quickly separate fiction, inspiration, and historical fact.
- Use a simple table when comparing character vs historical model.
- Include spoiler warnings when needed.
- Do not depend on a specific release date unless provided.
- End by pointing readers to a broader Sengoku or Tokugawa article.
```

### D. 写真つき解説PDF/記事

```text
Write a photo-supported historical site explainer.

Important: This is not a live tour or guide service. It is an English explanation built from Japanese notes, family photos, and site research.

Structure:
- Why this place matters
- What happened here
- What survives today
- What visitors usually miss
- How this place changes the way we understand the larger story
- Photo captions written as historical explanations, not tourist slogans
```

---

## 6. ページデザインで学ぶ点

### 収益サイトの共通設計

- トップページで「何のサイトか」が1画面でわかる
- ナビは読者の関心軸で分ける: `Sengoku`, `Bakumatsu`, `Modern Japan`, `Shōgun`, `Samurai Myths`
- 記事一覧はカード型。画像、カテゴリ、タイトル、短い要約、著者/日付を出す
- 記事ページ上部に著者・監修・更新日を出す
- 長文記事には目次、関連記事、CTAを入れる
- 信頼性ブロックを置く場合は実名を出さず、`Built from Japanese-language sources and reviewed with Japanese historical judgment` のように役割と制作方針で示す。
- 無料PDF登録CTAは記事中盤と末尾の2箇所
- 有料導線は押し売りではなく、記事の自然な続きとして置く

### Beneath the Rising Sun の推奨デザイン

#### トーン

落ち着いた歴史雑誌。日本風にしすぎない。赤い丸、筆文字、過剰な和柄は避ける。

#### 色

- 背景: `#F7F4EF` または `#FAF8F3`
- 本文: `#1B1A17`
- 補助文字: `#66615A`
- アクセント赤: `#B8402A`
- 深い藍: `#27384A`
- 控えめな金: `#B58B3B`
- 境界線: `#E4DED4`

#### タイポグラフィ

- 英文本文は読みやすいserifまたはsystem serif
- UI、ナビ、ボタンはsystem sans
- 本文幅は680〜760px
- 行間は1.65〜1.75
- H1は大きすぎない。歴史メディアとして落ち着かせる

#### 画像

- 可能なら母の写真、城跡、地形、現地看板を使う
- 足りない場合はpublic domainの浮世絵、古地図、肖像画を使う
- 画像キャプションは必ず情報を持たせる
- OG画像は「写真 + 短い記事タイトル + 小さなブランド名」

---

## 7. サイト構成案

### トップページ

1. Hero
   - H1: `Japanese history, explained from inside Japan.`
   - Subcopy: 父が日本語で調べ、息子が英語で編集する構造を明記
   - CTA: `Start with Samurai Myths` / `Subscribe for the free PDF`

2. Featured article
   - Hachigata記事を大きく表示

3. Topic cards
   - `Sengoku`
   - `Shōgun & Real History`
   - `Samurai Myths`
   - `Castles & Battlefields`
   - `Bakumatsu`
   - `Modern Japan`

4. Trust block
   - `Japanese notes. English editing. Source-aware history.`

5. Newsletter CTA
   - 無料PDF訴求

### 記事ページ

1. Category label
2. H1
3. Dek/summary
4. Author + reviewer line
5. Lead image
6. Key takeaway box
7. Table of contents
8. Article body
9. Mid-article CTA
10. Sources / further reading
11. Related articles
12. Final CTA

---

## 8. WebデザインAIプロンプト

```text
Design an Astro static site for Beneath the Rising Sun, an English-language Japanese history publication.

Positioning:
Japanese history explained from inside Japan. A Japanese father provides notes, historical judgment, and fact-checking in Japanese; his son edits and publishes in English.

Design style:
Quiet historical magazine, not a tourism brochure and not an anime/samurai cliché. Use warm paper background, ink-like text, restrained vermilion, deep indigo, and subtle gold accents. Avoid gradients, decorative blobs, heavy Japanese patterns, and oversized marketing hero sections.

Layout:
- Top navigation by reader intent: Sengoku, Shogun & Real History, Samurai Myths, Castles & Battlefields, Bakumatsu, Modern Japan, Subscribe.
- Home page must immediately explain the project and show featured articles.
- Article cards need category, title, short summary, date, and optional image.
- Article pages need author/reviewer line, key takeaway box, table of contents, source/further reading area, related articles, and newsletter CTA.

Typography:
Readable long-form article design. Body width 680-760px, generous line height, restrained headings, no negative letter spacing.

Conversion:
Add a free PDF newsletter CTA in the middle and at the end of long articles. CTA copy should feel editorial, not aggressive.
```

---

## 9. 記事制作チェックリスト

- [ ] タイトルが検索意図に答えている
- [ ] 冒頭100語で短い答えを出している
- [ ] 英語圏のよくある理解と、日本側の見方の差を入れている
- [ ] 父の日本語メモから来た論点が1つ以上ある
- [ ] 専門用語を説明している
- [ ] H2が質問または読者の疑問になっている
- [ ] 画像または図版に情報量のあるキャプションがある
- [ ] 関連記事3本へリンクしている
- [ ] 無料PDF/メール登録CTAがある
- [ ] 出典または参考文献を末尾に置いている

---

## 10. 参考ソース

- HistoryExtra About: https://www.historyextra.com/aboutus/
- HistoryExtra subscription: https://www.historyextra.com/explore-your-subscription/
- HistoryExtra Shōgun article: https://www.historyextra.com/period/elizabethan/shogun-true-story-real-history/
- TheCollector About: https://www.thecollector.com/about-us/
- TheCollector homepage: https://www.thecollector.com/
- TheCollector write-for-us: https://www.thecollector.com/write-for-us/
- Smithsonian membership: https://www.smithsonianmag.com/member-services/
- Smithsonian subscription: https://subscribe.smithsonianmag.com/
- Unseen Japan Insider: https://unseen-japan.com/subscribe/
- Unseen Japan Patreon: https://www.patreon.com/unseenjapan
- Samurai History & Culture Japan Sidestack: https://sidestack.io/directory/substack/samuraihistoryculture
- Tofugu newsletter: https://www.tofugu.com/newsletter/
- Tofugu homepage: https://www.tofugu.com/
- Following the Shogun: https://followingtheshogun.com/
- Following the Shogun About: https://followingtheshogun.com/about-this-site/
