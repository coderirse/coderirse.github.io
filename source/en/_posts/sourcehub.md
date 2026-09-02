---
title: Sourcehub — Android Digital Marketplace
translation_key: sourcehub
date: 2026-07-12 00:00:05
categories:
  - Projects
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - E-commerce
  - Security
  - MVVM
description: A complete Android digital asset marketplace with authentication, payment, downloads, and 7-layer security.
cover: /img/covers/cover-11.jpg
---

## Overview

Sourcehub is a feature-rich Android digital asset marketplace for PDF, Word documents, and more. Built with MVVM + Clean Architecture across 107 Kotlin source files with a comprehensive 7-layer security system.

{% label Kotlin blue %} {% label Compose green %} {% label MVVM orange %}

### Features
- User auth (JWT), Banner carousel, 6 categories, search with debounce
- Shopping cart CRUD, coupon codes
- WeChat/Alipay/Credit Card simulated payment
- WorkManager background download with AES-256-GCM encryption

### Security (7 Layers)
Root detection, emulator detection, anti-debugging, SSL pinning, HMAC-SHA256 request signing, FLAG_SECURE anti-screenshot, Android Keystore file encryption.

{% label Android green %} {% label E-commerce green %} {% label Security green %}
