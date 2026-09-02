import rss from '@astrojs/rss';
import { getPosts, postUrl, T } from '../lib/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getPosts('zh');
  return rss({
    title: 'lizhichao — Create infinite possibilities',
    description: T.zh.aboutLine.replace(/<[^>]+>/g, ''),
    site: context.site!.toString(),
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description || '',
      link: postUrl(p)
    }))
  });
}
