---
title: USTB 成绩排名浏览器扩展
translation_key: ustb-grade-rank-extension
date: 2026-07-12 00:00:02
categories:
  - 项目
tags:
  - USTB
  - Chrome Extension
  - JavaScript
  - 工具
description: 为北科大教务系统开发的 Chrome 扩展，在成绩页面显示排名和总人数等隐藏数据。
---

## 项目概述

专为北京科技大学教务系统开发的浏览器扩展（Chrome / Edge），解决了一个实际痛点：学校教务系统的成绩查询页面不显示排名信息，但后端 API 实际返回了这些数据。

{% note info %}
用技术解决身边的问题——一个典型的"学生黑客"项目。
{% endnote %}

## 技术架构

{% label JavaScript blue %} {% label Chrome Extension green %} {% label Manifest V3 orange %}

### 工作原理

1. 注入 Page Hook 拦截 fetch/XHR 请求
2. 捕获成绩查询 API 的返回数据（含排名、总人数等隐藏字段）
3. Content Script 中解析数据
4. 动态修改 DOM，在成绩表格中插入排序列

### 关键特性

- **多 UI 框架支持**：兼容 Element UI、iView UI 和原生 HTML 表格
- **MutationObserver 监听**：检测页面动态变化并自动重新渲染
- **自定义列**：用户可配置展示专业排名、班级排名、学分、绩点等
- **Debug 模式**：暴露所有 API 返回字段
- **隐私保护**：不收集、不存储任何账号或成绩数据

{% label USTB green %} {% label 浏览器扩展 green %} {% label 工具 green %}
