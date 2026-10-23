---
title: Warp — 把终端做成 Agent 工作台
translation_key: warp-terminal
date: 2026-07-12 00:00:01
updated: 2026-10-23
categories:
  - 开源观察
tags:
  - Warp
  - 终端
  - AI
  - Rust
  - 开源
description: 阅读 Warp 2.0 的设计：Rust 客户端、GPU 渲染、内置 Agent 与 AGPL/MIT 混合开源。本文是阅读笔记。
---

{% note info %}
项目：[warpdotdev/warp](https://github.com/warpdotdev/warp) · 作者：Warp · License：客户端 AGPL-3.0，UI 框架 MIT
本文是阅读笔记，我没有参与项目开发。
{% endnote %}

## 它是什么

Warp 是一个用 Rust 写的终端，2026 年 4 月把客户端开源，OpenAI 作为开源仓库的创始赞助商加入。它不再只卖「好看的终端」，而是把自己定位成 Agentic Development Environment：终端、代码编辑、Agent 和团队知识库放在同一个界面里。

## 技术构成

- **终端渲染**：自研 GPU 渲染，官方致谢中把 Alacritty 列为参考
- **Shell 集成**：NuShell 提供现代化的 Shell 解析体验
- **AI Agent**：内置 Agent，也能接 Claude Code、Codex、Gemini CLI
- **会话持久化**：跨重启保留工作状态

## 开源边界

Warp 的开源是分层的：

- `warpui` / `warpui_core`：MIT
- 客户端主体：AGPL-3.0
- Oz 云编排平台：闭源

这意味着你可以读客户端代码、自己构建，但「Warp 的云端 Agent 能力」仍然是一个商业服务。

## 我的判断

Warp 真正改变的不是「终端长什么样」，而是**终端里的输出变成了结构化数据**：每个命令、输出、错误和上下文都是一个 block，人和 Agent 都能直接消费。这比在传统终端外面套一个聊天框更彻底。

代价是：它要求登录、依赖云端能力，而且 AGPL 对二次商业化有约束。适不适合你，取决于你愿不愿意把终端交给一个「终端 + Agent 平台」的复合产品。

{% btn https://github.com/warpdotdev/warp, 查看原项目, fab fa-github %}
