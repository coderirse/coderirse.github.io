---
title: llmhub — Turn a Home GPU into an Always-Available OpenAI-Compatible API
translation_key: llmhub
date: 2026-10-23 00:00:03
updated: 2026-10-23
categories:
  - Projects
tags:
  - LLM
  - Ollama
  - Self-Hosted
  - Networking
description: A self-hosted LLM gateway with local GPU, reverse SSH tunnel, cloud gateway and cloud API fallback.
---

{% note info %}
Status: maintained · Role: solo developer · Code: [public](https://github.com/coderirse/llmhub) · Updated: 2026-10
{% endnote %}

## Why I built it

I have a GPU machine at home and a 2C4G cloud server. I wanted scripts, apps and bots to call local models at any time, but:

- The cloud server has no GPU and cannot run inference
- The home machine is not always on, and its public IP changes
- Exposing Ollama directly to the internet is a bad idea

llmhub takes a simple approach: **models run at home; the server is only the front door.**

```
callers (scripts / apps / web / bots)
        │  OpenAI-compatible API
        ▼
VPS: one-api gateway (auth / rate limit / usage / retries)
   ├─ local Ollama (preferred) → ssh -R tunnel → home GPU
   └─ cloud API (fallback when the home machine is offline)
VPS: Open WebUI (chat UI)
```

## Key design

- **Zero inbound ports**: public entry goes through Cloudflare Tunnel; the home machine connects out with an ssh reverse tunnel, so the security group barely needs opening
- **Automatic fallback**: one-api has two channels; when local Ollama goes down, cloud API takes over
- **Unified auth and usage**: every caller shares one gateway for rate limiting and statistics
- **Secrets never enter the repo**: real IPs, domains and keys are gitignored; only `*.example` templates are committed

## Problems I hit

- Ollama defaults to a 4K context; coding agents send long prompts and get truncated, so `OLLAMA_CONTEXT_LENGTH` must be raised
- qwen3 emits thinking output by default, taking 5–7 minutes per turn on long prompts; a forced `/no_think` variant made it an order of magnitude faster
- Half-open reverse tunnels hold ports; sshd needs a `Match` block to restrict forwarding plus `ClientAlive` checks

## Limitations

- Depends on an always-on VPS and a stable tunnel; if home goes offline, calls fall back to the cloud
- Single-user configuration; no multi-tenancy or billing
- Local model quality and speed depend on the GPU; 7B/8B models are fine for light tasks, not a replacement for frontier APIs
- Any public service carries risk — at minimum add auth, rate limits and logging

{% btn https://github.com/coderirse/llmhub, View source, fab fa-github %}
