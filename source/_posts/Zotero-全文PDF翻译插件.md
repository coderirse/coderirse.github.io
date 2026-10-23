---
title: Zotero 全文 PDF 翻译插件 — 用自备 Key 做双语对照
translation_key: zotero-fulltext-pdf-translate
date: 2026-10-23 00:00:02
updated: 2026-10-23
categories:
  - 项目
tags:
  - Zotero
  - TypeScript
  - 翻译
  - 开源
description: 在 Zotero 里把整篇 PDF 翻译成保留排版的双语对照 PDF，使用自备 LLM API Key，翻译引擎本地运行。
---

{% note info %}
状态：维护中 · 角色：独立开发 · 代码：[公开](https://github.com/coderirse/zotero-fulltext-pdf-translate) · 最后更新：2026-10
{% endnote %}

## 为什么做

读英文论文时，最麻烦的不是「看不懂」，而是**在原文、翻译软件和 PDF 阅读器之间来回切**。网页翻译对 PDF 支持有限，付费文档翻译服务又往往要把整篇论文上传到别人的服务器。

这个插件把流程放回 Zotero：选中条目 → 右键 → 翻译整篇 PDF，产出一份保留排版的双语 PDF，自动挂回原条目。翻译引擎在本地运行，API Key 用你自己的。

## 关键功能

- **右键翻译**：单篇或整个分类批量翻译，队列顺序执行，支持取消和失败重试
- **左右对照版式**：原文在左、译文在右并排一页，也可以切回上下对照
- **保留排版**：公式、表格、图片由 pdf2zh 引擎处理，默认无水印
- **多服务配置**：内置智谱 GLM、DeepSeek、Qwen、Kimi、SiliconFlow、OpenAI、Gemini、Ollama 等预设，也可填任意 OpenAI 兼容端点
- **预设模式**：快速预览 / 论文精读（自动术语表）/ 扫描件 OCR / 自定义
- **自动挂回**：按「标题.zh.bilingual」命名，作为附件挂到原条目下
- **双引擎**：自动下载便携版 v1，或使用已安装的 pdf2zh_next

## 工作原理

Zotero 7+ 插件（TypeScript）通过 `Subprocess` 启动本地翻译引擎子进程，API Key 走环境变量而不是命令行参数；引擎产出单语/双语 PDF 后，如果开启左右对照，再用 PyMuPDF 把原文页与译文页并排拼版，最后用 `Zotero.Attachments.importFromFile` 挂回条目。

## 局限

- 首次使用需要下载约 520 MB 的便携引擎，国内网络可能需要走镜像
- 扫描件需要 OCR，速度和准确率取决于引擎与源文件质量
- 翻译质量取决于你选的模型；术语表需要自己维护
- 目前主要面向 Windows，macOS/Linux 需要手动安装 pdf2zh_next
- 不是 doc2x 的完整替代品，复杂版式的极端情况仍可能错位

{% btn https://github.com/coderirse/zotero-fulltext-pdf-translate, 查看源码, fab fa-github %} {% btn https://github.com/coderirse/zotero-fulltext-pdf-translate/releases, 下载 XPI, fas fa-download %}
