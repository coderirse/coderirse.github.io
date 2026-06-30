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

  var LOCALIZED_PAGES = ['/', '/about/', '/resume/', '/projects/', '/archives/', '/tags/', '/categories/'];

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
  document.documentElement.setAttribute('lang', currentLang);

  function langPrefix(lang) {
    return lang === 'zh-CN' ? '' : '/' + lang;
  }

  function stripLang(path) {
    return normalizePath(path).replace(/^\/(en|ja)(\/|$)/, '/');
  }

  function isLocalizedPage(path) {
    return LOCALIZED_PAGES.indexOf(stripLang(path)) !== -1;
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
    btn.innerHTML = '<i class="fas fa-globe"></i> ' + cur.short;

    var menu = document.createElement('div');
    menu.className = 'lang-dropdown';

    LANGS.forEach(function(l) {
      var a = document.createElement('a');
      a.textContent = l.label;

      if (l.key === currentLang) {
        a.className = 'active';
        a.setAttribute('onclick', 'event.preventDefault()');
        a.style.cursor = 'default';
        a.style.opacity = '0.5';
        a.style.pointerEvents = 'none';
      } else {
        a.href = 'javascript:void(0)';
        a.onclick = function(e) {
          e.preventDefault();
          window.location.href = toLangPath(window.location.pathname, l.key);
        };
      }

      menu.appendChild(a);
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
      'en': 'Passionate about AI Coding & Open Source',
      'ja': 'AIコーディングとオープンソースに情熱を注いでいます'
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
