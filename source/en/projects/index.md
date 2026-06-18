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
- `can_ankle` ROS package with torque/velocity/position modes
- `fdilink_ahrs` driver for FDILink Deta-10 AHRS/INS sensor
- Publishes IMU, GPS, attitude, odometry ROS topics

---

### 📈 AI Agents Stock

{% label Python blue %} {% label Streamlit red %} {% label LLM pink %} {% label Docker orange %}

A multi-AI-agent stock analysis system that simulates an analyst team, covering A-shares, HK stocks, and US stocks.

**Highlights:**
- 6 specialized analysis agents (technical, fundamental, sentiment, etc.)
- Sector rotation analysis with 4 AI agents
- Dragon & Tiger list tracking with 5 agents
- Real-time monitoring + DingTalk/Feishu notifications

{% btn https://github.com/coderirse/coderirse.github.io, Source, fab fa-github %}

---

*More projects on my [GitHub](https://github.com/coderirse).*
