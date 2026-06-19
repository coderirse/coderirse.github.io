---
title: 足首外骨格ロボット制御システム
translation_key: ankle-exoskeleton
date: 2026-06-13 22:28:11
categories:
  - プロジェクト
tags:
  - ロボット
  - ROS
  - C++
  - 組込み
---

## 背景

外骨格ロボットはリハビリテーション、産業支援、軍事分野で広く応用される注目の分野です。本プロジェクトはROS Melodicフレームワークに基づく**足首外骨格ロボット制御システム**を実装しました。

## アーキテクチャ

{% note info %}
システムはUbuntu 18.04 + ROS Melodic上で動作し、2つのコアROSパッケージで構成されています。
{% endnote %}

### can_ankle — CANバスモーター制御

**主な機能：**

- **トルクモード** — リハビリ訓練向け精密トルク制御
- **速度モード** — スムーズな速度調整
- **位置モード** — 姿勢制御向け精密角度制御
- **CANopenスタック** — libcontrolcanによる標準CANopenデバイス設定

{% label C++ blue %} {% label CANバス green %} {% label ROS Melodic orange %}

### fdilink_ahrs — AHRS/INSセンサードライバー

FDILink Deta-10高性能AHRS/INSセンサー用シリアル通信ドライバー：

- **IMUデータ** — 加速度、角速度、磁場
- **GPS** — 緯度経度、高度、速度
- **姿勢角** — オイラー角（Roll/Pitch/Yaw）
- **オドメトリ** — IMU+GPS融合位置推定

{% label Python blue %} {% label IMU pink %} {% label GPS融合 red %}

## 学び

このプロジェクトを通じて、低レベルのハードウェア通信から高レベルのROSノード編成まで、ロボット制御システムの全体像を深く理解しました。
