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
ロボット制御、Androidアプリ、AIエージェント、フィンテック、学術ツールなど、独力で開発または深く関わったプロジェクトの数々です。
{% endnote %}

---

### 🧗 壁面爬行ロボット — 制御システム

{% label Python blue %} {% label ROS2 green %} {% label CANバス orange %} {% label ロボティクス pink %}

ROS2ベースの差動駆動壁面爬行ロボット制御システム。CAN + RS485デュアルプロトコルによる4モーター協調制御に対応。

**ハイライト:**
- デュアルプロトコルモーター制御：CANバス + RS485/Modbusで4台の独立モーターを同時制御
- ROS2ネイティブ統合：`/cmd_vel` を購読し、線速度・角速度をリアルタイムでモーター回転数に解算
- ゲームパッド遠隔操作：十字キー + アナログスティック軸の独立制御
- 速度平滑制御：加速度制限ランプ + 500msタイムアウト自動停止保護
- 物理パラメータ校正済み：車輪径 0.05m、トレッド 0.30m

{% label ロボティクス green %} {% label 組込み green %} {% label 制御アルゴリズム green %}

---

### 🤖 足首外骨格ロボット制御システム

{% label C++ blue %} {% label Python green %} {% label ROS2 green %} {% label CANバス orange %} {% label Modbus pink %}

ROS Melodicベースの足首外骨格ロボット完全制御システム。CANバスモータードライバーとAHRS慣性航法センサードライバーを含む。

**ハイライト:**
- トルクモード、速度モード、CANopen設定対応の `can_ankle` ROSパッケージを実装
- FDILink Deta-10 AHRS/INSセンサー用 `fdilink_ahrs` ROSドライバーを実装
- IMU、GPS、姿勢角、オドメトリなど複数のROS Topicを配信
- ROS Bagによる実験データ記録・再生分析を統合

{% label ロボティクス green %} {% label 組込み green %} {% label センサー融合 green %}

---

### 📈 AI Agents Stock — 複数エージェント株式分析システム

{% label Python blue %} {% label Streamlit red %} {% label LLM pink %} {% label Docker orange %}

プロのアナリストチームをシミュレートする複合型複数AIエージェント株式分析システム。A株、香港株、米国株をカバー。

**ハイライト:**
- **6つの専門分析エージェント**：テクニカル、ファンダメンタル、資金フロー、リスク評価、センチメント、ニュース
- **戦略パネル**：4つのAIエージェントがセクターローテーション、マクロ政策、資金フロー、市場センチメントを毎日自動分析
- **龍虎リスト追跡**：5つのAIエージェントが龍虎リストデータを追跡し、短期機会とホットセクターを特定
- **銘柄選定**：機関投資家の資金動向を追跡し、3〜5つの優良銘柄をスクリーニング
- **リアルタイム監視**：価格アラート＋DingTalk/Feishu Webhook通知
- **MiniQMT量的取引**連携、Dockerワンクリックデプロイ

{% label 量的取引 green %} {% label データ分析 green %} {% label フィンテック green %}

---

### 🧠 Hermes Agent — 自己進化型AIエージェント

{% label Python blue %} {% label TypeScript pink %} {% label LLM orange %} {% label マルチプラットフォーム red %}

Nous Researchによる汎用自己進化型AIエージェント。経験学習、永続メモリ、クロスプラットフォーム実行機能を搭載。

**ハイライト:**
- **クローズドループ学習**：タスク完了後にスキルを自動作成し、継続的に自己改善
- **マルチプラットフォーム対応**：Telegram、Discord、Slack、WhatsApp、CLI
- **40以上の内蔵ツール**、MCPプロトコル拡張サポート
- 内蔵**Cronスケジューラー**による無人自動化
- ローカル、Docker、SSH、K8sなどのデプロイ方式をサポート

{% label AIエージェント green %} {% label 自動化 green %} {% label オープンソース貢献 green %}

---

### 🎓 Academic Research Skills for Claude Code

{% label Python blue %} {% label YAML pink %} {% label LaTeX orange %} {% label Pandoc green %}

Claude Code向けに構築した包括的な学術研究パイプラインスキルスイート。研究から出版までの全ワークフローをカバー。

**ハイライト:**
- **4つのスキルパッケージ**：深度研究、論文執筆、ピアレビュー、学術パイプラインオーケストレーション
- **深度研究**：13のエージェントチーム、7つのモード、PRISMAシステマティックレビュー対応
- **論文執筆**：12のエージェントパイプライン、APA/IEEE/MLA/Chicagoなどの引用スタイル対応
- **学術レビュー**：EIC＋3名のレビュアー＋Devil's Advocateによる多角的評価シミュレーション
- 必須の**幻覚防止チェック**、スタイル調整、文章品質ゲート

