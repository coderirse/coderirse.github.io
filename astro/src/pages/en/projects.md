---
layout: ../../layouts/MdPage.astro
lang: en
title: Projects
date: 2024-01-01 00:00:02
type: projects
description: Li Zhichao's project portfolio
aside: true
top_img: https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80
---

## Featured Projects

{% note info %}
Projects I've built independently or contributed deeply to, spanning robotics control, Android apps, AI agents, fintech, and academic tools.
{% endnote %}

---

### 🧗 Wall-Climbing Robot — Wall-Crawling Robot Control System

{% label Python blue %} {% label ROS2 green %} {% label CAN Bus orange %} {% label Robotics pink %}

A ROS2-based differential-drive wall-crawling robot control system with CAN + RS485 dual-protocol coordinated control of four motors.

**Highlights:**
- Dual-protocol motor control: CAN bus + RS485/Modbus driving four independent motors simultaneously
- Native ROS2 integration: subscribes to `/cmd_vel`, resolving linear and angular velocity into motor speeds in real time
- Gamepad remote control: D-pad + analog stick axes with independent control
- Smooth speed control: acceleration-limited ramping + automatic stop protection after a 500ms timeout
- Calibrated physical parameters: 0.05m wheel diameter, 0.30m wheel track

{% label Robotics green %} {% label Embedded green %} {% label Control Algorithms green %}

---

### 🤖 Ankle Exoskeleton Control System

{% label C++ blue %} {% label Python green %} {% label ROS2 green %} {% label CAN Bus orange %} {% label Modbus pink %}

v2.0: Fully migrated to ROS2 Humble. 5-mode adaptive gait controller, CAN dual-protocol stack, Modbus RTU force sensor, 5A-A5 frame IMU driver.

**Highlights:**
- `can_ankle` ROS package with torque mode, velocity mode, and CANopen-configured motor control
- `fdilink_ahrs` driver for the FDILink Deta-10 AHRS/INS sensor
- Modbus RTU force sensor + foot switch + encoder read
- Safety: encoder limit ±45°, force overload 300N, sequence validation

{% label Robotics green %} {% label Embedded green %} {% label Sensor Fusion green %}

---

### 📈 AI Agents Stock — Multi-Agent Stock Analysis System

{% label Python blue %} {% label Streamlit red %} {% label LLM pink %} {% label Docker orange %}

A multi-AI-agent stock analysis system that simulates a professional analyst team, covering A-shares, HK stocks, and US stocks.

**Highlights:**
- **6 specialized analysis agents**: technical, fundamental, capital flow, risk assessment, sentiment, and news
- **Strategy panel**: 4 AI agents for daily sector rotation, macro policy, capital flow, and sentiment analysis
- **Dragon & Tiger tracking**: 5 AI agents tracking Dragon & Tiger list data for short-term opportunities and hot sectors
- **Stock selection**: tracking institutional capital flows, filtering 3-5 quality targets
- **Real-time monitoring**: price alerts + DingTalk/Feishu Webhook notifications
- **MiniQMT quantitative trading** integration, one-click Docker deployment

{% label Quant Trading green %} {% label Data Analysis green %} {% label FinTech green %}

---

### 🧠 Hermes Agent — Self-Evolving AI Agent

{% label Python blue %} {% label TypeScript pink %} {% label LLM orange %} {% label Multi-platform red %}

A general-purpose self-evolving AI agent by Nous Research, featuring experiential learning, persistent memory, and cross-platform capabilities.

**Highlights:**
- **Closed-loop learning**: automatically creates skills after task completion for continuous self-improvement
- **Multi-platform access**: Telegram, Discord, Slack, WhatsApp, CLI
- **40+ built-in tools** with MCP protocol extension support
- Built-in **Cron scheduler** for unattended automation
- Supports local, Docker, SSH, and K8s deployment

{% label AI Agent green %} {% label Automation green %} {% label Open Source Contribution green %}

---

### 🎓 Academic Research Skills for Claude Code

{% label Python blue %} {% label YAML pink %} {% label LaTeX orange %} {% label Pandoc green %}

A comprehensive academic research pipeline skill suite for Claude Code, covering the full workflow from research to publication.

