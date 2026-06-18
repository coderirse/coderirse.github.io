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
Projects I've built or contributed to, spanning robotics, AI agents, fintech, and academic tools.
{% endnote %}

---

### 🤖 Ankle Exoskeleton Control System

{% label C++ blue %} {% label Python green %} {% label ROS orange %} {% label CAN Bus pink %}

A ROS Melodic-based complete control system for an ankle exoskeleton robot, with CAN bus motor control and AHRS inertial navigation sensor driver.

**Highlights:**
- `can_ankle` ROS package with torque/velocity/position modes and CANopen configuration
- `fdilink_ahrs` driver for FDILink Deta-10 AHRS/INS sensor
- Publishes IMU, GPS, attitude, and odometry ROS topics
- Experimental data recording and playback analysis via ROS Bag

{% label Robotics green %} {% label Embedded green %} {% label Sensor Fusion green %}

---

### 📈 AI Agents Stock — Multi-Agent Stock Analysis System

{% label Python blue %} {% label Streamlit red %} {% label LLM pink %} {% label Docker orange %}

A multi-AI-agent stock analysis system that simulates a professional analyst team, covering A-shares, HK stocks, and US stocks.

**Highlights:**
- **6 specialized analysis agents**: technical, fundamental, capital flow, risk assessment, sentiment, and news
- **Strategy panel**: 4 AI agents for daily sector rotation, macro policy, capital flow, and sentiment analysis
- **Dragon & Tiger tracking**: 5 AI agents tracking Dragon & Tiger list data for short-term opportunities
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

{% label AI Agent green %} {% label Automation green %} {% label Open Source green %}

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

### 🌐 Personal Tech Blog

{% label Hexo blue %} {% label Butterfly green %} {% label GitHub Pages pink %}

A personal blog built with Hexo 8.x and the Butterfly theme, featuring deep CSS customization and deployed on GitHub Pages.

**Highlights:**
- Deep Butterfly theme customization (custom CSS, gradient backgrounds, canvas animations)
- Busuanzi visitor analytics integration
- Automated CI/CD: source on `source` branch, `hexo deploy` to `master`
- Free hosting, zero maintenance cost

{% btn https://github.com/coderirse/coderirse.github.io, View Source, fab fa-github %}

---

*More projects and code details on my [GitHub](https://github.com/coderirse).*
