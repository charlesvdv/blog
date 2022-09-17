import rss from '@astrojs/rss';

import { getBlogEntries } from '@lib/blog.ts';

const blogEntries = getBlogEntries(Object.values(import.meta.glob('../blog/**/*.mdx', { eager: true })));

export const get = () => rss({
  title: 'Charles Vandevoorde blog',
  description: 'A blog about software engineering',
  site: import.meta.env.SITE,
  items: blogEntries.map(blog => ({
    link: blog.url,
    title: blog.title,
    pubDate: blog.date,
    description: blog.description,
  })),
});