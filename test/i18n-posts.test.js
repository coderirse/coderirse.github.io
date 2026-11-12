'use strict';

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const {
  generateI18nPosts,
  splitFrontmatter,
  sanitizeFrontmatter,
  getDateParts,
  readConfigTimeZone,
  registerPath,
  buildPathVariants
} = require('../scripts/i18n-posts.js');

const POST = (key, date, extra = '') =>
  `---\ntitle: t\ntranslation_key: ${key}\ndate: ${date}\n${extra}---\n\nbody\n`;

function tmpBase() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'i18n-test-'));
}

function writePost(base, lang, slug, content) {
  const dir = lang === 'zh-CN'
    ? path.join(base, 'source', '_posts')
    : path.join(base, 'source', lang, '_posts');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${slug}.md`), content);
}

test('splitFrontmatter 解析并保留 body', () => {
  const { frontmatterText, body } = splitFrontmatter('---\ntitle: a\n---\nhello\n', 'f.md');
  assert.strictEqual(frontmatterText, 'title: a');
  assert.strictEqual(body, 'hello\n');
});

test('splitFrontmatter 支持 BOM 与 CRLF', () => {
  const { frontmatterText } = splitFrontmatter('﻿---\r\ntitle: a\r\n---\r\nx', 'f.md');
  assert.strictEqual(frontmatterText, 'title: a');
});

test('splitFrontmatter 缺 frontmatter 抛错', () => {
  assert.throws(() => splitFrontmatter('no frontmatter', 'f.md'), /frontmatter/);
});

test('sanitizeFrontmatter 去掉 layout/permalink/lang 保留其余', () => {
  const out = sanitizeFrontmatter('title: a\nlayout: post\npermalink: /x/\nlang: en\ntags: [a]');
  assert.strictEqual(out, 'title: a\ntags: [a]');
});

test('getDateParts 字符串日期直接取日历日', () => {
  assert.deepStrictEqual(getDateParts('2026-11-11 00:00:01', 'f.md', 'Asia/Shanghai'),
    { year: '2026', month: '11', day: '11' });
});

test('getDateParts 带偏移日期按配置时区取日（与 Hexo permalink 一致）', () => {
  const d = new Date('2026-11-11T00:00:01+08:00'); // UTC 为 11-10
  assert.deepStrictEqual(getDateParts(d, 'f.md', 'Asia/Shanghai'),
    { year: '2026', month: '11', day: '11' });
  assert.deepStrictEqual(getDateParts(d, 'f.md', 'UTC'),
    { year: '2026', month: '11', day: '10' });
});

test('getDateParts 非法日期抛错', () => {
  assert.throws(() => getDateParts('not-a-date', 'f.md'), /日期/);
});

test('buildPathVariants 产出带/不带尾斜杠', () => {
  assert.deepStrictEqual(buildPathVariants('/a/b'), ['/a/b/', '/a/b']);
  assert.deepStrictEqual(buildPathVariants('/'), ['/', '/']);
});

test('registerPath 冲突抛错、相同条目放行', () => {
  const map = {};
  registerPath(map, '/a/', { en: '/en/a/' }, 'f1');
  registerPath(map, '/a/', { en: '/en/a/' }, 'f2'); // 相同，不抛
  assert.throws(() => registerPath(map, '/a/', { en: '/en/other/' }, 'f3'), /冲突/);
});

test('readConfigTimeZone 读取 _config.yml', () => {
  const base = tmpBase();
  fs.writeFileSync(path.join(base, '_config.yml'), "title: x\ntimezone: 'Asia/Shanghai'\n");
  assert.strictEqual(readConfigTimeZone(base), 'Asia/Shanghai');
  fs.rmSync(base, { recursive: true, force: true });
});

test('generateI18nPosts 物化译文 + 生成映射 + 补 cover_type', () => {
  const base = tmpBase();
  writePost(base, 'zh-CN', 'a', POST('k1', '2026-11-11 00:00:01', 'cover: /img/x.png\n'));
  writePost(base, 'en', 'a', POST('k1', '2026-11-11 00:00:01', 'cover: /img/x.png\n'));
  generateI18nPosts(base, null, 'Asia/Shanghai');

  const enFile = path.join(base, 'source', 'generated', 'i18n-posts', 'en', 'a.md');
  const en = fs.readFileSync(enFile, 'utf8');
  assert.match(en, /permalink: \/en\/2026\/11\/11\/a\//);
  assert.match(en, /cover_type: img/);
  assert.match(en, /lang: en/);

  const map = fs.readFileSync(path.join(base, 'source', 'generated', 'i18n-post-map-en.js'), 'utf8');
  assert.match(map, /"\/en\/2026\/11\/11\/a\/"/);
  // 紧凑输出（无美化缩进）
  assert.ok(!map.includes('\n  "'));
  fs.rmSync(base, { recursive: true, force: true });
});

test('generateI18nPosts 对账清理陈旧产物', () => {
  const base = tmpBase();
  writePost(base, 'zh-CN', 'a', POST('k1', '2026-11-11 00:00:01'));
  writePost(base, 'en', 'a', POST('k1', '2026-11-11 00:00:01'));
  generateI18nPosts(base, null, 'Asia/Shanghai');
  const enDir = path.join(base, 'source', 'generated', 'i18n-posts', 'en');
  fs.writeFileSync(path.join(enDir, 'stale.md'), '---\n---\nold');
  // 移除 en 译文后重跑，stale 与 a 都应被清理
  fs.rmSync(path.join(base, 'source', 'en', '_posts', 'a.md'));
  generateI18nPosts(base, null, 'Asia/Shanghai');
  assert.deepStrictEqual(fs.readdirSync(enDir).filter((f) => f.endsWith('.md')), []);
  fs.rmSync(base, { recursive: true, force: true });
});

test('generateI18nPosts 缺 translation_key 抛错', () => {
  const base = tmpBase();
  writePost(base, 'zh-CN', 'a', '---\ntitle: t\ndate: 2026-11-11\n---\nbody');
  assert.throws(() => generateI18nPosts(base, null, 'Asia/Shanghai'), /translation_key/);
  fs.rmSync(base, { recursive: true, force: true });
});