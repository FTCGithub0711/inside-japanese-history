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

  例:
  header.nav.ancientHeian.ja = '原始〜平安'
  header.nav.ancientHeian.en = 'Origins to Heian'
  header.nav.ancientHeian.de = 'Ursprünge bis Heian'
*/

export const siteTemplate = {
  header: {
    nav: {
      ancientHeian: {
        href: '/ancient-heian/',
        ja: '原始〜平安',
        en: 'Origins to Heian',
        de: 'Ursprünge bis Heian',
      },
      sengoku: {
        href: '/sengoku/',
        ja: '戦国',
        en: 'Sengoku',
        de: 'Sengoku',
      },
      bakumatsu: {
        href: '/bakumatsu/',
        ja: '江戸〜幕末',
        en: 'Edo to Bakumatsu',
        de: 'Edo bis Bakumatsu',
      },
      modern: {
        href: '/modern/',
        ja: '近現代',
        en: 'Modern Japan',
        de: 'Modernes Japan',
      },
      hiddenJapan: {
        href: '/hidden-japan/',
        ja: '歴史旅',
        en: 'Hidden Spots',
        de: 'Hidden Spots',
      },
      about: {
        href: '/about/',
        ja: 'About',
        en: 'About',
        de: 'About',
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
        ja: '日本語の資料と現地に残る手がかりから、日本史と歴史旅を読み直すページです。',
        en: 'Japanese history and history-led travel, built from Japanese sources, places, and clear editorial storytelling.',
        de: 'Japanische Geschichte und geschichtsorientierte Reisen, aufgebaut aus japanischen Quellen, Orten und klarer Erzählung.',
      },
    },
    hero: {
      kicker: {
        ja: '資料と現地から読む日本史',
        en: 'Japanese history, read on the ground',
        de: 'Japanische Geschichte vor Ort gelesen',
      },
      title: {
        ja: '写真の奥にある\n日本史を歩く。',
        en: 'Walk into the history\nbehind the photograph.',
        de: 'Die Geschichte hinter dem Bild\nvor Ort lesen.',
      },
      description: {
        ja: '城、古戦場、城下町、信仰の集落。日本語の資料と現地に残る手がかりから、通り過ぎてしまう日本史を読み直します。',
        en: 'Castles, battlefields, castle towns, and communities of faith, explained through Japanese sources and the traces still visible on the ground.',
        de: 'Burgen, Schlachtfelder, Burgstädte und Glaubensgemeinschaften, erklärt aus japanischen Quellen und den Spuren vor Ort.',
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
          ja: '資料を読む',
          en: 'Japanese sources',
          de: 'Japanische Quellen',
        },
        text: {
          ja: '日本語の本、史料、現地情報を確認',
          en: 'Research starts from Japanese scholarship',
          de: 'Forschung beginnt bei japanischen Arbeiten',
        },
      },
      {
        strong: {
          ja: '現地を見る',
          en: 'Popular questions',
          de: 'Gefragte Fragen',
        },
        text: {
          ja: '城跡、古戦場、城下町、資料館を歩く',
          en: 'Shōgun, samurai, castles, Bakumatsu, travel',
          de: 'Shōgun, Samurai, Burgen, Bakumatsu, Reisen',
        },
      },
      {
        strong: {
          ja: '話をほどく',
          en: 'Clear judgment',
          de: 'Klare Einordnung',
        },
        text: {
          ja: '伝説、ドラマ、史実を分けて考える',
          en: 'Myths, drama, and history kept separate',
          de: 'Mythos, Drama und Geschichte getrennt',
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
        ja: '派手な物語にする前に、資料と場所に戻る。',
        en: 'Japanese-led history, shaped for international readers.',
        de: 'Japanisch geführte Geschichte, für internationale Leser aufbereitet.',
      },
      text: {
        ja: '海外でよく読まれている日本史は、わかりやすい一方で、細かな文脈が落ちてしまうことがあります。このサイトでは、まず日本語の資料と現地の見え方を確認し、そこから読者に届く形へ整えます。',
        en: 'This project begins with Japanese books, source materials, historical debates, and places on the ground, then turns that work into clear prose for readers abroad.',
        de: 'Dieses Projekt beginnt mit japanischen Büchern, Quellen, Fachdiskussionen und Orten vor Ort und bereitet diese Arbeit klar für Leser außerhalb Japans auf.',
      },
    },
    direction: {
      kicker: {
        ja: 'サイトの方向性',
        en: 'Editorial direction',
        de: 'Redaktionelle Richtung',
      },
      title: {
        ja: '入口はわかりやすく。中身は薄めない。',
        en: 'Start with the question readers already have. Answer it from the Japanese record.',
        de: 'Wir beginnen mit Fragen, die Leser bereits haben, und antworten aus japanischen Quellen.',
      },
      text: {
        ja: '原始から平安、戦国、江戸から幕末、近現代、そして歴史旅を扱います。海外の読者が入りやすい問いから始めながら、日本語で読んでも雑に感じない内容を目指します。',
        en: 'The site is organized around historical routes: origins to Heian, Sengoku warlords, Edo to Bakumatsu collapse, and modern Japan. The argument is built from Japanese books, articles, places, and historical materials first.',
        de: 'Die Seite folgt historischen Routen: Ursprünge bis Heian, Sengoku, Edo bis Bakumatsu und modernes Japan.',
      },
    },
    topicIntro: {
      heading: {
        ja: 'テーマから読む',
        en: 'Start anywhere',
        de: 'Lesen nach Thema',
      },
      text: {
        ja: '気になる時代や場所から読めるように、入口をいくつかに分けています。',
        en: 'You do not need to read Japanese history in strict order. Each section is an entry point.',
        de: 'Man muss japanische Geschichte nicht streng chronologisch lesen. Jede Rubrik ist ein Einstieg.',
      },
    },
    pillars: [
      {
        href: '/ancient-heian/',
        title: {
          ja: '原始〜平安',
          en: 'Origins to Heian',
          de: 'Ursprünge bis Heian',
        },
        text: {
          ja: '縄文、弥生、古墳、奈良、平安。国家、信仰、都、貴族文化の入口を作ります。',
          en: 'Jōmon, Yayoi, Kofun, Nara, and Heian: early communities, state formation, belief, capitals, and court culture.',
          de: 'Jōmon, Yayoi, Kofun, Nara und Heian: frühe Gesellschaften, Staatsbildung, Religion, Hauptstädte und Hofkultur.',
        },
      },
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
          ja: '江戸〜幕末',
          en: 'Edo to Bakumatsu',
          de: 'Edo bis Bakumatsu',
        },
        text: {
          ja: '江戸の秩序、町人文化、開国、新選組、内戦、明治維新への流れを追います。',
          en: 'Tokugawa order, Edo urban culture, foreign pressure, Shinsengumi, civil war, and the Restoration.',
          de: 'Tokugawa-Ordnung, Edo-Stadtkultur, Außenpolitik, Shinsengumi, Bürgerkrieg und Restauration.',
        },
      },
      {
        href: '/modern/',
        title: {
          ja: '近代・現代',
          en: 'Modern Japan',
          de: 'Modernes Japan',
        },
        text: {
          ja: '明治以降の国家づくり、戦争、占領、経済成長、暮らしの変化を扱います。',
          en: 'Meiji to today: modernization, empire, defeat, occupation, economic growth, and social habits.',
          de: 'Meiji, Kaiserreich, Krieg, Besatzung, Wirtschaftswachstum und gesellschaftliche Gewohnheiten.',
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
