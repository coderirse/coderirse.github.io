---
title: WatchDog — AI API残高モニター
translation_key: watchdog
date: 2026-07-12 00:00:06
categories:
  - プロジェクト
tags:
  - Android
  - Kotlin
  - AI
  - API
  - 監視
description: DeepSeek、Kimi、智譜GLM、SiliconFlowの4大AIプラットフォームAPI残高をリアルタイム監視。
---

{% note info %}
状態：保守中 · 担当：単独開発 · コード：公開 · 最終更新：2026-10
{% endnote %}

## 概要

WatchDogは複数のAIプラットフォームのAPI残高をリアルタイム監視するAndroidアプリです。私は毎日、残高と月間使用量の確認に使っています。最新版は APK で公開しています。

{% label Kotlin blue %} {% label Compose green %}

### 対応プラットフォーム
DeepSeek、Kimi (Moonshot)、智譜GLM、SiliconFlow

### 主な機能
- カラーコードダッシュボード + Pull-to-refresh
- 月初残高スナップショットによる月次使用量追跡
- API Keyローカル管理、自動更新間隔設定

{% label Android green %} {% label API監視 green %} {% label AI green %}
