(function() {
  // ---- 同步字体修复：在 DOM 解析前执行，消除闪版 ----
  (function fixFontSync() {
    var p = window.location.pathname;
    var lang = p.startsWith('/en/') ? 'en' : p.startsWith('/ja/') ? 'ja' : 'zh-CN';
    var fonts = {
      'zh-CN': '-apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Noto Sans SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif',
      'ja':     '-apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "Noto Sans JP", "BIZ UDPGothic", "PingFang SC", "Microsoft YaHei", sans-serif',
      'en':     '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Roboto, Lato, sans-serif'
    };
    document.documentElement.style.fontFamily = fonts[lang];
    // 同时修正 <html lang> 属性，让 CSS 选择器也能匹配
    document.documentElement.setAttribute('lang', lang);
  })();

  var LANGS = [
    { key: 'zh-CN', label: '中文', short: '中' },
    { key: 'en',    label: 'English', short: 'EN' },
    { key: 'ja',    label: '日本語', short: '日' }
  ];

  // Detect current language from URL path
  // Supports both /en/... and /en (root without trailing slash)
  function detectLang() {
    var p = window.location.pathname;
    if (/^\/en(\/|$)/.test(p)) return 'en';
    if (/^\/ja(\/|$)/.test(p)) return 'ja';
    return 'zh-CN';
  }

  var currentLang = detectLang();

  // Sync <html lang="..."> so CSS font selectors (html[lang=...]) work correctly
  // even when the page itself was rendered with a different lang value.
  document.documentElement.setAttribute('lang', currentLang);

  function langPrefix(lang) {
    return lang === 'zh-CN' ? '' : '/' + lang;
  }

  // Strip any existing /en or /ja prefix and return the bare path
  function stripLang(path) {
    return path.replace(/^\/(en|ja)(\/|$)/, '/') || '/';
  }

  function toLangPath(path, lang) {
    var bare = stripLang(path);
    if (lang === 'zh-CN') return bare;
    // Ensure bare starts with / before prepending prefix
    if (bare.charAt(0) !== '/') bare = '/' + bare;
    return '/' + lang + bare;
  }

  // Determine if a URL path looks like a blog post (/YYYY/MM/DD/slug/)
  function isPostPath(path) {
    return /^\/20\d{2}\/\d{2}\/\d{2}\//.test(path);
  }

  // Rewrite internal links to match the current language.
  // IMPORTANT: post URLs (/YYYY/MM/DD/...) only exist in the default (zh-CN)
  //   namespace. Do NOT add /en/ or /ja/ prefix to them, otherwise they 404.
  //   Only page links (about, resume, projects, tags, categories, archives)
  //   get the language prefix.
  function rewriteLinks() {
    // On zh-CN: nothing to rewrite (posts & pages are at root, already correct)
    if (currentLang === 'zh-CN') return;

    var base = langPrefix(currentLang); // e.g. '/en'
    var links = document.querySelectorAll('a[href]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var href = a.getAttribute('href');
      if (!href) continue;

      // Only process root-relative paths
      if (href.charAt(0) !== '/') continue;
      // Skip protocol-relative / absolute URLs
      if (/^\/\/|^https?:/.test(href)) continue;
      // Skip anchor-only links
      if (href === '/#' || href.indexOf('/#') === 0) continue;
      // Skip already-prefixed paths
      if (href.indexOf(base + '/') === 0 || href === base) continue;
      // Skip other language prefixes
      if (/^\/(en|ja)(\/|$)/.test(href)) continue;
      // === DO NOT prefix post URLs — they only exist at root ===
      if (isPostPath(href)) continue;
      // Apply current language prefix to page links only
      a.setAttribute('href', base + href);
    }
  }

  // Build language switcher button
  function buildSwitcher() {
    var cur = LANGS.filter(function(l) { return l.key === currentLang; })[0];

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
        // Prevent navigating to same lang
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
