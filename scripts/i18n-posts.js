/**
 * i18n 文章流水线：
 * - 读取 source/_posts（中文）与 source/{en,ja}/_posts（译文），按 translation_key 配对，
 *   物化成带 permalink 的页面到 source/generated/i18n-posts/{en,ja}/
 * - 生成按语言拆分的客户端路由映射 i18n-post-map-{zh,en,ja}.js
 * - 注册 Hexo 钩子：
 *     after_init / before_generate —— 构建期生成上述文件（watch 模式下也能刷新，
 *       内容无变化时不写盘，避免触发 watcher 重建循环）
 *     after_render:html —— hreflang alternates、按语言注入路由映射、
 *       导航链接语言前缀的兜底替换（正常由 lang_url_for 在模板层完成）
 *     helper: lang_url_for —— 模板内生成带语言前缀的链接
 * 也可独立运行：node scripts/i18n-posts.js
 */
const fs = require('fs');
const path = require('path');
const { parse: parseFrontmatter } = require('hexo-front-matter');

const LANGS = ['zh-CN', 'en', 'ja'];
const TRANSLATED_LANGS = ['en', 'ja'];
// 每个语言根下都存在对应版本的页面（与 source/<lang>/ 目录一一对应）
const LOCALIZED_PAGES = ['/', '/about/', '/resume/', '/projects/'];
const MAP_FILE_SUFFIX = { 'zh-CN': 'zh', en: 'en', ja: 'ja' };

// 渲染期使用的路由映射（由 generateI18nPosts 刷新）
let postMap = { byPath: {} };

const pad = (n) => String(n).padStart(2, '0');

function stripBom(text) {
  return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
}

function splitFrontmatter(content, filePath) {
  const match = stripBom(content).match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`文件缺少 frontmatter: ${filePath}`);
  }
  return { frontmatterText: match[1], body: match[2] };
}

function getDateParts(dateValue, filePath) {
  if (dateValue instanceof Date && !Number.isNaN(dateValue.getTime())) {
    return {
      year: String(dateValue.getUTCFullYear()),
      month: pad(dateValue.getUTCMonth() + 1),
      day: pad(dateValue.getUTCDate())
    };
  }
  const match = String(dateValue || '').match(/(\d{4})-(\d{2})-(\d{2})/);
  if (!match) {
    throw new Error(`无法解析日期: ${filePath}`);
  }
  return { year: match[1], month: match[2], day: match[3] };
}

function getSlug(filePath) {
  return path.basename(filePath, path.extname(filePath));
}

function buildPathVariants(routePath) {
  const normalized = routePath.endsWith('/') ? routePath : `${routePath}/`;
  return [normalized, normalized.slice(0, -1) || '/'];
}

