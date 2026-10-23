---
title: Net-USTB — キャンパスネットワーク認証
translation_key: net-ustb
date: 2026-07-12 00:00:04
categories:
  - プロジェクト
tags:
  - USTB
  - Android
  - Kotlin
  - キャンパスネットワーク
description: 北京科技大学キャンパスネットワーク認証用Androidネイティブアプリ。ワンタップでログイン。
---

{% note info %}
状態：保守中 · 担当：単独開発 · コード：公開 · 最終更新：2026-10
{% endnote %}

## 概要

Net-USTBは北京科技大学のキャンパスネットワーク（Dr.COM ePortal 4.x）用サードパーティAndroidクライアント。ブラウザ認証をネイティブ体験に置き換え。

{% label Kotlin blue %} {% label Compose green %}

### 主な機能
- ePortal JSONPインターフェースによるワンタップログイン
- マルチキャリア対応（キャンパス/中国電信/中国聯通）
- AES-256-GCM暗号化認証情報保存
- 使用量ダッシュボード、キャンパス掲示板

{% label USTB green %} {% label Android green %} {% label ネットワーク green %}

## 制限

Dr.COM ePortal 4.x の1つの認証フローのみ対応しています。大学側 API の変更で動作しなくなります。複数端末の同時利用や異常なネットワークは扱っていません。認証情報は端末内のみに保存されるため、機種変更時は再ログインが必要です。

{% note warning %}
本プロジェクトは個人の学習用途のみで、大学公式とは無関係です。学校のネットワーク・情報システム規程に従い、自己責任で使用してください。
{% endnote %}

{% btn https://github.com/coderirse/Netconnect_tool, ソースを見る, fab fa-github %}
