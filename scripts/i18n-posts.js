const fs = require('fs');
const path = require('path');

const LANGS = ['zh-CN', 'en', 'ja'];
const TRANSLATED_LANGS = ['en', 'ja'];
const LOCALIZED_SLUGS = ['about', 'resume', 'projects', 'archives', 'tags', 'categories'];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function removeDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
}

function parseMarkdown(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`文件缺少 frontmatter: ${filePath}`);
  }

  const frontmatterText = match[1];
  const body = match[2];
  const meta = {};

  frontmatterText.split(/\r?\n/).forEach((line) => {
    const matched = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!matched) return;
    meta[matched[1]] = matched[2];
  });

  return { frontmatterText, body, meta };
}

function getDateParts(dateString, filePath) {
  const match = String(dateString || '').match(/(\d{4})-(\d{2})-(\d{2})/);
  if (!match) {
    throw new Error(`无法解析日期: ${filePath}`);
  }

  return {
    year: match[1],
    month: match[2],
    day: match[3]
  };
}

function getSlug(filePath) {
  return path.basename(filePath, path.extname(filePath));
}

function buildPathVariants(routePath) {
  const normalized = routePath.endsWith('/') ? routePath : `${routePath}/`;
  return [normalized, normalized.slice(0, -1) || '/'];
}

function registerPath(map, routePath, entry) {
  buildPathVariants(routePath).forEach((variant) => {
    map[variant] = entry;
  });
}

function sanitizeFrontmatter(frontmatterText) {
  return frontmatterText
    .split(/\r?\n/)
    .filter((line) => !/^(layout|permalink|lang):/.test(line))
    .join('\n')
    .trim();
}

function generateI18nPosts(baseDir, logger) {
  const sourceDir = path.join(baseDir, 'source');
  const generatedPagesDir = path.join(sourceDir, 'generated', 'i18n-posts');
  const generatedMapFile = path.join(sourceDir, 'generated', 'i18n-post-map.js');

  removeDir(generatedPagesDir);
  ensureDir(generatedPagesDir);
  ensureDir(path.dirname(generatedMapFile));

  const postsByKey = new Map();

  function collectPosts(lang, dirPath) {
    if (!fs.existsSync(dirPath)) return;

    fs.readdirSync(dirPath)
      .filter((fileName) => fileName.endsWith('.md'))
      .forEach((fileName) => {
        const filePath = path.join(dirPath, fileName);
        const parsed = parseMarkdown(filePath);
        const translationKey = parsed.meta.translation_key;

        if (!translationKey) {
          throw new Error(`缺少 translation_key: ${filePath}`);
        }

        const { year, month, day } = getDateParts(parsed.meta.date, filePath);
        const slug = getSlug(filePath);
        const routePath = lang === 'zh-CN'
          ? `/${year}/${month}/${day}/${slug}/`
          : `/${lang}/${year}/${month}/${day}/${slug}/`;

        const entry = {
          lang,
          filePath,
          routePath,
          frontmatterText: parsed.frontmatterText,
          body: parsed.body
        };

        if (!postsByKey.has(translationKey)) {
          postsByKey.set(translationKey, {});
        }
        postsByKey.get(translationKey)[lang] = entry;
      });
  }

  collectPosts('zh-CN', path.join(sourceDir, '_posts'));
  TRANSLATED_LANGS.forEach((lang) => {
    collectPosts(lang, path.join(sourceDir, lang, '_posts'));
  });

  const mapByPath = {};

  Array.from(postsByKey.values()).forEach((langEntries) => {
    const routeMap = {};
    LANGS.forEach((lang) => {
      if (langEntries[lang]) {
        routeMap[lang] = langEntries[lang].routePath;
      }
    });

    Object.values(langEntries).forEach((entry) => {
      registerPath(mapByPath, entry.routePath, routeMap);
    });
  });

  TRANSLATED_LANGS.forEach((lang) => {
    const entries = Array.from(postsByKey.values())
      .map((group) => group[lang])
      .filter(Boolean);

    entries.forEach((entry) => {
      const safeFrontmatter = sanitizeFrontmatter(entry.frontmatterText);
      const outputDir = path.join(generatedPagesDir, lang);
      const outputFile = path.join(outputDir, `${getSlug(entry.filePath)}.md`);

      ensureDir(outputDir);

      const output = [
        '---',
        'layout: post',
        `lang: ${lang}`,
        `permalink: ${entry.routePath}`,
        safeFrontmatter,
        '---',
        '',
        entry.body.trimStart()
      ].join('\n');

      fs.writeFileSync(outputFile, `${output}\n`, 'utf8');
    });
  });

  const mapScript = [
    'window.__I18N_POST_MAP__ = window.__I18N_POST_MAP__ || {};',
    `window.__I18N_POST_MAP__.byPath = ${JSON.stringify(mapByPath, null, 2)};`
  ].join('\n');

  fs.writeFileSync(generatedMapFile, `${mapScript}\n`, 'utf8');
  if (logger && typeof logger.info === 'function') {
    logger.info(`i18n post map ready: ${Object.keys(mapByPath).length} paths`);
  }
}

function registerI18nHtmlFilter(hexo) {
  hexo.extend.filter.register('after_render:html', function (str, data) {
    if (!data || !data.path) return str;

    var enMatch = data.path.match(/^en\//);
    var jaMatch = data.path.match(/^ja\//);
    if (!enMatch && !jaMatch) return str;

    var lang = enMatch ? 'en' : 'ja';

    // Use exact string replacements — never broad regex that can corrupt
    // sidebar, tag cloud, or archive links
    var swaps = [
      ['<a class="site-page" href="/"',      '<a class="site-page" href="/' + lang + '/"'],
      ['<a class="site-page" href="/about/"',   '<a class="site-page" href="/' + lang + '/about/"'],
      ['<a class="site-page" href="/resume/"',  '<a class="site-page" href="/' + lang + '/resume/"'],
      ['<a class="site-page" href="/projects/"','<a class="site-page" href="/' + lang + '/projects/"'],
      ['<a class="nav-site-title" href="/"',    '<a class="nav-site-title" href="/' + lang + '/"'],
    ];

    swaps.forEach(function (pair) {
      while (str.indexOf(pair[0]) !== -1) {
        str = str.replace(pair[0], pair[1]);
      }
    });

    return str;
  });
}

if (typeof hexo !== 'undefined' && hexo && hexo.extend) {
  registerI18nHtmlFilter(hexo);
}

if (require.main === module) {
  generateI18nPosts(process.cwd(), console);
}

module.exports = {
  generateI18nPosts,
  registerI18nHtmlFilter
};
