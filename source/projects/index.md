---
title: 项目作品
date: 2024-01-01 00:00:02
type: projects
description: lizhichao 的项目作品集：机器人控制、Android 工具与 AI Agent
aside: true
---

## 精选作品

{% note info %}
这里是我独立完成或作为团队一员深度参与的项目。每个项目都标了状态、我的角色和代码是否公开——「我做的」和「我读的」分开写，读者不用猜。
{% endnote %}

### 脚踝外骨骼机器人控制系统

实验室项目 · 维护中 · 我负责控制系统（ROS2 / CAN / IMU / 力传感）

从 ROS1 迁移到 ROS2 Humble，做 5 模式自适应步态控制、CAN 双协议栈、Modbus RTU 力传感和 IMU 驱动。

{% post_link 脚踝外骨骼机器人控制系统 '阅读项目文章' %} · [代码](https://github.com/coderirse/Ankle_Exoskeleton_ustb)

---

### 爬壁小车 — 壁面爬行机器人控制系统

实验室项目 · 已归档 · 我负责控制系统（ROS2 / CAN / RS485）

差速驱动壁面爬行机器人，CAN + RS485 双协议控制四台电机，带 500ms 超时停机与加速度斜坡保护。

{% post_link 爬壁小车-壁面爬行机器人控制系统 '阅读项目文章' %} · 代码未公开

---

### BeikeSchedule 贝壳课表

个人项目 · 维护中 · 独立开发 · 代码公开

北科大课表 App：教务一键导入、教学周日历映射、周视图与上课提醒。学号密码只在系统 WebView 中由本人输入，App 不读取、不存储。

{% post_link beike-schedule '阅读项目文章' %} · [代码](https://github.com/coderirse/BeikeSchedule) · [下载 APK](https://github.com/coderirse/BeikeSchedule/releases)

---

### LingoFlow — AI 翻译学习 App

个人项目 · 维护中 · 独立开发 · 代码公开

ML Kit 端侧翻译 + LLM 流式长文翻译 + 韦氏词典查词，API Key 仅保存在设备本地。

{% post_link lingoflow '阅读项目文章' %} · [代码](https://github.com/coderirse/LingoFlow) · [下载 APK](https://github.com/coderirse/LingoFlow/releases)

---

### BaseConversion — 程序员进制转换器

个人项目 · 维护中 · 独立开发 · 代码公开

纯本地、零广告的安卓进制转换器：四框实时联动、补码与 IEEE 754 位模式可视化，唯一联网功能是检查更新。

{% post_link base-conversion '阅读项目文章' %} · [代码](https://github.com/coderirse/BaseConversion) · [下载 APK](https://github.com/coderirse/BaseConversion/releases)

---

### Net-USTB — 北科校园网一键登录

个人项目 · 维护中 · 独立开发 · 代码公开

北科大校园网（Dr.COM ePortal 4.x）的第三方 Android 客户端，一键登录/登出，AES-256-GCM 加密凭据存储。

{% post_link Net-USTB-北科校园网一键登录 '阅读项目文章' %} · [代码](https://github.com/coderirse/Netconnect_tool)

{% note warning %}
校园网工具仅用于个人学习与自用，与学校官方无关；请遵守学校网络与信息系统管理规定。
{% endnote %}

---

## 工具与小作品

### WatchDog — AI API 额度监控

个人项目 · 维护中 · 独立开发 · 代码公开

监控 DeepSeek、Kimi、智谱 GLM、SiliconFlow 四个平台的 API 余额和月度用量。

{% post_link WatchDog-AI-API额度监控 '阅读项目文章' %} · [代码](https://github.com/coderirse/WatchDog) · [下载 APK](https://github.com/coderirse/WatchDog/releases)

---

### ScientificCalculator — Kotlin Compose 科学计算器

个人项目 · 维护中 · 独立开发 · 代码公开

表达式求值、方程求解、矩阵运算，使用 Shunting-yard + 递归下降解析。

{% post_link ScientificCalculator-Kotlin科学计算器 '阅读项目文章' %} · [代码](https://github.com/coderirse/ScientificCalculator) · [下载 APK](https://github.com/coderirse/ScientificCalculator/releases)

---

### Trailmap — 我的足迹地图

个人项目 · 维护中 · 独立开发 · 代码公开

用 Leaflet.js 做的交互式旅行地图，数据全部在 `locations.json`，推送即自动部署。

{% post_link trailmap '阅读项目文章' %} · [代码](https://github.com/coderirse/trailmap)

---

### Reps — 离线刷题 App

个人项目 · 公测 · 独立开发 · 代码公开

把老师下发的题库 CSV 变成手机上可反复背诵的离线刷题应用，支持四种练习模式、错题本和进度恢复。

{% post_link Reps-离线刷题App '阅读项目文章' %} · [代码](https://github.com/coderirse/Reps) · [下载 APK](https://github.com/coderirse/Reps/releases)

---

### Zotero 全文翻译插件

个人项目 · 维护中 · 独立开发 · 代码公开

在 Zotero 里把整篇 PDF 翻译成保留排版的双语对照 PDF，使用自己的 LLM API Key，引擎本地运行。

{% post_link Zotero-全文PDF翻译插件 '阅读项目文章' %} · [代码](https://github.com/coderirse/zotero-fulltext-pdf-translate) · [下载 XPI](https://github.com/coderirse/zotero-fulltext-pdf-translate/releases)

---

### llmhub — 自托管 LLM 网关

个人项目 · 维护中 · 独立开发 · 代码公开

把本地 GPU 上的 Ollama 通过反向隧道接到云服务器网关，对外提供 OpenAI 兼容 API，本地掉线时自动切到云端 API。

{% post_link llmhub-自托管LLM网关 '阅读项目文章' %} · [代码](https://github.com/coderirse/llmhub)

---

### ShowWe — 微信小程序社区

个人项目 · 维护中 · 独立开发 · 代码公开

基于微信云开发的社区小程序：帖子、评论点赞、私信、通知和多级缓存。

{% post_link showwe-微信小程序社区平台 '阅读项目文章' %} · [代码](https://github.com/coderirse/showwe)

---

### Sourcehub — 数字内容商城 Demo

课程/演示项目 · 已归档 · 独立开发 · 代码公开

Android 数字内容商城的演示实现：用户系统、购物车、模拟支付和后台下载。所有支付均为模拟，不产生真实交易；示例内容仅用于演示。

{% post_link Sourcehub-数字资源交易平台 '阅读项目文章' %} · [代码](https://github.com/coderirse/Sourcehub)

---

### 我的生活助手 — Tauri 桌面应用

自用工具 · 维护中 · 独立开发 · 未开源

只供本人使用的学习生活管理桌面应用：计划、开发、健身、饮食、游戏和数据备份，除 GitHub 模块外完全离线。

{% post_link life-assistant '阅读项目文章' %}

---

## 进行中

### 倒数日 App — 产品设计与技术选型

进行中 · 独立开发 · 尚未编码

以桌面小组件为核心的倒数/正数日工具，目前完成 PRD v0.1 与技术方案，骨架已就绪。

{% post_link countdown '阅读项目文章' %}

---

## 开源观察

以下是我读过或部署过的开源项目，**不是我开发的**。每篇都标了原作者和仓库，重点写我关注的设计和判断。

- [AI Agents Stock](https://github.com/oficcejo/aiagents-stock) — 多智能体股票分析 · {% post_link AI-Agents-Stock-多智能体股票分析系统 '阅读笔记' %}
- [Academic Research Skills](https://github.com/Imbad0202/academic-research-skills) — Claude Code 学术研究管线 · {% post_link Academic-Research-Skills-学术研究管线 '阅读笔记' %}
- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — Claude Code 资源地图 · {% post_link awesome-claude-code生态资源合集 '阅读笔记' %}
- [Hermes Agent](https://github.com/NousResearch/hermes-agent) — 会自己攒技能的开源智能体 · {% post_link Hermes-Agent-自进化AI智能体 '阅读笔记' %}
- [tinygrad](https://github.com/tinygrad/tinygrad) — 可以读完的深度学习框架 · {% post_link tinygrad-极简深度学习框架 '阅读笔记' %}
- [Warp](https://github.com/warpdotdev/warp) — 把终端做成 Agent 工作台 · {% post_link warp-智能终端AI编程环境 '阅读笔记' %}

---

## 本站

基于 Hexo 8.x + Butterfly 主题，部署在 GitHub Pages，在主题之上做了杂志编辑风的视觉重构。源码在 [coderirse.github.io](https://github.com/coderirse/coderirse.github.io)。
