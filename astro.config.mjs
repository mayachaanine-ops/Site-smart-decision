import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // ⚠️ Remplace par ton vrai domaine : indispensable pour le sitemap et le SEO
  site: 'https://smart-decision.net',

  output: 'static',
  adapter: cloudflare(),

  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: true }
  },

  integrations: [sitemap({ i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-US' } } })],
  vite: { plugins: [tailwindcss()] }
});
