export type SiteLocale = 'en' | 'de' | 'ja';

export function localeFromLang(lang: string): SiteLocale {
  if (lang.startsWith('de')) return 'de';
  if (lang.startsWith('ja')) return 'ja';
  return 'en';
}

/*
  Website copy template

  編集ルール:
  1. まず `ja` を自然な日本語として書く。
  2. 日本語が自然か確認する。
  3. `en` と `de` は、日本語のニュアンスを保った翻訳として更新する。
  4. 公開文には「父チェック」「AI」「同期」など制作側の言葉を出さない。

  現在の公開カテゴリは `Sengoku`, `Bakumatsu`, `Hidden Places` の3つに絞る。
*/

export const siteTemplate = {
  header: {
    nav: {
      beginner: {
        href: '/categories/beginner/',
        ja: '入門',
        en: 'Beginner',
        de: 'Einstieg',
      },
      history: {
        href: '/categories/history/',
        ja: '歴史',
        en: 'History',
        de: 'Geschichte',
      },
      people: {
        href: '/categories/people/',
        ja: '人物',
        en: 'People',
        de: 'Menschen',
      },
      perspective: {
        href: '/categories/perspective/',
        ja: '視点',
        en: 'Perspective',
        de: 'Perspektive',
      },
      onsite: {
        href: '/categories/onsite/',
        ja: '現地',
        en: 'On Site',
        de: 'Vor Ort',
      },
      events: {
        href: '/categories/events/',
        ja: 'イベント',
        en: 'Events',
        de: 'Ereignisse',
      },
    },
    subscribe: {
      ja: '定期購読',
      en: 'Subscribe',
      de: 'Abonnieren',
    },
  },
  footer: {
    text: {
      ja: '通説の奥へ。日本史を旅する。',
      en: 'Go beyond the familiar story. Travel deeper into Japanese history.',
      de: 'Jenseits der vertrauten Erzählung. Tiefer in Japans Geschichte.',
    },
    legal: {
      contact: {
        href: '/contact/',
        ja: 'お問い合わせ',
        en: 'Contact',
        de: 'Kontakt',
      },
      privacy: {
        href: '/privacy/',
        ja: 'プライバシー',
        en: 'Privacy',
        de: 'Datenschutz',
      },
      affiliate: {
        href: '/affiliate-disclosure/',
        ja: 'アフィリエイト開示',
        en: 'Affiliate Disclosure',
        de: 'Affiliate-Hinweis',
      },
    },
  },
  home: {
    meta: {
      title: {
        ja: '日本語',
        en: 'Inside Japanese History',
        de: 'Deutsch',
      },
      description: {
        ja: '戦国、幕末、知られざる歴史旅に絞って、日本史を物語と現地の手がかりから読むページです。',
        en: 'Japanese history focused on Sengoku, Bakumatsu, and hidden historic places, told through story and traces on the ground.',
        de: 'Japanische Geschichte mit Fokus auf Sengoku, Bakumatsu und verborgene historische Orte, erzählt über Geschichten und Spuren vor Ort.',
      },
    },
    hero: {
      kicker: {
        ja: '戦国・幕末・知られざる歴史旅',
        en: 'Sengoku, Bakumatsu, Hidden Places',
        de: 'Sengoku, Bakumatsu, Hidden Places',
      },
      title: {
        ja: '日本史は、\n現地にまだ残っている。',
        en: 'Japanese history\nstill has places to stand.',
        de: 'Japanische Geschichte\nhat noch Orte zum Stehen.',
      },
      description: {
        ja: 'まずは戦国、幕末、そして外国人がまだ見つけきれていない歴史の場所に集中します。人物、事件、城、古戦場、城下町を、物語と旅の両方から読み直します。',
        en: 'The site now focuses on three routes: Sengoku warlords and castles, the Bakumatsu collapse, and historic places foreign travelers often miss.',
        de: 'Die Seite konzentriert sich auf drei Routen: Sengoku-Kriegsherren und Burgen, den Zusammenbruch der Bakumatsu-Zeit und historische Orte, die viele Reisende übersehen.',
      },
      primaryLabel: {
        ja: 'Substackを見る',
        en: 'Subscribe on Substack',
        de: 'Auf Substack abonnieren',
      },
      secondaryLabel: {
        ja: 'テーマを見る',
        en: 'Explore topics',
        de: 'Themen ansehen',
      },
    },
    trustStrip: [
      {
        strong: {
          ja: '戦国',
          en: 'Sengoku',
          de: 'Sengoku',
        },
        text: {
          ja: '武将、城、合戦、地形を読む',
          en: 'Warlords, castles, battles, terrain',
          de: 'Kriegsherren, Burgen, Schlachten, Gelände',
        },
      },
      {
        strong: {
          ja: '幕末',
          en: 'Bakumatsu',
          de: 'Bakumatsu',
        },
        text: {
          ja: '黒船、新選組、内戦、維新を読む',
          en: 'Black ships, Shinsengumi, civil war, Restoration',
          de: 'Schwarze Schiffe, Shinsengumi, Bürgerkrieg, Restauration',
        },
      },
      {
        strong: {
          ja: '歴史旅',
          en: 'Hidden places',
          de: 'Hidden Places',
        },
        text: {
          ja: '定番の外側にある史跡へ行く',
          en: 'Historic routes beyond the usual itinerary',
          de: 'Historische Routen jenseits der Standardreise',
        },
      },
    ],
    authority: {
      kicker: {
        ja: '編集方針',
        en: 'Editorial approach',
        de: 'Redaktioneller Ansatz',
      },
      title: {
        ja: '広く浅くではなく、勝てる三つに絞る。',
        en: 'Narrower focus. Stronger routes.',
        de: 'Engerer Fokus. Stärkere Routen.',
      },
      text: {
        ja: '海外読者が入りやすく、旅行・書籍・有料購読にもつなげやすい領域だけを先に伸ばします。戦国、幕末、歴史旅。この三つを柱にします。',
        en: 'The site prioritizes the areas that readers already search for and that can naturally connect to books, travel, and paid subscriptions: Sengoku, Bakumatsu, and hidden historic places.',
        de: 'Die Seite priorisiert die Bereiche, nach denen Leser bereits suchen und die sich natürlich mit Büchern, Reisen und Abos verbinden lassen: Sengoku, Bakumatsu und verborgene historische Orte.',
      },
    },
    direction: {
      kicker: {
        ja: 'サイトの方向性',
        en: 'Editorial direction',
        de: 'Redaktionelle Richtung',
      },
      title: {
        ja: '面白い筋から入る。史実の足場は崩さない。',
        en: 'Lead with the gripping version. Keep the history grounded.',
        de: 'Mit der fesselnden Version beginnen. Historisch geerdet bleiben.',
      },
      text: {
        ja: '戦国は武将・城・合戦。幕末は黒船・新選組・内戦・維新。歴史旅は、外国人がまだ知らない場所を深く案内する。記事は面白い筋から入り、最後は資料と現地の手がかりで支えます。',
        en: 'Sengoku covers warlords, castles, and battles. Bakumatsu covers black ships, Shinsengumi, civil war, and Restoration. Hidden Places turns lesser-known historic sites into travel routes with real context.',
        de: 'Sengoku behandelt Kriegsherren, Burgen und Schlachten. Bakumatsu behandelt Schwarze Schiffe, Shinsengumi, Bürgerkrieg und Restauration. Hidden Places macht weniger bekannte historische Orte zu Reiserouten mit Kontext.',
      },
    },
    topicIntro: {
      heading: {
        ja: 'テーマから読む',
        en: 'Choose the story',
        de: 'Lesen nach Thema',
      },
      text: {
        ja: 'まずは三つだけ。戦国、幕末、歴史旅。この三本を太くしてから広げます。',
        en: 'Start with three routes only: Sengoku, Bakumatsu, and Hidden Places. Make these strong before expanding.',
        de: 'Zuerst nur drei Routen: Sengoku, Bakumatsu und Hidden Places. Erst diese stark machen, dann erweitern.',
      },
    },
    pillars: [
      {
        href: '/sengoku/',
        title: {
          ja: '戦国',
          en: 'Sengoku',
          de: 'Sengoku',
        },
        text: {
          ja: '信長、秀吉、家康だけでなく、城、鉄砲、忍者、合戦の地形まで見ます。',
          en: 'Warring States Japan: Nobunaga, Hideyoshi, Ieyasu, castles, guns, ninja, and battlefield myths.',
          de: 'Nobunaga, Hideyoshi, Ieyasu, Burgen, Feuerwaffen, Ninja und Mythen über das Schlachtfeld.',
        },
      },
      {
        href: '/bakumatsu/',
        title: {
          ja: '幕末',
          en: 'Bakumatsu',
          de: 'Bakumatsu',
        },
        text: {
          ja: '黒船、開国、新選組、薩長、会津、内戦、明治維新を、勝者の物語だけにしない。',
          en: 'Black ships, opening, Shinsengumi, Satsuma-Chōshū, Aizu, civil war, and Restoration without flattening the losing side.',
          de: 'Schwarze Schiffe, Öffnung, Shinsengumi, Satsuma-Chōshū, Aizu, Bürgerkrieg und Restauration ohne die Verliererseite zu glätten.',
        },
      },
      {
        href: '/hidden-japan/',
        title: {
          ja: '歴史旅',
          en: 'Hidden Places',
          de: 'Hidden Places',
        },
        text: {
          ja: '有名観光地では物足りない人へ。城跡、古戦場、城下町、資料館を物語として歩く。',
          en: 'For travelers who want more than famous sights: castle ruins, battlefields, old towns, museums, and routes with a story.',
          de: 'Für Reisende, denen berühmte Orte nicht reichen: Burgruinen, Schlachtfelder, alte Städte, Museen und Routen mit Geschichte.',
        },
      },
    ],
    jaNote: {
      heading: {
        ja: '日本語版について',
        en: 'About the Japanese edition',
        de: 'Zur japanischen Fassung',
      },
      text: {
        ja: '日本語版は、英語版・ドイツ語版と同じテーマを、日本語でも読めるように整えていきます。史実の確認、写真の選定、現地の見方も、ここに反映していきます。',
        en: 'The Japanese edition keeps the same themes readable in Japanese while preserving historical checks, photo choices, and local perspective.',
        de: 'Die japanische Fassung hält dieselben Themen auf Japanisch lesbar und bewahrt historische Prüfung, Bildauswahl und lokale Perspektive.',
      },
    },
  },
} as const;

export function t<T extends Record<SiteLocale, string>>(value: T, locale: SiteLocale): string {
  return value[locale];
}

export function localizedHref(href: string, locale: SiteLocale): string {
  if (locale === 'en') return href;
  return `/${locale}${href}`;
}
