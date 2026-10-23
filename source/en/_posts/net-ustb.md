---
title: Net-USTB — Campus Network One-Tap Login
translation_key: net-ustb
date: 2026-07-12 00:00:04
categories:
  - Projects
tags:
  - USTB
  - Android
  - Kotlin
  - Jetpack Compose
  - Campus Network
description: A native Android client for USTB's campus network authentication system, replacing the web-based login flow.
---

{% note info %}
Status: maintained · Role: solo developer · Code: public · Updated: 2026-10
{% endnote %}

## Overview

Net-USTB is a third-party native Android client for USTB's campus network (Dr.COM ePortal 4.x). It replaces the browser-based web authentication with a one-tap native experience.

{% label Kotlin blue %} {% label Compose green %} {% label OkHttp orange %}

### Key Features
- One-tap login/logout via ePortal JSONP interface
- Multi-carrier support (Campus/Telecom/Unicom)
- AES-256-GCM encrypted credential storage
- Usage dashboard: balance, duration, IPv4/IPv6 traffic, IP
- Campus bulletin board
- Privacy-first: zero analytics, zero ads

{% label USTB green %} {% label Android green %} {% label Network Tool green %}

## Limitations

Only one Dr.COM ePortal 4.x authentication flow is covered; changes to the university API will break it. Concurrent devices and unusual networks are not handled. Credentials stay on the device, so a new phone needs a fresh login.

{% note warning %}
This project is for personal learning only and is not affiliated with the university. Follow the university's network and information system rules; use at your own risk.
{% endnote %}

{% btn https://github.com/coderirse/Netconnect_tool, View Source, fab fa-github %}
