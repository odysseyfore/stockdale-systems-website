// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs, absolute Open Graph image URLs, and the sitemap.
  // TODO: confirm this matches the live custom domain.
  site: 'https://stockdalesystems.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});