{% label 学術ツール green %} {% label AI支援 green %} {% label 知識管理 green %}

---

### 📱 Net-USTB — 北科大キャンパスネットワーク ワンクリックログイン

{% label Kotlin blue %} {% label Compose green %} {% label OkHttp orange %}

北京科技大学キャンパスネットワーク（Dr.COM ePortal 4.x）向けのサードパーティ製ネイティブAndroidクライアント。ブラウザのWeb認証フローに代わり、ワンクリックログイン/ログアウトを実現。

**ハイライト:**
- ワンクリック認証：ePortal JSONP APIに直接接続、ブラウザ不要
- 複数キャリア対応：キャンパスアカウント / 中国電信 / 中国聯通
- AES-256-GCM暗号化による認証情報保存、解析ゼロ・広告ゼロ
- 使用状況ダッシュボード：残高、利用時間、データ量、ログイン時刻、IPアドレスを一覧表示

{% label Android green %} {% label キャンパスツール green %} {% label オープンソース green %}

---

### 🛒 Sourcehub — Androidデジタルコンテンツ取引プラットフォーム

{% label Kotlin blue %} {% label Compose green %} {% label MVVM orange %} {% label Coil pink %}

PDFやWord文書などのデジタルコンテンツのオンライン購入・ダウンロードに対応した完全なECアプリ。MVVM + Clean Architecture構成、107のKotlinソースファイル、包括的なセキュリティ保護体系を備える。

**ハイライト:**
- 完全なECループ：ユーザーシステム（JWT）、ショップ、カート、クーポンコード、モック決済、注文管理
- WorkManagerバックグラウンドダウンロード + AES-256-GCM暗号化ストレージ
- 7層セキュリティ：Root検出、エミュレータ検出、デバッグ対策、SSLピンニング、HMAC-SHA256リクエスト署名、スクリーンショット防止、Keystoreファイル暗号化

{% label Android green %} {% label EC green %} {% label セキュリティ green %}

---

### 🐶 WatchDog — AI API残高リアルタイム監視

{% label Kotlin blue %} {% label Compose green %} {% label Retrofit orange %}

ヘビーなAI開発者向けのAndroidツール。DeepSeek、Kimi、Zhipu GLM、SiliconFlowの4プラットフォームのAPI残高と月間使用量をリアルタイム監視。リリースAPK公開済み。

**ハイライト:**
- 4プラットフォーム対応のカラーダッシュボード + Pull-to-refresh
- スマート使用量追跡：月初残高スナップショットから月間使用量を自動計算
- APIキーのローカル独立管理、自動更新間隔の設定が可能
- 部分的な障害を許容：1プラットフォームの異常が全体に影響しない

{% label Android green %} {% label AIツール green %} {% label 監視 green %}

---

### 🧮 ScientificCalculator — Kotlin Compose 関数電卓

{% label Kotlin blue %} {% label Compose green %} {% label Material3 orange %}

標準的な科学計算に加え、方程式ソルバーと行列計算機を統合した多機能Android関数電卓。

**ハイライト:**
- 式エンジン：Shunting-yardアルゴリズム + 再帰下降解析
- 方程式求解：一元一次/二次方程式（判別式分析）、二元/三元連立方程式（クラメルの公式）
- 行列計算：加減乗算、転置、行列式、逆行列、階数（ガウス消去法）
- Material 3デザイン、三角関数のDEG/RAD切替

{% label Android green %} {% label 科学計算 green %} {% label オープンソース green %}

---

### 💬 ShowWe — WeChatミニプログラム コミュニティプラットフォーム

{% label WeChatミニプログラム blue %} {% label クラウド開発 green %} {% label JavaScript orange %}

WeChatクラウド開発で構築したフル機能コミュニティ/ソーシャルミニプログラム（v1.1.0）。投稿、コメント・いいね、プライベートメッセージ、パーソナライズドプロフィールに対応。

**ハイライト:**
- 投稿システム：リッチテキスト + 最大9枚の画像 + 5つの添付ファイル、6カテゴリ、#ハッシュタグ#自動抽出
- ソーシャル機能：コメント/いいね（楽観的UI + アトミックDB操作）、一対一のプライベートメッセージ、未読バッジ
- 多層キャッシュ：メモリキャッシュ（TTL）+ ローカルストレージでページ瞬時表示
- 画像自動圧縮 + 統一アップロードサービス（リトライ対応）

{% label WeChatミニプログラム green %} {% label コミュニティ green %} {% label フルスタック green %}

---

### 🎓 USTB成績ランキング ブラウザ拡張

{% label JavaScript blue %} {% label Chrome拡張 green %} {% label Manifest V3 orange %}

北科大教務システム向けのChrome / Edge拡張。成績照会ページには順位が表示されないが、バックエンドAPIは実際にそのデータを返している——この拡張がそれを可視化する。典型的な「学生ハッカー」プロジェクト。

