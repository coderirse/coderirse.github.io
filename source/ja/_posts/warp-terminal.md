---
title: Warp — ターミナルを Agent の作業台にする
translation_key: warp-terminal
description: Warp 2.0 を読む。Rust クライアント、GPU レンダリング、内蔵 Agent、AGPL/MIT の混合オープンソース。私のプロジェクトではありません。
date: 2026-07-12 00:00:01
updated: 2026-10-23
categories:
  - オープンソース観察
tags:
  - Warp
  - ターミナル
  - AI
  - Rust
  - オープンソース
---

{% note info %}
プロジェクト：[warpdotdev/warp](https://github.com/warpdotdev/warp) · 作者：Warp · License：クライアント AGPL-3.0、UI フレームワーク MIT
これは読書ノートです。私は開発に参加していません。
{% endnote %}

## 概要

Warp は Rust で書かれたターミナルです。2026年4月にクライアントをオープンソース化し、OpenAI がリポジトリの創設スポンサーとして参加しました。単なる「きれいなターミナル」ではなく、ターミナル、コードエディタ、Agent、チーム知識ベースを1つの画面に置く Agentic Development Environment として位置づけています。

## 技術構成

- **レンダリング**：自社開発の GPU レンダラー。クレジットで Alacritty を参考として挙げています
- **Shell 統合**：NuShell による現代的なパース体験
- **AI Agent**：内蔵 Agent に加え、Claude Code、Codex、Gemini CLI を接続
- **セッション永続化**：再起動をまたいで作業状態を保持

## オープンソースの境界

Warp のオープンソースは層になっています。

- `warpui` / `warpui_core`：MIT
- クライアント本体：AGPL-3.0
- Oz クラウド編成：クローズドソース

クライアントを読み、自分でビルドできますが、クラウド Agent 機能は商用サービスのままです。

## 私の評価

Warp が本当に変えたのは「ターミナルの見た目」ではなく、**ターミナル出力が構造化データになったこと**です。コマンド、出力、エラー、コンテキストがすべて block になり、人間も Agent も直接扱えます。従来のターミナルの横にチャット欄を置くより徹底しています。

代償は、ログインが必要で、クラウド機能への依存があり、AGPL が二次商用化を制約することです。向いているかどうかは、ターミナルを「ターミナル + Agent プラットフォーム」という複合製品に任せられるかで決まります。

{% btn https://github.com/warpdotdev/warp, 元プロジェクトを見る, fab fa-github %}
