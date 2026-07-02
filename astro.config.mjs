import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/bingsdevweb1/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});