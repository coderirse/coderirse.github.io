---
title: Warp — 重新定义终端的 AI 编程环境
translation_key: warp-terminal
date: 2026-07-12 00:00:01
categories:
  - 项目
tags:
  - Warp
  - 终端
  - AI
  - Rust
  - 开源
  - DevTools
description: Warp 是新一代智能终端/IDE，原生集成 AI Agent，支持 Claude Code、Codex、Gemini 等主流 AI 编程工具。
---

## 项目概述

Warp 是一个基于 Rust 构建的现代化智能终端，由 OpenAI 作为创始赞助商。它不仅仅是一个终端模拟器，而是一个完整的 AI 编程工作环境，原生集成了多种 AI 编程 Agent。

{% note success %}
Warp 的愿景：让终端成为 AI 时代的核心编程界面。
{% endnote %}

## 技术架构

{% label Rust blue %} {% label Tokio green %} {% label NuShell orange %} {% label Claude Code pink %}

### 核心组件

- **终端渲染**：基于 Alacritty 的 GPU 加速终端
- **Shell 集成**：NuShell 提供现代化 Shell 体验
- **AI Agent 集成**：内置 Agent + Claude Code / Codex / Gemini CLI
- **会话持久化**：跨重启的工作状态保持

### 20+ Agent 技能

Warp 为开源社区提供了一套完整的开发自动化技能：PR Review、Issue Triage、Changelog 起草、Bug 复现、UI 规范检查、集成测试编排等。

## 社区生态

- **Oz for OSS**：为开源项目维护者提供 AI Agent 额度
- **AGPL v3 许可**

{% label 终端 green %} {% label AI Agent green %} {% label 开源 green %}
