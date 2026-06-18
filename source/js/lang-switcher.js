(function() {
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

  // Rewrite all internal links to match the current language
  // Only processes zh-CN pages (adds no prefix) or strips wrong-lang prefixes.
  function rewriteLinks() {
    // Only rewrite when on a non-default language page
    if (currentLang === 'zh-CN') return;
    var base = langPrefix(currentLang);
    var links = document.querySelectorAll('a[href]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var href = a.getAttribute('href');
      if (!href) continue;
      // Only rewrite root-relative paths
      if (href.charAt(0) !== '/') continue;
      // Skip protocol-relative or absolute URLs
      if (/^\/\/|^https?:/.test(href)) continue;
      // Skip anchor-only links like /#section
      if (/^\/#/.test(href)) continue;
      // Skip already correctly prefixed paths
      if (href.indexOf(base + '/') === 0 || href === base) continue;
      // Skip other language prefixes (don't cross-rewrite)
      if (/^\/(en|ja)(\/|$)/.test(href)) continue;
      // Apply current language prefix to bare internal paths
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
