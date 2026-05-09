# アフィリエイト登録 実行手順

作成日: 2026-05-08

目的は、記事本文で紹介した史跡・宿泊・現地体験・書籍を自然に予約や購入へつなげること。広告を先に見せるのではなく、読者が「ここに行ってみたい」「この本を読みたい」と思った直後に置く。

## 1. 最初に登録する順番

1. Booking.com Affiliate Partner Program  
   宿泊リンク用。城、古墳、寺社、旧街道、史跡の近くの宿泊検索に使う。

2. GetYourGuide  
   英語圏・欧州圏の読者向けに、現地ツアー、博物館、日帰り体験を紹介する。

3. Klook  
   日本旅行のチケット、交通、体験予約に使う。アジア圏読者にも強い。

4. Amazon Associates  
   記事末尾の書籍紹介に使う。日本史の英語書籍、日本語原典、翻訳書を扱う。

5. Viator / Travelpayouts / 楽天トラベル  
   第2段階。記事数とアクセスが増えた後に追加する。

## 2. 申請時に使うサイト説明文

英語:

> Inside Japanese History is an independent history and travel publication for international readers. The site explains Japanese history through Japanese-language sources and connects major historical stories with real places, books, museums, and travel routes in Japan.

日本語:

> Inside Japanese History は、海外読者向けに日本史をわかりやすく紹介する独立系メディアです。日本語の資料や現地の文脈をもとに、歴史記事、関連史跡、書籍、旅行導線を組み合わせて発信します。

## 3. 申請前に確認するページ

- `https://insidejapanesehistory.com/`
- `https://insidejapanesehistory.com/articles/japan-creation-dawn/`
- `https://insidejapanesehistory.com/about/`
- `https://insidejapanesehistory.com/privacy/`
- `https://insidejapanesehistory.com/affiliate-disclosure/`

審査では、サイトが未完成に見えると落ちやすい。トップページ、記事、About、Privacy、Affiliate Disclosure が開ける状態にしてから申請する。

## 4. 発行されたIDを入れる場所

サイト側の管理ファイル:

`site/src/data/monetization.ts`

Cloudflareで環境変数を使える場合:

- `PUBLIC_BOOKING_AID`
- `PUBLIC_BOOKING_LABEL`
- `PUBLIC_AMAZON_TAG`
- `PUBLIC_KLOOK_PARTNER_ID`
- `PUBLIC_GETYOURGUIDE_PARTNER_ID`
- `PUBLIC_VIATOR_PARTNER_ID`

Cloudflareで環境変数が使えない場合は、アフィリエイトIDだけを `monetization.ts` に直接入れてよい。アフィリエイトIDはパスワードではないが、管理画面のログイン情報は絶対に入れない。

## 5. リンク設置ルール

- 冒頭直後に置かない。
- 歴史本文で場所や本に触れた直後に置く。
- 1記事あたり旅行リンクは2〜4枠まで。
- 書籍リンクは2〜3冊まで。
- 関係の薄いリンクは入れない。
- すべての提携リンクに `rel="sponsored noopener noreferrer"` を付ける。

## 6. 最初の記事で使う候補

`/articles/japan-creation-dawn/`

- 三内丸山遺跡: 青森の宿泊検索、縄文関連施設
- 吉野ヶ里遺跡: 佐賀の宿泊検索、弥生関連施設
- 纒向・桜井: 奈良の宿泊検索、古代史ルート
- 百舌鳥・古市古墳群: 堺・大阪の宿泊検索
- 飛鳥・法隆寺: 奈良南部の宿泊検索、寺院・古代史ルート

## 7. 登録後の確認

1. 発行されたIDを `task/affiliate_link_inventory_ja.md` に記録する。
2. `site/src/data/monetization.ts` にIDを反映する。
3. `cd site && npm run build` を実行する。
4. 対象ページを開き、リンクURLにIDが付いているか確認する。
5. 各ASPの管理画面でクリックが記録されるか確認する。

