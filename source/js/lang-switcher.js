(function() {
  var langs = {
    'zh-CN': { label: '中', path: '' },
    'en':    { label: 'EN', path: '/en/' },
    'ja':    { label: '日', path: '/ja/' }
  };

  var current = window.location.pathname;
  var activeLang = 'zh-CN';
  if (current.indexOf('/en/') === 0) activeLang = 'en';
  else if (current.indexOf('/ja/') === 0) activeLang = 'ja';

  var container = document.createElement('span');
  container.className = 'lang-switcher';

  Object.keys(langs).forEach(function(key) {
    var a = document.createElement('a');
    var l = langs[key];
    a.href = l.path || '/';
    a.textContent = l.label;
    if (key === activeLang) a.className = 'active';
    container.appendChild(a);
  });

  var nav = document.getElementById('menus');
  if (nav) {
    var items = nav.querySelector('.menus_items');
    if (items) items.appendChild(container);
  }
})();
