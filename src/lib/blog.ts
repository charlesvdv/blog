import type { MDXInstance } from 'astro';

export interface BlogMetadata {
    title: string,
    date: Date,
    description: string,
    img?: BlogImg,
    draft?: boolean,
    slug: string,
    url: string,
    Content: any,
    readingTime: string,
}

export interface BlogImg {
    src: any,
    alt?: string,
}

export function extractSlugFromFilePath(path: string): string {
    return path.match(/.*\/src\/blog\/([\w\/\-_]+?)(\/index\.mdx?|\.mdx?)/)[1]
}

export function getBlogEntries(instances: MDXInstance<any>[]): BlogMetadata[] {
    return instances
        .filter(mdxInstance => import.meta.env.DEV || !mdxInstance.frontmatter.draft)
        .map(mdxInstance => {
            const slug = extractSlugFromFilePath(mdxInstance.file);

            let blogEntry = {
                img: mdxInstance['img'],
                slug: slug,
                url: `/blog/${slug}`,
                Content: mdxInstance.Content,
                ...mdxInstance.frontmatter,
            };

            if (typeof blogEntry.date === 'string') {
                blogEntry.date = new Date(blogEntry.date);
            }

            return blogEntry as BlogMetadata;
        });
}