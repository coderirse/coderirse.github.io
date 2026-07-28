---
title: 项目作品
date: 2024-01-01 00:00:02
type: projects
description: 李智超的项目作品集
aside: true
top_img: https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80
---

## 精选项目

{% note info %}
以下是我独立完成或深度参与的项目，涵盖机器人控制、Android 应用、AI Agent、金融分析、学术工具等领域。
{% endnote %}

---

### 🧗 爬壁小车 — 壁面爬行机器人

{% label Python blue %} {% label ROS2 green %} {% label CAN总线 orange %} {% label 机器人 pink %}

基于 ROS2 的差速驱动壁面爬行机器人控制系统，支持 CAN + RS485 双协议四电机协同控制。

**核心亮点：**
- 双协议电机控制：CAN 总线 + RS485/Modbus 同时控制四台独立电机
- ROS2 原生集成：订阅 `/cmd_vel`，线速度和角速度实时解算为电机转速
- 游戏手柄远程操控：方向键 + 摇杆轴独立控制
- 速度平滑控制：受限加速度斜坡 + 500ms 超时自动停机保护
- 已标定物理参数：轮径 0.05m、轮距 0.30m

{% label 机器人 green %} {% label 嵌入式 green %} {% label 控制算法 green %}

---

### 🤖 脚踝外骨骼机器人控制系统

{% label C++ blue %} {% label Python green %} {% label ROS2 green %} {% label CAN总线 orange %} {% label Modbus pink %}

v2.0 全面升级：已迁移至 ROS2 Humble。5 模式自适应步态控制、CAN 双协议栈、Modbus RTU 力传感器、5A-A5 帧 IMU 驱动。

**核心亮点：**
- 5 模式状态机：STAND→TORQUE→PRE_TORQUE→DRIVE→VELOCITY，自适应步速估计 + PID 自调参
- IMU v1.6.8+ 5A 5A 帧协议，7 个 ROS2 Topic + TF 广播
- Modbus RTU 力传感器 + 足底开关 + 编码器读取
- 安全保护：编码器限位 ±45°、力过载 300N、指令序列验证

{% label 机器人 green %} {% label 嵌入式 green %} {% label 传感器融合 green %}

---

### 📈 AI Agents Stock — 多智能体股票分析系统

{% label Python blue %} {% label Streamlit red %} {% label LLM pink %} {% label Docker orange %}

模拟专业分析师团队的复合多 AI 智能体股票分析系统，覆盖 A 股、港股、美股。

**核心亮点：**
- **6 大分析智能体**：技术面、基本面、资金流向、风险评估、情绪分析、新闻舆情
- **智策板块**：4 个 AI 智能体每日自动分析板块轮动、宏观政策、资金流向与市场情绪
- **智瞰龙虎**：5 个 AI 智能体追踪龙虎榜数据，识别短线机会和热点板块
- **主力选股**：追踪机构资金动向，筛选 3-5 只优质标的
- **实时监控**：价格预警 + 钉钉/飞书 Webhook 通知
- 支持 **MiniQMT 量化交易** 集成，Docker 一键部署

{% label 量化交易 green %} {% label 数据分析 green %} {% label 金融科技 green %}

---

### 🧠 Hermes Agent — 自进化 AI 智能体

{% label Python blue %} {% label TypeScript pink %} {% label LLM orange %} {% label 多平台 red %}

Nous Research 出品的通用自进化 AI 智能体，具备经验学习、持久记忆和跨平台运行能力。

**核心亮点：**
- **闭环学习**：完成任务后自动创建技能，持续自我改进
- **多平台接入**：Telegram、Discord、Slack、WhatsApp、CLI
- **40+ 内置工具**，支持 MCP 协议扩展
- 内置 **Cron 调度器**，支持无人值守自动化
- 支持本地、Docker、SSH、K8s 等多种部署方式

{% label AI Agent green %} {% label 自动化 green %} {% label 开源贡献 green %}

---

### 🎓 Academic Research Skills for Claude Code

