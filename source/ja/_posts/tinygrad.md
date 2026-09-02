---
title: tinygrad — ミニマリスト深層学習フレームワーク
translation_key: tinygrad
date: 2026-07-12 00:00:00
categories:
  - プロジェクト
tags:
  - tinygrad
  - 深層学習
  - AI
  - Python
  - オープンソース
description: tinygradの設計哲学を掘り下げる — わずか25の低レベル演算で新しいアクセラレータバックエンドを追加可能。
cover: /img/covers/cover-16.jpg
---

## 概要

tinygradはPyTorchとmicrogradの中間に位置する深層学習フレームワークで、tiny corpがメンテナンス。わずか約200のPythonソースファイルで、学習から推論までの完全なDLワークフローをサポート。

{% label Python blue %} {% label CUDA green %} {% label Metal orange %} {% label WebGPU red %}

### コアコンポーネント
- **Tensorライブラリ**：PyTorchライクなEager API + 自動微分
- **IRコンパイラ**：カーネル融合・lowering、JIT + Graph実行
- **LLM推論**：GGUFフォーマット対応

### ハードウェアバックエンド
NVIDIA CUDA/PTX, AMD ROCm/CDNA/RDNA3/RDNA4, Apple Metal, OpenCL, Qualcomm QCOM, WebGPU, LLVM IR, ONNX

{% label 深層学習 green %} {% label AIフレームワーク green %} {% label OSS green %}
