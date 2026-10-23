---
title: Sourcehub — Android 数字内容商城 Demo
translation_key: sourcehub
date: 2026-07-12 00:00:05
updated: 2026-10-23
categories:
  - 项目
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - 电商
  - 安全
  - MVVM
description: 一个 Android 数字内容商城的演示项目：用户系统、购物车、模拟支付与后台下载。
---

{% note info %}
状态：已归档 · 角色：独立开发 · 代码：公开 · 说明：模拟支付，示例内容仅用于演示
{% endnote %}

## 项目概述

Sourcehub 是一个 Android 数字内容商城的演示实现，用来练习 MVVM + Clean Architecture、JWT 认证、购物车、后台下载和常见的 App 防护。项目约 107 个 Kotlin 文件，**支付全部为模拟，不产生真实交易**。

{% note warning %}
示例内容仅用于演示。如果接入真实内容，必须确保拥有版权或授权；本文不鼓励也不支持任何未经授权的数字内容分发。
{% endnote %}

{% label Kotlin blue %} {% label Compose green %} {% label MVVM orange %} {% label Coil pink %}

### 功能模块

- **用户系统**：登录/注册/JWT Token 管理
- **商城**：Banner 轮播、6 个分类、搜索防抖、购物车 CRUD、优惠码
- **支付**：微信/支付宝/信用卡**模拟**支付、订单管理
- **文件**：WorkManager 后台下载、AES-256-GCM 加密存储

### 安全相关

做了 7 项常见防护：Root 检测、模拟器检测、反调试、SSL Pinning、HMAC-SHA256 请求签名、FLAG_SECURE 防截屏、Android Keystore 文件加密。

这些手段能提高逆向和抓包的成本，但**不能替代专业安全审计**，也不应该被当成 DRM。

### 局限

- 没有接真实支付和后端，示例数据是本地模拟
- 安全项是演示级实现，直接用于生产需要重新评估
- 内容版权、支付合规和退款流程都没有覆盖

{% btn https://github.com/coderirse/Sourcehub, 查看源码, fab fa-github %} {% btn https://github.com/coderirse/Sourcehub/releases, 下载 APK, fas fa-download %}
