(function() {
  var langs = [
    { key: 'zh-CN', label: '中文', short: '中' },
    { key: 'en',    label: 'English', short: 'EN' },
    { key: 'ja',    label: '日本語', short: '日' }
  ];

  var path = window.location.pathname;
  var active = 'zh-CN';
  var sub = '';

  // Detect current language and sub-path
  if (path.indexOf('/en/') === 0) {
    active = 'en';
    sub = path.substring(3); // remove '/en'
  } else if (path.indexOf('/ja/') === 0) {
    active = 'ja';
    sub = path.substring(3); // remove '/ja'
  } else {
    sub = path;
  }

  // Build URL for target language
  function langUrl(key) {
    if (key === 'zh-CN') return sub || '/';
    return '/' + key + (sub || '/');
  }

  // Find current lang info
  var currentLang = langs.filter(function(l) { return l.key === active; })[0];

  // Build the switcher
  var wrap = document.createElement('div');
  wrap.className = 'lang-switcher';

  var btn = document.createElement('button');
  btn.className = 'lang-btn';
  btn.innerHTML = '<i class="fas fa-globe"></i> ' + currentLang.short;

  var menu = document.createElement('div');
  menu.className = 'lang-dropdown';

  langs.forEach(function(l) {
    var a = document.createElement('a');
    a.href = langUrl(l.key);
    a.textContent = l.label;
    if (l.key === active) a.className = 'active';
    menu.appendChild(a);
  });

  wrap.appendChild(btn);
  wrap.appendChild(menu);
  document.body.appendChild(wrap);
})();
