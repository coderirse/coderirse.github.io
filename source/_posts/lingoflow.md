---
title: LingoFlow — AI 翻译学习 App
translation_key: lingoflow
date: 2026-08-29 00:00:04
categories:
  - 项目
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - AI
  - ML Kit
  - 开源
description: ML Kit 端侧翻译 + LLM 流式长文翻译 + 韦氏词典查词的安卓翻译学习应用。
cover: /img/covers/cover-04.jpg
---

## 项目概述

LingoFlow 是一款现代 Android 翻译应用，把端侧机器翻译、权威词典和大模型能力组合在一起：日常翻译离线秒翻，长文交给 LLM 流式润色，遇到生词随手查权威释义。已发布 Release APK。

{% label Kotlin blue %} {% label Compose green %} {% label ML Kit orange %} {% label LLM pink %}

### 关键特性
- **即时翻译**：ML Kit 端侧翻译（英语 ↔ 中文 ↔ 日语 ↔ 韩语），无需联网；长文本走 LLM 流式输出，自动排版段落与列表，可随时取消
- **词典查词**：韦氏词典（Merriam-Webster）权威释义，含音标、例句与词源；点击译文中的任意单词即可查询
- **AI 辅助学习**：上下文感知的讲解与多种翻译风格（自然 / 简洁 / 正式 / 学习），流式实时输出
- **听音跟读**：翻译结果 TTS 朗读，支持播放 / 暂停状态，长文按句子逐段朗读
- **隐私优先**：API Key 仅保存在设备本地（EncryptedSharedPreferences）

### 技术栈
Kotlin + Coroutines + Flow · Jetpack Compose（Material 3）· Hilt 依赖注入 · ML Kit Translation · OkHttp + kotlinx.serialization · DataStore + EncryptedSharedPreferences

未配置签名密钥时构建会自动回退 debug 签名，方便 CI 与侧载体验。

{% btn https://github.com/coderirse/LingoFlow, 查看源码, fab fa-github %} {% btn https://github.com/coderirse/LingoFlow/releases, 下载 APK, fas fa-download %}
