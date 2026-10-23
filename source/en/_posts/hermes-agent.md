---
title: Hermes Agent — An Open-Source Agent That Builds Its Own Skills
translation_key: hermes-agent
description: A source-reading note on Nous Research's Hermes Agent — skill creation, SQLite/FTS5 memory, multi-platform gateways and Cron. Not a contribution.
date: 2026-06-13 22:28:14
updated: 2026-10-23
categories:
  - Open Source Notes
tags:
  - AI Agent
  - Python
  - Automation
  - Open Source
---

{% note info %}
Project: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · Author: Nous Research · License: MIT
I forked the repository to read the Agent Loop, Skill Manager and Memory implementations. I did not contribute upstream.
{% endnote %}

## What it is trying to solve

Hermes Agent is an open-source general-purpose agent released by Nous Research in February 2026. Unlike a single-turn chatbot, it focuses on **long-running operation**: remembering previous tasks, turning experience into reusable skills and being reachable from different messaging platforms.

It competes with OpenClaw; it is not a successor. OpenClaw broke out earlier, and Hermes arrived a few weeks later with a stronger emphasis on self-improvement and deep customisation.

## Core mechanisms

### Closed-loop learning

```
task → experience log → skill creation → skill refinement → persistent knowledge
  ↑                                                              ↓
  └──────────────── later tasks call the skill ←─────────────────┘
```

The flowchart is not the interesting part. These three questions are:

1. Under what conditions does experience become a skill?
2. How does a new skill avoid conflicting with existing ones?
3. Who verifies the quality of a generated skill?

Without answers, "self-evolution" can easily become "adding bugs to itself".

### Memory

- SQLite + FTS5 full-text search
- Automatic memory summaries
- Periodic "memory recall"
- Cross-session continuity

The biggest risk in a memory layer is not forgetting — it is **misremembering** and **remembering too much**. The former contaminates later decisions; the latter raises both context cost and noise.

### Platforms and automation

Telegram, Discord, Slack, WhatsApp and CLI are all supported. A built-in Cron scheduler can run daily reports, health checks and backups unattended.

## My take

Hermes points in the right direction: an agent should be a system that accumulates, not a one-off Q&A. But it also moves the hard problem from "can the model do it" to "how do you keep it under control" — skill permissions, memory cleanup, cost control and rollback matter more than the demo.

{% btn https://github.com/NousResearch/hermes-agent, View original project, fab fa-github %}