**Highlights:**
- **4 skill packages**: deep research, paper writing, peer review, and academic pipeline orchestration
- **Deep research**: 13 agent teams, 7 modes, supporting PRISMA systematic reviews
- **Paper writing**: 12 agent pipelines, supporting APA/IEEE/MLA/Chicago citation styles
- **Peer review**: simulating EIC + 3 reviewers + Devil's Advocate for multi-perspective evaluation
- Mandatory **anti-hallucination checks**, style calibration, and writing quality gates

{% label Academic Tools green %} {% label AI-Assisted green %} {% label Knowledge Management green %}

---

### 📱 Net-USTB — One-Click USTB Campus Network Login

{% label Kotlin blue %} {% label Compose green %} {% label OkHttp orange %}

A third-party native Android client built for the USTB campus network (Dr.COM ePortal 4.x), replacing the browser-based web authentication flow with one-click login/logout.

**Highlights:**
- One-click authentication: direct ePortal JSONP API calls, no browser required
- Multi-carrier support: campus account / China Telecom / China Unicom
- AES-256-GCM encrypted credential storage, zero analytics, zero ads
- Usage dashboard: balance, session time, traffic, login time, and IP address at a glance

{% label Android green %} {% label Campus Tools green %} {% label Open Source green %}

---

### 🛒 Sourcehub — Android Digital Content Marketplace

{% label Kotlin blue %} {% label Compose green %} {% label MVVM orange %} {% label Coil pink %}

A complete e-commerce app for purchasing and downloading digital content such as PDFs and Word documents. Built with MVVM + Clean Architecture across 107 Kotlin source files, with a comprehensive security protection system.

**Highlights:**
- Full e-commerce loop: user system (JWT), storefront, shopping cart, promo codes, mock payment, order management
- WorkManager background downloads + AES-256-GCM encrypted storage
- 7-layer security: root detection, emulator detection, anti-debugging, SSL pinning, HMAC-SHA256 request signing, screenshot prevention, Keystore file encryption

{% label Android green %} {% label E-Commerce green %} {% label Security green %}

---

### 🐶 WatchDog — Real-Time AI API Quota Monitoring

{% label Kotlin blue %} {% label Compose green %} {% label Retrofit orange %}

An Android tool for heavy AI developers that monitors API balances and monthly usage across four platforms — DeepSeek, Kimi, Zhipu GLM, and SiliconFlow — with a published release APK.

**Highlights:**
- Color-coded dashboard for all four platforms + pull-to-refresh
- Smart usage tracking: month-start balance snapshots automatically compute monthly usage
- Independent local API key management with configurable auto-refresh intervals
- Partial failure tolerance: one platform's error doesn't affect the rest

{% label Android green %} {% label AI Tools green %} {% label Monitoring green %}

---

### 🧮 ScientificCalculator — Kotlin Compose Scientific Calculator

{% label Kotlin blue %} {% label Compose green %} {% label Material3 orange %}

A full-featured Android scientific calculator that goes beyond standard scientific functions with an integrated equation solver and matrix calculator.

