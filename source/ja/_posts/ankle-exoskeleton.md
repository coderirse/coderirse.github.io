---
title: 足首外骨格ロボット制御システム
translation_key: ankle-exoskeleton
date: 2026-06-13 22:28:11
updated: 2026-07-12
categories:
  - プロジェクト
tags:
  - ロボティクス
  - ROS2
  - C++
  - CANバス
  - 組込み
  - 制御アルゴリズム
description: ROS2 Humbleに完全移行した足首外骨格制御システム — 5モード適応歩行制御、CANデュアルプロトコル、Modbus力覚センサー、5A-A5フレームIMUドライバー。
---

## 概要

外骨格ロボットはリハビリ、産業支援、軍事分野で広く応用されている。本プロジェクトは完全な**足首外骨格制御システム**を実装し、最近大規模な**ROS1→ROS2移行**と**ハードウェアアーキテクチャ再設計**を完了した。

{% note success %}
v2.0 メジャーアップグレード：ROS1 Melodic (Ubuntu 18.04) から ROS2 Humble (Ubuntu 22.04) へ全面移行。CANアーキテクチャ書き直し、IMUプロトコル更新、制御機能大幅拡張。
{% endnote %}

## アーキテクチャ

**Ubuntu 22.04 + ROS2 Humble**、colconビルドシステム。

{% label C++ blue %} {% label Python green %} {% label CANバス orange %} {% label Modbus pink %} {% label ROS2 Humble red %}

### can_ankle — 5モード適応歩行コントローラ

シンプルなトルク制御から完全な**5モードステートマシン適応歩行コントローラ**へ進化：

```
STAND_MODE → TORQUE_MODE → PRE_TORQUE_MODE → TORQUE_DRIVE_MODE → VELOCITY_MODE → STAND_MODE
```

**主要機能：**
- **適応歩速推定**：立脚相時間から `pace = -ln((t2-c1)/a1) / b1` でリアルタイム計算
- **PID自動調整**：歩速に応じて5段階動的調整（Kp 20-60）
- **勾配補助トルク**：IMUクォータニオンから勾配推定 → `assist_torque = 8/π * atan(slope/2)`
- **フローティング補償**：理論的/実際の遊脚時間差で動的調整
- **2つの制御モード**：Mode 1 — 余弦曲線+適応; Mode 2 — 固定0.18s/0.21s

### CANバス — デュアルプロトコル

- **ハードウェア**: CANalyst-II (USB `04d8:0053`, 1 Mbps)
- **モーター**: CANopen Node 83, SDO COB-ID `0x653`
- **Layer 1**: python-can + canalystii
- **Layer 2**: C++埋め込みサブプロセス

### fdilink_ahrs — IMUプロトコル更新

| | 旧 | 新 |
|---|----|-----|
| ヘッダ | FC | **0x5A 0xA5** |
| フレーム | 可変 | **82バイト** |
| ボーレート | 921600 | **115200** |

**7つのROS2 Topic**: `/imu`, `/euler_angles`, `/mag_pose_2d`, `/magnetic`, `/gps/fix`, `/system_speed`, `/NED_odometry`

### 力覚センサー — Modbus RTU

ASCIIプロトコルから**Modbus RTU**へ完全再設計。機能コード0x03、CRC16検証、20Hz。

### 安全機能

エンコーダ制限(±45°)、力過負荷(300N)、立位タイムアウト(>5s)、コマンドシーケンス検証。

{% label ロボティクス green %} {% label 制御アルゴリズム green %} {% label ROS2 green %}
