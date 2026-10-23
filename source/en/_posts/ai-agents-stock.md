---
title: AI Agents Stock — A Multi-Agent Stock Analysis Project
translation_key: ai-agents-stock
description: A reading note on oficcejo/aiagents-stock — six analysis agents, sector rotation, dragon-tiger list tracking and a MiniQMT hook. Not my project.
date: 2026-06-13 22:28:12
updated: 2026-10-23
categories:
  - Open Source Notes
tags:
  - Python
  - AI Agent
  - Quantitative Trading
  - FinTech
---

{% note info %}
Project: [oficcejo/aiagents-stock](https://github.com/oficcejo/aiagents-stock) · Author: oficcejo · No license declared
This is a reading note. I did not contribute to this project.
{% endnote %}

## What it solves

AI Agents Stock is an open-source project that simulates a securities research team with multiple AI agents. It splits "looking at a stock" into six dimensions — technical, fundamental, capital flow, risk, sentiment and news — and asks one agent to cover each, then produces a combined report.

There are two horizontal modules as well:

- **Sector strategy**: four agents covering sector rotation, macro policy, capital flow and market sentiment
- **Dragon-tiger tracking**: five agents analysing the daily top-trader list

The stack is Python + Streamlit + Plotly, with AKShare, Tushare, yfinance and pywencai as data sources. It supports Docker and exposes a MiniQMT hook for execution.

## Design worth noting

**The value of multiple agents is not "more accurate" — it is separating the judgement.** When a single model gives you one conclusion, it is hard to see which step went wrong. With six agents, each dimension leaves an analysis trail you can check.

That also creates two problems:

1. **Consistency** — the agents may disagree, and a human still has to decide.
2. **Cost and latency** — every run calls the model several times, and long context plus live market data adds up quickly.

The project documentation mentions "shortlisting 3–5 quality names" and "finding short-term opportunities". I read those as research leads, not trading instructions.

{% note warning %}
Nothing here is investment advice. Model output, data sources and backtests can all be wrong. Trading is at your own risk.
{% endnote %}

## Who it is for

- Developers who want to learn multi-agent orchestration, prompt separation and report generation
- People who want a local A-share research workbench and are willing to maintain the data sources
- Anyone curious about the MiniQMT execution hook, while understanding it is only the execution end

If you want a ready-made profitable strategy, this is not it — no open-source project is.

## My take

It is best treated as a **hackable research sandbox**. The agent split, report structure and data-source fallback are worth borrowing. But between "analysis" and "trading" there are still four walls: risk control, backtesting, execution and compliance.

{% btn https://github.com/oficcejo/aiagents-stock, View original project, fab fa-github %}
