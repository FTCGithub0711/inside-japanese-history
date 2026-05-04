# 90日実行マスタープラン

作成日: 2026-05-04

---

## 0. この計画の目的

この計画は、Beneath the Rising Sun を「いつかやる企画」ではなく、90日で検証可能な小さな事業として動かすための手順書である。

90日で確認することは3つだけ。

1. 英語圏読者が記事を読み、無料登録するか
2. 有料PDFに興味を示すか
3. 史跡・宿泊予約への旅行導線がクリックされるか
4. 家族が無理なく続けられるか

父は英語対応をしない。父の役割は、日本語メモ、論点、史実確認、監修に限定する。英語化、編集、サイト運営、販売導線は息子が担当する。

---

## 1. フォルダ整理

### 採用する構成

```text
beneath_the_rising_sun/
├── AGENTS.md
├── seo-research/
│   ├── README.md
│   ├── 01_hachigata_serp_analysis.md
│   ├── 02_keyword_research.md
│   ├── 03_content_calendar.md
│   ├── 04_business_model_and_launch_plan.md
│   ├── 05_project_proposal_and_growth_plan_ja.md
│   ├── 06_english_style_and_design_reference.md
│   └── 07_90_day_operational_master_plan_ja.md
└── site/
    ├── src/
    ├── public/
    ├── package.json
    └── README.md
```

### ルール

- 計画資料は `seo-research/` に集約する。
- サイト実装は `site/` に集約する。
- 公開記事の元原稿は、当面は `site/src/pages/` に直接置く。
- 将来記事数が増えたら、Astro content collectionsへ移行する。
- `.docx` は過去資料として残すが、運用の正本はMarkdownにする。

---

## 2. 毎週の固定リズム

### 月曜: 計画

1. Google Search Console、Substack、Analyticsを見る。
2. 先週の数字を記録する。
3. 今週やる記事または販売導線を1つだけ決める。
4. 父に聞く質問を4つ以内に絞る。

### 火曜: 父への確認

父に完成原稿を頼まない。以下のテンプレートで聞く。

```text
今回のテーマ: [記事テーマ]

1. 英語圏の記事で一番誤解されそうな点は？
2. 史実として絶対に外せない点は？
3. 日本人として違和感のある説明は？
4. 面白い逸話、現地で見るべき点は？

箇条書きで十分です。
```

### 水曜: 英語記事化

1. 父の日本語メモを英語に要約する。
2. `06_english_style_and_design_reference.md` のプロンプトを使う。
3. H1、meta description、H2構成を先に作る。
4. 本文を2,000〜3,000語目安で作る。
5. 冒頭100語以内に短い答えを入れる。

### 木曜: 編集

1. 語り口が直訳調になっていないか確認する。
2. 「英語圏の見方」と「日本側の見方」の差を入れる。
3. 内部リンクを3本入れる。
4. CTAを中盤と末尾に入れる。
5. 出典、参考文献、画像キャプションを整える。

### 金曜: 公開

1. `npm run build` でビルド確認する。
2. 目視でトップ、記事、スマホ表示を確認する。
3. Astro側を正本として公開する。
4. Substackには抜粋、要点、記事リンクを投稿する。
5. Google Search ConsoleでURL検査を行う。

### 土曜: 初期拡散

1. Xに1スレッド投稿する。
2. Redditでは記事リンクより先に問いを投稿する。
3. 関連する過去記事があれば内部リンクを追加する。
4. Substack返信があれば保存する。

### 日曜: 休む/家族レビュー

1. 数字を追いすぎない。
2. 家族で負担感を確認する。
3. 父に追加作業を頼まない。

---

## 3. 直近30日タスク

### Day 1: 基盤確認

- `seo-research/README.md` を読む。
- `05_project_proposal_and_growth_plan_ja.md` を読む。
- `06_english_style_and_design_reference.md` を読む。
- `site/README.md` のTODOを確認する。

完了条件:

- 家族の役割と90日の目的を説明できる。

### Day 2: Aboutページ設計

- 父が英語を担当しない前提を明記する。
- 「Japanese notes, English editing」という構造を入れる。
- 父の表示名を本名にするかペンネームにするか決める。

完了条件:

- Aboutページに信頼性ブロックを追加する準備ができている。

### Day 3: 無料登録CTA文言作成

CTA案:

```text
Get the free guide: 5 Samurai Myths Western Media Gets Wrong

Japanese history is often simplified in English. Join the newsletter and get a short guide to five common samurai myths, explained from inside Japan.
```

完了条件:

- 記事中盤用と記事末尾用のCTA文言がある。

### Day 4: Substack初期設定

- Publication名を確認する。
- About文を書く。
- Welcome emailを3通設定する。
- 無料PDFが未完成なら「coming soon」として登録導線だけ先に作る。

