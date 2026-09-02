---
title: Trailmap — インタラクティブな旅の地図
translation_key: trailmap
date: 2026-08-29 00:00:06
categories:
  - プロジェクト
tags:
  - Leaflet
  - JavaScript
  - Vite
  - 地図
  - オープンソース
description: Leaflet.js で構築したインタラクティブな個人旅行マップ。写真、ストーリー、タイムライン再生、3D 地球儀。
cover: /img/covers/cover-02.jpg
---

## 概要

Trailmap は Leaflet.js で構築したインタラクティブな個人旅行マップで、旅ごとの写真とストーリーを記録します。場所の追加・編集は `locations.json` データファイル 1 つを触るだけで、プッシュすると GitHub Actions が GitHub Pages へ自動デプロイします。

{% label Leaflet blue %} {% label Vite green %} {% label Globe.GL orange %} {% label データ駆動 pink %}

### 主な機能
- **インタラクティブマップ**：光るマーカー、ホバーで拡大、クリックでフォーカスして詳細表示
- **旅のストーリー**：サイドバー（モバイルはボトムドロワー）に場所・日付・タグ・説明をリスト表示
- **フォトギャラリー**：サイドバーに 2 列グリッド、クリックで Lightbox 全画面表示（←/→/Esc 対応）
- **タイムラインプレーヤー**：下部のプログレスバーが日付順に旅を自動再生（1.8 秒 / ステップ）。ルートグループ間は流れる破線アニメーション
- **タグフィルター**：上部のピル型タグでマーカーをワンクリック絞り込み
- **3D 地球儀**：Globe.GL へワンクリック切り替え（CDN 遅延読み込み、初回表示に影響なし）
- **複数ベースマップ & デュアルテーマ**：Explore（ダーク、デフォルト）/ Standard / Satellite の 3 種類。ダーク & ライトをワンクリック切り替え、選択は自動保存
- **URL ルーティング**：`/#/beijing` で場所へ直接ジャンプ。共有リンク、ブラウザの戻る / 進むにも対応

### 技術ポイント
素の JavaScript のコンポーネントモジュール構成（Map / Sidebar / PhotoGallery / Timeline がそれぞれ独立）、Vite でビルド。データと表示は完全に分離されており、場所・写真・タグ・ルートグループはすべて `src/data/locations.json` に集約——コードではなくデータを変更する設計です。

{% btn https://github.com/coderirse/trailmap, ソースコード, fab fa-github %}
