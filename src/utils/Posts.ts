import type {
  IFrontmatter,
  MarkdownInstance,
} from 'astro-boilerplate-components';

export const sortByDate = (posts: MarkdownInstance<IFrontmatter>[]) => {
  return posts
    .filter(
      (post) =>
        post.frontmatter.pubDate &&
        !Number.isNaN(new Date(post.frontmatter.pubDate).getTime())
    )
    .sort(
      (a, b) =>
        new Date(b.frontmatter.pubDate).valueOf() -
        new Date(a.frontmatter.pubDate).valueOf()
    );
};
