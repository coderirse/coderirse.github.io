# lizhichao's Blog / 李智超的个人博客

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-brightgreen)](https://coderirse.github.io)
[![Hexo](https://img.shields.io/badge/Hexo-8.1.2-blue)](https://hexo.io)
[![Theme](https://img.shields.io/badge/Theme-Butterfly-purple)](https://github.com/jerryc127/hexo-theme-butterfly)

## English

### About

Personal blog built with [Hexo](https://hexo.io) and **Butterfly** theme, deployed on **GitHub Pages**.

URL: [https://coderirse.github.io](https://coderirse.github.io)

### Getting Started

```bash
npm install
npm run server        # Local preview at http://localhost:4000
```

### Commands

| Command | Description |
|---------|-------------|
| `npm run server` | Start local dev server |
| `npm run build`  | Generate static files to `public/` |
| `npm run clean`  | Clear cache and generated files |
| `npm run deploy` | Deploy to GitHub Pages (SSH) |

### Branch Structure

| Branch | Purpose |
|--------|---------|
| `source` | Hexo source code (configs, posts, themes) |
| `master` | Generated static site (served by GitHub Pages) |

### Writing a New Post

```bash
npx hexo new "My New Post"
# Edit source/_posts/My-New-Post.md
npm run deploy
git add . && git commit -m "new post" && git push origin source
```

### Tech Stack

- **Framework:** [Hexo](https://hexo.io) 8.x
- **Theme:** [Butterfly](https://github.com/jerryc127/hexo-theme-butterfly)
- **Hosting:** GitHub Pages (free)
- **Analytics:** [Busuanzi](https://busuanzi.ibruce.info) (page view & visitor counter)

---

## 中文

### 关于

基于 [Hexo](https://hexo.io) 和 **Butterfly** 主题构建的个人博客，部署在 **GitHub Pages** 上。

访问地址：[https://coderirse.github.io](https://coderirse.github.io)

### 快速开始

```bash
npm install
npm run server        # 本地预览 http://localhost:4000
```

### 常用命令

| 命令 | 说明 |
|------|------|
| `npm run server` | 启动本地开发服务器 |
| `npm run build`  | 生成静态文件到 `public/` |
| `npm run clean`  | 清除缓存和生成文件 |
| `npm run deploy` | 部署到 GitHub Pages（SSH） |

### 分支结构

| 分支 | 用途 |
|------|------|
| `source` | Hexo 源码（配置、文章、主题） |
| `master` | 生成的静态站点（GitHub Pages 部署源） |

### 发布新文章

```bash
npx hexo new "文章标题"
# 编辑 source/_posts/文章标题.md
npm run deploy
git add . && git commit -m "新文章" && git push origin source
```

### 技术栈

- **框架:** [Hexo](https://hexo.io) 8.x
- **主题:** [Butterfly](https://github.com/jerryc127/hexo-theme-butterfly)
- **托管:** GitHub Pages（免费）
- **统计:** [不蒜子](https://busuanzi.ibruce.info)（访问量和访客统计）

---

**License:** MIT
