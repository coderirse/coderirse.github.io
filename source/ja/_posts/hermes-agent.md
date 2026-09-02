---
title: Hermes Agent — 自己進化型AIエージェント
cover: /img/covers/cover-22.jpg
translation_key: hermes-agent
date: 2026-06-13 22:28:14
categories:
  - プロジェクト
tags:
  - AIエージェント
  - Python
  - 自動化
  - オープンソース
---

## はじめに

**Hermes Agent**は、Nous Researchが開発した次世代汎用AIエージェントです。従来の単発チャットボットとは異なり、Hermesは**閉ループ学習システム**を備え、完了したタスクから自律的にスキルを作成し、継続的に改善します。

{% note info %}
HermesはOpenClawの後継であり、アーキテクチャを全面的に刷新しています。
{% endnote %}

## コア機能

### 閉ループ学習

```
タスク → 記録 → スキル作成 → 改良 → 永続化
  ↑                                    ↓
  └──── 将来のタスクで自動呼び出し ←────┘
```

### マルチプラットフォームゲートウェイ

{% label Telegram blue %} {% label Discord pink %} {% label Slack orange %} {% label WhatsApp green %} {% label CLI red %}

### 40以上の組み込みツール

ファイルI/O、ネットワークリクエスト、コード実行、データクエリ、API呼び出し — **MCP（Model Context Protocol）**で拡張可能。

### 永続的メモリ

- **SQLite + FTS5**全文検索、自動メモリ要約
- 定期的「メモリナッジ」機構、セッションを超えた知識継続

### 無人自動化

組み込み**Cronスケジューラ**で日次レポート、システム健全性チェック、バックアップ、ニュース配信を自動実行。

### 柔軟な展開

{% label ローカル blue %} {% label Docker green %} {% label SSH orange %} {% label Kubernetes pink %} {% label サンドボックス red %}

## 考察

真に強力なエージェントには、メモリ、スキル、自己進化能力が必要です。Hermesはその道を着実に歩んでいます。