**ハイライト:**
- Page Hookでfetch/XHRをインターセプトし、成績APIが返す隠しフィールドをキャプチャ
- DOMを動的に変更し、成績表に順位/総人数列を挿入
- Manifest V3、ChromeとEdgeの両方に対応

{% label ブラウザ拡張 green %} {% label キャンパスツール green %} {% label オープンソース green %}

---

### 🌟 awesome-claude-code — Claude Codeエコシステム リソース集

{% label Markdown blue %} {% label Awesome List green %} {% label オープンソース orange %}

コミュニティ主導のClaude Codeリソース集。Awesome Listの定番フォーマットで20以上のカテゴリを整理。コミュニティで広く引用され、新規ユーザー向けの推奨リソース索引。

**ハイライト:**
- 20以上のリソースカテゴリ：公式ドキュメント、Skills、プラグイン、マルチエージェントオーケストレーション、セキュリティ、可観測性など
- Recently Addedマーキーで最新リソースを表示
- 各エントリにGitHub Statsバッジを付与

{% label ClaudeCode green %} {% label リソース集 green %} {% label コミュニティ green %}

---

## オープンソース詳解

私に深い影響を与えた2つのオープンソースプロジェクトの詳解記事です。

### 🔬 tinygrad — 極小ディープラーニングフレームワーク

{% label Python blue %} {% label CUDA green %} {% label Metal orange %} {% label WebGPU red %}

PyTorchとmicrogradの間に位置する極小ディープラーニングフレームワーク。約200のPythonソースファイル、わずか約25の低レベル演算子で新しいアクセラレータバックエンドに対応可能。CUDA / Metal / OpenCL / WebGPUをサポート。

**ハイライト:**
- PyTorchライクなEager API + 自動微分
- IRコンパイラ：カーネル融合とlowering、JIT + グラフ実行
- GGUFフォーマット対応、主要なオープンソースLLMを実行可能

{% label ディープラーニング green %} {% label オープンソース解析 green %}

---

### 💻 Warp — ターミナルを再定義するAIプログラミング環境

{% label Rust blue %} {% label Tokio green %} {% label AI Agent orange %}

Rustベースのモダンなインテリジェントターミナル。AIエージェントをネイティブ統合し、Claude Code、Codex、Geminiなど主要バイブコーディングツールに対応——ターミナルをAI時代の中核的なプログラミングインターフェースに。

**ハイライト:**
- GPUアクセラレーションによるターミナルレンダリング（Alacrittyベース）
- NuShellによるモダンなシェル体験
- 内蔵エージェント + 複数バイブコーディングツール連携
- 再起動をまたぐセッション永続化

{% label DevTools green %} {% label オープンソース解析 green %} {% label ターミナル green %}

---

### 🌐 個人技術ブログ

{% label Hexo blue %} {% label Butterfly green %} {% label GitHub Pages pink %}

Hexo 8.xとButterflyテーマで構築した個人ブログ。GitHub Pagesにデプロイ。テーマの上に雑誌編集風の深いビジュアルリデザインを施した。

**ハイライト:**
- 雑誌編集風デザインシステム：紙とインクの配色、セリフ書体、ドロップキャップ、ヘアライン
- 中日英トリリンガルコンテンツ、独自のi18n記事マッピングスクリプト
- サードパーティフォントリンクなし（欧文フォントはセルフホスト）、Cloudflare Web Analytics アクセス統計
- 自動デプロイ：ソースを`source`ブランチにプッシュ、`hexo deploy`で`master`に公開

