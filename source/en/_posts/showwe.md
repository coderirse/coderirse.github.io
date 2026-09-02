---
title: ShowWe — WeChat Mini Program Community
translation_key: showwe
date: 2026-07-12 00:00:08
categories:
  - Projects
tags:
  - WeChat Mini Program
  - Cloud Development
  - JavaScript
  - Community
  - Full Stack
description: A full-featured community mini program built on WeChat Cloud Development with posts, comments, chat, and notifications.
cover: /img/covers/cover-08.jpg
---

## Overview

ShowWe is a full-featured community/social mini program built on WeChat Cloud Development, v1.1.0. Users can create posts, comment, like, chat privately, and customize their profiles — all within the WeChat ecosystem.

{% label WeChat Mini Program blue %} {% label Cloud Dev green %} {% label JavaScript orange %}

### Core Features
- **Posts**: Rich text + 9 images + 5 file attachments, 6 categories, auto hashtag extraction
- **Social**: Comments/likes with optimistic UI + atomic DB operations, view counting with dedup
- **Chat**: 1-on-1 text + image messaging, unread badge
- **Notifications**: Like/comment notifications, TabBar badge
- **Search**: Regex full-text search (case-insensitive)

### Tech Highlights
- WeChat Cloud DB + Storage + Cloud Functions
- Memory cache (TTL) + local storage cache for instant load
- Auto image compression (80% quality) + retry-capable upload service
- Custom components: image-preview gallery, load-more indicator

{% label WeChat green %} {% label Community green %} {% label Full Stack green %}
