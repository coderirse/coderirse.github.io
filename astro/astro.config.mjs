// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkHexoTags from './src/plugins/remark-hexo-tags.mjs';

export default defineConfig({
  site: 'https://caeamer.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: { zh: 'zh-CN', en: 'en', ja: 'ja' }
      }
    })
  ],
  markdown: {
    remarkPlugins: [remarkHexoTags],
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    }
  }
});
