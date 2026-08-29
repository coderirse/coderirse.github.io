---
title: LingoFlow — AI Translation & Learning App
translation_key: lingoflow
date: 2026-08-29 00:00:04
categories:
  - Projects
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - AI
  - ML Kit
  - Open Source
description: An Android translation app combining on-device ML Kit translation, streaming LLM rewriting, and Merriam-Webster dictionary lookup.
---

## Overview

LingoFlow is a modern Android translation app that combines on-device machine translation, an authoritative dictionary, and LLM power: everyday phrases translate offline in a snap, long passages get streamed through an LLM with clean formatting, and any word can be looked up instantly. Release APKs are available.

{% label Kotlin blue %} {% label Compose green %} {% label ML Kit orange %} {% label LLM pink %}

### Key Features
- **Instant translation**: ML Kit on-device translation (English ↔ Chinese ↔ Japanese ↔ Korean), no network needed; long texts stream through the LLM with automatic paragraph & list formatting and can be cancelled anytime
- **Dictionary lookup**: authoritative Merriam-Webster definitions with phonetics, examples, and etymology — tap any word in a translation to look it up
- **AI-powered learning**: context-aware explanations and multiple translation styles (Natural / Concise / Formal / Learning) with live streaming output
- **Listen & pause**: text-to-speech for translations with play / pause state; long passages are read sentence by sentence
- **Privacy-first**: API keys stay on your device (EncryptedSharedPreferences)

### Tech Stack
Kotlin + Coroutines + Flow · Jetpack Compose (Material 3) · Hilt DI · ML Kit Translation · OkHttp + kotlinx.serialization · DataStore + EncryptedSharedPreferences

Release builds automatically fall back to debug signing when no keystore is configured, which keeps CI and sideloading friction-free.

{% btn https://github.com/coderirse/LingoFlow, View Source, fab fa-github %} {% btn https://github.com/coderirse/LingoFlow/releases, Download APK, fas fa-download %}
