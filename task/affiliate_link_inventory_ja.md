# アフィリエイトID・リンク台帳

作成日: 2026-05-08

ログインパスワード、銀行情報、本人確認情報はここに書かない。ここには、サイトに反映する公開用ID、リンク形式、設置状況だけを記録する。

## 提携先一覧

| サービス | 用途 | 申請状況 | サイトに入れるID | 管理ファイル | 備考 |
| --- | --- | --- | --- | --- | --- |
| Booking.com | 宿泊 | 未申請 | `PUBLIC_BOOKING_AID` | `site/src/data/monetization.ts` | 史跡周辺の宿泊検索に使う |
| Booking.com | 計測ラベル | 未設定 | `PUBLIC_BOOKING_LABEL` | `site/src/data/monetization.ts` | 初期値は `inside-japanese-history` |
| GetYourGuide | 現地体験 | 未申請 | `PUBLIC_GETYOURGUIDE_PARTNER_ID` | `site/src/data/monetization.ts` | 英語・ドイツ語読者向け |
| Klook | 体験・交通 | 未申請 | `PUBLIC_KLOOK_PARTNER_ID` | `site/src/data/monetization.ts` | 日本旅行系の導線に使う |
| Amazon Associates | 書籍 | 未申請 | `PUBLIC_AMAZON_TAG` | `site/src/data/monetization.ts` | 記事末尾の本紹介 |
| Viator | 現地体験 | 後回し | `PUBLIC_VIATOR_PARTNER_ID` | `site/src/data/monetization.ts` | GetYourGuide/Klook後に判断 |

## 記事別リンク確認

| 記事 | 宿泊リンク | 体験リンク | 書籍リンク | 確認日 | メモ |
| --- | --- | --- | --- | --- | --- |
| `/articles/japan-creation-dawn/` | 仮リンクあり | 仮リンクあり | 未設定 | 2026-05-08 | ID発行後に差し替え確認 |
| `/ja/articles/japan-creation-dawn/` | 仮リンクあり | 仮リンクあり | 未設定 | 2026-05-08 | 日本語導線は楽天も後で検討 |
| `/de/articles/japan-creation-dawn/` | 仮リンクあり | 仮リンクあり | 未設定 | 2026-05-08 | GetYourGuideとの相性がよい |

## URL確認メモ

ID反映後、ブラウザでリンクを開く前に、ページ上のリンクURLに以下が入っているか確認する。

- Booking.com: `aid=...`
- Booking.com: `label=inside-japanese-history...`
- Amazon: `tag=...`
- Klook: `aid=...`
- GetYourGuide: `partner_id=...`

