---
title: Sourcehub — Android Digital Content Store Demo
translation_key: sourcehub
date: 2026-07-12 00:00:05
updated: 2026-10-23
categories:
  - Projects
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - E-commerce
  - Security
  - MVVM
description: A demo Android digital-content store with accounts, cart, simulated payments and background downloads.
---

{% note info %}
Status: archived · Role: solo developer · Code: public · Note: simulated payments; sample content for demo only
{% endnote %}

## Overview

Sourcehub is a demo Android digital-content store, built to practise MVVM + Clean Architecture, JWT authentication, cart flows, background downloads and common app hardening. It has around 107 Kotlin files. **All payments are simulated; no real transactions occur.**

{% note warning %}
Sample content is for demonstration only. If you connect real content, you must own the copyright or have permission. This article does not endorse unauthorised distribution of digital content.
{% endnote %}

{% label Kotlin blue %} {% label Compose green %} {% label MVVM orange %} {% label Coil pink %}

### Features

- **Accounts**: login/registration and JWT token management
- **Store**: banner carousel, six categories, debounced search, cart CRUD, coupons
- **Payment**: simulated WeChat/Alipay/card payment and order management
- **Files**: WorkManager background downloads with AES-256-GCM encryption

### Security notes

It implements seven common protections: root detection, emulator detection, anti-debugging, SSL pinning, HMAC-SHA256 request signing, FLAG_SECURE screenshots blocking and Android Keystore file encryption.

These raise the cost of reverse engineering and traffic interception, but **they are not a substitute for a professional security audit** and should not be treated as DRM.

### Limitations

- No real payment or backend; sample data is local and simulated
- The security features are demo-level and need re-evaluation before production
- Copyright, payment compliance and refund flows are not covered

{% btn https://github.com/coderirse/Sourcehub, View Source, fab fa-github %} {% btn https://github.com/coderirse/Sourcehub/releases, Download APK, fas fa-download %}
