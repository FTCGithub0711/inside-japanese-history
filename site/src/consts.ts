export const SITE = {
  name: 'Inside Japanese History',
  tagline: 'Beneath the Rising Sun',
  description:
    'Japanese history and historically grounded travel ideas, built from Japanese sources and clear editorial storytelling.',
  url: 'https://insidejapanesehistory.com',
  substackUrl: 'https://insidejapanesehistory.substack.com',
  podcastFeedUrl: 'https://insidejapanesehistory.substack.com/feed/podcast',
  googleAnalyticsId: 'G-2YRN7CF6WY',
  language: 'en-US',
  heroImages: [
    {
      src: '/images/hero/ujikuni_sakura_day.jpg',
      credit: 'Image: Hōjō Ujikuni statue, sakura, daytime',
    },
    {
      src: '/images/hero/ujikuni_sakura_night.jpg',
      credit: 'Image: Hōjō Ujikuni statue, sakura, night',
    },
    {
      src: '/images/hero/Tokugawa_Ieyasu.jpg',
      credit: 'Image: Tokugawa Ieyasu',
    },
    {
      src: '/images/hero/The_Great_Wave_off_Kanagawa.jpg',
      credit: 'Image: The Great Wave off Kanagawa',
    },
  ],
  socialLinks: [
    { label: 'Substack', href: 'https://insidejapanesehistory.substack.com' },
    { label: 'Podcast RSS', href: 'https://insidejapanesehistory.substack.com/feed/podcast' },
    // Add live profiles when ready:
    // { label: 'X', href: 'https://x.com/your-handle' },
    // { label: 'Instagram', href: 'https://www.instagram.com/your-handle/' },
  ],
  authorFather: {
    name: 'Japanese History Specialist',
    role: 'History Specialist',
    bio: 'A Japanese history specialist provides historical judgment, Japanese-language notes, and fact-checking on Sengoku, Bakumatsu, and modern Japan.',
  },
  authorSon: {
    name: 'Editorial Lead',
    role: 'Editor and Translator',
    bio: 'The editorial lead shapes the publication, adapts Japanese historical notes into English, and manages the site for international readers.',
    sameAs: [
      // Add LinkedIn, ORCID, GitHub once decided
    ],
  },
} as const;
