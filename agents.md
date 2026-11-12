# AGENTS.md

给接手本仓库的 AI / 开发者：先读这份，再动手。设计与 i18n 架构细节见 [README.md](README.md)，本文只写操作规范和红线。

## 项目速览

- Hexo 8 + Butterfly 主题（vendored 在 `themes/butterfly`，深度定制），个人博客（中文 / English 为主；日本語存量保留、已冻结，见 i18n 机制）
- 线上：https://caeamer.com（GitHub Pages，仓库 `coderirse/coderirse.github.io`）
- Node.js 20+，包管理器只用 **pnpm**（CI 用 `--frozen-lockfile`，不要换 npm/yarn，不要提交其他锁文件）
- 站点身份统一为 `lizhichao`，定位 Android 工具 + AI Agent

## 分支与推送

| 分支 | 用途 | 能不能手动改 |
|------|------|--------------|
| `source` | 唯一日常开发分支，所有改动在这 | ✅ |
| `main` | 镜像 `source` 最新稳定状态 | 只做快进同步 |
| `master` | `hexo deploy` 自动推送的静态产物 | ❌ 永不手动编辑 |

- 功能开发可从 `source` 切分支再合回；版本 tag 打在 `source`
- **访客统计机器人每小时向 `source` 推提交**（`chore: update visitor stats (automated) [skip ci]`）。push 被拒时先 `git fetch` + `git pull --rebase`，**禁止 force push**
- 提交信息：Conventional Commits + 中文描述，如 `fix: 修复简历页时间轴未渲染`、`feat: 新增 MemeCollector 项目文章`

### 发布流程（按顺序）

```bash
pnpm run build                 # 1. 本地构建验证
pnpm run deploy                # 2. generate + deploy，SSH 推静态站到 master（需 GitHub SSH key）
git push origin source         # 3. 推源码；被拒先 pull --rebase（见上）
git push origin source:main    # 4. main 快进同步；非快进时先查原因，不要强推
git branch --show-current      # 5. 确认停在 source
```

线上有 GitHub Pages + Fastly 约 10 分钟缓存，部署后别急着判 bug。

## 常用命令与 CI

```bash
pnpm install        # 安装依赖
pnpm test           # 跑 i18n 管线单元测试（node --test，test/ 目录）
pnpm run server     # 本地预览 http://localhost:4000（i18n 页面自动生成）
pnpm run build      # 生成到 public/
pnpm run clean      # 清缓存（db.json）和生成物
```

- push `source` 触发 `.github/workflows/build.yml`：跑 `pnpm test` + 构建 + 检查 `public/{,en/,ja/}index.html` 存在、检查 pug 源码泄漏
- `db.json`、`public/`、`.deploy_git/`、`source/generated/` 均已 gitignore，不要提交

## 写新文章

1. **文件名用英文 slug**（URL 由文件名生成，中文文件名会变成百分号编码长链）。`npx hexo new "标题"` 后重命名文件。**存量例外**：早期中文文章保留中文文件名以维持已发布 URL 稳定，不迁移；新文章一律英文 slug
2. **中英同步**：`source/_posts/<slug>.md` + `source/en/_posts/<slug>.md`，两版 `translation_key` 必须一致；只改内容时中英一起改。**日文已冻结**：不再新增或更新日文翻译，存量 `source/ja/` 内容保留不动（切换器已隐藏日文项，见 i18n 机制）
3. frontmatter 必填：`title`、`translation_key`、`date`、`categories`、`tags`、`description`；可选 `cover`、`updated`。`updated_option: date`——不显式写 `updated` 就沿用 `date`，改旧文章记得补 `updated`
4. 分类固定映射，不要自创：

   | 中文 | English | 日本語 |
   |------|---------|--------|
   | 项目 | Projects | プロジェクト |
   | 开源观察 | Open Source Notes | オープンソース観察 |
   | 进行中 | In Progress | 進行中 |
   | 随笔 | Essays | エッセイ |

   （日本語列仅供存量文章参考，新文章不再写日文）

5. **项目文章**：frontmatter 后加状态行——`{% note info %}状态：… · 角色：… · 代码：公开/未开源 · 最后更新：YYYY-MM{% endnote %}`（en：`Status / Role / Code / Updated`；日文存量沿用 `状態 / 担当 / コード / 最終更新`，新文章不写）
6. **项目页入口**：新项目要同步加进 `source/projects/index.md` 及 `source/en/projects/index.md`（日文项目页冻结，不再同步），分区为「精选作品 / 工具与小作品 / 进行中 / 开源观察」，链接用 `{% post_link <slug> '阅读项目文章' %}`
7. **图注与参考文献**：图片放 `source/img/essays/<slug>/`，正文引用 `/img/essays/<slug>/<文件>`；每图下方紧跟斜体图注 `*图 N：说明。出处：来源（许可）[N]。*`，全文连续编号（封面不计）；引用处句末标 `[N]`；文末 `## 参考文献` 用 GB/T 7714 简化格式（en 用 `Fig. N`）

