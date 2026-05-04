# アフィリエイト導入チェックリスト

作成日: 2026-05-04

記事本文は後回しでも、収益化の受け皿は先に整える。リンクは記事の前に置かず、本文で場所・本・体験に触れた後、自然な導線として置く。

## 1. 登録候補

優先順:

1. Booking.com Partner Program  
   宿泊施設リンク用。史跡や城の近くのホテル検索に使う。

2. Amazon Associates  
   書籍リンク用。日本史の英語書籍、日本語書籍、翻訳書の導線に使う。

3. Klook / GetYourGuide / Viator  
   ツアー、体験、博物館、城、地域観光の導線に使う。

4. Google AdSense  
   記事数とアクセスが増えてから検討。初期は優先しない。

## 2. IDを入れる場所

正式なアフィリエイトIDが発行されたら、以下を更新する。

`site/src/data/monetization.ts`

- `bookingAid`
- `amazonTag`
- `klookPartnerId`
- `viatorPartnerId`

IDを入れれば、共通関数で作ったリンクに自動反映される。

## 3. 記事ごとの設置ルール

- 冒頭には置かない。
- 歴史本文で場所に触れた後に、関連史跡・宿泊リンクを置く。
- 書籍リンクは参考文献の直前か、記事末尾に置く。
- 1記事あたり旅行リンクは最大3件程度。
- 書籍リンクは最大3冊程度。
- 関係の薄いアフィリエイトは入れない。

## 4. 実装済みパーツ

- `site/src/data/monetization.ts`  
  Booking、Amazon、Klookの検索リンク生成。

- `site/src/components/TravelAffiliateBox.astro`  
  史跡、宿泊、ツアー導線。

- `site/src/components/BookAffiliateBox.astro`  
  書籍導線。

- `site/src/components/AffiliateDisclosure.astro`  
  アフィリエイト免責表示。

- `site/src/layouts/ArticleLayout.astro`  
  記事ページで旅行リンク・書籍リンクを自動表示。

## 5. 次にやること

1. Booking.com Partner Programに登録する。
2. Amazon Associatesに登録する。
3. IDを `monetization.ts` に入れる。
4. 最初の記事で、関連史跡2件、書籍2冊だけ入れてテストする。
5. クリック率を見て、記事前半ではなく本文後半の自然導線を改善する。