完了条件:

- 登録後に読者が何を受け取るか説明できる。

### Day 5: 計測設定

- Google Search Consoleを設定する。
- AnalyticsまたはPlausibleを設定する。
- Substack登録者数、記事別登録率を記録するスプレッドシートを作る。
- 旅行導線のクリック数を記録する列を作る。

完了条件:

- 週次で数字を記録できる。

### Day 5.5: アフィリエイト申請準備

- `13_travel_affiliate_monetization_plan.md` を読む。
- Booking.com / Agoda / Klook / GetYourGuide の申請条件を確認する。
- Aboutページ、アフィリエイト開示文、プライバシーポリシー、免責事項の不足を洗い出す。
- 申請用にサイト説明文を1つ作る。

申請用説明文のたたき台:

```text
Beneath the Rising Sun is an English-language publication on Japanese history.
It connects readable essays on samurai, castles, Bakumatsu, and modern Japan
with historically relevant places to visit in Japan.
```

完了条件:

- 提携申請前に足りないページ・文言が一覧化されている。

### Day 6-7: Hachigata記事の素材集め

- `01_hachigata_serp_analysis.md` を読む。
- 父に4質問テンプレートを送る。
- 母の写真があるか確認する。
- 地形、兵力、降伏条件、1568年比較の素材を集める。

完了条件:

- H2構成と父のメモが揃っている。

### Day 8-10: Hachigata記事初稿

H1:

```text
Why Hachigata Castle Held Off 30,000 Samurai for a Month
```

必須H2:

- What happened at Hachigata Castle in 1590?
- Why the geography mattered
- Hōjō Ujikuni and the decision to hold out
- Why 3,000 defenders could resist 30,000 attackers
- Why the castle surrendered
- What English accounts often miss
- What Hachigata tells us about Sengoku warfare

完了条件:

- 2,500語前後の英語初稿がある。

### Day 11: 編集

- 冒頭100語で答えが出ているか確認する。
- 直訳調を削る。
- 父の視点を1セクション入れる。
- CTAを2箇所に入れる。

完了条件:

- 公開可能な本文になっている。

### Day 12: 実装

- Astroページを作る。
- `ArticleSchema` を設定する。
- meta descriptionを入れる。
- 関連リンクを入れる。
- 関連史跡と周辺宿泊への `TravelAffiliateBox` を本文中盤以降に1枠入れる。
- 記事冒頭には置かない。史跡・地域の説明を読んだ後に自然に出す。
- 正式な affiliate ID がない間は通常リンクにし、開示文だけ先に入れる。

完了条件:

- ローカルで表示できる。

### Day 13: 公開前確認

コマンド:

```bash
cd site
npm run build
npm run preview
```

確認項目:

- H1が1つだけ
- titleとdescriptionが適切
- スマホで読める
- CTAが見える
- 旅行導線が記事内容と一致している
- アフィリエイト開示文が見える
- 外部リンクが動く
- 画像altがある

完了条件:

- 公開してよい状態。

### Day 14: 公開

- Astro側に公開する。
- Substackに抜粋を投稿する。
- GSCでURL検査する。
- Xに1スレッド投稿する。

完了条件:

- 最初の記事が公開され、検索インデックス申請済み。

### Day 15-17: 無料PDF目次作成

タイトル:

```text
5 Samurai Myths Western Media Gets Wrong
```

構成:

1. Samurai did not only fight with katana
2. Bushido was not a fixed ancient code
3. Ninja were not magical assassins
4. Seppuku was not everyday behavior
5. Japan was not completely isolated during sakoku

完了条件:

- PDFの表紙案、目次、各章の短い要約がある。

### Day 18-21: Samurai guns記事

H1:

```text
Did Samurai Really Use Guns?
```

必須論点:

- Yes, especially during the Sengoku period
- Matchlock guns changed battlefield tactics
- The katana-only image is a later romantic simplification
- What English pop culture often gets wrong

完了条件:

- 神話破壊記事1本が公開可能。

### Day 22: 登録導線レビュー

- Hachigata記事のCTAクリックを確認する。
- Substack登録者数を見る。
- CTA文言を必要なら修正する。

完了条件:

- 記事から登録までの流れが途切れていない。

### Day 23-26: Sengokuピラー構成

H1:

```text
The Sengoku Period Explained
```

役割:

- 以後の記事の内部リンク先
- Shōgun読者の受け皿
- Hachigata、guns、Sekigaharaへの導線

完了条件:

- H2構成と導入文ができている。

### Day 27: 家族レビュー

確認する質問:

- 父の負担は重すぎないか
- 息子の翻訳・編集負荷は現実的か
- 母の写真協力は義務化していないか
- 90日続けられそうか

完了条件:

