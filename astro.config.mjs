import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dracoxu.com',
  output: 'static',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
