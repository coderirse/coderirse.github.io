---
title: Sourcehub — Android デジタルコンテンツストアのデモ
translation_key: sourcehub
date: 2026-07-12 00:00:05
updated: 2026-10-23
categories:
  - プロジェクト
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - Eコマース
  - セキュリティ
  - MVVM
description: アカウント、カート、模擬決済、バックグラウンドダウンロードを備えた Android デジタルコンテンツストアのデモ。
---

{% note info %}
状態：アーカイブ · 担当：単独開発 · コード：公開 · 備考：決済は模擬、サンプル内容はデモ用
{% endnote %}

## 概要

Sourcehub は Android のデジタルコンテンツストアのデモ実装です。MVVM + Clean Architecture、JWT 認証、カート、バックグラウンドダウンロード、一般的なアプリ防御の練習用に作りました。Kotlin ファイルは約107個。**決済はすべて模擬で、実際の取引は発生しません。**

{% note warning %}
サンプル内容はデモ用です。実コンテンツを接続する場合は、著作権を保有するか許諾を得る必要があります。本記事は無許諾のデジタルコンテンツ配布を推奨するものではありません。
{% endnote %}

{% label Kotlin blue %} {% label Compose green %} {% label MVVM orange %} {% label Coil pink %}

### 機能

- **アカウント**：ログイン/登録、JWT トークン管理
- **ストア**：バナー、6カテゴリ、デバウンス検索、カート CRUD、クーポン
- **決済**：WeChat/Alipay/カードの**模擬**決済、注文管理
- **ファイル**：WorkManager によるバックグラウンドダウンロード、AES-256-GCM 暗号化保存

### セキュリティ

Root 検出、エミュレータ検出、アンチデバッグ、SSL Pinning、HMAC-SHA256 リクエスト署名、FLAG_SECURE によるスクリーンショット防止、Android Keystore ファイル暗号化の7項目を実装しています。

これらはリバースエンジニアリングや通信傍受のコストを上げますが、**専門的なセキュリティ監査の代替にはならず**、DRM として扱うべきものでもありません。

### 制限

- 実決済・実バックエンドはなく、サンプルデータはローカル模擬
- セキュリティはデモレベルで、本番利用には再評価が必要
- 著作権、決済コンプライアンス、返金フローは未対応

{% btn https://github.com/coderirse/Sourcehub, ソースを見る, fab fa-github %} {% btn https://github.com/coderirse/Sourcehub/releases, APK をダウンロード, fas fa-download %}
