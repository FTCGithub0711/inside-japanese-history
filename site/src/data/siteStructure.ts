import type { SiteLocale } from '../copy/siteTemplate';

export interface LocalizedText {
  en: string;
  ja: string;
  de: string;
}

export interface CategoryDefinition {
  slug: string;
  number: string;
  title: LocalizedText;
  description: LocalizedText;
  intro: LocalizedText;
}

export interface ArticleReference {
  href: string;
  title: LocalizedText;
  description: LocalizedText;
  category: string;
  date: string;
}

export const categories: CategoryDefinition[] = [
  {
    slug: 'beginner',
    number: '01',
    title: { en: 'Beginner', ja: '入門', de: 'Einstieg' },
    description: {
      en: 'A clear starting point for readers new to Japanese history.',
      ja: '日本史を初めて読む人のための入口。',
      de: 'Ein klarer Einstieg fuer Leser, die neu in japanischer Geschichte sind.',
    },
    intro: {
      en: 'Start here before the names, dates, and dynasties multiply. These articles explain the basic story in plain language.',
      ja: '人名や年号が増える前に、まずここから。日本史の入口をやさしく整理します。',
      de: 'Hier beginnen, bevor Namen, Daten und Dynastien dichter werden. Diese Artikel erklaeren die Grundlagen klar.',
    },
  },
  {
    slug: 'history',
    number: '02',
    title: { en: 'History', ja: '歴史', de: 'Geschichte' },
    description: {
      en: 'Chronology, turning points, wars, capitals, and political change.',
      ja: '年代、転換点、戦乱、都、政治の変化を読む。',
      de: 'Chronologie, Wendepunkte, Kriege, Hauptstaedte und politischer Wandel.',
    },
    intro: {
      en: 'Follow Japanese history by period and event, with enough structure to keep the larger timeline visible.',
      ja: '時代と事件をたどりながら、日本史全体の流れが見えるように読むカテゴリです。',
      de: 'Japanische Geschichte nach Epochen und Ereignissen, mit sichtbarer grosser Zeitleiste.',
    },
  },
  {
    slug: 'people',
    number: '03',
    title: { en: 'People', ja: '人物', de: 'Menschen' },
    description: {
      en: 'Rulers, warriors, monks, reformers, and people who changed the story.',
      ja: '支配者、武将、僧、改革者など、歴史を動かした人物。',
      de: 'Herrscher, Krieger, Moenche, Reformer und Menschen, die die Geschichte veraenderten.',
    },
    intro: {
      en: 'Read Japanese history through decisions made by people rather than through dates alone.',
      ja: '年号だけではなく、人の判断から日本史を読むためのカテゴリです。',
      de: 'Japanische Geschichte ueber Entscheidungen von Menschen lesen, nicht nur ueber Daten.',
    },
  },
  {
    slug: 'perspective',
    number: '04',
    title: { en: 'Perspective', ja: '視点', de: 'Perspektive' },
    description: {
      en: 'Interpretive essays that connect historical choices to larger meaning.',
      ja: '歴史上の判断を、より大きな意味へつなげて読む視点。',
      de: 'Deutende Essays, die historische Entscheidungen mit groesserer Bedeutung verbinden.',
    },
    intro: {
      en: 'For readers who want the argument behind the story: why it matters, what changed, and what remains contested.',
      ja: '物語の奥にある論点を読みたい人へ。なぜ重要なのか、何が変わったのかを考えます。',
      de: 'Fuer Leser, die das Argument hinter der Geschichte suchen: warum es wichtig ist und was umstritten bleibt.',
    },
  },
  {
    slug: 'onsite',
    number: '05',
    title: { en: 'On Site', ja: '現地', de: 'Vor Ort' },
    description: {
      en: 'Historic places, routes, museums, castle ruins, and travel context.',
      ja: '史跡、旅程、資料館、城跡、現地で見るための文脈。',
      de: 'Historische Orte, Routen, Museen, Burgruinen und Reisekontext.',
    },
    intro: {
      en: 'Turn the history into places you can visit, with context before the itinerary.',
      ja: '旅程の前に文脈を置き、歴史を実際に立てる場所へつなげます。',
      de: 'Geschichte in besuchbare Orte uebersetzen, mit Kontext vor der Route.',
    },
  },
  {
    slug: 'events',
    number: '06',
    title: { en: 'Events', ja: 'イベント', de: 'Ereignisse' },
    description: {
      en: 'Battles, reforms, collapses, rituals, and moments that changed Japan.',
      ja: '合戦、改革、崩壊、儀礼など、日本を変えた出来事。',
      de: 'Schlachten, Reformen, Zusammenbrueche, Rituale und Momente, die Japan veraenderten.',
    },
    intro: {
      en: 'Read the events that make the timeline move, from ancient state formation to later political breaks.',
      ja: '古代国家の形成から政治の転換点まで、時代を動かした出来事を読みます。',
      de: 'Ereignisse, die die Zeitleiste bewegen, von frueher Staatsbildung bis zu politischen Bruechen.',
    },
  },
];

