---
title: プロジェクト
date: 2024-01-01 00:00:02
type: projects
description: lizhichao のプロジェクト集 — ロボット制御、Android ツール、AI エージェント
aside: true
---

## 主な作品

{% note info %}
ここにあるのは、私が単独で作った、またはチームの一員として深く関わったプロジェクトです。状態、担当、コード公開の有無を明記しています。「作ったもの」と「読んだもの」を分けて書いています。
{% endnote %}

### 足首外骨格ロボット制御システム

研究室プロジェクト · 保守中 · 担当：制御系（ROS2 / CAN / IMU / 力覚センサ）

ROS1 から ROS2 Humble へ移行し、5モード適応歩行制御、CAN デュアルプロトコル、Modbus RTU 力覚センサ、IMU ドライバを実装。

[記事を読む](/ja/2026/06/13/ankle-exoskeleton/) · [コード](https://github.com/coderirse/Ankle_Exoskeleton_ustb)

---

### 壁登りロボット制御システム

研究室プロジェクト · アーカイブ · 担当：制御系（ROS2 / CAN / RS485）

差動駆動の壁面移動ロボット。CAN + RS485 で4モーターを制御し、加速度制限と500msタイムアウト停止を実装。

[記事を読む](/ja/2026/06/18/wall-climbing-robot/) · コード非公開

---

### BeikeSchedule — USTB 時間割アプリ

個人プロジェクト · 保守中 · 単独開発 · コード公開

教務システムからワンタップで取り込み、教学週カレンダーに正確に対応づける時間割アプリ。学籍番号とパスワードはシステム WebView 上でのみ入力され、アプリは読み取りも保存もしません。

[記事を読む](/ja/2026/08/29/beike-schedule/) · [コード](https://github.com/coderirse/BeikeSchedule) · [APK](https://github.com/coderirse/BeikeSchedule/releases)

---

### LingoFlow — AI 翻訳学習アプリ

個人プロジェクト · 保守中 · 単独開発 · コード公開

ML Kit のオンデバイス翻訳、長文の LLM ストリーミング翻訳、Merriam-Webster 辞書検索。API Key は端末内に保存。

[記事を読む](/ja/2026/08/29/lingoflow/) · [コード](https://github.com/coderirse/LingoFlow) · [APK](https://github.com/coderirse/LingoFlow/releases)

---

### BaseConversion — プログラマ向け基数変換器

個人プロジェクト · 保守中 · 単独開発 · コード公開

ローカル動作・広告なしの Android 基数変換器。4つの基数をリアルタイム連動し、2の補数と IEEE 754 ビット表現を表示。ネットワーク通信はアップデート確認のみ。

[記事を読む](/ja/2026/08/29/base-conversion/) · [コード](https://github.com/coderirse/BaseConversion) · [APK](https://github.com/coderirse/BaseConversion/releases)

---

### Net-USTB — キャンパスネットワーク一括ログイン

個人プロジェクト · 保守中 · 単独開発 · コード公開

USTB キャンパスネットワーク（Dr.COM ePortal 4.x）向けのサードパーティ Android クライアント。ワンタップでログイン/ログアウト、認証情報は AES-256-GCM で保存。

[記事を読む](/ja/2026/07/12/net-ustb/) · [コード](https://github.com/coderirse/Netconnect_tool)

{% note warning %}
キャンパスネットワーク用ツールは個人の学習用途のみです。大学公式とは無関係で、学校のネットワーク規程に従ってください。
{% endnote %}

---

## ツールと小さな作品

### WatchDog — AI API 残高モニター

個人プロジェクト · 保守中 · 単独開発 · コード公開

DeepSeek、Kimi、智譜 GLM、SiliconFlow の API 残高と月間使用量を監視。

[記事を読む](/ja/2026/07/12/watchdog/) · [コード](https://github.com/coderirse/WatchDog) · [APK](https://github.com/coderirse/WatchDog/releases)

---

### ScientificCalculator — Kotlin Compose 関数電卓

個人プロジェクト · 保守中 · 単独開発 · コード公開

Shunting-yard と再帰下降パーサによる式評価、方程式求解、行列演算。

[記事を読む](/ja/2026/07/12/scientific-calculator/) · [コード](https://github.com/coderirse/ScientificCalculator) · [APK](https://github.com/coderirse/ScientificCalculator/releases)

---

### Trailmap — 旅の足跡マップ

個人プロジェクト · 保守中 · 単独開発 · コード公開

Leaflet.js で作ったインタラクティブな旅行地図。データはすべて `locations.json` にあり、push で自動デプロイ。

[記事を読む](/ja/2026/08/29/trailmap/) · [コード](https://github.com/coderirse/trailmap)

---

### Reps — オフライン問題集アプリ

個人プロジェクト · ベータ · 単独開発 · コード公開

先生配布の CSV 問題集を、スマホで繰り返し解けるオフラインアプリに変換。4つの練習モード、誤答ノート、進捗復元に対応。

[記事を読む](/ja/2026/10/23/reps-offline-quiz/) · [コード](https://github.com/coderirse/Reps) · [APK](https://github.com/coderirse/Reps/releases)

---

### Zotero 全文 PDF 翻訳プラグイン

個人プロジェクト · 保守中 · 単独開発 · コード公開

Zotero 内で PDF 全体を、レイアウトを保った対訳 PDF に翻訳。自分の LLM API Key を使い、エンジンはローカルで動作。

[記事を読む](/ja/2026/10/23/zotero-fulltext-pdf-translate/) · [コード](https://github.com/coderirse/zotero-fulltext-pdf-translate) · [XPI](https://github.com/coderirse/zotero-fulltext-pdf-translate/releases)

---

### llmhub — セルフホスト LLM ゲートウェイ

個人プロジェクト · 保守中 · 単独開発 · コード公開

ローカル GPU の Ollama をリバーストンネルでクラウドゲートウェイに接続し、OpenAI 互換 API として公開。ローカルが落ちたらクラウド API に自動フォールバック。

[記事を読む](/ja/2026/10/23/llmhub-self-hosted-gateway/) · [コード](https://github.com/coderirse/llmhub)

---

### ShowWe — WeChat ミニプログラムコミュニティ

個人プロジェクト · 保守中 · 単独開発 · コード公開

WeChat クラウド開発によるコミュニティアプリ。投稿、コメント、いいね、DM、通知、多段キャッシュ。

[記事を読む](/ja/2026/07/12/showwe/) · [コード](https://github.com/coderirse/showwe)

---

### Sourcehub — デジタルコンテンツストアのデモ

授業/デモプロジェクト · アーカイブ · 単独開発 · コード公開

Android のデジタルコンテンツストアのデモ実装。アカウント、カート、模擬決済、バックグラウンドダウンロード。決済はすべて模擬で、実取引は発生しません。サンプルコンテンツはデモ用です。

[記事を読む](/ja/2026/07/12/sourcehub/) · [コード](https://github.com/coderirse/Sourcehub)

---

### 生活アシスタント — Tauri デスクトップアプリ

個人ツール · 保守中 · 単独開発 · 非公開

自分専用の生活管理デスクトップアプリ。計画、開発、フィットネス、食事、ゲーム、バックアップ。GitHub モジュール以外は完全オフライン。

[記事を読む](/ja/2026/08/29/life-assistant/)

---

## 進行中

### カウントダウンアプリ — 製品設計と技術選定

進行中 · 単独開発 · 未実装

ホーム画面ウィジェットを中心にしたカウントダウン/カウントアップツール。PRD v0.1 と技術設計は完了し、骨組みだけ用意済み。

[記事を読む](/ja/2026/08/29/countdown/)

---

## オープンソース観察

私が読んだ、またはデプロイしたオープンソースプロジェクトです。**私の作品ではありません。** 各記事に原作者とリポジトリを明記し、設計と私の評価を書いています。

- [AI Agents Stock](https://github.com/oficcejo/aiagents-stock) — マルチエージェント株式分析 · [ノート](/ja/2026/06/13/ai-agents-stock/)
- [Academic Research Skills](https://github.com/Imbad0202/academic-research-skills) — Claude Code の研究パイプライン · [ノート](/ja/2026/06/13/academic-research-skills/)
- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — Claude Code エコシステムの地図 · [ノート](/ja/2026/07/12/awesome-claude-code/)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent) — 自分でスキルを育てるエージェント · [ノート](/ja/2026/06/13/hermes-agent/)
- [tinygrad](https://github.com/tinygrad/tinygrad) — 読み切れる深層学習フレームワーク · [ノート](/ja/2026/07/12/tinygrad/)
- [Warp](https://github.com/warpdotdev/warp) — ターミナルを Agent の作業台にする · [ノート](/ja/2026/07/12/warp-terminal/)

---

## このサイト

Hexo 8.x + Butterfly テーマで構築し、GitHub Pages にデプロイ。テーマの上に雑誌編集風のビジュアルを重ねています。ソース：[coderirse.github.io](https://github.com/coderirse/coderirse.github.io)。
