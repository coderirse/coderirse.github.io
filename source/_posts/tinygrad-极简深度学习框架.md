---
title: tinygrad — 一个可以读完的深度学习框架
translation_key: tinygrad
date: 2026-07-12 00:00:00
updated: 2026-10-23
categories:
  - 开源观察
tags:
  - tinygrad
  - 深度学习
  - AI
  - Python
  - 开源
description: 阅读 tinygrad 的设计：少量算子 + IR 编译器 + 多硬件后端，适合理解深度学习框架内部机制。本文是阅读笔记。
---

{% note info %}
项目：[tinygrad/tinygrad](https://github.com/tinygrad/tinygrad) · 作者：tiny corp / George Hotz 等 · License：MIT
本文是阅读笔记，我没有参与项目开发。
{% endnote %}

## 它是什么

tinygrad 是一个介于 PyTorch 和 micrograd 之间的深度学习框架，目标是「小到可以读完」。它用少量 Python 源文件实现了 Tensor、自动微分、IR 编译器、JIT 和多种硬件后端，足以跑训练和 LLM 推理。

## 核心组件

- **Tensor 库**：类 PyTorch 的 Eager API，支持自动微分
- **IR 编译器**：kernel 融合与 lowering，JIT + Graph 执行
- **训练工具**：nn、optim、datasets
- **LLM 推理**：支持 GGUF，可运行主流开源模型

## 硬件后端

CUDA / PTX、AMD ROCm、Apple Metal、OpenCL、Qualcomm QCOM、WebGPU、LLVM IR（CPU）、ONNX 导入。

它比较有意思的一点是：新增一个加速器后端，不需要把整个框架重写一遍，而是实现少量底层算子，再交给 IR 编译器做融合和调度。

## 值得读的部分

### Lazy Execution & Kernel Fusion

设置 `DEBUG=3` 或 `4` 可以看融合后的 kernel 和生成代码。JIT 捕获 + kernel 重放，能明显减少小算子带来的调度开销。

### BEAM Search

自动搜索最优 kernel 配置，针对不同硬件调优。它体现了一个现实：同样的计算图，在不同 GPU 上的最优实现可能完全不同。

### Process Replay

跨变更比较生成的 kernel，避免改动引入性能退化。这是很多「能跑就行」的项目缺少的一环。

## 我的判断

tinygrad 最适合拿来做两件事：学习框架内部机制，以及验证一个新硬件后端的可行性。它不以「替代 PyTorch」为目标，也不适合直接承载生产级训练——但如果你想搞清楚「一个算子是怎么变成 GPU 代码的」，它比大多数框架都更透明。

{% btn https://github.com/tinygrad/tinygrad, 查看原项目, fab fa-github %}
