// @ts-check
import { defineConfig } from 'astro/config';
import remarkHexoTags from './src/plugins/remark-hexo-tags.mjs';

export default defineConfig({
  site: 'https://caeamer.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  markdown: {
    remarkPlugins: [remarkHexoTags],
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    }
  }
});
