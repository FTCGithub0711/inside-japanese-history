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
  header.nav.hiddenJapan.ja = '歴史旅'
  header.nav.hiddenJapan.en = 'Hidden Japan Travel'
  header.nav.hiddenJapan.de = 'Hidden Japan Travel'
*/

export const siteTemplate = {
  header: {
    nav: {
      sengoku: {
        href: '/sengoku/',
        ja: '戦国',
        en: 'Sengoku',
        de: 'Sengoku',
      },
      bakumatsu: {
        href: '/bakumatsu/',
        ja: '幕末',
        en: 'Bakumatsu',
        de: 'Bakumatsu',
      },
      modern: {
        href: '/modern/',
        ja: '近代・現代',
        en: 'Modern',
        de: 'Modernes Japan',
      },
      hiddenJapan: {
        href: '/hidden-japan/',
        ja: '歴史旅',
        en: 'Hidden Japan Travel',
        de: 'Hidden Japan Travel',
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
        ja: '日本語の資料と現地の視点から、日本史と歴史旅を読み直すページです。',
        en: 'Japanese history and historically grounded travel ideas, built from Japanese sources and clear editorial storytelling.',
        de: 'Japanische Geschichte und geschichtsorientierte Reiseideen: Samurai, Burgen, Shōgun, Bakumatsu, modernes Japan und Orte vor Ort.',
      },
    },
    hero: {
      kicker: {
        ja: '日本語で読み直す日本史',
        en: 'Japanese history from Japanese sources',
        de: 'Japanische Geschichte aus japanischen Quellen',
      },
      title: {
        ja: '知っているようで、まだ読めていない日本史。',
        en: 'Japanese history, read from the inside.',
        de: 'Japanische Geschichte von innen gelesen.',
      },
      description: {
        ja: '城、合戦、人物、町の記憶。日本語の資料と現地に残る手がかりから、日本史をもう一度たどります。',
        en: 'Essays and historically grounded travel ideas built from Japanese-language scholarship, primary sources, places, and memory.',
        de: 'Essays und geschichtsorientierte Reiseideen, aufgebaut aus japanischer Forschung, Quellen, Orten und Erinnerung.',
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
        ja: '戦国、幕末、近代、武士のイメージ、城や古戦場、歴史をたどる旅を扱います。海外の読者が入りやすい問いから始めながら、日本語で読んでも雑に感じない内容を目指します。',
        en: 'The site is organized around high-demand topics: Shōgun, samurai myths, Sengoku warlords, Bakumatsu collapse, modern Japan, and history-led travel. The argument is built from Japanese books, articles, places, and historical materials first.',
        de: 'Die Seite verbindet stark nachgefragte Themen mit japanischer Forschung: Shōgun, Samurai-Mythen, Sengoku-Kriegsherren, Bakumatsu, modernes Japan und geschichtsorientierte Reiseziele.',
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
          ja: '黒船、坂本龍馬、新選組、内戦、そして明治維新への流れを追います。',
          en: 'The final years of the shogunate: black ships, Ryōma, Shinsengumi, civil war, and the Restoration.',
          de: 'Schwarze Schiffe, Ryōma, Shinsengumi, Bürgerkrieg und das Ende des Tokugawa-Shogunats.',
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
      {
        href: '/hidden-japan/',
        title: {
          ja: '歴史旅',
          en: 'Hidden Japan Travel',
          de: 'Hidden Japan Travel',
        },
        text: {
          ja: '城跡、古戦場、城下町、地方資料館を、歴史の文脈から訪ねます。',
          en: 'Lesser-known historic places in Japan for travelers who want to avoid the obvious route and understand a deeper Japan.',
          de: 'Weniger bekannte historische Orte in Japan für Reisende, die die offensichtliche Route vermeiden wollen.',
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
