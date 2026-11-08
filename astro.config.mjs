// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const repository = process.env.GITHUB_REPOSITORY?.toLowerCase();
const base = repository === 'shreycodezz/shreycodezz.github.io' ? '/' : '/my_website/';

// https://astro.build/config
export default defineConfig({
  site: 'https://shreycodezz.github.io',
  base,

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
