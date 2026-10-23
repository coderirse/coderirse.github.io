---
title: WatchDog — AI API 额度实时监控
translation_key: watchdog
date: 2026-07-12 00:00:06
categories:
  - 项目
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - AI
  - API
  - 监控
description: 实时监控 DeepSeek、Kimi、智谱、SiliconFlow 四大 AI 平台的 API 余额和月度用量。
---

{% note info %}
状态：维护中 · 角色：独立开发 · 代码：公开 · 最后更新：2026-10
{% endnote %}

## 项目概述

WatchDog 是一款 Android 应用，用于实时监控多个 AI 平台的 API 余额和使用情况。我自己每天用它看余额和月用量；最新版本以 Release APK 发布。

{% label Kotlin blue %} {% label Compose green %} {% label Retrofit orange %}

### 支持的平台
- DeepSeek — 余额查询 + 本地快照月用量计算
- Kimi (Moonshot) — 余额查询 + 本地快照
- 智谱 GLM — 官方 API 用量数据
- SiliconFlow — 官方 API 用量数据

### 关键特性
- 四平台彩色仪表盘 + Pull-to-refresh
- 智能用量追踪（月初余额快照）
- API Key 本地独立管理
- 可配置自动刷新间隔
- 部分失败容忍

{% label Android green %} {% label API监控 green %} {% label AI green %}

{% btn https://github.com/coderirse/WatchDog, 查看源码, fab fa-github %} {% btn https://github.com/coderirse/WatchDog/releases, 下载 APK, fas fa-download %}
