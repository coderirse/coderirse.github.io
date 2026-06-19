(function() {
  var path = window.location.pathname;
  if (path !== '/en/' && path !== '/ja/' && path !== '/en' && path !== '/ja') return;

  var lang = path.indexOf('/en') === 0 ? 'en' : 'ja';
  var subs = {
    en: ['Love tech, keep learning, keep moving', 'Welcome to my personal blog', 'Recording growth, sharing knowledge'],
    ja: ['テクノロジーを愛し、学び続け、前進する', '私のブログへようこそ', '成長を記録し、知識を共有する']
  };

  var siteInfo = document.getElementById('site-info');
  if (!siteInfo) return;

  var wrap = document.createElement('div');
  wrap.id = 'site-subtitle';
  var span = document.createElement('span');
  span.id = 'subtitle';
  wrap.appendChild(span);
  siteInfo.appendChild(wrap);

  function init() {
    if (typeof Typed === 'function') {
      new Typed('#subtitle', {
        strings: subs[lang],
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
      });
    } else {
      btf.getScript('/js/typed.js').then(function() {
        new Typed('#subtitle', {
          strings: subs[lang],
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 40,
          loop: true
        });
      });
    }
  }

  init();
})();
