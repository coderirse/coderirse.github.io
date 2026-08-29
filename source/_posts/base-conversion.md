---
title: BaseConversion — 程序员进制转换器
translation_key: base-conversion
date: 2026-08-29 00:00:01
categories:
  - 项目
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - 工具
  - 开源
description: 纯本地、零广告的安卓进制转换器：进制实时联动、补码与 IEEE 754 位模式可视化。
---

## 项目概述

BaseConversion 是一款面向程序员的安卓进制转换器，纯本地运行、零广告。打开即用，二进制 / 八进制 / 十进制 / 十六进制四框实时联动转换，无需点击"转换"按钮，支持大整数、补码与 IEEE 754 浮点数位模式展示。

{% label Kotlin blue %} {% label Compose green %} {% label MVI orange %}

### 关键特性
- **整数模式**：四进制框双向实时联动；`BigInteger` 任意精度；固定位宽 8/16/32/64 有符号补码，signed/unsigned 切换，超范围自动截断并提示
- **浮点模式**：十进制输值，实时显示 float32 / float64 的 IEEE 754 位模式与实际存储值，支持 `NaN` / `±Infinity` / `-0.0`
- **智能键盘**：应用内自定义键盘，按进制动态禁用非法键、分区配色；长按退格连续删除；一键复制 / 粘贴（自动识别 `0x` / `0b` / `0o` 前缀）
- **个性化**：主题三态切换、强调色可选、默认模式 / 进制 / 位宽 / 精度均可配置，按键音效与震动反馈
- **细节体验**：中英双语、数值等宽字体；唯一联网功能是通过 GitHub Releases API 检查更新

### 技术栈
Kotlin 2.0+ · Jetpack Compose (Material 3) · ViewModel + StateFlow (MVI) · Gradle Kotlin DSL · minSdk 29

架构上把转换算法抽成纯 Kotlin 的 `domain` 层，配合 JUnit 单元测试保证数值逻辑正确性；UI / 数据 / 领域三层清晰分离。

{% btn https://github.com/coderirse/BaseConversion, 查看源码, fab fa-github %}
