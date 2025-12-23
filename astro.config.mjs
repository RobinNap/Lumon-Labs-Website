import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://lumonlabs.com',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  build: {
    assets: '_assets',
  },
});

