---
title: Net-USTB — 北科校园网一键登录
translation_key: net-ustb
date: 2026-07-12 00:00:04
categories:
  - 项目
tags:
  - USTB
  - Android
  - Kotlin
  - Jetpack Compose
  - 校园网
description: 专为北科大校园网认证系统开发的 Android 原生应用，替代繁琐的网页端登录流程。
---

## 项目概述

Net-USTB 是专为北京科技大学校园网（Dr.COM ePortal 4.x）开发的第三方原生 Android 客户端，用它替代浏览器端的网页认证流程，实现一键登录/登出。

{% label Kotlin blue %} {% label Compose green %} {% label OkHttp orange %}

### 核心功能

- **一键认证**：通过 ePortal JSONP 接口完成登录/登出，无需打开浏览器
- **多运营商**：校园用户 / 中国电信 / 中国联通
- **AES-256-GCM** 加密凭据存储
- **使用看板**：余额、时长、流量、登录时间、IP 地址
- **校园公告**：获取公告板信息

### 技术细节

- OkHttp 4.12 + 自定义 CookieJar
- Jsoup 1.18 HTML 解析
- EncryptedSharedPreferences 加密存储
- 隐私优先：零分析、零广告

{% label USTB green %} {% label Android green %} {% label 网络工具 green %}
