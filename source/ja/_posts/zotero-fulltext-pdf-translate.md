---
title: Zotero 全文 PDF 翻訳プラグイン — 自分の Key で対訳 PDF を作る
translation_key: zotero-fulltext-pdf-translate
date: 2026-10-23 00:00:02
updated: 2026-10-23
categories:
  - プロジェクト
tags:
  - Zotero
  - TypeScript
  - 翻訳
  - オープンソース
description: Zotero 内で PDF 全体を、レイアウトを保った対訳 PDF に翻訳。自分の LLM API Key を使い、エンジンはローカルで動作。
---

{% note info %}
状態：保守中 · 担当：単独開発 · コード：[公開](https://github.com/coderirse/zotero-fulltext-pdf-translate) · 最終更新：2026-10
{% endnote %}

## なぜ作ったか

英語論文を読むとき面倒なのは「読めないこと」ではなく、**原文 PDF、翻訳ツール、リーダーの間を行き来すること**です。Web 翻訳は PDF に弱く、有料サービスは論文全体のアップロードを求めます。

このプラグインは作業を Zotero に戻します。文献を選択 → 右クリック → PDF 全体を翻訳。レイアウトを保った対訳 PDF を生成し、元の文献に添付します。翻訳エンジンはローカル、API Key は自分のものを使います。

## 主な機能

- **右クリック翻訳**：単一文献またはコレクション全体、順次キュー、キャンセルと再試行
- **左右対訳レイアウト**：原文左・訳文右の見開き。上下対訳にも切替可能
- **レイアウト保持**：数式、表、画像を pdf2zh エンジンが処理。デフォルトで透かしなし
- **複数プロバイダ**：智譜 GLM、DeepSeek、Qwen、Kimi、SiliconFlow、OpenAI、Gemini、Ollama などのプリセット、任意の OpenAI 互換エンドポイント
- **プリセット**：クイックプレビュー / 論文精読（用語集自動生成）/ スキャン OCR / カスタム
- **自動添付**：`タイトル.zh.bilingual` の名前で元文献に添付
- **2エンジン**：ポータブル v1 を自動ダウンロード、または既存の pdf2zh_next を使用

## 仕組み

Zotero 7+ プラグイン（TypeScript）が `Subprocess` でローカル翻訳エンジンを起動します。API Key はコマンドラインではなく環境変数で渡します。左右対訳が有効な場合、PyMuPDF で原文ページと訳文ページを並べて1ページに合成し、`Zotero.Attachments.importFromFile` で添付します。

## 制限

- 初回は約520 MB のポータブルエンジンをダウンロード。中国本土ではミラーが必要な場合あり
- スキャン PDF は OCR が必要で、速度と精度はエンジンと元ファイル次第
- 翻訳品質は選ぶモデルに依存。用語集は手動管理
- 主に Windows 向け。macOS / Linux は pdf2zh_next を手動インストール
- doc2x の完全代替ではなく、複雑なレイアウトでは崩れることがあります

{% btn https://github.com/coderirse/zotero-fulltext-pdf-translate, ソースを見る, fab fa-github %} {% btn https://github.com/coderirse/zotero-fulltext-pdf-translate/releases, XPI をダウンロード, fas fa-download %}
