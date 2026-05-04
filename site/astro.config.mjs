import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://insidejapanesehistory.com',
  integrations: [sitemap()],
  vite: {
    server: {
      allowedHosts: ['dilute-osmosis-finicky.ngrok-free.dev'],
    },
  },
  build: {
    format: 'directory',
  },
});
