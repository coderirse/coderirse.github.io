/**
 * remark-hexo-tags — 把 Hexo 标签插件语法转换为 HTML
 * 支持：{% label 文字 颜色 %}、{% btn url, 文字, 图标 %}、
 *       {% note 类型 %}...{% endnote %}、{% timeline %}...{% endtimeline %}
 * 块级标签用「开/关 raw HTML div」技巧，行间内容仍按 Markdown 渲染。
 */
const COLORS = ['blue', 'green', 'orange', 'pink', 'red', 'purple', 'yellow', 'default'];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const LABEL_RE = /\{%\s*label\s+([^%]+?)\s*%\}/g;
const BTN_RE = /\{%\s*btn\s+([^,]+),\s*([^,%]+)(?:,\s*([^%]+))?\s*%\}/g;

function labelHtml(_m, body) {
  const parts = body.trim().split(/\s+/);
  let color = 'default';
  if (parts.length > 1 && COLORS.includes(parts[parts.length - 1])) color = parts.pop();
  return `<span class="hl-label ${color}">${esc(parts.join(' '))}</span>`;
}
function btnHtml(_m, url, text) {
  return `<a class="hx-btn" href="${esc(url.trim())}" target="_blank" rel="noopener">${esc(text.trim())}</a>`;
}
const convertInline = (text) => text.replace(LABEL_RE, labelHtml).replace(BTN_RE, btnHtml);

const paraText = (node) =>
  (node.children || []).map((c) => c.value || '').join('');

const NOTE_OPEN = /^\{%\s*note\s*([^%]*?)%}$/;
const NOTE_CLOSE = /^\{%\s*endnote\s*%\}$/;
const TL_OPEN = /^\{%\s*timeline\s*%\}$/;
const TL_CLOSE = /^\{%\s*endtimeline\s*%\}$/;
const TL_ITEM = /^\s*<!--\s*timeline\s*([\s\S]*?)-->\s*$/;
const TL_ITEM_END = /^\s*<!--\s*endtimeline\s*-->\s*$/;
const TAGONLY_RE = /^(\{%\s*(label|btn)\b[^%]*?%\}\s*)+$/;

const htmlNode = (value) => ({ type: 'html', value });

export default function remarkHexoTags() {
  return (tree) => {
    /* ---- 内联 label/btn：处理所有 text 节点 ---- */
    (function walk(node) {
      if (!node.children) return;
      const next = [];
      for (const child of node.children) {
        if (child.type === 'text' && child.value.includes('{%')) {
          const converted = convertInline(child.value);
          if (converted !== child.value) { next.push(htmlNode(converted)); continue; }
        }
        walk(child);
        next.push(child);
      }
      node.children = next;
    })(tree);

    /* ---- 预处理：把「行内混排的 note 标记」拆成独立节点 ----
       例如 `{% note info %}` 与正文同段（无空行）时，拆成 开div/段落/闭div */
    const NOTE_SPLIT_RE = /(\{%\s*note\s*[^%]*?%\}|\{%\s*endnote\s*%\})/g;
    const expanded = [];
    for (const node of tree.children) {
      if (node.type === 'paragraph') {
        const text = paraText(node);
        if (text.includes('{% note') || text.includes('{% endnote %}')) {
          const parts = text.split(NOTE_SPLIT_RE).filter((p) => p.trim());
          for (const part of parts) {
            const open = part.match(NOTE_OPEN);
            if (open) {
              const type = (open[1] || '').trim() || 'default';
              expanded.push(htmlNode(`<div class="note note-${esc(type)}">`));
            } else if (NOTE_CLOSE.test(part.trim())) {
              expanded.push(htmlNode('</div>'));
            } else {
              expanded.push({ type: 'paragraph', children: [{ type: 'text', value: part.trim() }] });
            }
          }
          continue;
        }
      }
      expanded.push(node);
    }
    tree.children = expanded;

    /* ---- 块级：note / timeline / 整行标签段落 ---- */
    let openItem = false;
    for (const node of tree.children) {
      if (node.type === 'paragraph') {
        const text = paraText(node).trim();

        if (NOTE_CLOSE.test(text)) { Object.assign(node, htmlNode('</div>')); continue; }
        const nm = text.match(NOTE_OPEN);
        if (nm) {
          const type = (nm[1] || '').trim() || 'default';
          Object.assign(node, htmlNode(`<div class="note note-${esc(type)}">`));
          continue;
        }

        if (TL_CLOSE.test(text)) { Object.assign(node, htmlNode('</div>')); continue; }
        if (TL_OPEN.test(text)) { Object.assign(node, htmlNode('<div class="timeline">')); continue; }

        if (TAGONLY_RE.test(text)) {
          Object.assign(node, htmlNode(`<div class="hl-group">${convertInline(text)}</div>`));
          continue;
        }
      }
      if (node.type === 'html') {
        if (TL_ITEM_END.test(node.value)) {
          if (openItem) { node.value = '</div></div>'; openItem = false; }
          continue;
        }
        const im = node.value.match(TL_ITEM);
        if (im) {
          const [date = '', title = ''] = (im[1] || '').split('|').map((s) => s.trim());
          node.value =
            (openItem ? '</div></div>' : '') +
            `<div class="tl-item"><div class="tl-head"><span class="tl-date">${esc(date)}</span><span class="tl-title">${esc(title)}</span></div><div class="tl-body">`;
          openItem = true;
        }
      }
    }
  };
}
