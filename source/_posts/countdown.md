---
title: 倒数日 App — 立项与产品设计
translation_key: countdown
date: 2026-08-29 00:00:03
categories:
  - 项目
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - Glance
  - 产品设计
description: 以桌面小组件为核心触点的倒数 / 正数日工具：完整 PRD 与技术选型分享（立项阶段）。
cover: /img/covers/cover-05.jpg
---

## 项目概述

这是一款正在立项中的倒数 / 正数日 Android 应用——目前完成了完整的产品文档（PRD v0.1）与技术方案，尚未进入编码。把设计过程分享出来，也算一次"写作即设计"的实践。

**一句话定位**：帮你把「重要的日子」放到打开手机就能看到的地方——桌面上放一个小组件，随时知道距目标还有多少天，或已经多少天。

{% label Android blue %} {% label Jetpack Glance green %} {% label 产品设计 orange %}

### 产品思考
- **不是日历，是情绪工具**：核心价值不是管理日程，而是「一眼感到时间距离」的确定感与仪式感——恋爱天数、考试倒计时、宝宝出生天数、还款 / 发薪日
- **核心路径极简**：首次打开 3 步内添加第 1 个事件并引导放置小组件；日常使用甚至不需要打开 App，看桌面 / 锁屏小组件即可
- **克制**：无付费、无广告、无账号、无云同步，个人自用 + 未来全开源

### 场景驱动的事件类型
- 考试倒计时（高考 / 四六级 / 期末）——大数字 + 考前提醒
- 纪念日正数（在一起第 N 天、宝宝出生天数）
- 工作日倒计时（发薪 / 还款 / 项目截止）——锁屏可见
- 习惯打卡（坚持某件事第 N 天、连续天数与里程碑）

### 技术选型
技术方案里对比了三条小组件路线，结论是以 **Jetpack Glance + Compose** 为主路线：声明式 DSL 与 Compose 心智一致，天然支持 Material You 动态取色，同一套 API 未来可复用到 Wear OS Tiles；复杂交互场景再用经典 AppWidgetProvider 补位。数据层规划 Room + DataStore，小组件的每日更新机制也在方案中做了推演。骨架已就绪（Kotlin 2.2 + Compose BOM 2026.02，minSdk 35 / Android 15）。

后续进展会持续更新到这篇文章。
