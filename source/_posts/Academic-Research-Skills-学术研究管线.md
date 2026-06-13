---
title: Academic Research Skills — 学术研究管线
date: 2026-06-13 22:28:16
categories:
  - 项目
tags:
  - 学术工具
  - AI辅助
  - Python
  - LaTeX
description: 为 Claude Code 构建的完整学术研究管线技能套件，覆盖从研究到发表的全流程。
---

## 项目概述

**Academic Research Skills (ARS)** 是一套为 Claude Code 构建的专业学术研究工具集，将完整的研究工作流——从文献调研到论文发表——封装为可编排的 AI 技能管线。

{% note success %}
这是一个"工具的工具"——让 AI 更好地帮助研究者，而不是取代研究者。
{% endnote %}

## 四大技能包

### Deep Research — 深度研究

13 个专业化 Agent 组成的团队，7 种工作模式：

| 模式 | 用途 |
|------|------|
| 完整研究 | 端到端学术研究 |
| 快速简报 | 快速文献概览 |
| 文献综述 | 系统性文献回顾 |
| 系统综述 | 含 PRISMA 协议 + Meta 分析 |
| 事实核查 | 声明准确性验证 |
| 苏格拉底引导 | 对话式研究思路引导 |
| 论文评审 | 预提交论文评审 |

### Academic Paper — 论文写作

12 个 Agent 组成的写作流水线，10 种模式：

- 完整论文 / 大纲 / 摘要 / 文献综述生成
- 修订与修订教练模式
- 引用格式检查
- 格式转换（LaTeX / DOCX / PDF）
- 双语摘要（中英文）

{% label APA 7.0 blue %} {% label IEEE green %} {% label MLA pink %} {% label Chicago orange %} {% label Vancouver red %}

### Academic Paper Reviewer — 同行评审

模拟 5 位独立审稿人进行多角度评审：

- **EIC（主编）**：总体评估与裁决
- **3 位同行审稿人**：方法学、理论贡献、实验设计
- **Devil's Advocate**：专门挑刺，找出最严苛的问题

每位审稿人都有独立的专业领域视角和评分标准（0-100 分制）。

### Academic Pipeline — 完整管线

10 阶段端到端工作流：

```
研究 → 写作 → 完整性校验 → 评审 → 修订 → 再评审 → 再修订 → 最终校验 → 定稿
```

每个阶段都设有**强制质量门禁**，确保输出可靠。

## 核心创新

### 反幻觉校验

强制声明-原文对照检查，确保 AI 生成内容有据可查。这是整个系统中最关键的设计——学术写作容不得半点虚构。

### 风格校准

根据目标期刊或会议的写作风格自动调整输出，支持自定义风格模板。

### 苏格拉底引导

不是直接给答案，而是通过提问帮助研究者理清思路、发现盲点。

## 技术栈

{% label Python blue %} {% label LaTeX orange %} {% label Pandoc green %} {% label YAML pink %} {% label GitHub Actions red %}

## 项目意义

做这个项目的初衷很简单：学术写作是一件需要极高严谨性的事，而 AI 的"幻觉"问题是最大的障碍。ARS 的核心设计理念就是**用流程和校验来对抗幻觉**——不是让 AI 替你写作，而是让 AI 成为一个可靠的学术协作者。
