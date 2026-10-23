---
title: llmhub — 把家里 GPU 变成随时可用的 OpenAI 兼容 API
translation_key: llmhub
date: 2026-10-23 00:00:03
updated: 2026-10-23
categories:
  - 项目
tags:
  - LLM
  - Ollama
  - 自托管
  - 网络
description: 本地 GPU + 反向 SSH 隧道 + 云服务器网关 + 云端 API 兜底的自托管 LLM 网关。
---

{% note info %}
状态：维护中 · 角色：独立开发 · 代码：[公开](https://github.com/coderirse/llmhub) · 最后更新：2026-10
{% endnote %}

## 为什么做

我有一台带 GPU 的电脑，也有一台 2C4G 的云服务器。想让脚本、App 和机器人随时调用本地模型，但：

- 云服务器没有 GPU，跑不动推理
- 家里的电脑不常开，公网 IP 也不固定
- 直接把 Ollama 暴露到公网，安全风险太大

llmhub 的做法是：**模型跑在家里，服务器只做门面。**

```
调用方（脚本 / App / 网页 / 机器人）
        │  OpenAI 兼容 API
        ▼
VPS: one-api 网关（鉴权 / 限流 / 用量 / 渠道重试）
   ├─ 本地 Ollama（优先）→ ssh -R 反向隧道 → 家里 GPU
   └─ 云端 API（兜底，本地掉线自动切换）
VPS: Open WebUI（聊天网页）
```

## 关键设计

- **零入站端口**：公网入口走 Cloudflare Tunnel，家里到服务器是一条 ssh 反向隧道，安全组几乎不用开
- **自动兜底**：one-api 配两个渠道，本地 Ollama 掉线后自动切到云端 API
- **统一鉴权与用量**：所有调用方共用一个网关，便于限流和统计
- **凭据不进仓库**：真实 IP、域名和密钥全部 gitignore，仓库里只有 `*.example` 模板

## 踩过的坑

- Ollama 默认 4K 上下文，编码类 Agent 的长提示词会被截断，需要调大 `OLLAMA_CONTEXT_LENGTH`
- qwen3 默认输出思考内容，在长提示词下每轮要 5–7 分钟；做一个强制 `/no_think` 的变体后快了一个数量级
- 反向隧道的半开连接会占着端口，需要在 sshd 的 `Match` 块里限制转发并加 `ClientAlive` 检测

## 局限

- 依赖一台常开的 VPS 和一条稳定的隧道，家里断网就会切到云端
- 目前是单用户配置，没有做多租户和计费
- 本地模型的质量和速度取决于显卡，7B/8B 模型适合轻量任务，不适合替代前沿 API
- 公网暴露任何服务都有风险，至少要加鉴权、限流和日志

{% btn https://github.com/coderirse/llmhub, 查看源码, fab fa-github %}
