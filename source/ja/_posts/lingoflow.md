---
title: LingoFlow — AI 翻訳学習アプリ
translation_key: lingoflow
date: 2026-08-29 00:00:04
categories:
  - プロジェクト
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - AI
  - ML Kit
  - オープンソース
description: ML Kit オンデバイス翻訳 + LLM ストリーミング長文翻訳 + Merriam-Webster 辞書検索を組み合わせた Android 翻訳アプリ。
---

## 概要

LingoFlow はモダンな Android 翻訳アプリです。オンデバイス機械翻訳、権威ある辞書、LLM の力を組み合わせました。日常のフレーズはオフラインで即座に翻訳、長文は LLM がストリーミングで整形、知らない単語はいつでも権威ある定義を検索できます。リリース APK を公開済み。

{% label Kotlin blue %} {% label Compose green %} {% label ML Kit orange %} {% label LLM pink %}

### 主な機能
- **インスタント翻訳**：ML Kit オンデバイス翻訳（英語 ↔ 中国語 ↔ 日本語 ↔ 韓国語）、ネット接続不要。長文は LLM によるストリーミング出力で、段落とリストを自動整形、いつでもキャンセル可能
- **辞書検索**：Merriam-Webster の権威ある定義。発音記号、用例、語源付き。訳文中の任意の単語をタップして検索
- **AI 学習支援**：文脈を考慮した解説と複数の翻訳スタイル（ナチュラル / 簡潔 / フォーマル / 学習）をライブストリーミングで出力
- **読み上げ**：翻訳結果の TTS 読み上げ、再生 / 一時停止に対応。長文は文ごとに順番に読み上げ
- **プライバシー第一**：API キーは端末内にのみ保存（EncryptedSharedPreferences）

### 技術スタック
Kotlin + Coroutines + Flow · Jetpack Compose（Material 3）· Hilt 依存性注入 · ML Kit Translation · OkHttp + kotlinx.serialization · DataStore + EncryptedSharedPreferences

署名鍵が未設定の場合、リリースビルドは自動的に debug 署名へフォールバックするため、CI やサイドロードも手間なし。

{% btn https://github.com/coderirse/LingoFlow, ソースコード, fab fa-github %} {% btn https://github.com/coderirse/LingoFlow/releases, APK をダウンロード, fas fa-download %}
