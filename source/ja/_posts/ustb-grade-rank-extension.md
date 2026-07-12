---
title: USTB 成績ランキングブラウザ拡張
translation_key: ustb-grade-rank-extension
date: 2026-07-12 00:00:02
categories:
  - プロジェクト
tags:
  - USTB
  - Chrome拡張
  - JavaScript
  - ツール
description: 北京科技大学の学務システム用Chrome拡張。成績表にランキング列を追加表示。
---

## 概要

北京科技大学の学務システム用ブラウザ拡張（Chrome/Edge）。成績照会ページに表示されないランキング情報をAPIレスポンスから抽出して表示。

{% label JavaScript blue %} {% label Chrome拡張 green %}

### 仕組み
Page Hookでfetch/XHRを傍受し、APIレスポンスからランキングデータを抽出、DOMに列を動的追加。MutationObserverで動的変更に対応。

{% label USTB green %} {% label ブラウザ拡張 green %} {% label ツール green %}
