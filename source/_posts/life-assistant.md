---
title: 我的生活助手 — Tauri 桌面应用
translation_key: life-assistant
date: 2026-08-29 00:00:05
categories:
  - 项目
tags:
  - Tauri
  - Rust
  - 桌面应用
  - 效率工具
description: 个人专属的学习生活管理桌面应用：计划、开发、健身、饮食、游戏一个应用全管。
---

## 项目概述

「我的生活助手」是一款只供本人使用的学习生活专属桌面应用，基于 Tauri + Rust + WebView2 构建。所有数据保存在本机项目文件夹内，刷新、关闭、重启都不丢失；除 GitHub 模块外完全离线，并提供独立的备份与恢复。

{% label Tauri blue %} {% label Rust green %} {% label SQLite orange %} {% label 效率 pink %}

### 功能模块
- **首页总览**：今日计划进度、快速备忘、各模块摘要
- **今日计划**：按时间安排当天事项，勾选完成
- **开发工作**：任务管理、时间记录、本周统计
- **GitHub 项目**：只读读取个人仓库、分给我的 Issue、我发起的 PR（需要令牌，唯一联网功能）
- **健身计划**：周计划、训练记录（动作 / 组数 / 次数 / 重量）、体重趋势图
- **饮食计划**：三餐加餐记录、常用食物库、当日汇总
- **游戏娱乐**：游戏库、游玩时长记录、本周总时长
- **数据与设置**：备份 / 恢复、浅色 / 深色 / 跟随系统主题

### 工程实践
- 数据层独立成 Rust crate（`life-assistant-core`），`cargo test` 覆盖数据逻辑，不依赖 Tauri 即可测试
- SQLite 数据库与缓存全部落在项目 `data/` 目录，不占 C 盘；备份一键输出到 `backups/`
- GitHub 令牌存放在 Windows 凭据管理器（keyring），不进入备份文件
- 前端纯逻辑与数据层分层测试：`npm test` + `cargo test -p life-assistant-core`

这是典型的"为自己造工具"项目：功能围绕自己真实的生活流设计，不做通用化妥协，因此可以做到零账号、零追踪、完全离线。