**Highlights:**
- Expression engine: Shunting-yard algorithm + recursive descent parsing
- Equation solving: linear/quadratic equations (discriminant analysis), 2- and 3-variable systems (Cramer's rule)
- Matrix computation: add/subtract/multiply, transpose, determinant, inverse, rank (Gaussian elimination)
- Material 3 design with DEG/RAD toggle for trigonometric functions

{% label Android green %} {% label Scientific Computing green %} {% label Open Source green %}

---

### 💬 ShowWe — WeChat Mini Program Community Platform

{% label WeChat Mini Program blue %} {% label Cloud Development green %} {% label JavaScript orange %}

A full-featured community/social mini program (v1.1.0) built on WeChat Cloud Development, supporting post publishing, comments and likes, private messaging, and personalized profiles.

**Highlights:**
- Post system: rich text + up to 9 images + 5 attachments, 6 categories, automatic #hashtag# extraction
- Social interactions: comments/likes (optimistic UI + atomic database operations), one-on-one private messaging, unread badges
- Multi-level caching: in-memory cache (TTL) + local storage for instant page loads
- Automatic image compression + unified upload service (with retry support)

{% label WeChat Mini Program green %} {% label Community green %} {% label Full-Stack green %}

---

### 🎓 USTB Grade Ranking Browser Extension

{% label JavaScript blue %} {% label Chrome Extension green %} {% label Manifest V3 orange %}

A Chrome / Edge extension for the USTB academic system: the grade query page doesn't show rankings, but the backend API actually returns that data — the extension surfaces it. A classic "student hacker" project.

**Highlights:**
- Page hook intercepts fetch/XHR to capture hidden fields returned by the grade API
- Dynamically modifies the DOM, inserting ranking/total-students columns into the grade table
- Manifest V3, compatible with both Chrome and Edge

{% label Browser Extension green %} {% label Campus Tools green %} {% label Open Source green %}

---

### 🌟 awesome-claude-code — Claude Code Ecosystem Resource Collection

{% label Markdown blue %} {% label Awesome List green %} {% label Open Source orange %}

A community-driven collection of Claude Code resources organized in the classic Awesome List format across 20+ categories. Widely referenced by the community and a recommended starting index for new users.

**Highlights:**
- 20+ resource categories: official docs, Skills, plugins, multi-agent orchestration, security, observability, and more
- Recently Added marquee showcasing the newest resources
- GitHub Stats badge attached to every entry

{% label ClaudeCode green %} {% label Resource Collection green %} {% label Community green %}

---

## Open Source Deep Dives

In-depth analyses of two open source projects that have deeply influenced me.

### 🔬 tinygrad — Minimalist Deep Learning Framework

{% label Python blue %} {% label CUDA green %} {% label Metal orange %} {% label WebGPU red %}

A minimalist deep learning framework sitting between PyTorch and micrograd: roughly 200 Python source files, where only about 25 low-level operators are needed to bring up a new accelerator backend — supporting CUDA / Metal / OpenCL / WebGPU.

**Highlights:**
- PyTorch-like eager API + automatic differentiation
- IR compiler: kernel fusion and lowering, JIT + graph execution
- GGUF format support, capable of running mainstream open-source LLMs

{% label Deep Learning green %} {% label Open Source Analysis green %}

---

### 💻 Warp — The Vibe Coding Environment That Redefines the Terminal

{% label Rust blue %} {% label Tokio green %} {% label AI Agent orange %}

A modern intelligent terminal built on Rust with natively integrated AI agents, supporting mainstream vibe coding tools like Claude Code, Codex, and Gemini — making the terminal the core programming interface of the AI era.

**Highlights:**
- GPU-accelerated terminal rendering (based on Alacritty)
- NuShell modern shell experience
- Built-in agent + integration with multiple vibe coding tools
- Session persistence across restarts

{% label DevTools green %} {% label Open Source Analysis green %} {% label Terminal green %}

---

### 🌐 Personal Tech Blog

{% label Hexo blue %} {% label Butterfly green %} {% label GitHub Pages pink %}

A personal blog built with Hexo 8.x and the Butterfly theme, deployed on GitHub Pages, with a deep magazine-editorial visual redesign on top of the theme.

**Highlights:**
- Magazine editorial design system: paper-and-ink color palette, serif typography, drop caps, hairlines
- Trilingual content (Chinese, English, Japanese) with custom i18n article-mapping scripts
- Self-hosted Latin fonts, Cloudflare Web Analytics for visitor stats
- Automated deployment: push source to the `source` branch, publish to `master` via `hexo deploy`

{% btn https://github.com/coderirse/coderirse.github.io, View Source, fab fa-github %}

---

### 🔢 BaseConversion — Number Base Converter for Programmers

{% label Android blue %} {% label Kotlin green %} {% label Compose orange %} {% label Open Source pink %}

A local-first, ad-free Android base converter: live multi-base syncing, two's complement and IEEE 754 bit-pattern visualization.

**Highlights:**
- Four live-synced base fields, arbitrary-precision `BigInteger`, 8/16/32/64-bit two's complement
- Real-time float32/64 IEEE 754 bit patterns (NaN / ±Infinity / -0.0 supported)
- Smart keypad disables invalid keys per base, auto-detects `0x` / `0b` / `0o` prefixes
- Pure-Kotlin domain layer + JUnit tests; the only networked feature is update checking

{% label Android green %} {% label Tools green %} {% label MVI green %}

{% btn https://github.com/coderirse/BaseConversion, View Source, fab fa-github %}

---

### 📅 BeikeSchedule — Course Schedule App for USTB

{% label Android blue %} {% label Kotlin green %} {% label Room orange %} {% label USTB pink %}

A USTB course schedule app: one-tap academic-system import, teaching-week calendar mapping, weekly timetable and class reminders.

**Highlights:**
- One-tap timetable import via WebView SSO — the app never touches your credentials
- Official academic-calendar teaching-week mapping; holidays auto-handled
- Block-period weekly layout, odd/even markers, pre-class reminders with exact alarms
- Calls structured academic JSON APIs directly (no HTML scraping), parser logic unit-tested

{% label Android green %} {% label Schedule green %} {% label Privacy-first green %}

{% btn https://github.com/coderirse/BeikeSchedule, View Source, fab fa-github %} {% btn https://github.com/coderirse/BeikeSchedule/releases, Download APK, fas fa-download %}

---

### ⏳ Countdown App — Concept & Product Design

{% label Android blue %} {% label Glance green %} {% label Product Design orange %}

A countdown / count-up day tracker built around home-screen widgets — full PRD and tech selection done (concept stage).

**Highlights:**
- Positioning: not a calendar, but an emotional tool for feeling time distance at a glance
- First event within 3 steps; daily use only needs a glance at the home / lock screen widget
- Jetpack Glance + Compose chosen as the widget route, Room + DataStore data layer
- Restraint by principle: no payments, ads, accounts, or cloud sync — fully open source later

{% label Product Design green %} {% label Glance green %} {% label Open Source Planned green %}

---

### 🌍 LingoFlow — AI Translation & Learning App

{% label Android blue %} {% label ML Kit green %} {% label LLM orange %} {% label Compose pink %}

An Android translation app combining on-device ML Kit translation, streaming LLM rewriting, and Merriam-Webster dictionary lookup.

**Highlights:**
- Offline instant translation across English/Chinese/Japanese/Korean; long texts streamed through the LLM with auto-formatting
- Authoritative Merriam-Webster lookups: phonetics, examples, etymology — tap any word
- Four translation styles (Natural / Concise / Formal / Learning) + sentence-by-sentence TTS
- API keys encrypted on-device (EncryptedSharedPreferences), privacy-first

{% label Android green %} {% label AI green %} {% label Open Source green %}

{% btn https://github.com/coderirse/LingoFlow, View Source, fab fa-github %} {% btn https://github.com/coderirse/LingoFlow/releases, Download APK, fas fa-download %}

---

### 🧭 Life Assistant — Personal Tauri Desktop App

{% label Tauri blue %} {% label Rust green %} {% label SQLite orange %} {% label Productivity pink %}

A personal study-and-life desktop app: plans, dev work, fitness, meals, and gaming in one place.

**Highlights:**
- Today's plan / dev work (tasks + time tracking) / fitness (training log + weight trends) / meals / playtime modules
- GitHub module shows my repos, issues, and PRs read-only (the only online feature)
- Local SQLite data, token in Windows Credential Manager, fully offline with backup & restore
- Data layer as a standalone crate (life-assistant-core), tested at both Rust and frontend layers

{% label Rust green %} {% label Desktop green %} {% label Privacy-first green %}

---

### 🗺️ Trailmap — My Interactive Travel Map

{% label Leaflet blue %} {% label Vite green %} {% label Globe.GL orange %} {% label Open Source pink %}

An interactive personal travel map with photos, stories, a timeline player, and a 3D globe — data-driven, deploy-on-push.

**Highlights:**
- Glowing markers + travel-story navigation + Lightbox photo gallery
- Timeline player auto-plays the journey in date order with flowing dashed route animations
- One-click 3D globe via Globe.GL (lazy-loaded), three basemaps + dual themes
- `/#/beijing` URLs jump straight to a place; add places by editing `locations.json`

{% label Data-driven green %} {% label Maps green %} {% label Auto Deploy green %}

{% btn https://github.com/coderirse/trailmap, View Source, fab fa-github %}

---

*More projects and code details on my [GitHub](https://github.com/coderirse).*
