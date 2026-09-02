---
title: AI Agents Stock — Multi-Agent Stock Analysis System
cover: /img/covers/cover-23.jpg
translation_key: ai-agents-stock
date: 2026-06-13 22:28:12
categories:
  - Projects
tags:
  - Python
  - AI Agent
  - Quantitative Trading
  - FinTech
---

## Overview

**AI Agents Stock** is an innovative multi-agent stock analysis platform that simulates a complete team of securities analysts.

{% note success %}
Core philosophy: let specialized AI agents collaborate like a real analyst team, interpreting market data from multiple perspectives.
{% endnote %}

## Features

### Deep Stock Analysis (6 AI Agents)

| Agent | Focus | Capability |
|--------|------|------------|
| Technical Agent | K-line patterns, MA, MACD/RSI | Trend & signal detection |
| Fundamental Agent | Financial reports, valuation | Company value assessment |
| Capital Flow Agent | Block trades, North-bound funds | Institutional tracking |
| Risk Agent | Volatility, drawdown, VaR | Quantitative risk |
| Sentiment Agent | News, social media | Market sentiment |
| News Agent | Announcements, industry news | Event-driven analysis |

### Sector Rotation Analysis

4 AI agents generate daily sector strategy reports covering rotation patterns, macro policy, capital flows, and market sentiment.

### Dragon & Tiger List Tracking

5 AI agents analyze daily top-trader data — tracking prominent seats, institutional moves, and short-term opportunities.

### Other Features

- **Stock screening** via institutional capital flows
- **Real-time monitoring** with DingTalk/Feishu alerts
- **MiniQMT integration** for quantitative execution
- **Docker deployment** — one command to start

## Tech Stack

{% label Python blue %} {% label Streamlit red %} {% label Plotly pink %} {% label pandas orange %} {% label AKShare green %} {% label LLM blue %}

## Design Philosophy

The key insight is the **multi-agent collaboration** pattern — specialized agents working in parallel produce insights far beyond any single viewpoint.