{% label Python blue %} {% label YAML pink %} {% label LaTeX orange %} {% label Pandoc green %}

为 Claude Code 构建的完整学术研究管线技能套件，覆盖从研究到发表的全流程。

**核心亮点：**
- **4 大技能包**：深度研究、论文写作、同行评审、学术管线编排
- **深度研究**：13 个 Agent 团队，7 种模式，支持 PRISMA 系统综述
- **论文写作**：12 个 Agent 流水线，支持 APA/IEEE/MLA/Chicago 等多种引用格式
- **学术评审**：模拟 EIC + 3 位审稿人 + Devil's Advocate 的多角度评审
- 强制**反幻觉校验**、风格校准、写作质量检查等质量门禁

{% label 学术工具 green %} {% label AI辅助 green %} {% label 知识管理 green %}

---

### 📱 Net-USTB — 北科校园网一键登录

{% label Kotlin blue %} {% label Compose green %} {% label OkHttp orange %}

专为北京科技大学校园网（Dr.COM ePortal 4.x）开发的第三方原生 Android 客户端，替代浏览器端的网页认证流程，实现一键登录/登出。

**核心亮点：**
- 一键认证：ePortal JSONP 接口直连，无需打开浏览器
- 多运营商支持：校园用户 / 中国电信 / 中国联通
- AES-256-GCM 加密凭据存储，零分析、零广告
- 使用看板：余额、时长、流量、登录时间、IP 地址一目了然

{% label Android green %} {% label 校园工具 green %} {% label 开源 green %}

---

### 🛒 Sourcehub — Android 数字资源交易平台

{% label Kotlin blue %} {% label Compose green %} {% label MVVM orange %} {% label Coil pink %}

支持 PDF、Word 文档等数字内容在线购买与下载的完整电商应用。MVVM + Clean Architecture 架构，107 个 Kotlin 源文件，拥有完整的安全防护体系。

**核心亮点：**
- 完整电商闭环：用户系统（JWT）、商城、购物车、优惠码、模拟支付、订单管理
- WorkManager 后台下载 + AES-256-GCM 加密存储
- 7 层安全防护：Root 检测、模拟器检测、反调试、SSL Pinning、HMAC-SHA256 请求签名、防截屏、Keystore 文件加密

{% label Android green %} {% label 电商 green %} {% label 安全 green %}

---

### 🐶 WatchDog — AI API 额度实时监控

{% label Kotlin blue %} {% label Compose green %} {% label Retrofit orange %}

面向重度 AI 开发者的 Android 工具，实时监控 DeepSeek、Kimi、智谱 GLM、SiliconFlow 四大平台的 API 余额和月度用量，已发布 Release APK。

**核心亮点：**
- 四平台彩色仪表盘 + Pull-to-refresh
- 智能用量追踪：月初余额快照自动计算月用量
- API Key 本地独立管理，可配置自动刷新间隔
- 部分失败容忍，单平台异常不影响整体

{% label Android green %} {% label AI工具 green %} {% label 监控 green %}

---

### 🧮 ScientificCalculator — Kotlin Compose 科学计算器

{% label Kotlin blue %} {% label Compose green %} {% label Material3 orange %}

功能完整的 Android 科学计算器，除标准科学计算外，还集成方程求解器和矩阵计算器。

**核心亮点：**
- 表达式引擎：Shunting-yard 算法 + 递归下降解析
- 方程求解：一元一次/二次（判别式分析）、二元/三元方程组（Cramer 法则）
- 矩阵计算：加减乘、转置、行列式、逆矩阵、秩（高斯消元）
- Material 3 设计，三角函数 DEG/RAD 切换

{% label Android green %} {% label 科学计算 green %} {% label 开源 green %}

---

### 💬 ShowWe — 微信小程序社区平台

{% label 微信小程序 blue %} {% label 云开发 green %} {% label JavaScript orange %}

基于微信云开发构建的全功能社区/社交小程序（v1.1.0），支持帖子发布、评论点赞、私信聊天和个性化主页。

