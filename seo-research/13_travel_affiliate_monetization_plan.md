# 旅行アフィリエイト収益化メモ

作成日: 2026-05-04

---

## 0. 目的

歴史記事を読んだ人が、関連する史跡・博物館・城・周辺宿泊へ自然に進める導線を作る。広告感を強く出さず、「この記事を読んだなら、実際に行くならここ」という形で収益化する。

---

## 1. 使う導線

優先順:

1. 宿泊予約: Booking.com / Agoda など
2. 現地体験: Klook / GetYourGuide / Viator など
3. 交通・周遊: JR Pass、空港送迎、地域ツアー
4. 書籍: Amazon / 楽天ブックス / Bookshop.org など

現時点では正式な affiliate ID がないため、サイトには通常リンクを入れている。提携後に `TravelAffiliateBox.astro` の各URLを正式な提携URLへ差し替える。

---

## 2. 記事内の置き場所

基本は本文の中盤から後半に1回だけ入れる。記事を読む前に出すと文脈がなく広告に見えるため、冒頭直後には置かない。

- ピラー記事: 記事リストや主要説明の後
- 個別記事: 関連する城・史跡・地域を説明した直後
- 旅行色が強い記事: 末尾に追加で「Plan the visit」を入れてもよい

過剰に入れると信頼を落とすため、1記事1枠を基本にする。

---

## 3. 記事タイプ別の例

### 戦国

- Hachigata Castle -> Yorii / Saitama
- Odawara Castle -> Odawara
- Sekigahara Battlefield -> Sekigahara / Gifu
- Himeji Castle -> Himeji
- Azuchi Castle ruins -> Omihachiman / Shiga

### 幕末

- Shimoda -> Perry Road / treaty-port history
- Kyoto -> Mibu-dera / Nijo Castle / Imperial Palace
- Kagoshima -> Saigō Takamori / Satsuma
- Hakodate -> Goryōkaku / Boshin War
- Kochi -> Sakamoto Ryōma

### 近代・現代

- Tokyo -> Imperial Palace / Tokyo Station / Meiji sites
- Yokohama -> treaty port / modern city history
- Hiroshima -> Peace Memorial Museum
- Nagasaki -> Dejima / Peace Park / Christian history
- Osaka / Kobe -> industrialization and urban modernity

---

## 4. 開示文

英語:

> Disclosure: Some travel links may be affiliate links. If you book through them, this publication may earn a commission at no extra cost to you.

ドイツ語:

> Hinweis: Einige Reiselinks können Affiliate-Links sein. Wenn Sie darüber buchen, kann diese Publikation eine Provision erhalten, ohne zusätzliche Kosten für Sie.

---

## 5. 実装済み

コンポーネント:

- `site/src/components/TravelAffiliateBox.astro`

導入済みページ:

- `site/src/pages/sengoku.astro`
- `site/src/pages/bakumatsu.astro`
- `site/src/pages/modern.astro`
- `site/src/pages/de/sengoku.astro`
- `site/src/pages/de/bakumatsu.astro`
- `site/src/pages/de/modern.astro`

---

## 6. 次にやること

1. Booking.com Affiliate Partner Program に登録する。
2. Agoda / Klook / GetYourGuide のうち、審査が通りやすいものを追加する。
3. 各記事の宿泊検索URLを正式な affiliate deeplink に差し替える。
4. クリック数を見るため、リンクに `utm_source=insidejapanesehistory` などを付ける。
5. 予約が発生するテーマを優先して記事化する。

---

## 7. アフィリエイト準備チェックリスト

### 申請前

- サイトの About ページに運営者情報と編集方針を明記する。
- トップページに「日本人の歴史専門家が日本語文献を読む」制作体制を入れる。
- 記事ページにアフィリエイト開示文を入れる。
- 最低3ページ以上、旅行導線のある記事またはピラーページを用意する。
- プライバシーポリシー / 免責事項ページを作る。

### 申請する順番

1. Booking.com Affiliate Partner Program
2. Agoda PartnerHub
3. Klook affiliate program
4. GetYourGuide / Viator
5. Amazon / 楽天ブックスなど書籍系

### 審査通過後

- `TravelAffiliateBox.astro` に入れている通常リンクを正式な提携URLへ差し替える。
- すべての提携リンクに `rel="sponsored noopener noreferrer"` が入っているか確認する。
- 記事ごとにクリック数を記録する。
- 予約が出た地域を優先して追加記事を書く。
