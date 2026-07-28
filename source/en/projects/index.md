---
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

### 💻 Warp — The AI Coding Environment That Redefines the Terminal

{% label Rust blue %} {% label Tokio green %} {% label AI Agent orange %}

A modern intelligent terminal built on Rust with natively integrated AI agents, supporting mainstream AI coding tools like Claude Code, Codex, and Gemini — making the terminal the core programming interface of the AI era.

**Highlights:**
- GPU-accelerated terminal rendering (based on Alacritty)
- NuShell modern shell experience
- Built-in agent + integration with multiple AI coding tools
- Session persistence across restarts

{% label DevTools green %} {% label Open Source Analysis green %} {% label Terminal green %}

---

### 🌐 Personal Tech Blog

{% label Hexo blue %} {% label Butterfly green %} {% label GitHub Pages pink %}

A personal blog built with Hexo 8.x and the Butterfly theme, deployed on GitHub Pages, with a deep magazine-editorial visual redesign on top of the theme.

**Highlights:**
- Magazine editorial design system: paper-and-ink color palette, serif typography, drop caps, hairlines
- Trilingual content (Chinese, English, Japanese) with custom i18n article-mapping scripts
- Busuanzi visitor analytics integration
- Automated deployment: push source to the `source` branch, publish to `master` via `hexo deploy`

{% btn https://github.com/coderirse/coderirse.github.io, View Source, fab fa-github %}

---

*More projects and code details on my [GitHub](https://github.com/coderirse).*
