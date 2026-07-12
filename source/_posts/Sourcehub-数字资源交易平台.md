---
title: Sourcehub — Android 数字资源交易平台
translation_key: sourcehub
date: 2026-07-12 00:00:05
categories:
  - 项目
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - 电商
  - 安全
  - MVVM
description: 完整的 Android 数字资产交易市场应用，拥有用户认证、支付、下载、反爬安全等完整电商功能。
---

## 项目概述

Sourcehub 是一个功能丰富的 Android 数字资源交易平台，支持 PDF、Word 文档等数字内容的在线购买和下载。项目采用 MVVM + Clean Architecture 架构，107 个 Kotlin 源文件，拥有完整的安全防护体系。

{% label Kotlin blue %} {% label Compose green %} {% label MVVM orange %} {% label Coil pink %}

### 功能模块
- **用户系统**：登录/注册/JWT Token 管理
- **商城**：Banner 轮播、6 大分类、搜索防抖、购物车 CRUD、优惠码
- **支付**：微信/支付宝/信用卡模拟支付、订单管理
- **文件**：WorkManager 后台下载、AES-256-GCM 加密存储

### 安全体系（7 层）
Root 检测、模拟器检测、反调试、SSL Pinning、HMAC-SHA256 请求签名、FLAG_SECURE 防截屏、Android Keystore 文件加密。

{% label Android green %} {% label 电商 green %} {% label 安全 green %}
