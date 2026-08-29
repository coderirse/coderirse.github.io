---
title: BaseConversion — Number Base Converter for Programmers
translation_key: base-conversion
date: 2026-08-29 00:00:01
categories:
  - Projects
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - Tools
  - Open Source
description: A local-first, ad-free Android base converter with live multi-base syncing, two's complement and IEEE 754 bit patterns.
---

## Overview

BaseConversion is a local-first, ad-free Android base converter built for programmers. Open it and start typing: binary / octal / decimal / hexadecimal fields stay in live two-way sync — no "convert" button. It supports big integers, two's complement, and IEEE 754 floating-point bit-pattern visualization.

{% label Kotlin blue %} {% label Compose green %} {% label MVI orange %}

### Key Features
- **Integer mode**: four live-synced base fields; arbitrary precision via `BigInteger`; fixed widths 8/16/32/64 with signed two's complement, signed/unsigned toggle, and out-of-range truncation with warnings
- **Float mode**: type a decimal value and instantly see the float32 / float64 IEEE 754 bit patterns and stored values, including `NaN` / `±Infinity` / `-0.0`
- **Smart keyboard**: custom in-app keypad that disables invalid keys per base with color-coded sections; long-press backspace for continuous delete; one-tap copy / paste with auto-detected `0x` / `0b` / `0o` prefixes
- **Personalization**: system/light/dark theme, accent colors, configurable default mode / base / width / precision, key sounds and haptics
- **Details**: bilingual UI (English & Chinese), monospace numerals; the only networked feature is checking updates via the GitHub Releases API

### Tech Stack
Kotlin 2.0+ · Jetpack Compose (Material 3) · ViewModel + StateFlow (MVI) · Gradle Kotlin DSL · minSdk 29

The conversion algorithms live in a pure-Kotlin `domain` layer covered by JUnit tests; UI / data / domain layers are cleanly separated.

{% btn https://github.com/coderirse/BaseConversion, View Source, fab fa-github %}
