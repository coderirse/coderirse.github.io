---
title: BaseConversion — プログラマー向け進数変換ツール
translation_key: base-conversion
date: 2026-08-29 00:00:01
categories:
  - プロジェクト
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - ツール
  - オープンソース
description: 完全ローカル・広告なしの Android 進数変換アプリ。リアルタイム連携変換、2 の補数と IEEE 754 ビットパターン表示に対応。
---

## 概要

BaseConversion はプログラマー向けの Android 進数変換アプリです。完全ローカル動作・広告なし。起動するだけで 2 進 / 8 進 / 10 進 / 16 進の 4 つのフィールドがリアルタイムで双方向連携し、「変換」ボタンは不要。大きな整数、2 の補数、IEEE 754 浮動小数点数のビットパターン表示に対応しています。

{% label Kotlin blue %} {% label Compose green %} {% label MVI orange %}

### 主な機能
- **整数モード**：4 つの進数フィールドがリアルタイム双方向連携。`BigInteger` による任意精度、8/16/32/64 ビット固定幅の符号付き 2 の補数、signed / unsigned 切り替え、範囲超過時は自動的に切り捨てて警告
- **浮動小数モード**：10 進数を入力すると float32 / float64 の IEEE 754 ビットパターンと実際の格納値をリアルタイム表示。`NaN` / `±Infinity` / `-0.0` にも対応
- **スマートキーボード**：アプリ内カスタムキーボード。進数に応じて不正なキーを動的に無効化し、色分け表示。バックスペース長押しで連続削除、`0x` / `0b` / `0o` プレフィックスを自動認識してコピー / ペースト
- **カスタマイズ**：テーマ 3 モード、アクセントカラー、デフォルトのモード / 進数 / ビット幅 / 精度を設定可能。キー操作音と振動フィードバックにも対応
- **細部の作り込み**：日英バイリンガル UI、数値は等幅フォント。ネット通信は GitHub Releases API による更新確認のみ

### 技術スタック
Kotlin 2.0+ · Jetpack Compose (Material 3) · ViewModel + StateFlow (MVI) · Gradle Kotlin DSL · minSdk 29

変換アルゴリズムは純 Kotlin の `domain` レイヤーに分離し、JUnit 単体テストで数値ロジックの正しさを保証。UI / データ / ドメインの 3 層構造を明確に分けています。

{% btn https://github.com/coderirse/BaseConversion, ソースコード, fab fa-github %}
