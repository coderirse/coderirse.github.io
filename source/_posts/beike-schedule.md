---
title: BeikeSchedule 贝壳课表 — USTB 课表 App
translation_key: beike-schedule
date: 2026-08-29 00:00:02
categories:
  - 项目
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - 课表
  - USTB
  - 开源
description: 北科大课表 App：教务一键导入、教学周日历精确映射、周视图课表与上课提醒。
---

## 项目概述

BeikeSchedule（贝壳课表）是一款北京科技大学课表 App：内置 WebView 登录本研一体化教务系统一键导入课表，本地周视图展示，支持上课提醒。已发布 Release APK，可直接覆盖升级。

{% label Kotlin blue %} {% label Compose green %} {% label Room orange %} {% label AlarmManager pink %}

### 关键特性
- **教务一键导入**：WebView 完成统一身份认证（App 不接触学号密码），自动抓取学期课表 JSON，预览确认后入库
- **官方教学周日历**：导入时同步教务校历，教学周 ↔ 日期精确映射——国庆等长假周不占教学周序号；假期中自动定位到假期后第一个教学周
- **周视图课表**：按"大节"排版，滑动切周、周次下拉跳转、单双周标注、无固定时间课程单独列表、地点楼名 / 房间号分行显示
- **课程管理**：手动增删改课程，教务数据与手动课程共存
- **上课提醒**：每大节课前 N 分钟系统通知（默认 15 分钟可调），支持精确闹钟，开机自动重排
- **当前周定位**：杀进程重启也能正确定位当前教学周；深色模式三态切换

### 技术要点
- Kotlin + Jetpack Compose（Material 3），Room（课程 / 节次时间）+ DataStore（学期配置 / 校历 / 提醒）
- 教务适配层：WebView 注入 JS 复用登录会话，直接调教务结构化 JSON 接口（课表 32 位周次位图、校历全量映射），无需解析 HTML
- 解析器 / 周次逻辑有单元测试覆盖，fixture 为真实接口样本

**隐私**：学号密码只在系统 WebView 中由本人输入给学校认证页面，App 不读取、不存储、不上传任何凭证；课表数据仅保存在本机。

{% btn https://github.com/coderirse/BeikeSchedule, 查看源码, fab fa-github %} {% btn https://github.com/coderirse/BeikeSchedule/releases, 下载 APK, fas fa-download %}