**核心亮点：**
- 帖子系统：富文本 + 最多 9 图 + 5 个附件，6 种分类，自动提取 #话题标签#
- 社交互动：评论/点赞（乐观 UI + 原子数据库操作）、一对一私信、未读红点
- 多级缓存：内存缓存（TTL）+ 本地存储，页面秒开
- 图片自动压缩 + 统一上传服务（支持重试）

{% label 微信小程序 green %} {% label 社区 green %} {% label 全栈 green %}

---

### 🎓 USTB 成绩排名浏览器扩展

{% label JavaScript blue %} {% label Chrome Extension green %} {% label Manifest V3 orange %}

为北科大教务系统开发的 Chrome / Edge 扩展：成绩查询页面不显示排名，但后端 API 实际返回了这些数据——扩展把它们展示出来。一个典型的"学生黑客"项目。

**核心亮点：**
- Page Hook 拦截 fetch/XHR，捕获成绩 API 返回的隐藏字段
- 动态修改 DOM，在成绩表格中插入排名/总人数列
- Manifest V3，兼容 Chrome 与 Edge

{% label 浏览器扩展 green %} {% label 校园工具 green %} {% label 开源 green %}

---

### 🌟 awesome-claude-code — Claude Code 生态资源合集

{% label Markdown blue %} {% label Awesome List green %} {% label 开源 orange %}

社区驱动的 Claude Code 资源合集，以 Awesome List 经典格式整理 20+ 类别，被社区广泛引用，是新用户入门的推荐资源索引。

**核心亮点：**
- 20+ 资源类别：官方文档、Skills、插件、多智能体编排、安全、可观测性等
- Recently Added 跑马灯展示最新资源
- 每个条目附带 GitHub Stats 徽章

{% label ClaudeCode green %} {% label 资源合集 green %} {% label 社区 green %}

---

## 开源项目深度解析

以下是对我影响较深的两个开源项目的深度解析文章。

### 🔬 tinygrad — 极简深度学习框架

{% label Python blue %} {% label CUDA green %} {% label Metal orange %} {% label WebGPU red %}

介于 PyTorch 和 micrograd 之间的极简深度学习框架：约 200 个 Python 源文件，仅约 25 个底层算子即可接入新加速器后端，支持 CUDA / Metal / OpenCL / WebGPU。

**核心亮点：**
- 类 PyTorch 的 Eager API + 自动微分
- IR 编译器：kernel 融合与 lowering，JIT + Graph 执行
- 支持 GGUF 格式，可运行主流开源大模型

{% label 深度学习 green %} {% label 开源解析 green %}

---

### 💻 Warp — 重新定义终端的 AI 编程环境

{% label Rust blue %} {% label Tokio green %} {% label AI Agent orange %}

基于 Rust 构建的现代化智能终端，原生集成 AI Agent，支持 Claude Code、Codex、Gemini 等主流 AI 编程工具——让终端成为 AI 时代的核心编程界面。

**核心亮点：**
- GPU 加速终端渲染（基于 Alacritty）
- NuShell 现代化 Shell 体验
- 内置 Agent + 多 AI 编程工具集成
- 跨重启的会话持久化

{% label DevTools green %} {% label 开源解析 green %} {% label 终端 green %}

---

### 🌐 个人技术博客

{% label Hexo blue %} {% label Butterfly green %} {% label GitHub Pages pink %}

基于 Hexo 8.x 和 Butterfly 主题构建的个人博客，部署于 GitHub Pages。在主题之上做了杂志编辑风的深度视觉重构。

**核心亮点：**
- 杂志编辑风设计系统：纸墨配色、衬线排版、首字下沉、发丝线
- 中英日三语言内容，自建 i18n 文章映射脚本
- 集成不蒜子访客统计
- 自动化部署：源码推 `source` 分支，`hexo deploy` 发布至 `master`

{% btn https://github.com/coderirse/coderirse.github.io, 查看源码, fab fa-github %}

---

*更多项目和代码细节，欢迎访问我的 [GitHub](https://github.com/coderirse)。*
