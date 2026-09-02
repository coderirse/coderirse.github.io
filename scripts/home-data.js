/**
 * home-data 生成器：
 * 为视觉 overhaul 的首页多幕叙事提供数据，按语言输出 JSON：
 *   public/generated/home-data-{zh,en,ja}.json
 * 内容：最新文章（标题/链接/封面/日期/分类/摘要）+ 项目页条目解析。
 * 由 Hexo 自动加载（scripts/ 目录约定），无需手动调用。
 */
const fs = require('fs');
const path = require('path');
const { parse: parseFrontmatter } = require('hexo-front-matter');

const LANGS = [
  { code: 'zh', dir: 'source/_posts', urlPrefix: '', projectsMd: 'source/projects/index.md', projectsUrl: '/projects/' },
  { code: 'en', dir: 'source/en/_posts', urlPrefix: '/en', projectsMd: 'source/en/projects/index.md', projectsUrl: '/en/projects/' },
  { code: 'ja', dir: 'source/ja/_posts', urlPrefix: '/ja', projectsMd: 'source/ja/projects/index.md', projectsUrl: '/ja/projects/' }
];

const pad = (n) => String(n).padStart(2, '0');

function dateParts(dateValue) {
  if (dateValue instanceof Date && !Number.isNaN(dateValue.getTime())) {
    return {
      y: String(dateValue.getUTCFullYear()),
      m: pad(dateValue.getUTCMonth() + 1),
      d: pad(dateValue.getUTCDate())
    };
  }
  const m = String(dateValue || '').match(/(\d{4})-(\d{2})-(\d{2})/);
  return m ? { y: m[1], m: m[2], d: m[3] } : null;
}

function postUrl(urlPrefix, dateValue, slug) {
  const p = dateParts(dateValue);
  if (!p) return null;
  return `${urlPrefix}/${p.y}/${p.m}/${p.d}/${encodeURIComponent(slug)}/`;
}

function readPosts(lang) {
  const dir = path.join(process.cwd(), lang.dir);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), 'utf8');
      const fm = parseFrontmatter(raw);
      const slug = path.basename(f, '.md');
      const categories = Array.isArray(fm.categories) ? fm.categories : (fm.categories ? [fm.categories] : []);
      const dp = dateParts(fm.date);
      return {
        title: fm.title || slug,
        url: postUrl(lang.urlPrefix, fm.date, slug),
        cover: fm.cover || null,
        date: dp ? `${dp.y}-${dp.m}-${dp.d}` : '',
        category: categories[0] || '',
        excerpt: fm.description || ''
      };
    })
    .filter((p) => p.url)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function readProjects(mdPath) {
  const abs = path.join(process.cwd(), mdPath);
  if (!fs.existsSync(abs)) return [];
  const raw = fs.readFileSync(abs, 'utf8');
  // 去掉 front-matter
  const body = raw.replace(/^---[\s\S]*?---\r?\n/, '');
  const entries = [];
  const re = /^###\s+(.+)$/gm;
  let match;
  const heads = [];
  while ((match = re.exec(body)) !== null) {
    heads.push({ title: match[1].trim(), index: match.index, end: re.lastIndex });
  }
  heads.forEach((h, i) => {
    const sectionEnd = i + 1 < heads.length ? heads[i + 1].index : body.length;
    const section = body.slice(h.end, sectionEnd);
    // 第一段非标签、非空白的纯文本作为简介
    const lines = section.split(/\r?\n/)
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith('{%') && !l.startsWith('-') && !l.startsWith('**') && !l.startsWith('#'));
    entries.push({ title: h.title, blurb: lines[0] || '' });
  });
  return entries;
}

if (typeof hexo !== 'undefined' && hexo && hexo.extend) {
  hexo.extend.generator.register('home-data', function () {
    return LANGS.map((lang) => {
      const payload = {
        lang: lang.code,
        projectsUrl: lang.projectsUrl,
        posts: readPosts(lang).slice(0, 12),
        projects: readProjects(lang.projectsMd).slice(0, 12)
      };
      return {
        path: `generated/home-data-${lang.code}.json`,
        data: JSON.stringify(payload)
      };
    });
  });
}

module.exports = { readPosts, readProjects };
