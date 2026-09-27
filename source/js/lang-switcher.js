(function() {
  // ---- 同步字体修复：在 DOM 解析前执行，消除闪版 ----
  (function fixFontSync() {
    var p = window.location.pathname;
    var lang = p.startsWith('/en/') ? 'en' : p.startsWith('/ja/') ? 'ja' : 'zh-CN';
    var fonts = {
      'zh-CN': '-apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Noto Sans SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif',
      'ja': '-apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "Noto Sans JP", "BIZ UDPGothic", "PingFang SC", "Microsoft YaHei", sans-serif',
      'en': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Roboto, Lato, sans-serif'
    };
    document.documentElement.style.fontFamily = fonts[lang];
    document.documentElement.setAttribute('lang', lang);
  })();

  var LANGS = [
    { key: 'zh-CN', label: '中文', short: '中' },
    { key: 'en', label: 'English', short: 'EN' },
    { key: 'ja', label: '日本語', short: '日' }
  ];

  // 本地化页面清单的单一来源是 scripts/i18n-posts.js（随路由映射下发）；
  // 映射脚本万一缺失时退回这份快照。归档/标签/分类无译版，不在清单内。
  var FALLBACK_LOCALIZED_PAGES = ['/', '/about/', '/resume/', '/projects/'];
  var UNTRANSLATED_HINT = {
    'zh-CN': '该文章暂无此语言的译本',
    'en': 'No translation available for this page yet',
    'ja': 'この言語の翻訳はまだありません'
  };

  function detectLang() {
    var p = window.location.pathname;
    if (/^\/en(\/|$)/.test(p)) return 'en';
    if (/^\/ja(\/|$)/.test(p)) return 'ja';
    return 'zh-CN';
  }

  function safeDecode(path) {
    try {
      return decodeURI(path);
    } catch (e) {
      return path;
    }
  }

  function normalizePath(path) {
    var normalized = safeDecode(String(path || '').split('#')[0].split('?')[0] || '/');

    if (normalized !== '/' && normalized.slice(-'/index.html'.length) === '/index.html') {
      normalized = normalized.slice(0, -'/index.html'.length) || '/';
    }

    if (normalized.charAt(0) !== '/') normalized = '/' + normalized;
    normalized = normalized.replace(/\/{2,}/g, '/');

    if (normalized !== '/' && normalized.charAt(normalized.length - 1) !== '/') {
      normalized += '/';
    }

    return normalized;
  }

  var currentLang = detectLang();

  function localizedPages() {
    var lp = window.__I18N_POST_MAP__ && window.__I18N_POST_MAP__.localizedPages;
    return lp || FALLBACK_LOCALIZED_PAGES;
  }

  function langPrefix(lang) {
    return lang === 'zh-CN' ? '' : '/' + lang;
  }

  function stripLang(path) {
    return normalizePath(path).replace(/^\/(en|ja)(\/|$)/, '/');
  }

  function isLocalizedPage(path) {
    return localizedPages().indexOf(stripLang(path)) !== -1;
  }

  function getPostMap() {
    return (window.__I18N_POST_MAP__ && window.__I18N_POST_MAP__.byPath) || {};
  }

  function getTranslationEntry(path) {
    return getPostMap()[normalizePath(path)] || null;
  }

  function encodePath(path) {
    var normalized = normalizePath(path);
    return normalized === '/' ? '/' : encodeURI(normalized);
  }

  function toLangPath(path, lang) {
    var translationEntry = getTranslationEntry(path);
    if (translationEntry && translationEntry[lang]) {
      return encodePath(translationEntry[lang]);
    }

    var bare = stripLang(path);
    if (lang === 'zh-CN') return encodePath(bare);
    if (!isLocalizedPage(path)) return encodePath(bare);
    return encodePath(langPrefix(lang) + (bare === '/' ? '/' : bare));
  }

  // 目标语言下是否存在真实对应页：
  // - 文章（路由映射命中）：有译本才可切换；
  // - 本地化页面（首页/关于/经历/项目）：三语都有；
  // - 其余（归档/标签/分类等）：切过去只会停留在当前页 → 按不可用处理。
  function isAvailable(key) {
    if (key === currentLang) return true;
    var entry = getTranslationEntry(window.location.pathname);
    if (entry) return !!entry[key];
    return isLocalizedPage(window.location.pathname);
  }

  function buildSwitcher() {
    var cur = LANGS.filter(function(l) {
      return l.key === currentLang;
    })[0];

    var existing = document.querySelector('.lang-switcher');
    if (existing) existing.remove();

    var wrap = document.createElement('div');
    wrap.className = 'lang-switcher';

    var btn = document.createElement('button');
    btn.className = 'lang-btn';
    btn.type = 'button';
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<i class="fas fa-globe"></i> ' + cur.short;

    var menu = document.createElement('div');
    menu.className = 'lang-dropdown';

    LANGS.forEach(function(l) {
      var a = document.createElement('a');
      a.textContent = l.label;
      a.href = toLangPath(window.location.pathname, l.key);

      if (l.key === currentLang) {
        a.className = 'active';
        a.setAttribute('aria-current', 'true');
        a.addEventListener('click', function(e) { e.preventDefault(); });
      } else if (!isAvailable(l.key)) {
        a.className = 'unavailable';
        a.setAttribute('aria-disabled', 'true');
        a.title = UNTRANSLATED_HINT[currentLang] || '';
        a.addEventListener('click', function(e) { e.preventDefault(); });
      } else {
        a.addEventListener('click', function(e) {
          e.preventDefault();
          window.location.href = a.href;
        });
      }

      menu.appendChild(a);
    });

    function setOpen(open) {
      wrap.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    // click 切换：触屏（尤其 iOS，tap 不触发 :focus/:hover）依赖这条路径
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      setOpen(!wrap.classList.contains('open'));
    });
    document.addEventListener('click', function(e) {
      if (wrap.classList.contains('open') && !wrap.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') setOpen(false);
    });

    wrap.appendChild(btn);
    wrap.appendChild(menu);
    document.body.appendChild(wrap);
  }

  // ── en/ja 首页全屏头图增强 ──
  // i18n-posts.js 已给 en/ja 首页的 header 加了 lang-home-header 类。
  // 这里为其注入居中欢迎文字 + scroll-down 箭头。
  function patchLangHomePage() {
    var header = document.getElementById('page-header');
    if (!header || !header.classList.contains('lang-home-header')) return;

    // 隐藏原有的 page-site-info（普通页标题）
    var pageSiteInfo = header.querySelector('#page-site-info');
    if (pageSiteInfo) pageSiteInfo.style.display = 'none';

    // 注入欢迎文字
    var siteTitle = document.querySelector('#nav .site-name');
    var titleText = siteTitle ? siteTitle.textContent : 'lizhichao';
    var subtitleMap = {
      'en': 'Passionate about vibe coding & Open Source',
      'ja': 'バイブコーディングとオープンソースに情熱を注いでいます'
    };
    var subtitle = subtitleMap[currentLang] || '';

    var infoDiv = document.createElement('div');
    infoDiv.className = 'lang-home-site-info';
    infoDiv.innerHTML = '<h1>' + titleText + '</h1><p>' + subtitle + '</p>';
    header.appendChild(infoDiv);

    // 注入 scroll-down 箭头
    var scrollBtn = document.createElement('div');
    scrollBtn.className = 'lang-scroll-down';
    scrollBtn.innerHTML = '<i class="fas fa-angle-down"></i>';
    scrollBtn.onclick = function() {
      var contentEl = document.getElementById('content-inner');
      if (contentEl) {
        contentEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }
    };
    header.appendChild(scrollBtn);
  }

  buildSwitcher();
  patchLangHomePage();
})();
