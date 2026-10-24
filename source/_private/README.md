# _private — 不发布的私有存档

此目录以下划线开头，Hexo 不渲染、不复制到 public/，构建产物中不存在，
仅保存在 git 仓库里（历史版本见 v1.1.2 / 15602ba 之前）。

## 内容

- `essays/ai-learning-diploma.*.md` — 随笔《当AI把"学习"和"文凭"拆开之后》，2026-10 内容审查时下线
- `essays/burying-talent-in-yesterday.*.md` — 随笔《我不得不把焦虑延伸到明天》，同批下线
- `essays/img/` — 上述两篇的配图（原先在 source/img/essays/）

后缀 .zh / .en / .ja 对应原 source/_posts、source/en/_posts、source/ja/_posts 三语版本。

## 若要重新公开

1. 把 md 移回对应的 `source/{,en/,ja/}_posts/` 原文件名（去掉语言后缀）
2. 把 `essays/img/<文章名>/` 移回 `source/img/essays/<文章名>/`
3. 文章内图片引用路径当时是 `/img/essays/...`，移回后无需改动
