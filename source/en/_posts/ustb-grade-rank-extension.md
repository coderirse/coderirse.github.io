---
title: USTB Grade Rank Browser Extension
translation_key: ustb-grade-rank-extension
date: 2026-07-12 00:00:02
categories:
  - Projects
tags:
  - USTB
  - Chrome Extension
  - JavaScript
  - Tool
description: A Chrome extension for USTB's academic system that reveals hidden rank and enrollment data in grade tables.
---

## Overview

A browser extension (Chrome/Edge) built for USTB's academic affairs system. It solves a real pain point: the grade query page doesn't show rankings, but the backend API actually returns this data.

{% label JavaScript blue %} {% label Chrome Extension green %} {% label Manifest V3 orange %}

### How It Works
1. Inject Page Hook to intercept fetch/XHR
2. Capture API responses with hidden rank/student count fields
3. Parse data in Content Script
4. Dynamically insert rank columns into the DOM

### Key Features
- Multi-UI support (Element UI, iView UI, native tables)
- MutationObserver for dynamic page changes
- Configurable custom columns via localStorange
- Debug mode exposing all API fields
- Privacy-first: zero data collection

{% label USTB green %} {% label Browser Extension green %} {% label Tool green %}
