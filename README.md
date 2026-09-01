# lizhichao's Blog / 李智超的个人博客

[![Build](https://github.com/coderirse/coderirse.github.io/actions/workflows/build.yml/badge.svg)](../../actions)
[![Hexo](https://img.shields.io/badge/Hexo-8.1.2-blue)](https://hexo.io)
[![Theme](https://img.shields.io/badge/Theme-Butterfly-purple)](https://github.com/jerryc127/hexo-theme-butterfly)

## English

### About

Trilingual (中文 / English / 日本語) personal blog built with [Hexo](https://hexo.io) and **Butterfly** theme, deployed on **GitHub Pages**.

URL: [https://caeamer.com](https://caeamer.com) (custom domain; `coderirse.github.io` redirects here)

### Design

The site uses a heavily customized **editorial / magazine** style layered on top of Butterfly (see `source/css/custom.css`):

- Warm paper background, ink text, cinnabar accent (`#a63d2a`)
- Serif typography — self-hosted Fraunces (Latin), system serif (CJK), self-hosted JetBrains Mono for code
- Homepage as a magazine masthead; post list as a numbered table of contents
- No cards, no shadows, no rounded corners — hairline rules everywhere
- Dark mode renders as a "night edition"
- Zero third-party font requests (Google Fonts removed for mainland accessibility)

### i18n Architecture

- Chinese posts live in `source/_posts/` (real Hexo posts: archives / tags / categories / RSS).
- English and Japanese translations live in `source/en/_posts/` and `source/ja/_posts/`.
  `scripts/i18n-posts.js` materializes them as permalink pages into `source/generated/i18n-posts/` at build time.
- Every version of a post shares the same `translation_key` frontmatter; the language switcher
  uses the generated per-language route map (`i18n-post-map-{zh,en,ja}.js`).
- Localized static pages (home / about / resume / projects) exist under `source/{en,ja}/`.
- hreflang alternates are injected automatically on every page.

### Getting Started

Requires Node.js 20+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm run server        # Local preview at http://localhost:4000
```

### Commands

| Command | Description |
|---------|-------------|
| `pnpm run server` | Start local dev server (i18n pages are generated automatically) |
| `pnpm run build`  | Generate static files to `public/` |
| `pnpm run clean`  | Clear cache and generated files |
| `pnpm run deploy` | Generate and deploy to GitHub Pages (SSH) |

### Writing a New Post

1. **Use an English filename** — the URL slug comes from the filename; Chinese filenames produce
   percent-encoded links.
2. Create the Chinese post, then mirror it under `source/en/_posts/` and `source/ja/_posts/`
   with the same `translation_key`:

```bash
npx hexo new "My New Post"
# rename source/_posts/My-New-Post.md if needed, edit content, add translation_key
# create source/en/_posts/my-new-post.md + source/ja/_posts/my-new-post.md
pnpm run deploy
git add . && git commit -m "new post" && git push origin source
```

### Tech Stack

- **Framework:** [Hexo](https://hexo.io) 8.x
- **Theme:** [Butterfly](https://github.com/jerryc127/hexo-theme-butterfly) (vendored + customized)
- **Fonts:** Fraunces & JetBrains Mono (self-hosted, latin/latin-ext subsets)
- **SEO:** sitemap.xml, atom.xml (RSS), robots.txt, hreflang alternates
- **Hosting:** GitHub Pages (free)
- **Analytics:** [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) — free, cookieless, enabled.
  Token lives in top-level `cloudflare_analytics` in `_config.butterfly.yml` (Butterfly 5.x reads it from the root, not under `analytics:`).
- **CI:** build verification on every push (`.github/workflows/build.yml`)

### Branch Structure

| Branch | Purpose |
|--------|---------|
| `main` | Trunk / default branch — mirrors the latest stable state of `source` |
| `source` | Development branch (all work happens here) |
| `master` | Generated static site (GitHub Pages deploy artifact, auto-pushed by `hexo deploy`) |

Releases are tagged on `source` (e.g. `v1.0.0`).

---

## 中文

### 关于

三语（中文 / English / 日本語）个人博客，基于 [Hexo](https://hexo.io) 和 **Butterfly** 主题构建，部署在 **GitHub Pages** 上。

访问地址：[https://caeamer.com](https://caeamer.com)（自定义域名，`coderirse.github.io` 会跳转到这里）

### 设计风格

在 Butterfly 基础上做了深度定制的**杂志编辑风**（见 `source/css/custom.css`）：

- 暖纸底色 + 墨色文字 + 朱砂红点缀（`#a63d2a`）
- 衬线排版——西文用自托管 Fraunces，中文走系统宋体，代码用自托管 JetBrains Mono
- 首页为杂志刊头，文章列表为编号目次式排版
- 无卡片、无阴影、无圆角，通篇发丝线
- 暗色模式为"夜读版"深墨底
- 零第三方字体请求（已移除 Google Fonts 外链，大陆访问不再被阻塞）

### 多语言架构

- 中文文章在 `source/_posts/`（真正的 Hexo 文章：归档 / 标签 / 分类 / RSS）。
- 英文、日文翻译在 `source/en/_posts/` 和 `source/ja/_posts/`，
  由 `scripts/i18n-posts.js` 在构建期物化为带 permalink 的页面（`source/generated/i18n-posts/`）。
- 同一篇文章的三个版本共享相同的 `translation_key`；语言切换器使用生成的
  分语言路由映射（`i18n-post-map-{zh,en,ja}.js`）。
- 静态页面（首页 / 关于 / 简历 / 项目）在 `source/{en,ja}/` 下有对应语言版本。
- 每个页面自动注入 hreflang 备用链接。

### 快速开始

需要 Node.js 20+ 和 [pnpm](https://pnpm.io)。

```bash
pnpm install
pnpm run server        # 本地预览 http://localhost:4000
```

### 常用命令

| 命令 | 说明 |
|------|------|
| `pnpm run server` | 启动本地开发服务器（i18n 页面自动生成） |
| `pnpm run build`  | 生成静态文件到 `public/` |
| `pnpm run clean`  | 清除缓存和生成文件 |
| `pnpm run deploy` | 生成并部署到 GitHub Pages（SSH） |

### 发布新文章

1. **文件名用英文 slug**——URL 由文件名生成，中文文件名会产生一长串百分号编码的链接。
2. 先写中文文章，再在 `source/en/_posts/`、`source/ja/_posts/` 建立同名（英文文件名）翻译，
   三个版本的 `translation_key` 保持一致：

```bash
npx hexo new "文章标题"
# 将文件重命名为英文 slug，编辑内容并添加 translation_key
# 创建 source/en/_posts/my-new-post.md 和 source/ja/_posts/my-new-post.md
pnpm run deploy
git add . && git commit -m "新文章" && git push origin source
```

### 技术栈

- **框架:** [Hexo](https://hexo.io) 8.x
- **主题:** [Butterfly](https://github.com/jerryc127/hexo-theme-butterfly)（vendored + 深度定制）
- **字体:** Fraunces、JetBrains Mono（自托管，latin/latin-ext 子集）
- **SEO:** sitemap.xml、atom.xml（RSS）、robots.txt、hreflang
- **托管:** GitHub Pages（免费）
- **统计:** [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/)——免费、无 Cookie，已启用。
  token 在 `_config.butterfly.yml` 顶层的 `cloudflare_analytics` 键（Butterfly 5.x 从根级读取，不在 `analytics:` 下）。
- **CI:** 每次推送自动做构建校验（`.github/workflows/build.yml`）

### 分支结构

| 分支 | 用途 |
|------|------|
| `main` | 主干 / 默认分支——同步 `source` 的最新稳定状态 |
| `source` | 日常开发分支（所有改动在此进行） |
| `master` | 生成的静态站点（GitHub Pages 部署产物，由 `hexo deploy` 自动推送） |

版本发布在 `source` 上打 tag（如 `v1.0.0`）。

---

**License:** MIT
