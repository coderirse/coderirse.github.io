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

  var LOCALIZED_PAGES = ['/', '/about/', '/resume/', '/projects/'];

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

    if (normalized.indexOf('/index.html') === normalized.length - '/index.html'.length) {
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

  function rewriteLinks() {
    var links = document.querySelectorAll('a[href]');

    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var href = a.getAttribute('href');
      if (!href) continue;
      if (href.charAt(0) !== '/') continue;
      if (/^\/\/|^https?:/.test(href)) continue;
      if (href === '/#' || href.indexOf('/#') === 0) continue;

      var nextHref = href;
      var translationEntry = getTranslationEntry(href);

      if (translationEntry && translationEntry[currentLang]) {
        nextHref = encodePath(translationEntry[currentLang]);
      } else if (isLocalizedPage(href)) {
        nextHref = toLangPath(href, currentLang);
      }

      if (nextHref !== href) {
        a.setAttribute('href', nextHref);
      }
    }
  }

  function buildSwitcher() {
    var cur = LANGS.filter(function(l) {
      return l.key === currentLang;
    })[0];

    var wrap = document.createElement('div');
    wrap.className = 'lang-switcher';

    var btn = document.createElement('button');
    btn.className = 'lang-btn';
    btn.innerHTML = '<i class="fas fa-globe"></i> ' + cur.short;

    var menu = document.createElement('div');
    menu.className = 'lang-dropdown';

    LANGS.forEach(function(l) {
      var a = document.createElement('a');
      a.href = toLangPath(window.location.pathname, l.key);
      a.textContent = l.label;

      if (l.key === currentLang) {
        a.className = 'active';
        a.setAttribute('onclick', 'event.preventDefault()');
        a.style.cursor = 'default';
        a.style.opacity = '0.5';
        a.style.pointerEvents = 'none';
      }

      menu.appendChild(a);
    });

    wrap.appendChild(btn);
    wrap.appendChild(menu);
    document.body.appendChild(wrap);
  }

  rewriteLinks();
  buildSwitcher();
})();
