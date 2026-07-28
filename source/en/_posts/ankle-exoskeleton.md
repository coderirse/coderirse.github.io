---
title: Ankle Exoskeleton Control System
translation_key: ankle-exoskeleton
date: 2026-06-13 22:28:11
updated: 2026-07-12
categories:
  - Projects
tags:
  - Robotics
  - ROS2
  - C++
  - CAN Bus
  - Embedded
  - Control Algorithm
description: A fully rebuilt ROS2 Humble ankle exoskeleton controller — 5-mode adaptive gait, CAN dual-protocol stack, Modbus force sensing, and 5A-A5 frame IMU driver.
---

## Overview

Exoskeleton robots have broad applications in rehabilitation, industrial assistance, and military domains. This project implements a complete **ankle exoskeleton control system**, recently upgraded with a **ROS1 → ROS2 migration** and **hardware architecture redesign**.

{% note success %}
v2.0 Major Upgrade: Full migration from ROS1 Melodic (Ubuntu 18.04) to ROS2 Humble (Ubuntu 22.04). CAN architecture rewritten, IMU protocol upgraded, controller capabilities massively expanded.
{% endnote %}

## Architecture

The system runs on **Ubuntu 22.04 + ROS2 Humble**, built with colcon.

{% label C++ blue %} {% label Python green %} {% label CAN Bus orange %} {% label Modbus pink %} {% label ROS2 Humble red %}

### can_ankle — 5-Mode Adaptive Gait Controller

The core control package has evolved from simple torque/velocity control to a complete **5-mode state machine adaptive gait controller**:

**State Machine:**
```
STAND_MODE → TORQUE_MODE → PRE_TORQUE_MODE → TORQUE_DRIVE_MODE → VELOCITY_MODE → STAND_MODE
```

**Key Features:**
- **Adaptive Pace Estimation**: Real-time pace calculation from stance phase time via exponential model `pace = -ln((t2-c1)/a1) / b1`
- **PID Auto-tuning**: Kp/Ki/Kd dynamically adjusted across 5 pace brackets (Kp range 20-60)
- **Slope-Assist Torque**: Estimates ground slope from IMU quaternion z-component, computes `assist_torque = 8/π * atan(slope/2)`
- **Floating Compensation**: Dynamic adjustment based on theoretical vs actual swing time difference
- **Two Control Modes**: Mode 1 — cosine torque curve + adaptive rise/fall; Mode 2 — fixed 0.18s/0.21s curve
- **Support-Phase Position Compensation**: Alternating cycle position recording with return correction

### CAN Bus — Dual-Protocol Redesign

{% note info %}
Upgraded from direct VCI_USBCAN2 calls to a **Python CAN Bridge + Embedded CAN Subprocess** dual-layer architecture.
{% endnote %}

- **Hardware**: CANalyst-II (USB `04d8:0053`, 1 Mbps), replacing old USBCAN2
- **Motor**: CANopen Node 83, SDO COB-ID `0x653`
- **Layer 1**: `can_bridge.py` — python-can + canalystii, publishes `/can_rx` / subscribes `/can_tx`
- **Layer 2**: C++ embedded CAN subprocess via `posix_spawn()` + bidirectional pipes

### fdilink_ahrs — IMU Protocol Upgrade: FC → 5A 5A

| Aspect | Old | New |
|--------|-----|-----|
| Header | FC | **0x5A 0xA5** |
| Frame | Variable | **82 bytes** (2H+2L+76B+2T) |
| Baud Rate | 921600 | **115200** |
| Firmware | Legacy | **v1.6.8+** (2025-07-17) |

**Publishes 7 ROS2 Topics** (up from ~3):
`/imu` (Eigen quaternion rotation), `/euler_angles`, `/mag_pose_2d`, `/magnetic`, `/gps/fix`, `/system_speed`, `/NED_odometry`

New **TF Broadcaster** (`imu_tf.cpp`): `world → gyro_link` with configurable offset.

### Force Sensor — Modbus RTU Redesign

{% label Modbus blue %} {% label CRC16 green %} {% label 19200bps orange %}

Complete redesign from ASCII text protocol to industrial **Modbus RTU**: Function Code 0x03, Register `0x0FA0`/`0x0FA1`, Slave ID 1, CRC16 validation, configurable scale factor, 20Hz loop, debug toggle.

### New Nodes

| Node | Function |
|------|----------|
| `serial_sendCommand_node` | Foot switch serial read + gait phase timing (6 topics) |
| `serial_encoder_node` | Modbus RTU encoder read |
| `storeTopicMSG_node` | Gait phase data to file |
| `storeVelMSG_node` | Encoder angle/torque to file |
| `can_test_node` | CAN sinusoidal velocity test |
| `imu_tf` | IMU coordinate TF broadcast |

### Safety Features

Encoder limit (±45°), force overload (300N), standing timeout (>5s), command sequence validation, cmd_vel timeout auto-stop.

{% label Robotics green %} {% label Control Algorithm green %} {% label ROS2 green %}
