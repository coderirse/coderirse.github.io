---
title: 项目作品
date: 2024-01-01 00:00:02
type: projects
description: 李智超的项目作品集
aside: true
---

## 精选项目

{% note info %}
以下是我独立完成或深度参与的项目，涵盖机器人控制、AI Agent、金融分析、学术工具等领域。
{% endnote %}

---

### 🤖 脚踝外骨骼机器人控制系统

{% label primary @C++ %} {% label success @Python %} {% label warning @ROS %} {% label info @CAN总线 %}

基于 ROS Melodic 的脚踝外骨骼机器人完整控制系统，包含 CAN 总线电机驱动和 AHRS 惯性导航传感器驱动。

**核心亮点：**
- 实现 `can_ankle` ROS 包，支持力矩模式、速度模式和 CANopen 配置的电机控制
- 实现 `fdilink_ahrs` ROS 驱动，适配 FDILink Deta-10 AHRS/INS 传感器
- 发布 IMU、GPS、姿态角、里程计等多种 ROS Topic
- 集成实验数据录制与回放分析（ROS Bag）

{% label success @机器人 %} {% label success @嵌入式 %} {% label success @传感器融合 %}

---

### 📈 AI Agents Stock — 多智能体股票分析系统

{% label primary @Python %} {% label danger @Streamlit %} {% label info @LLM %} {% label warning @Docker %}

模拟专业分析师团队的复合多 AI 智能体股票分析系统，覆盖 A 股、港股、美股。

**核心亮点：**
- **6 大分析智能体**：技术面、基本面、资金流向、风险评估、情绪分析、新闻舆情
- **智策板块**：4 个 AI 智能体每日自动分析板块轮动、宏观政策、资金流向与市场情绪
- **智瞰龙虎**：5 个 AI 智能体追踪龙虎榜数据，识别短线机会和热点板块
- **主力选股**：追踪机构资金动向，筛选 3-5 只优质标的
- **实时监控**：价格预警 + 钉钉/飞书 Webhook 通知
- 支持 **MiniQMT 量化交易** 集成，Docker 一键部署

{% label success @量化交易 %} {% label success @数据分析 %} {% label success @金融科技 %}

---

### 🧠 Hermes Agent — 自进化 AI 智能体

{% label primary @Python %} {% label info @TypeScript %} {% label warning @LLM %} {% label danger @多平台 %}

Nous Research 出品的通用自进化 AI 智能体，具备经验学习、持久记忆和跨平台运行能力。

**核心亮点：**
- **闭环学习**：完成任务后自动创建技能，持续自我改进
- **多平台接入**：Telegram、Discord、Slack、WhatsApp、CLI
- **40+ 内置工具**，支持 MCP 协议扩展
- 内置 **Cron 调度器**，支持无人值守自动化
- 支持本地、Docker、SSH、K8s 等多种部署方式

{% label success @AI Agent %} {% label success @自动化 %} {% label success @开源贡献 %}

---

### 🎓 Academic Research Skills for Claude Code

{% label primary @Python %} {% label info @YAML %} {% label warning @LaTeX %} {% label success @Pandoc %}

为 Claude Code 构建的完整学术研究管线技能套件，覆盖从研究到发表的全流程。

**核心亮点：**
- **4 大技能包**：深度研究、论文写作、同行评审、学术管线编排
- **深度研究**：13 个 Agent 团队，7 种模式，支持 PRISMA 系统综述
- **论文写作**：12 个 Agent 流水线，支持 APA/IEEE/MLA/Chicago 等多种引用格式
- **学术评审**：模拟 EIC + 3 位审稿人 + Devil's Advocate 的多角度评审
- 强制**反幻觉校验**、风格校准、写作质量检查等质量门禁

{% label success @学术工具 %} {% label success @AI辅助 %} {% label success @知识管理 %}

---

### 🌐 个人技术博客

{% label primary @Hexo %} {% label success @Butterfly %} {% label info @GitHub Pages %}

基于 Hexo 8.x 和 Butterfly 主题构建的个人博客，CSS 深度定制，部署于 GitHub Pages。

**核心亮点：**
- Butterfly 主题深度定制（自定义 CSS、渐变背景、Canvas 动效）
- 集成不蒜子访客统计
- 自动化 CI/CD：源码推 `source` 分支，`hexo deploy` 部署至 `master`
- 免费托管，零运维成本

{% btn https://github.com/coderirse/coderirse.github.io, 查看源码, fab fa-github %}

---

*更多项目和代码细节，欢迎访问我的 [GitHub](https://github.com/coderirse)。*
