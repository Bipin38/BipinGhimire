// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site. Changing `base` changes every public URL.
export default defineConfig({
  site: 'https://bipin38.github.io',
  base: '/BipinGhimire/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      provider: fontProviders.npm(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-plex-sans',
      weights: ['100 700'],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
      options: { package: '@fontsource-variable/ibm-plex-sans', file: 'index.css' },
    },
    {
      provider: fontProviders.npm(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-plex-mono',
      weights: [400, 500],
      styles: ['normal'],
      fallbacks: ['ui-monospace', 'monospace'],
      options: { package: '@fontsource/ibm-plex-mono' },
    },
  ],
});
