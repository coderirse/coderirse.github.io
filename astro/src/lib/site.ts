import { getCollection, type CollectionEntry } from 'astro:content';

export type Lang = 'zh' | 'en' | 'ja';
export const LANGS: Lang[] = ['zh', 'en', 'ja'];
export const LANG_PREFIX: Record<Lang, string> = { zh: '', en: '/en', ja: '/ja' };
export const HTML_LANG: Record<Lang, string> = { zh: 'zh-CN', en: 'en', ja: 'ja' };

export type Post = CollectionEntry<'posts'>;

const pad = (n: number) => String(n).padStart(2, '0');

export function langOf(id: string): Lang {
  return id.split('/')[0] as Lang;
}

export function postSlug(entry: Post): string {
  return entry.id.split('/').slice(1).join('/');
}

export function postUrl(entry: Post): string {
  const d = entry.data.date;
  const p = `${d.getUTCFullYear()}/${pad(d.getUTCMonth() + 1)}/${pad(d.getUTCDate())}`;
  const prefix = LANG_PREFIX[langOf(entry.id)];
  return `${prefix}/${p}/${encodeURIComponent(postSlug(entry))}/`;
}

export function dateStr(d: Date): string {
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

export function firstCategory(entry: Post): string {
  const c = entry.data.categories;
  return Array.isArray(c) ? c[0] || '' : c || '';
}

export async function getPosts(lang: Lang): Promise<Post[]> {
  const all = await getCollection('posts');
  return all
    .filter((p) => langOf(p.id) === lang)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** tags/categories 字段归一化为数组（可能是字符串或数组） */
export function termsOf(entry: Post, field: 'tags' | 'categories'): string[] {
  const v = entry.data[field];
  return Array.isArray(v) ? v : v ? [v] : [];
}

/** 按 tags/categories 聚合文章（输入已按日期排序，分组内保持该顺序） */
export function collectTerms(posts: Post[], field: 'tags' | 'categories'): Map<string, Post[]> {
  const map = new Map<string, Post[]>();
  for (const p of posts) {
    for (const term of termsOf(p, field)) {
      const list = map.get(term) || [];
      list.push(p);
      map.set(term, list);
    }
  }
  return map;
}

/** 全语言文章按 translation_key 建映射，用于语言切换器 */
export async function buildPostMap(): Promise<Record<string, Record<string, string>>> {
  const all = await getCollection('posts');
  const map: Record<string, Record<string, string>> = {};
  for (const p of all) {
    const key = p.data.translation_key;
    if (!key) continue;
    (map[key] ||= {})[langOf(p.id)] = postUrl(p);
  }
  return map;
}

/* ---------------- 多语言文案 ---------------- */
export const T = {
  zh: {
    nav: { home: '首页', about: '关于', resume: '经历', projects: '项目' },
    eyebrow: 'LIZHICHAO — A PERSONAL JOURNAL OF CODE & IDEAS',
    tagline: '记录成长 · 分享知识 · KEEP MOVING',
    manifesto:
      '我相信代码是这个时代最自由的创造材料。这里记录我用它建造的每一件东西——机器人、应用、智能体，以及过程中学到的。',
    toc: '文章目次',
    tocEn: 'INDEX',
    projects: '项目作品',
    projectsEn: 'SELECTED WORKS',
    about: '关于我',
    aboutEn: 'ABOUT',
    readMore: '阅读全文',
    allProjects: '查看全部项目',
    prev: '上一篇',
    next: '下一篇',
    postedOn: '发表于',
    updatedOn: '更新于',
    aboutLine: '我是李智超，一名热爱 vibe coding 的软件工程师，痴迷于用代码把想法变成现实。',
    footerCta: '有想法？来聊聊',
    archives: '归档',
    tags: '标签',
    categories: '分类',
    postsTotal: '共 {n} 篇文章',
    tagsTotal: '共 {n} 个标签',
    catsTotal: '共 {n} 个分类',
    notFound: '页面走丢了',
    notFoundDesc: '404 — 你访问的页面不存在，或已被移动。',
    backHome: '返回首页'
  },
  en: {
    nav: { home: 'Home', about: 'About', resume: 'Resume', projects: 'Projects' },
    eyebrow: 'LIZHICHAO — A PERSONAL JOURNAL OF CODE & IDEAS',
    tagline: 'CODE · ROBOTICS · AI · WRITING',
    manifesto:
      'I believe code is the freest creative material of our time. This journal documents everything I build with it — robots, apps, agents — and what I learn along the way.',
    toc: 'All Entries',
    tocEn: 'INDEX',
    projects: 'Selected Works',
    projectsEn: 'SELECTED WORKS',
    about: 'About Me',
    aboutEn: 'ABOUT',
    readMore: 'Read the story',
    allProjects: 'View all projects',
    prev: 'Previous',
    next: 'Next',
    postedOn: 'Posted',
    updatedOn: 'Updated',
    aboutLine: "I'm Li Zhichao, a software engineer who loves vibe coding and turning ideas into reality.",
    footerCta: 'Got an idea? Let’s talk',
    archives: 'Archives',
    tags: 'Tags',
    categories: 'Categories',
    postsTotal: '{n} posts',
    tagsTotal: '{n} tags',
    catsTotal: '{n} categories',
    notFound: 'Page not found',
    notFoundDesc: '404 — The page you are looking for does not exist or has been moved.',
    backHome: 'Back to home'
  },
  ja: {
    nav: { home: 'ホーム', about: '私について', resume: '経歴', projects: 'プロジェクト' },
    eyebrow: 'LIZHICHAO — A PERSONAL JOURNAL OF CODE & IDEAS',
    tagline: 'コード · ロボティクス · AI · 執筆',
    manifesto:
      'コードはこの時代で最も自由な創造の素材だと信じています。ロボット、アプリ、エージェント——ここは私がコードで作ったすべてと、そこから学んだことの記録です。',
    toc: '記事一覧',
    tocEn: 'INDEX',
    projects: 'プロジェクト',
    projectsEn: 'SELECTED WORKS',
    about: '私について',
    aboutEn: 'ABOUT',
    readMore: '続きを読む',
    allProjects: 'すべてのプロジェクト',
    prev: '前の記事',
    next: '次の記事',
    postedOn: '公開日',
    updatedOn: '更新日',
    aboutLine: '李智超です。vibe coding を愛するソフトウェアエンジニア。アイデアをコードで形にするのが好きです。',
    footerCta: 'アイデアがありますか？話しましょう',
    archives: 'アーカイブ',
    tags: 'タグ',
    categories: 'カテゴリ',
    postsTotal: '全 {n} 件の記事',
    tagsTotal: '全 {n} 個のタグ',
    catsTotal: '全 {n} 個のカテゴリ',
    notFound: 'ページが見つかりません',
    notFoundDesc: '404 — お探しのページは存在しないか、移動しました。',
    backHome: 'ホームへ戻る'
  }
} as const;