function registerPath(map, routePath, entry, source) {
  buildPathVariants(routePath).forEach((variant) => {
    const existing = map[variant];
    if (existing && JSON.stringify(existing) !== JSON.stringify(entry)) {
      throw new Error(
        `i18n 路由冲突: ${variant} 已被占用（两篇文章 slug 与日期相同但 translation_key 不同）: ${source}`
      );
    }
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

function writeFileIfChanged(filePath, content) {
  try {
    if (fs.readFileSync(filePath, 'utf8') === content) return false;
  } catch (e) {
    // 文件不存在，继续写入
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

function generateI18nPosts(baseDir, logger) {
  const sourceDir = path.join(baseDir, 'source');
  const generatedDir = path.join(sourceDir, 'generated');
  const generatedPagesDir = path.join(generatedDir, 'i18n-posts');

  fs.rmSync(generatedPagesDir, { recursive: true, force: true });

  const postsByKey = new Map();

  function collectPosts(lang, dirPath) {
    if (!fs.existsSync(dirPath)) return;

    fs.readdirSync(dirPath)
      .filter((fileName) => fileName.endsWith('.md'))
      .forEach((fileName) => {
        const filePath = path.join(dirPath, fileName);
        const content = fs.readFileSync(filePath, 'utf8');
        const meta = parseFrontmatter(content);
        const translationKey = meta.translation_key;

        if (!translationKey) {
          throw new Error(`缺少 translation_key: ${filePath}`);
        }

        const { year, month, day } = getDateParts(meta.date, filePath);
        const slug = getSlug(filePath);
        const routePath = lang === 'zh-CN'
          ? `/${year}/${month}/${day}/${slug}/`
          : `/${lang}/${year}/${month}/${day}/${slug}/`;

        const split = splitFrontmatter(content, filePath);

        if (!postsByKey.has(translationKey)) {
          postsByKey.set(translationKey, {});
        }
        postsByKey.get(translationKey)[lang] = {
          lang,
          filePath,
          routePath,
          frontmatterText: split.frontmatterText,
          body: split.body
        };
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
      registerPath(mapByPath, entry.routePath, routeMap, entry.filePath);
    });
  });

  TRANSLATED_LANGS.forEach((lang) => {
    const entries = Array.from(postsByKey.values())
      .map((group) => group[lang])
      .filter(Boolean);

    entries.forEach((entry) => {
      const safeFrontmatter = sanitizeFrontmatter(entry.frontmatterText);
      const outputFile = path.join(generatedPagesDir, lang, `${getSlug(entry.filePath)}.md`);

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

      writeFileIfChanged(outputFile, `${output}\n`);
    });
  });

  // 按语言拆分映射：客户端切换器只需查当前语言前缀下的路径
  LANGS.forEach((lang) => {
    const prefix = lang === 'zh-CN' ? null : `/${lang}/`;
    const byPath = {};
    Object.keys(mapByPath).forEach((routePath) => {
      const inLang = prefix === null
        ? !/^\/(en|ja)\//.test(routePath)
        : routePath.indexOf(prefix) === 0;
      if (inLang) {
        byPath[routePath] = mapByPath[routePath];
      }
    });

    const script = [
      'window.__I18N_POST_MAP__ = window.__I18N_POST_MAP__ || {};',
      `window.__I18N_POST_MAP__.byPath = ${JSON.stringify(byPath, null, 2)};`
    ].join('\n');

    writeFileIfChanged(path.join(generatedDir, `i18n-post-map-${MAP_FILE_SUFFIX[lang]}.js`), `${script}\n`);
  });

  postMap = { byPath: mapByPath };

  if (logger && typeof logger.info === 'function') {
    logger.info(`i18n post map ready: ${Object.keys(mapByPath).length} paths`);
  }
}

function renderPathToUrl(renderPath) {
  let urlPath = `/${renderPath.replace(/\\/g, '/')}`;
  return urlPath.replace(/index\.html$/, '');
}

function stripLangPrefix(urlPath) {
  return urlPath.replace(/^\/(en|ja)(\/|$)/, '/');
}

function detectLangFromRenderPath(renderPath) {
  if (/^en\//.test(renderPath)) return 'en';
  if (/^ja\//.test(renderPath)) return 'ja';
  return 'zh-CN';
}

function getHreflangAlternates(hexo, renderPath) {
  const urlPath = renderPathToUrl(renderPath);
  const bare = stripLangPrefix(urlPath);
  const entry = postMap.byPath[urlPath] || postMap.byPath[bare];

  let trio = null;
  if (entry) {
    trio = LANGS.filter((lang) => entry[lang]).map((lang) => [lang, entry[lang]]);
  } else if (LOCALIZED_PAGES.indexOf(bare) !== -1) {
    trio = [
      ['zh-CN', bare],
      ['en', bare === '/' ? '/en/' : `/en${bare}`],
      ['ja', bare === '/' ? '/ja/' : `/ja${bare}`]
    ];
  }

  if (!trio || trio.length < 2) return null;

  const origin = String(hexo.config.url || '').replace(/\/+$/, '');
  const zh = trio.find(([lang]) => lang === 'zh-CN');
  const links = trio.map(
    ([lang, route]) => `<link rel="alternate" hreflang="${lang}" href="${origin}${encodeURI(route)}">`
  );
  if (zh) {
    links.push(`<link rel="alternate" hreflang="x-default" href="${origin}${encodeURI(zh[1])}">`);
  }
  return links.join('');
}

function registerI18nHtmlFilter(hexo) {
  hexo.extend.filter.register('after_render:html', function (str, data) {
    if (!data || !data.path) return str;

    const renderPath = String(data.path).replace(/\\/g, '/');
    const lang = detectLangFromRenderPath(renderPath);

    const injections = [];
    // 每语言路由映射，head 内阻塞执行，先于底部加载的 lang-switcher.js
    injections.push(`<script src="/generated/i18n-post-map-${MAP_FILE_SUFFIX[lang]}.js"></script>`);

    const alternates = getHreflangAlternates(hexo, renderPath);
    if (alternates) {
      injections.push(alternates);
    }

    // en/ja 首页：注入标记类，供 CSS 全屏刊头样式与 lang-switcher 使用
    if (renderPath === 'en/index.html' || renderPath === 'ja/index.html') {
      str = str.replace(
        '<header class="not-home-page" id="page-header"',
        '<header class="not-home-page lang-home-header" id="page-header"'
      );
    }

    // 兜底：修正 en/ja 页面上残留的中文导航链接（正常已被 lang_url_for 在模板层修正）
    if (lang !== 'zh-CN') {
      const prefix = `/${lang}`;
      const swaps = [
        ['<a class="site-page" href="/"', `<a class="site-page" href="${prefix}/"`],
        ['<a class="site-page" href="/about/"', `<a class="site-page" href="${prefix}/about/"`],
        ['<a class="site-page" href="/resume/"', `<a class="site-page" href="${prefix}/resume/"`],
        ['<a class="site-page" href="/projects/"', `<a class="site-page" href="${prefix}/projects/"`],
        ['<a class="nav-site-title" href="/"', `<a class="nav-site-title" href="${prefix}/"`]
      ];
      swaps.forEach((pair) => {
        while (str.indexOf(pair[0]) !== -1) {
          str = str.replace(pair[0], pair[1]);
        }
      });
    }

    if (injections.length && str.indexOf('</head>') !== -1) {
      str = str.replace('</head>', `${injections.join('')}</head>`);
    }

    return str;
  });
}

function registerLangHelper(hexo) {
  hexo.extend.helper.register('lang_url_for', function (urlPath) {
    const lang = (this.page && this.page.lang) || 'zh-CN';
    const url = this.url_for(urlPath);
    if (lang === 'zh-CN') return url;

    let bare = String(url || '/');
    if (bare.charAt(0) !== '/') bare = `/${bare}`;
    if (bare !== '/' && bare.charAt(bare.length - 1) !== '/') bare = `${bare}/`;

    if (bare === '/' || LOCALIZED_PAGES.indexOf(bare) !== -1) {
      return bare === '/' ? `/${lang}/` : `/${lang}${bare}`;
    }
    return url;
  });
}

function registerHexoIntegration(hexo) {
  const run = () => generateI18nPosts(hexo.base_dir || process.cwd(), hexo.log);
  // 初始构建：init 完成后、source 处理前物化 en/ja 页面
  hexo.extend.filter.register('after_init', run);
  // watch 模式：每次重新 generate 前刷新（内容无变化时不写盘）
  hexo.extend.filter.register('before_generate', run);
  registerI18nHtmlFilter(hexo);
  registerLangHelper(hexo);
}

if (typeof hexo !== 'undefined' && hexo && hexo.extend) {
  registerHexoIntegration(hexo);
}

if (require.main === module) {
  generateI18nPosts(process.cwd(), console);
}

module.exports = {
  generateI18nPosts,
  registerHexoIntegration,
  registerI18nHtmlFilter,
  registerLangHelper
};
