/**
 * 访客数前端增强：尝试从 GitHub raw 拉取 Actions 每小时更新的最新统计，
 * 覆盖构建时注入的兜底数字；数据行不存在时（构建时无数据）动态创建。
 * raw.githubusercontent.com 在部分网络环境不可达——失败时静默保留兜底值。
 */
(function () {
  var RAW_URL = 'https://raw.githubusercontent.com/coderirse/coderirse.github.io/source/source/_data/visitor-stats.json';
  // 统计每小时才更新一次；本地缓存 1 小时，避免每页都请求 raw
  var CACHE_KEY = 'visitor-stats-cache';
  var CACHE_TTL = 3600000;
  var LABELS = {
    'zh-CN': { pv: '本站访问量', uv: '本站访客数' },
    en: { pv: 'Site Visits', uv: 'Site Visitors' },
    ja: { pv: 'サイト訪問数', uv: 'サイト訪問者' }
  };

  function detectLang() {
    var p = window.location.pathname;
    if (/^\/en(\/|$)/.test(p)) return 'en';
    if (/^\/ja(\/|$)/.test(p)) return 'ja';
    return 'zh-CN';
  }

  function formatNum(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function ensureRow(container, beforeEl, id, label) {
    var el = document.getElementById(id);
    if (el) return el;
    var item = document.createElement('div');
    item.className = 'webinfo-item';
    var name = document.createElement('div');
    name.className = 'item-name';
    name.textContent = label + ' :';
    var count = document.createElement('div');
    count.className = 'item-count';
    count.id = id;
    item.appendChild(name);
    item.appendChild(count);
    container.insertBefore(item, beforeEl || null);
    return count;
  }

  function apply(stats) {
    if (!stats || typeof stats.pv !== 'number' || typeof stats.visitors !== 'number') return;
    var webinfo = document.querySelector('.card-webinfo .webinfo');
    if (!webinfo) return;
    var labels = LABELS[detectLang()];
    var lastPush = document.getElementById('last-push-date');
    var lastPushItem = lastPush ? lastPush.closest('.webinfo-item') : null;

    var pvEl = ensureRow(webinfo, lastPushItem, 'visitor-stats-pv', labels.pv);
    var uvEl = ensureRow(webinfo, lastPushItem, 'visitor-stats-uv', labels.uv);
    pvEl.textContent = formatNum(stats.pv);
    uvEl.textContent = formatNum(stats.visitors);
  }

  function readCache() {
    try {
      var c = JSON.parse(localStorage.getItem(CACHE_KEY));
      if (c && c.stats && Date.now() - c.t < CACHE_TTL) return c.stats;
    } catch (e) { /* 隐私模式等不可用时忽略 */ }
    return null;
  }

  function writeCache(stats) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), stats: stats }));
    } catch (e) { /* 忽略 */ }
  }

  function init() {
    var cached = readCache();
    if (cached) { apply(cached); return; }
    var controller = new AbortController();
    var timer = setTimeout(function () { controller.abort(); }, 5000);
    fetch(RAW_URL, { cache: 'no-store', signal: controller.signal })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (stats) { clearTimeout(timer); apply(stats); if (stats) writeCache(stats); })
      .catch(function () { clearTimeout(timer); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