{% btn https://github.com/coderirse/coderirse.github.io, ソースコード, fab fa-github %}

---

### 🔢 BaseConversion — プログラマー向け進数変換ツール

{% label Android blue %} {% label Kotlin green %} {% label Compose orange %} {% label オープンソース pink %}

完全ローカル・広告なしの Android 進数変換アプリ。リアルタイム連携変換、2 の補数と IEEE 754 ビットパターン表示に対応。

**ハイライト:**
- 4 進数フィールドのリアルタイム連携、`BigInteger` 任意精度、8/16/32/64 ビット 2 の補数
- float32/64 の IEEE 754 ビットパターンをリアルタイム表示（NaN / ±Infinity / -0.0 対応）
- 進数ごとに不正キーを無効化するスマートキーボード、`0x` / `0b` / `0o` プレフィックス自動認識
- 純 Kotlin domain レイヤー + JUnit 単体テスト。ネット通信は更新確認のみ

{% label Android green %} {% label ツール green %} {% label MVI green %}

{% btn https://github.com/coderirse/BaseConversion, ソースコード, fab fa-github %}

---

### 📅 BeikeSchedule ベイク課表 — USTB 時間割アプリ

{% label Android blue %} {% label Kotlin green %} {% label Room orange %} {% label USTB pink %}

北京科技大学の時間割アプリ。教務システムからのワンタップインポート、教学週カレンダーの正確なマッピング、週表示と授業リマインダー。

**ハイライト:**
- WebView 統一認証で時間割をワンタップインポート。アプリは学籍番号・パスワードに触れない
- 公式学事カレンダーの教学週マッピング。長期休暇は自動処理
- コマ単位の週表示、隔週マーカー、正確なアラームによる授業前リマインダー
- 教務の構造化 JSON API を直接呼び出し（HTML パース不要）、パーサーは単体テスト済み

{% label Android green %} {% label 時間割 green %} {% label プライバシー第一 green %}

{% btn https://github.com/coderirse/BeikeSchedule, ソースコード, fab fa-github %} {% btn https://github.com/coderirse/BeikeSchedule/releases, APK をダウンロード, fas fa-download %}

---

### ⏳ カウントダウンアプリ — 企画とプロダクト設計

{% label Android blue %} {% label Glance green %} {% label プロダクト設計 orange %}

ホーム画面ウィジェットを核としたカウントダウン / カウントアップツール。PRD と技術選定が完了（企画段階）。

**ハイライト:**
- コンセプト：カレンダーではなく、時間の距離をひと目で感じるための感情ツール
- 最初のイベントは 3 ステップ以内。日常ではホーム / ロック画面ウィジェットを見るだけ
- ウィジェットは Jetpack Glance + Compose ルート、データ層は Room + DataStore
- 抑制の原則：課金なし、広告なし、アカウント不要、クラウド同期なし。将来は完全オープンソース化

{% label プロダクト設計 green %} {% label Glance green %} {% label オープンソース計画 green %}

---

### 🌍 LingoFlow — AI 翻訳学習アプリ

{% label Android blue %} {% label ML Kit green %} {% label LLM orange %} {% label Compose pink %}

ML Kit オンデバイス翻訳 + LLM ストリーミング長文翻訳 + Merriam-Webster 辞書検索の Android 翻訳アプリ。

**ハイライト:**
- 英中日韓のオフライン即翻訳。長文は LLM がストリーミングで整形
- Merriam-Webster の権威ある辞書検索：発音記号、用例、語源。単語タップで検索
- 4 つの翻訳スタイル（ナチュラル / 簡潔 / フォーマル / 学習）+ 文ごとの TTS 読み上げ
- API キーは端末内で暗号化保存（EncryptedSharedPreferences）、プライバシー第一

{% label Android green %} {% label AI green %} {% label オープンソース green %}

{% btn https://github.com/coderirse/LingoFlow, ソースコード, fab fa-github %} {% btn https://github.com/coderirse/LingoFlow/releases, APK をダウンロード, fas fa-download %}

---

### 🧭 生活アシスタント — Tauri デスクトップアプリ

{% label Tauri blue %} {% label Rust green %} {% label SQLite orange %} {% label 生産性 pink %}

個人専用の学習・生活管理デスクトップアプリ。計画、開発、フィットネス、食事、ゲームを一元管理。

**ハイライト:**
- 今日の計画 / 開発作業（タスク + 作業時間）/ フィットネス（トレーニング記録 + 体重トレンド）/ 食事 / プレイ時間の全モジュール
- GitHub モジュールはリポジトリ・Issue・PR を読み取り専用表示（唯一のオンライン機能）
- データはローカル SQLite、トークンは Windows 資格情報マネージャーに保存。完全オフラインでバックアップ / リストア可能
- データ層は独立 crate（life-assistant-core）。Rust とフロントエンドの二層でテスト

{% label Rust green %} {% label デスクトップ green %} {% label プライバシー第一 green %}

---

### 🗺️ Trailmap — インタラクティブな旅の地図

{% label Leaflet blue %} {% label Vite green %} {% label Globe.GL orange %} {% label オープンソース pink %}

インタラクティブな個人旅行マップ。写真、ストーリー、タイムライン再生、3D 地球儀。データ駆動、プッシュで自動デプロイ。

**ハイライト:**
- 光るマーカー + 旅のストーリーナビゲーション + Lightbox フォトギャラリー
- タイムラインプレーヤーが日付順に旅を自動再生、ルート間は流れる破線アニメーション
- Globe.GL でワンクリック 3D 地球儀（遅延読み込み）、3 種類のベースマップ + デュアルテーマ
- `/#/beijing` の URL で場所へ直接ジャンプ。`locations.json` を編集するだけで場所を追加

{% label データ駆動 green %} {% label 地図 green %} {% label 自動デプロイ green %}

{% btn https://github.com/coderirse/trailmap, ソースコード, fab fa-github %}

---

*その他のプロジェクトやコードの詳細は [GitHub](https://github.com/coderirse) でご覧いただけます。*
