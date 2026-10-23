---
title: Zotero Full-PDF Translate — Bilingual PDFs with Your Own API Key
translation_key: zotero-fulltext-pdf-translate
date: 2026-10-23 00:00:02
updated: 2026-10-23
categories:
  - Projects
tags:
  - Zotero
  - TypeScript
  - Translation
  - Open Source
description: Translate a whole PDF inside Zotero into a layout-preserving bilingual PDF, using your own LLM API key and a local engine.
---

{% note info %}
Status: maintained · Role: solo developer · Code: [public](https://github.com/coderirse/zotero-fulltext-pdf-translate) · Updated: 2026-10
{% endnote %}

## Why I built it

The annoying part of reading English papers is not comprehension — it is **jumping between the original PDF, a translation tool and a reader**. Web translators handle PDFs poorly, and paid document services usually want you to upload the whole paper.

This plugin keeps the workflow inside Zotero: select an item → right-click → translate the whole PDF. It produces a bilingual PDF that preserves layout and attaches it back to the item. The translation engine runs locally, with your own API key.

## Features

- **Right-click translation**: single item or whole collection, sequential queue, cancel and retry
- **Side-by-side layout**: original on the left, translation on the right; switch back to stacked layout
- **Layout preservation**: formulas, tables and images handled by the pdf2zh engine, no watermark by default
- **Multiple providers**: presets for Zhipu GLM, DeepSeek, Qwen, Kimi, SiliconFlow, OpenAI, Gemini, Ollama and any OpenAI-compatible endpoint
- **Presets**: quick preview / paper reading (auto glossary) / scanned OCR / custom
- **Auto-attach**: named `Title.zh.bilingual` and attached to the original item
- **Two engines**: automatic portable v1 download or an existing pdf2zh_next installation

## How it works

The Zotero 7+ plugin (TypeScript) starts the local translation engine as a subprocess through `Subprocess`. The API key is passed via environment variables, not command-line arguments. When side-by-side mode is on, PyMuPDF composes original and translated pages into one spread; `Zotero.Attachments.importFromFile` then attaches the result.

## Limitations

- The first run downloads a ~520 MB portable engine; a mirror may be needed in mainland China
- Scanned PDFs require OCR; speed and accuracy depend on the engine and source quality
- Translation quality depends on the model you choose; glossaries are manual
- Primarily Windows-oriented; macOS/Linux require installing pdf2zh_next manually
- Not a complete doc2x replacement — complex layouts can still break

{% btn https://github.com/coderirse/zotero-fulltext-pdf-translate, View source, fab fa-github %} {% btn https://github.com/coderirse/zotero-fulltext-pdf-translate/releases, Download XPI, fas fa-download %}