export const articleReferences: ArticleReference[] = [
  {
    href: '/articles/japan-creation-dawn/',
    category: 'beginner',
    date: '2026-05-08',
    title: {
      en: 'How Japan Became Japan: Before the Samurai',
      ja: '日本はいかに日本になったのか: 侍以前の物語',
      de: 'Wie Japan zu Japan wurde: Vor den Samurai',
    },
    description: {
      en: 'Rice, Himiko, Yamatai, kofun, Buddhism, Nara, Heian, and the road to samurai power.',
      ja: '稲作、卑弥呼、邪馬台国、古墳、仏教、奈良、平安、そして武士への道。',
      de: 'Reis, Himiko, Yamatai, Kofun, Buddhismus, Nara, Heian und der Weg zur Kriegerherrschaft.',
    },
  },
  {
    href: '/sengoku/',
    category: 'people',
    date: '2026-05-10',
    title: { en: 'Sengoku', ja: '戦国', de: 'Sengoku' },
    description: {
      en: 'Warlords, castles, weapons, battlefield geography, and the myths around unification.',
      ja: '武将、城、鉄砲、合戦の地形、統一をめぐる物語。',
      de: 'Kriegsherren, Burgen, Waffen, Schlachtfeldgeografie und Mythen der Einigung.',
    },
  },
  {
    href: '/bakumatsu/',
    category: 'events',
    date: '2026-05-10',
    title: { en: 'Bakumatsu', ja: '幕末', de: 'Bakumatsu' },
    description: {
      en: 'Black ships, Shinsengumi, civil war, Restoration, and the collapse of the old order.',
      ja: '黒船、新選組、内戦、維新、そして旧秩序の崩壊。',
      de: 'Schwarze Schiffe, Shinsengumi, Buergerkrieg, Restauration und Zusammenbruch der alten Ordnung.',
    },
  },
  {
    href: '/hidden-japan/',
    category: 'onsite',
    date: '2026-05-10',
    title: { en: 'Hidden Historic Places', ja: '知られざる歴史旅', de: 'Verborgene historische Orte' },
    description: {
      en: 'Historic routes beyond the standard first-time Japan itinerary.',
      ja: '定番旅行の外側にある、歴史を歩くための場所。',
      de: 'Historische Routen jenseits der Standardreise nach Japan.',
    },
  },
];

export function text(value: LocalizedText, locale: SiteLocale) {
  return value[locale];
}

export function localizedPath(href: string, locale: SiteLocale) {
  if (locale === 'en') return href;
  return '/' + locale + href;
}

export function categoryPath(slug: string, locale: SiteLocale) {
  return localizedPath('/categories/' + slug + '/', locale);
}

export function articlesForCategory(slug: string) {
  if (slug === 'history') return articleReferences;
  if (slug === 'perspective') return articleReferences.filter((article) => ['beginner', 'people', 'events'].includes(article.category));
  return articleReferences.filter((article) => article.category === slug);
}
