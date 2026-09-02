---
title: WatchDog — AI API Quota Monitor
translation_key: watchdog
date: 2026-07-12 00:00:06
categories:
  - Projects
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - AI
  - API
  - Monitoring
description: Real-time API quota monitoring for DeepSeek, Kimi, Zhipu GLM, and SiliconFlow AI platforms.
cover: /img/covers/cover-10.jpg
---

## Overview

WatchDog is an Android app for real-time monitoring of API balances across multiple AI platforms — essential for heavy AI API users. v1.0.4 released as APK.

{% label Kotlin blue %} {% label Compose green %} {% label Retrofit orange %}

### Supported Platforms
- DeepSeek — balance + local snapshot monthly tracking
- Kimi (Moonshot) — balance + local snapshot
- Zhipu GLM — official API usage data
- SiliconFlow — official API usage data

### Key Features
- Color-coded dashboard with Pull-to-refresh
- Smart usage tracking via beginning-of-month snapshots
- Per-platform API key management (local only)
- Configurable auto-refresh
- Partial failure tolerance

{% label Android green %} {% label API Monitoring green %} {% label AI green %}
