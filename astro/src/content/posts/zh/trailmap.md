---
title: Trailmap — 我的足迹地图
translation_key: trailmap
date: 2026-08-29 00:00:06
categories:
  - 项目
tags:
  - Leaflet
  - JavaScript
  - Vite
  - 地图
  - 开源
description: 用 Leaflet.js 构建的交互式个人旅行地图：照片、故事、时间线播放与 3D 地球。
cover: /img/covers/cover-02.jpg
---

## 项目概述

Trailmap 是一个交互式个人旅行地图，用 Leaflet.js 构建，记录每一段旅程的照片与故事。增删地点只需要改一个 `locations.json` 数据文件，推送即通过 GitHub Actions 自动部署到 GitHub Pages。

{% label Leaflet blue %} {% label Vite green %} {% label Globe.GL orange %} {% label 数据驱动 pink %}

### 关键特性
- **交互式地图**：发光标记点，hover 放大，点击聚焦并展示详情
- **旅行故事**：左侧导航列表展示地点、日期、标签与描述（移动端为底部抽屉）
- **照片画廊**：侧栏两列网格，点击 Lightbox 全屏查看，支持 ←/→/Esc 键操作
- **时间线播放器**：底部进度条按日期自动播放旅行轨迹（1.8 秒 / 步），路线组之间有流动虚线动画
- **标签筛选**：顶部胶囊标签，一键筛选地图标记
- **3D 地球**：Globe.GL 一键切换（CDN 懒加载，不影响首屏）
- **多底图与双主题**：探索（默认深色）/ 标准 / 卫星三种底图；暗黑与白昼风格一键切换，选择自动保存
- **URL 路由**：`/#/beijing` 直达地点，支持分享链接与浏览器前进 / 后退

### 技术要点
原生 JavaScript 组件化（Map / Sidebar / PhotoGallery / Timeline 各自独立模块），Vite 构建；数据与展示完全分离——所有地点、照片、标签、路线组集中在 `src/data/locations.json`，改数据不改代码。

{% btn https://github.com/coderirse/trailmap, 查看源码, fab fa-github %}