- ペースを月2本で続けるか、月1本へ落とすか判断する。

### Day 28-30: 月次レビュー

記録する数字:

- 公開記事数
- Substack登録者数
- GSC表示回数
- GSCクリック数
- 登録率
- Reddit/Xの反応
- 家族の負担感

完了条件:

- 2ヶ月目に注力する記事テーマが決まっている。

---

## 4. 31〜60日計画

### 目的

登録導線を強くし、無料PDFを完成させる。

### やること

1. `The Sengoku Period Explained` を公開する。
2. 無料PDFを完成させる。
3. Substack welcome emailにPDF配布リンクを入れる。
4. `Is Shōgun Historically Accurate?` の構成を作る。
5. 読者アンケートを配信する。

### 読者アンケート5問

1. What brought you here?
2. Which topic do you want more of?
3. Are you more interested in Shōgun, samurai myths, castles, or modern Japan?
4. Would you pay for a short PDF guide if it saved you research time?
5. What is one thing about Japanese history that confuses you?

### 60日目の判断

- 登録率2%以上: CTAと無料PDFを継続
- 登録率0.5%未満: CTA文言と無料PDFテーマを変更
- Shōgun記事の反応が高い: Shōgun連動を優先
- Hachigata記事の検索表示が伸びる: 城/戦国SEOを優先

---

## 5. 61〜90日計画

### 目的

初回有料PDFの販売可否を判断する。

### やること

1. `Is Shōgun Historically Accurate?` を公開する。
2. `Hōjō Ujikuni: The Defender of Hachigata` を公開する。
3. 有料PDF第1弾の販売ページを下書きする。
4. Substackで購入意向アンケートを取る。
5. 90日レビューを行う。

### 有料PDF第1弾の候補

優先候補:

```text
The Real History Behind Shōgun
```

代替候補:

```text
Samurai Myths Explained from Japan
Hachigata and the Last Hojo
```

### 販売ページに必要な要素

- 誰向けの商品か
- 何がわかるか
- 何ページ程度か
- 父の日本語メモと息子の英語編集で作ること
- 価格
- 目次
- 返金方針
- 購入ボタン

---

## 6. 90日レビューシート

| 項目 | 数字/判断 | 次の行動 |
|---|---|---|
| 公開記事数 |  |  |
| 無料登録者数 |  |  |
| 記事から登録への転換率 |  |  |
| GSC表示回数 |  |  |
| GSCクリック数 |  |  |
| 反応が良かった記事 |  |  |
| 反応が弱かった記事 |  |  |
| 有料PDFへの興味表明 |  |  |
| 父の負担 | 軽い/普通/重い |  |
| 息子の負担 | 軽い/普通/重い |  |
| 継続ペース | 月1本/月2本/月3本 |  |

---

## 7. 判断ルール

### 継続強化

条件:

- 登録者75人以上
- 登録率2%以上
- 父の負担が普通以下

行動:

- 月2本を継続
- 有料PDF第1弾を販売
- PDFバンドル候補を作る

### 方向修正

条件:

- 登録者25〜75人
- 登録率0.5〜2%
- 特定テーマだけ反応がある

行動:

- 反応が高いテーマへ寄せる
- CTA文言を変更
- 無料PDFテーマを変更

### ペース縮小

条件:

- 父または息子の負担が重い
- 記事制作が家族関係の負担になる

行動:

- 月1本にする
- 父は監修のみ
- 息子主導の記事を増やす

### 一時停止

条件:

- 90日続けても登録者25人未満
- 家族の負担が強い
- 継続の楽しさがなくなる

行動:

- 新規記事を止める
- 既存記事だけ保守する
- 3ヶ月後に再判断する

---

## 8. 毎回の記事公開チェックリスト

- [ ] H1は検索意図に答えている
- [ ] 冒頭100語以内に短い答えがある
- [ ] 英語圏の誤解を1つ以上扱っている
- [ ] 日本側の見方、父の論点、現地性のいずれかが入っている
- [ ] 専門用語を説明している
- [ ] 内部リンクが3本以上ある
- [ ] CTAが中盤と末尾にある
- [ ] 画像altとキャプションがある
- [ ] 出典または参考文献がある
- [ ] `npm run build` が通る
- [ ] Substack抜粋を投稿した
- [ ] GSCでURL検査した

---

## 9. 結論

最初の90日は、完璧なメディアを作る期間ではない。家族で続けられる最小の制作体制を作り、英語圏読者が登録し、有料PDFに反応するかを見る期間である。

父が英語をできないことは弱点ではなく、設計条件である。父は日本語で知識を出し、息子が英語圏向けに編集・商品化する。この分担を守れば、無理に講座やガイドへ広げず、記事、PDF、ニュースレター、電子書籍だけで検証できる。
