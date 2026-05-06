export interface TravelDestination {
  name: string;
  description: string;
  stayHref: string;
  placeHref?: string;
  activityHref?: string;
}

export interface BookRecommendation {
  title: string;
  description: string;
  href: string;
  author?: string;
  label?: string;
}

export const AFFILIATE = {
  bookingAid: '',
  amazonTag: '',
  klookPartnerId: '',
  viatorPartnerId: '',
} as const;

export function googleMapsSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function bookingSearch(destination: string) {
  const params = new URLSearchParams({ ss: destination });

  if (AFFILIATE.bookingAid) {
    params.set('aid', AFFILIATE.bookingAid);
  }

  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

export function amazonSearch(query: string) {
  const params = new URLSearchParams({
    k: query,
    i: 'stripbooks-intl-ship',
  });

  if (AFFILIATE.amazonTag) {
    params.set('tag', AFFILIATE.amazonTag);
  }

  return `https://www.amazon.com/s?${params.toString()}`;
}

export function klookSearch(query: string) {
  const params = new URLSearchParams({ query });

  if (AFFILIATE.klookPartnerId) {
    params.set('aid', AFFILIATE.klookPartnerId);
  }

  return `https://www.klook.com/search/result/?${params.toString()}`;
}

export const affiliateDisclosure = {
  en:
    'Some links in this section may be affiliate links. If you book or buy through them, this publication may earn a commission at no extra cost to you.',
  de:
    'Einige Links in diesem Abschnitt koennen Affiliate-Links sein. Wenn Sie darueber buchen oder kaufen, kann diese Publikation eine Provision erhalten, ohne Mehrkosten fuer Sie.',
  ja:
    'このセクションにはアフィリエイトリンクが含まれる場合があります。リンク経由で予約・購入された場合、追加費用なしで当サイトが手数料を受け取ることがあります。',
};

export const sampleSengokuTravel: TravelDestination[] = [
  {
    name: 'Sekigahara Battlefield',
    description:
      'A strong fit for articles on Tokugawa Ieyasu, the end of the Sengoku period, and the political road to the shogunate.',
    placeHref: googleMapsSearch('Sekigahara Battlefield'),
    stayHref: bookingSearch('Sekigahara, Gifu, Japan'),
    activityHref: klookSearch('Sekigahara Japan'),
  },
  {
    name: 'Odawara Castle',
    description:
      'Useful for Hojo, castle warfare, Toyotomi Hideyoshi, and the final stage of Sengoku unification.',
    placeHref: googleMapsSearch('Odawara Castle'),
    stayHref: bookingSearch('Odawara, Kanagawa, Japan'),
  },
  {
    name: 'Azuchi Castle ruins',
    description:
      'A natural destination link for Oda Nobunaga, castle innovation, and the Azuchi-Momoyama transition.',
    placeHref: googleMapsSearch('Azuchi Castle ruins'),
    stayHref: bookingSearch('Omihachiman, Shiga, Japan'),
  },
];

export const sampleBookLinks: BookRecommendation[] = [
  {
    title: 'Japanese history source search',
    author: 'Book recommendations are finalized per article',
    description:
      'Use this placeholder only until article-specific books are selected from the research workspace.',
    href: amazonSearch('Japanese history samurai sengoku'),
    label: 'Book search',
  },
];
