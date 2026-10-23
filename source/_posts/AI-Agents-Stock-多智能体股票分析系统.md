---
title: AI Agents Stock — 一个多智能体股票分析开源项目
translation_key: ai-agents-stock
date: 2026-06-13 22:28:12
updated: 2026-10-23
categories:
  - 开源观察
tags:
  - Python
  - AI Agent
  - 量化交易
  - 金融科技
description: 拆解 oficcejo/aiagents-stock：6 个分析 Agent、板块轮动、龙虎榜追踪与 MiniQMT 接口。本文是阅读笔记，不是项目作者。
---

{% note info %}
项目：[oficcejo/aiagents-stock](https://github.com/oficcejo/aiagents-stock) · 作者：oficcejo · 仓库未声明 License
本文是阅读笔记，我没有参与这个项目的开发。
{% endnote %}

## 它解决什么问题

AI Agents Stock 是一个用多个 AI Agent 模拟证券分析师团队的开源项目。它把「看一只股票」拆成技术面、基本面、资金流向、风险评估、情绪、新闻六个维度，每个维度交给一个 Agent，最后汇总成一份分析报告。

项目还包含两个横向模块：

- **智策板块**：4 个 Agent 做板块轮动、宏观政策、资金流向和市场情绪分析
- **智瞰龙虎**：5 个 Agent 分析每日龙虎榜，跟踪游资与机构席位

技术栈是 Python + Streamlit + Plotly，数据源包括 AKShare、Tushare、yfinance、pywencai，支持 Docker 部署，并预留了 MiniQMT 量化交易接口。

## 我关注的设计

**多 Agent 的价值不在于「更准」，而在于把判断拆开。** 单模型一次性给出结论时，你很难知道它哪一步错了；拆成六个 Agent 后，技术面、基本面、资金面各自留下分析过程，至少可以逐项核对证据。

但这也带来两个问题：

1. **一致性**：六个 Agent 可能给出互相矛盾的结论，最后仍需要人来裁决。
2. **成本与延迟**：每次分析要调用多次模型，长文本和实时行情会让 token 成本迅速上升。

项目文档里还提到「筛选 3–5 只优质标的」「短线交易机会挖掘」这类能力。我的理解是：它们更适合作为研究线索，而不是直接照着下单。

{% note warning %}
本文不构成任何投资建议。AI 输出、数据源和回测结果都可能出错，实盘风险自负。
{% endnote %}

## 适合谁

- 想学习多 Agent 编排、Prompt 分工和报告生成的开发者
- 需要一套本地可跑的 A 股分析工作台、愿意自己维护数据源的人
- 对量化交易接口（MiniQMT）感兴趣、但清楚它只是执行端的人

如果你想要的是「开箱即用的稳赚策略」，这个项目不适合你——没有任何开源项目适合。

## 我的判断

它更像一个**可改造的研究沙盒**：Agent 分工、报告结构、数据源降级这些都值得借鉴；但把「分析」变成「交易」之间，还隔着风控、回测、执行和合规四道墙。

{% btn https://github.com/oficcejo/aiagents-stock, 查看原项目, fab fa-github %}
