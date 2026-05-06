# Website Copy Template

サイト全体の短い文章は `siteTemplate.ts` で管理します。

## 基本ルール

1. まず `ja` を自然な日本語として書く。
2. 日本語が硬くないか、AIっぽくないか確認する。
3. `en` と `de` は、日本語のニュアンスを保って翻訳する。
4. 公開ページには、制作側の事情を書かない。

## 編集例

ヘッダーの「歴史旅」を変えたい場合:

```ts
hiddenJapan: {
  href: '/hidden-japan/',
  ja: '歴史旅',
  en: 'Hidden Japan Travel',
  de: 'Hidden Japan Travel',
},
```

トップページの見出しを変えたい場合:

```ts
title: {
  ja: '知っているようで、まだ読めていない日本史。',
  en: 'Japanese history, read from the inside.',
  de: 'Japanische Geschichte von innen gelesen.',
},
```

## 注意

- `ja` を変えたら、必ず `en` と `de` も同じ意味に更新する。
- 英語・ドイツ語は直訳ではなく、自然な文章にする。
- `href` はURLなので、文章として編集しない。
- 長い記事本文はここではなく、各記事フォルダで管理する。

