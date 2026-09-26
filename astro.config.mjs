import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { writing } from './src/data/writing.js';

const hidden = writing.filter((entry) => entry.hidden).map((entry) => entry.href);

export default defineConfig({
  site: 'https://dracoxu.com',
  output: 'static',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  /* 404 is served by the Worker, not crawled as a page. */
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') && !hidden.some((href) => page.endsWith(href)) })],
});
