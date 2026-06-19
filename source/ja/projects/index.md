---
title: プロジェクト
date: 2024-01-01 00:00:02
type: projects
description: リ・ジチャオのプロジェクトポートフォリオ
aside: true
top_img: https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80
---

## 主なプロジェクト

{% note info %}
ロボット制御、AIエージェント、フィンテック、学術ツールなど、幅広い分野のプロジェクトです。
{% endnote %}

---

### 🧗 壁面爬行ロボット — 制御システム

{% label Python blue %} {% label ROS2 green %} {% label CANバス orange %} {% label ロボティクス pink %}

ROS2ベースの差動駆動壁面爬行ロボット制御システム。CAN + RS485デュアルプロトコルによる4モーター協調制御。

**ハイライト:**
- デュアルプロトコル制御：CANバス + RS485/Modbusで4台の独立モーターを制御
- ROS2ネイティブ統合：`/cmd_vel` 購読、速度解算
- ゲームパッド遠隔操作：十字キー + アナログスティック
- 安全保護：加速度ランプ制御 + 500msタイムアウト自動停止

{% label ロボティクス green %} {% label 組込み green %} {% label 制御アルゴリズム green %}

---

### 🤖 足首外骨格ロボット制御システム

{% label C++ blue %} {% label Python green %} {% label ROS orange %} {% label CANバス pink %}

ROS Melodicベースの足首外骨格ロボット完全制御システム。CANバスモーター制御とAHRS慣性航法センサードライバーを搭載。

**ハイライト:**
- トルク/速度/位置モード対応の `can_ankle` ROSパッケージ、CANopen設定サポート
- FDILink Deta-10 AHRS/INSセンサー用 `fdilink_ahrs` ドライバー
- IMU、GPS、姿勢角、オドメトリのROS Topicを配信
- ROS Bagによる実験データ録音・再生分析

{% label ロボティクス green %} {% label 組込み green %} {% label センサー融合 green %}

---

### 📈 AI Agents Stock — 複数エージェント株式分析システム

{% label Python blue %} {% label Streamlit red %} {% label LLM pink %} {% label Docker orange %}

プロのアナリストチームをシミュレートする複数AIエージェント株式分析システム。A株、香港株、米国株をカバー。

**ハイライト:**
- **6つの専門分析エージェント**：テクニカル、ファンダメンタル、資金フロー、リスク評価、センチメント、ニュース
- **戦略パネル**：4つのAIエージェントによるセクターローテーション、マクロ政策、資金フロー、センチメント分析
- **龍虎リスト追跡**：5つのAIエージェントによる短期機会とホットセクターの特定
- **銘柄選定**：機関投資家の資金動向を追跡し、3〜5つの優良銘柄をスクリーニング
- **リアルタイム監視**：価格アラート＋DingTalk/Feishu Webhook通知
- **MiniQMT量的取引**連携、Dockerワンクリックデプロイ

{% label 量的取引 green %} {% label データ分析 green %} {% label フィンテック green %}

---

### 🧠 Hermes Agent — 自己進化型AIエージェント

{% label Python blue %} {% label TypeScript pink %} {% label LLM orange %} {% label マルチプラットフォーム red %}

Nous Researchによる汎用自己進化型AIエージェント。経験学習、永続メモリ、クロスプラットフォーム機能を搭載。

**ハイライト:**
- **クローズドループ学習**：タスク完了後にスキルを自動作成し、継続的に自己改善
- **マルチプラットフォーム対応**：Telegram、Discord、Slack、WhatsApp、CLI
- **40以上の内蔵ツール**、MCPプロトコル拡張サポート
- 内蔵**Cronスケジューラー**による無人自動化
- ローカル、Docker、SSH、K8sなどのデプロイ方式をサポート

{% label AIエージェント green %} {% label 自動化 green %} {% label オープンソース green %}

---

### 🎓 Academic Research Skills for Claude Code

{% label Python blue %} {% label YAML pink %} {% label LaTeX orange %} {% label Pandoc green %}

Claude Code向けの包括的な学術研究パイプラインスキルスイート。研究から出版までの全ワークフローをカバー。

**ハイライト:**
- **4つのスキルパッケージ**：深度研究、論文執筆、ピアレビュー、学術パイプラインオーケストレーション
- **深度研究**：13のエージェントチーム、7つのモード、PRISMAシステマティックレビュー対応
- **論文執筆**：12のエージェントパイプライン、APA/IEEE/MLA/Chicago引用スタイル対応
- **学術レビュー**：EIC＋3名のレビュアー＋Devil's Advocateによる多角的評価シミュレーション
- 必須の**幻覚防止チェック**、スタイル調整、文章品質ゲート

{% label 学術ツール green %} {% label AI支援 green %} {% label 知識管理 green %}

---

### 🌐 個人技術ブログ

{% label Hexo blue %} {% label Butterfly green %} {% label GitHub Pages pink %}

Hexo 8.xとButterflyテーマで構築した個人ブログ。CSS深度カスタマイズ、GitHub Pagesにデプロイ。

**ハイライト:**
- Butterflyテーマの深度カスタマイズ（カスタムCSS、グラデーション背景、Canvasアニメーション）
- Busuanzi訪問者統計連携
- 自動化CI/CD：`source`ブランチにソース、`hexo deploy`で`master`にデプロイ
- 無料ホスティング、ゼロ運用コスト

{% btn https://github.com/coderirse/coderirse.github.io, ソースコード, fab fa-github %}

---

*その他のプロジェクトは [GitHub](https://github.com/coderirse) でご覧いただけます。*
