---
title: Hermes Agent — 一个会自己攒技能的开源智能体
translation_key: hermes-agent
date: 2026-06-13 22:28:14
updated: 2026-10-23
categories:
  - 开源观察
tags:
  - AI Agent
  - Python
  - 自动化
  - 开源
description: 拆解 Nous Research 的 Hermes Agent：技能自创建、SQLite/FTS5 记忆、多平台网关与 Cron 调度。本文是源码阅读笔记，不是项目贡献者。
---

{% note info %}
项目：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · 作者：Nous Research · License：MIT
我把仓库 fork 下来读过 Agent Loop、Skill Manager 和 Memory 的实现；我没有参与上游开发。
{% endnote %}

## 它想解决什么

Hermes Agent 是 Nous Research 在 2026 年 2 月发布的开源通用智能体。和「一次对话、一次回答」的聊天机器人不同，它把重点放在**长期运行**：能记住之前的任务，能把经验沉淀成技能，能在不同消息平台上被调用。

它和 OpenClaw 是同一赛道的竞品关系，不是「后继项目」——OpenClaw 更早爆发，Hermes 在几周后推出，定位更偏向自改进和深度定制。

## 核心机制

### 闭环学习

```
任务执行 → 经验记录 → 技能创建 → 技能优化 → 知识持久化
    ↑                                          ↓
    └──────────── 后续任务自动调用 ←──────────────┘
```

真正值得看的不是流程图，而是三个问题：

1. 经验在什么条件下才会被写成技能？
2. 新技能如何避免和旧技能冲突？
3. 技能质量由谁验证？

如果这三个问题没有答案，「自进化」很容易变成「自己给自己加 bug」。

### 记忆

- 基于 SQLite + FTS5 的全文搜索
- 自动生成记忆摘要
- 定期「记忆唤醒」
- 跨会话延续

记忆层最大的风险不是「记不住」，而是「记错」和「记太多」。前者会污染后续决策，后者会让上下文成本和噪声一起上升。

### 多平台与自动化

Telegram、Discord、Slack、WhatsApp、CLI 都能接；内置 Cron 调度器，可以跑每日报告、健康检查、备份等无人值守任务。

## 我的判断

Hermes 代表的方向是对的：Agent 不应该只是一次性的问答，而应该是一个持续积累的系统。但它也把问题从「模型会不会做」转移到了「你怎么管住它」——技能权限、记忆清理、成本控制、失败回滚，这些工程问题比演示视频更重要。

{% btn https://github.com/NousResearch/hermes-agent, 查看原项目, fab fa-github %}