## 内容红线

- **归属**：作品集只放本人独立完成或深度参与的项目。第三方项目、fork、只读过/部署过的 → 归「开源观察」，开头用 `{% note info %}` 标原作者、仓库、License 和「我做了什么」。定制 fork 进作品集时必须显著署名上游，写清哪些是上游的、哪些是自己加的
- **措辞**：少用「创新 / 完整 / 必备 / 秒开 / 开箱即用」，多写数字、约束和局限
- **隐私**：公开站不露真名，统一 `lizhichao`（en/ja 页同样不用真名的罗马字/片假名拼写）。私密内容完全不进公开站——不做加密文章、隐藏 URL、带锁条目，不留任何入口或存在性提示
- **`source/_private/`**：git-only 私有存档（下划线目录 Hexo 不渲染、不进 `public/`）。不要移回可渲染目录、不要在公开站提及或链接；重新公开的流程见该目录内 README
- **文风**：口语化、第一人称、括号碎碎念；续写/改写保留作者声音，不要书面化。随笔中人名统一用「刘胜与」

## 主题与样式

- 定制样式在 `source/css/custom.css`。**改它必须同步 bump `_config.butterfly.yml` 里 `custom.css?v=` 的版本号**（否则 Fastly 缓存 10 分钟不刷新）
- 颜色统一走 `:root` 变量（纸墨体系 + label 调色板 + `--on-accent`）。**大量 `!important` 是覆盖 vendored Butterfly 的必要手段，属遗留债**：不要盲目批量删除，需配合视觉回归逐步提特异性收敛
- 设计约束：杂志编辑风——无卡片、无阴影、无圆角、发丝线；暖纸底 + 墨色 + 朱砂 `#a63d2a`；字体自托管（Fraunces / JetBrains Mono），**不要加 Google Fonts 等第三方字体外链**
- Cloudflare 统计 token 在 `_config.butterfly.yml` **顶层** `cloudflare_analytics` 键（Butterfly 5.x 不从 `analytics:` 下读）

## i18n 机制（不要手改生成物）

- `scripts/i18n-posts.js` 在构建期把 en/ja 译文物化到 `source/generated/i18n-posts/`（gitignored），并生成语言切换路由映射 `i18n-post-map-{zh,en,ja}.js`（紧凑 JSON，减小每页 payload）
- **日期时区**：物化译文的 permalink 日期用 `config.timezone`（`Intl.DateTimeFormat`）计算，与 Hexo 中文 permalink 一致；不要改回 `getUTC*`（带偏移日期会错位一天）。单元测试在 `test/i18n-posts.test.js`（`pnpm test`）
- **封面判定单一来源**：`themes/butterfly/scripts/common/cover.js`（`IMG_TEST_REG`/`isImageCover`），`random_cover.js` 与 i18n 管线共用，改规则只改这一处
- **导航语言前缀只靠模板层 `lang_url_for`**（nav/侧栏菜单均已使用），i18n 的 `after_render:html` 不再做整页字符串兜底替换；新增导航项无需改 i18n
- **日文冻结（2026-11 起）**：新文章只维护中英；`source/ja/` 存量保留、构建期仍生成（`TRANSLATED_LANGS` 不动），但切换器隐藏日文项——`source/js/lang-switcher.js` 的 `HIDDEN_LANGS=['ja']`，恢复时改回 `[]`。改 `lang-switcher.js` 记得 bump `_config.butterfly.yml` 里 `lang-switcher.js?v=`。**hreflang 仍保留 ja alternate**（页面真实存在、对搜索引擎准确），与切换器隐藏是有意取舍，不要"顺手"删 ja alternate
- 改译文只改 `source/en/_posts/`（日文存量不再改）；`source/generated/` 永远不手改、不提交
- 静态页（首页 / about / resume / projects）中英各自维护 `source/en/` 下对应文件；日文存量保留
- 无译本的目标语言在切换器自动置灰，不要留死链

## 改动后验证清单

- [ ] `pnpm test` 通过；`pnpm run build` 成功，`public/index.html`、`public/en/index.html`、`public/ja/index.html` 都存在（日文存量仍生成）
- [ ] 新文章中英 permalink 均可访问，中英切换器能正确互跳（日文项已隐藏）
- [ ] 改了 `custom.css` → `?v=` 版本号已 bump；改了 `lang-switcher.js` → 其 `?v=` 也已 bump
- [ ] 项目文章 → 状态行、项目页中英入口、署名/分类归属已检查
- [ ] 发布流程五步走完，当前分支停在 `source`