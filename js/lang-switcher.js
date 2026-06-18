(function() {
  var LANGS = [
    { key: 'zh-CN', label: '中文', short: '中' },
    { key: 'en',    label: 'English', short: 'EN' },
    { key: 'ja',    label: '日本語', short: '日' }
  ];

  // Detect current language from URL
  function detectLang() {
    var p = window.location.pathname;
    if (p.indexOf('/en/') === 0) return 'en';
    if (p.indexOf('/ja/') === 0) return 'ja';
    return 'zh-CN';
  }

  var currentLang = detectLang();

  function langPrefix(lang) {
    return lang === 'zh-CN' ? '' : '/' + lang;
  }

  function stripLang(path) {
    if (path.indexOf('/en/') === 0) return path.substring(3) || '/';
    if (path.indexOf('/ja/') === 0) return path.substring(3) || '/';
    return path;
  }

  function toLangPath(path, lang) {
    var bare = stripLang(path);
    return langPrefix(lang) + (bare === '/' ? '/' : bare);
  }

  // Rewrite all internal links to current language
  function rewriteLinks() {
    var base = langPrefix(currentLang) || '';
    var links = document.querySelectorAll('a[href]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var href = a.getAttribute('href');
      if (!href) continue;
      // Only rewrite internal paths (start with /)
      if (href.charAt(0) !== '/' || href.indexOf('//') === 0) continue;
      // Skip anchor links
      if (href.charAt(1) === '#') continue;
      // Skip already-prefixed paths
      if (href.indexOf('/en/') === 0 || href.indexOf('/ja/') === 0) continue;
      // Don't rewrite external-looking paths
      if (/^\/\/|^https?:/.test(href)) continue;
      // Apply language prefix
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
