/* ================================================================
   VISUAL OVERHAUL — 数字刊物 2.0 引擎
   过场 / 刊头 / 跑马灯 / 多幕首页 / 平滑滚动 / 光标 / 页面过渡 / 头图视差
   依赖：Lenis + GSAP + ScrollTrigger（source/js/vendor/），缺失时优雅降级
   ================================================================ */
(function () {
  'use strict';

  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FINE_POINTER = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var HTML_LANG = (document.documentElement.lang || 'zh-CN').toLowerCase();
  var LANG = HTML_LANG.indexOf('en') === 0 ? 'en' : HTML_LANG.indexOf('ja') === 0 ? 'ja' : 'zh';
  var PATH = window.location.pathname;
  var IS_HOME = /^\/(en\/?|ja\/?)?$/.test(PATH) || PATH === '/index.html' ||
    !!document.querySelector('#page-header.lang-home-header');
  var HAS_GSAP = typeof window.gsap !== 'undefined';
  var HAS_LENIS = typeof window.Lenis !== 'undefined';

  /* ---------------- 多语言文案 ---------------- */
  var I18N = {
    zh: {
      eyebrow: 'LIZHICHAO — A PERSONAL JOURNAL OF CODE & IDEAS',
      tagline: '记录成长 · 分享知识 · KEEP MOVING',
      latest: '最新文章',
      latestEn: 'LATEST WRITING',
      projects: '项目作品',
      projectsEn: 'SELECTED WORKS',
      about: '关于我',
      aboutEn: 'ABOUT',
      toc: '文章目次',
      tocEn: 'INDEX',
      readMore: '阅读全文',
      moreProjects: '查看全部项目',
      aboutLine: '我是李智超，一名热爱 <em>vibe coding</em> 的软件工程师，痴迷于用代码把想法变成现实。',
      marquee: ['CODE', 'ROBOTICS', 'AI', 'WRITING', 'OPEN SOURCE'],
      aboutLinks: [
        { text: 'GITHUB', url: 'https://github.com/coderirse' },
        { text: 'EMAIL', url: 'mailto:caeamer@163.com' },
        { text: 'ABOUT', url: '/about/' },
        { text: 'RESUME', url: '/resume/' }
      ]
    },
    en: {
      eyebrow: 'LIZHICHAO — A PERSONAL JOURNAL OF CODE & IDEAS',
      tagline: 'CODE · ROBOTICS · AI · WRITING',
      latest: 'Latest Writing',
      latestEn: 'LATEST WRITING',
      projects: 'Selected Works',
      projectsEn: 'SELECTED WORKS',
      about: 'About Me',
      aboutEn: 'ABOUT',
      toc: 'All Entries',
      tocEn: 'INDEX',
      readMore: 'Read the story',
      moreProjects: 'View all projects',
      aboutLine: 'I\'m Li Zhichao, a software engineer who loves <em>vibe coding</em> and turning ideas into reality.',
      marquee: ['CODE', 'ROBOTICS', 'AI', 'WRITING', 'OPEN SOURCE'],
      aboutLinks: [
        { text: 'GITHUB', url: 'https://github.com/coderirse' },
        { text: 'EMAIL', url: 'mailto:caeamer@163.com' },
        { text: 'ABOUT', url: '/en/about/' },
        { text: 'RESUME', url: '/en/resume/' }
      ]
    },
    ja: {
      eyebrow: 'LIZHICHAO — A PERSONAL JOURNAL OF CODE & IDEAS',
      tagline: 'コード · ロボティクス · AI · 執筆',
      latest: '最新の記事',
      latestEn: 'LATEST WRITING',
      projects: 'プロジェクト',
      projectsEn: 'SELECTED WORKS',
      about: '私について',
      aboutEn: 'ABOUT',
      toc: '記事一覧',
      tocEn: 'INDEX',
      readMore: '続きを読む',
      moreProjects: 'すべてのプロジェクト',
      aboutLine: '李智超です。<em>vibe coding</em> を愛するソフトウェアエンジニア。アイデアをコードで形にするのが好きです。',
      marquee: ['CODE', 'ROBOTICS', 'AI', 'WRITING', 'OPEN SOURCE'],
      aboutLinks: [
        { text: 'GITHUB', url: 'https://github.com/coderirse' },
        { text: 'EMAIL', url: 'mailto:caeamer@163.com' },
        { text: 'ABOUT', url: '/ja/about/' },
        { text: 'RESUME', url: '/ja/resume/' }
      ]
    }
  };
  var T = I18N[LANG];

  var lenis = null;

  /* ---------------- Lenis 平滑滚动 ---------------- */
  function initLenis() {
    if (!HAS_LENIS || REDUCED) return;
    lenis = new window.Lenis({ duration: 1.15, smoothWheel: true });
    if (HAS_GSAP && window.ScrollTrigger) {
      lenis.on('scroll', window.ScrollTrigger.update);
      window.gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
      window.gsap.ticker.lagSmoothing(0);
    } else {
      var raf = function (time) { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }

  /* ---------------- 自定义光标 ---------------- */
  function initCursor() {
    if (!FINE_POINTER || REDUCED || !HAS_GSAP) return;
    var dot = document.createElement('div');
    var ring = document.createElement('div');
    dot.className = 'vh-cursor-dot';
    ring.className = 'vh-cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    var dx = window.gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power2.out' });
    var dy = window.gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power2.out' });
    var rx = window.gsap.quickTo(ring, 'x', { duration: 0.32, ease: 'power3.out' });
    var ry = window.gsap.quickTo(ring, 'y', { duration: 0.32, ease: 'power3.out' });
    window.gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    window.addEventListener('mousemove', function (e) {
      dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY);
    });
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest('a, button, .lang-btn')) ring.classList.add('is-hover');
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest('a, button, .lang-btn')) ring.classList.remove('is-hover');
    });
  }

  /* ---------------- 页面过渡幕布 ---------------- */
  function initWipe() {
    if (REDUCED || !HAS_GSAP) return;
    var wipe = document.createElement('div');
    wipe.id = 'vh-wipe';
    document.body.appendChild(wipe);
    // 进场：幕布升起退场
    window.gsap.fromTo(wipe, { scaleY: 1 }, {
      scaleY: 0, duration: 0.7, ease: 'power3.inOut', transformOrigin: 'top', delay: 0.05
    });
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) window.gsap.set(wipe, { scaleY: 0 });
    });
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a');
      if (!a) return;
      var href = a.getAttribute('href') || '';
      if (!href || href.charAt(0) === '#' || a.target === '_blank' || a.hasAttribute('download')) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var url;
      try { url = new URL(href, window.location.href); } catch (err) { return; }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === PATH && url.hash) return;
      e.preventDefault();
      if (lenis) lenis.stop();
      window.gsap.fromTo(wipe, { scaleY: 0 }, {
        scaleY: 1, duration: 0.5, ease: 'power3.inOut', transformOrigin: 'bottom',
        onComplete: function () { window.location.href = url.href; }
      });
    });
  }

  /* ---------------- 过场 Preloader ---------------- */
  function runVeil(onDone) {
    var veil = document.createElement('div');
    veil.id = 'vh-veil';
    veil.innerHTML =
      '<div class="veil-tag">LIZHICHAO — JOURNAL</div>' +
      '<div class="veil-line"><span class="veil-word">Create</span></div>' +
      '<div class="veil-line"><span class="veil-word"><em>infinite</em></span></div>' +
      '<div class="veil-line"><span class="veil-word">possibilities</span></div>' +
      '<div class="veil-counter">00</div>';
    document.body.appendChild(veil);
    if (lenis) lenis.stop();
    var counter = veil.querySelector('.veil-counter');
    var progress = { v: 0 };
    var tl = window.gsap.timeline({
      onComplete: function () {
        veil.remove();
        if (lenis) lenis.start();
        try { sessionStorage.setItem('vh-seen', '1'); } catch (e) {}
        onDone();
      }
    });
    tl.to(veil.querySelectorAll('.veil-word'), {
      y: 0, duration: 0.85, ease: 'power4.out', stagger: 0.14
    })
      .to(progress, {
        v: 100, duration: 1.0, ease: 'power2.inOut',
        onUpdate: function () {
          counter.textContent = String(Math.round(progress.v)).padStart(2, '0');
        }
      }, '<')
      .to(veil, { yPercent: -100, duration: 0.9, ease: 'power4.inOut', delay: 0.25 });
  }

  /* ---------------- 刊头改造 ---------------- */
  function transformMasthead() {
    var info = document.querySelector('#site-info') ||
      document.querySelector('#page-header.lang-home-header .lang-home-site-info');
    if (!info) return null;
    var social = info.querySelector('#site_social_icons');
    info.innerHTML =
      '<div class="mh-eyebrow">' + T.eyebrow + '</div>' +
      '<h1 class="mh-slogan">' +
      '<span class="mh-row"><span class="mh-word">Create</span></span>' +
      '<span class="mh-row"><span class="mh-word"><em>infinite</em></span></span>' +
      '<span class="mh-row"><span class="mh-word">possibilities</span></span>' +
      '</h1>' +
      '<div class="mh-sub"><span>' + T.tagline + '</span></div>';
    if (social) info.appendChild(social);
    return info;
  }

  function mastheadIntro() {
    if (!HAS_GSAP || REDUCED) return;
    window.gsap.fromTo('.mh-word', { y: '115%' }, {
      y: 0, duration: 1.0, ease: 'power4.out', stagger: 0.12
    });
    window.gsap.fromTo('.mh-eyebrow, .mh-sub', { opacity: 0, y: 18 }, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.5, stagger: 0.15
    });
  }

  /* ---------------- 跑马灯 ---------------- */
  function buildMarquee() {
    var header = document.getElementById('page-header');
    if (!header || !header.parentNode) return;
    var group = '';
    var words = ['CREATE INFINITE POSSIBILITIES'].concat(T.marquee);
    for (var r = 0; r < 3; r++) {
      words.forEach(function (w) {
        group += '<span>' + w + ' <b>◆</b></span>';
      });
    }
    var mq = document.createElement('div');
    mq.className = 'vh-marquee';
    mq.innerHTML = '<div class="mq-track">' + group + group + '</div>';
    header.parentNode.insertBefore(mq, header.nextSibling);
  }

  /* ---------------- 多幕首页 ---------------- */
  function actLabel(no, name, en) {
    return '<div class="act-label"><span class="no">ACT ' + no + '</span>' +
      '<span class="name">' + name + '</span>' +
      '<span class="en">' + en + '</span></div>';
  }

  function buildActs(data) {
    var contentInner = document.getElementById('content-inner');
    if (!contentInner) return;

    /* 第一幕：最新特写 */
    var feat = data.posts && data.posts[0];
    if (feat) {
      var f = document.createElement('section');
      f.className = 'vh-act vh-feature';
      f.id = 'vh-act-feature';
      f.innerHTML = actLabel('01', T.latest, T.latestEn) +
        '<div class="feat-grid">' +
        '<div class="feat-cover"><img src="' + feat.cover + '" alt=""></div>' +
        '<div class="feat-body">' +
        '<div class="feat-kicker">' + feat.date + (feat.category ? ' · ' + feat.category : '') + '</div>' +
        '<h2 class="feat-title"><a href="' + feat.url + '">' + feat.title + '</a></h2>' +
        '<p class="feat-excerpt">' + feat.excerpt + '</p>' +
        '<div class="feat-meta"><a href="' + feat.url + '" style="color:inherit;text-decoration:none">' +
        T.readMore + ' <i>→</i></a></div>' +
        '</div></div>';
      contentInner.parentNode.insertBefore(f, contentInner);
    }

    /* 第二幕：项目横向滚动带 */
    if (data.projects && data.projects.length) {
      var p = document.createElement('section');
      p.className = 'vh-act vh-projects';
      p.id = 'vh-act-projects';
      var cards = '';
      data.projects.forEach(function (pr, i) {
        cards += '<a class="vh-proj-card" href="' + data.projectsUrl + '">' +
          '<span class="idx">' + String(i + 1).padStart(2, '0') + '</span>' +
          '<span class="p-title">' + pr.title + '</span>' +
          '<span class="p-blurb">' + pr.blurb + '</span>' +
          '<span class="p-more">' + T.moreProjects + ' →</span></a>';
      });
      p.innerHTML = '<div class="proj-pin">' + actLabel('02', T.projects, T.projectsEn) +
        '<div class="proj-track">' + cards + '</div>' +
        '<div class="proj-progress"><i></i></div></div>';
      contentInner.parentNode.insertBefore(p, contentInner);
    }

    /* 第三幕：关于我 */
    var a = document.createElement('section');
    a.className = 'vh-act vh-about';
    a.id = 'vh-act-about';
    var links = '';
    T.aboutLinks.forEach(function (l) {
      links += '<a href="' + l.url + '"' + (/^https?:/.test(l.url) ? ' target="_blank" rel="noopener"' : '') + '>' + l.text + '</a>';
    });
    a.innerHTML = actLabel('03', T.about, T.aboutEn) +
      '<div class="about-grid">' +
      '<img class="about-avatar" src="/img/touxiang.png" alt="avatar">' +
      '<div><p class="about-line">' + T.aboutLine + '</p>' +
      '<div class="about-links">' + links + '</div></div></div>';
    contentInner.parentNode.insertBefore(a, contentInner);

    /* 目次区标签（插入 #recent-posts 内部，避免成为 .layout 的 flex 子项被挤压） */
    var recent = document.getElementById('recent-posts');
    if (recent) {
      var lbl = document.createElement('div');
      lbl.className = 'vh-act-label-toc';
      lbl.innerHTML = actLabel('04', T.toc, T.tocEn);
      lbl.style.marginBottom = '1rem';
      recent.insertBefore(lbl, recent.firstChild);
    }
  }

  /* ---------------- GSAP 场景 ---------------- */
  function initScenes() {
    if (!HAS_GSAP || !window.ScrollTrigger || REDUCED) return;
    window.gsap.registerPlugin(window.ScrollTrigger);

    /* 特写封面视差 */
    var featImg = document.querySelector('.vh-feature .feat-cover img');
    if (featImg) {
      window.gsap.fromTo(featImg, { yPercent: -10 }, {
        yPercent: 6, ease: 'none',
        scrollTrigger: { trigger: '.vh-feature', start: 'top bottom', end: 'bottom top', scrub: true }
      });
    }
    /* 特写文字入场 */
    var featBody = document.querySelector('.vh-feature .feat-body');
    if (featBody) {
      window.gsap.from(featBody.children, {
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '.vh-feature', start: 'top 70%' }
      });
    }

    /* 项目横向滚动（CSS sticky + scrub，不依赖 ScrollTrigger pin） */
    var track = document.querySelector('.vh-projects .proj-track');
    var projSection = document.querySelector('.vh-projects');
    if (track && projSection) {
      var getDist = function () { return Math.max(0, track.scrollWidth - window.innerWidth); };
      var setHeight = function () {
        projSection.style.height = (window.innerHeight + getDist() + Math.round(window.innerHeight * 0.2)) + 'px';
      };
      setHeight();
      window.ScrollTrigger.addEventListener('refreshInit', setHeight);
      window.gsap.to(track, {
        x: function () { return -getDist(); },
        ease: 'none',
        scrollTrigger: {
          trigger: projSection,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: function (self) {
            var bar = document.querySelector('.vh-projects .proj-progress i');
            if (bar) bar.style.width = (self.progress * 100).toFixed(2) + '%';
          }
        }
      });
    }

    /* 关于我入场 */
    var aboutGrid = document.querySelector('.vh-about .about-grid');
    if (aboutGrid) {
      window.gsap.from(aboutGrid.children, {
        opacity: 0, y: 50, duration: 1.0, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: '.vh-about', start: 'top 72%' }
      });
    }

    /* 目次逐条浮现 */
    window.gsap.utils.toArray('.recent-post-item').forEach(function (item) {
      window.gsap.from(item, {
        opacity: 0, y: 48, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: item, start: 'top 88%' }
      });
    });

    /* 侧边栏浮现 */
    window.gsap.utils.toArray('#aside-content .card-widget').forEach(function (card, i) {
      window.gsap.from(card, {
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out', delay: (i % 3) * 0.08,
        scrollTrigger: { trigger: card, start: 'top 92%' }
      });
    });
  }

  /* ---------------- 目次悬浮预览 ---------------- */
  function initPreview(data) {
    if (!FINE_POINTER || REDUCED || !HAS_GSAP || !data || !data.posts) return;
    var coverByUrl = {};
    data.posts.forEach(function (p) { if (p.cover) coverByUrl[p.url] = p.cover; });
    var box = document.createElement('div');
    box.id = 'vh-preview';
    box.innerHTML = '<img alt="">';
    document.body.appendChild(box);
    var img = box.querySelector('img');
    var xTo = window.gsap.quickTo(box, 'x', { duration: 0.35, ease: 'power3.out' });
    var yTo = window.gsap.quickTo(box, 'y', { duration: 0.35, ease: 'power3.out' });
    document.addEventListener('mousemove', function (e) {
      xTo(e.clientX + 24); yTo(e.clientY - 100);
    });
    document.querySelectorAll('.recent-post-item').forEach(function (item) {
      var link = item.querySelector('a.article-title');
      if (!link) return;
      var url = link.getAttribute('href');
      var cover = coverByUrl[url];
      if (!cover) return;
      item.addEventListener('mouseenter', function () {
        img.src = cover;
        window.gsap.to(box, { opacity: 1, duration: 0.25, ease: 'power2.out' });
      });
      item.addEventListener('mouseleave', function () {
        window.gsap.to(box, { opacity: 0, duration: 0.2, ease: 'power2.in' });
      });
    });
  }

  /* ---------------- 文章页头图视差 ---------------- */
  function initPostCover() {
    var header = document.querySelector('#page-header.post-bg');
    if (!header) return;
    var m = (header.getAttribute('style') || '').match(/url\((['"]?)([^)'"]+)\1\)/);
    if (!m) return;
    var src = m[2].replace(/&amp;/g, '&');
    var img = document.createElement('img');
    img.className = 'post-cover-img';
    img.src = src;
    img.alt = '';
    header.insertBefore(img, header.firstChild);
    if (HAS_GSAP && window.ScrollTrigger && !REDUCED) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.gsap.fromTo(img, { yPercent: -8 }, {
        yPercent: 8, ease: 'none',
        scrollTrigger: { trigger: header, start: 'top top', end: 'bottom top', scrub: true }
      });
      window.gsap.from('#post-info > *', {
        opacity: 0, y: 36, duration: 1.0, ease: 'power3.out', stagger: 0.12, delay: 0.2
      });
    }
  }

  /* ---------------- 页脚终端纹理 ---------------- */
  function initFooterTerm() {
    var footer = document.getElementById('footer');
    if (!footer || REDUCED) return;
    var wrap = document.createElement('div');
    wrap.className = 'vh-term';
    var canvas = document.createElement('canvas');
    wrap.appendChild(canvas);
    footer.insertBefore(wrap, footer.firstChild);
    var ctx = canvas.getContext('2d');
    var cols, drops, running = false, timer = null;
    function resize() {
      canvas.width = footer.clientWidth;
      canvas.height = footer.clientHeight;
      cols = Math.floor(canvas.width / 16);
      drops = [];
      for (var i = 0; i < cols; i++) drops.push(Math.random() * -40);
    }
    function tick() {
      ctx.fillStyle = 'rgba(0,0,0,0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '12px "JetBrains Mono", monospace';
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--ink') || '#888';
      for (var i = 0; i < cols; i++) {
        var ch = Math.random() > 0.5 ? '1' : '0';
        ctx.fillText(ch, i * 16, drops[i] * 14);
        if (drops[i] * 14 > canvas.height && Math.random() > 0.98) drops[i] = 0;
        drops[i] += 0.5;
      }
    }
    resize();
    window.addEventListener('resize', resize);
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && !running) { running = true; timer = setInterval(tick, 90); }
        else if (!en.isIntersecting && running) { running = false; clearInterval(timer); }
      });
    }).observe(footer);
  }

  /* ---------------- 启动 ---------------- */
  function boot() {
    document.documentElement.classList.add('js-anim');
    initLenis();
    initCursor();
    initWipe();
    initFooterTerm();

    if (!IS_HOME) {
      initPostCover();
      return;
    }

    fetch('/generated/home-data-' + LANG + '.json')
      .then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; })
      .then(function (data) {
        transformMasthead();
        buildMarquee();
        if (data) buildActs(data);
        var seen = /[?&]noveil=1/.test(window.location.search);
        try { seen = seen || !!sessionStorage.getItem('vh-seen'); } catch (e) {}
        if (!REDUCED && HAS_GSAP && !seen) {
          runVeil(function () { mastheadIntro(); });
        } else {
          mastheadIntro();
        }
        initScenes();
        initPreview(data);
      });
  }

  if (document.readyState === 'complete') {
    boot();
  } else {
    window.addEventListener('load', boot);
  }
})();
