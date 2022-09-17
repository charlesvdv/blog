import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";

import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

function remarkReadingTime() {
  return (tree, { data }) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);

    data.astro.frontmatter.readingTime = readingTime.text;
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://vandevoorde.me',
  output: 'static',
  integrations: [
    mdx({
      remarkPlugins: [remarkReadingTime],
      extendPlugins: 'astroDefaults',
    }), tailwind(), sitemap(), image()],
});