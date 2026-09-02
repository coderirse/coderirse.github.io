---
title: Wall-Climbing Robot — Control System
translation_key: wall-climbing-robot
date: 2026-06-18 00:00:00
categories:
  - Projects
tags:
  - Python
  - ROS2
  - Robotics
  - Embedded
  - CAN Bus
description: A ROS2-based differential-drive wall-climbing robot control system with CAN + RS485 dual-protocol motor control.
cover: /img/covers/cover-17.jpg
---

## Overview

Wall-Climbing Robot v2.0 is a differential-drive wall-climbing robot control system that controls four motors via CAN bus and RS485 dual communication protocols for stable wall climbing. The system integrates ROS2 command control and gamepad real-time operation, with a Qt5 host GUI tool for motor debugging.

{% note info %}
This is a complete embedded robot control system, from low-level communication protocols to high-level control algorithms, all independently implemented.
{% endnote %}

## Core Technology

### Dual-Protocol Motor Control

{% label CAN Bus blue %} {% label RS485 orange %}

The system uses two industrial communication protocols to control four independent motors:

- **CAN Bus** (COM4, 921600 baud): controls motors 1/2
- **RS485/Modbus** (COM8, 115200 baud): controls motors 3/4, with CRC16-Modbus validation

### ROS2 Native Integration

{% label ROS2 green %} {% label CmdVel blue %}

The system natively subscribes to the ROS2 `/cmd_vel` topic, receiving `geometry_msgs/Twist` messages in real-time:

- Converts linear velocity (m/s) and angular velocity (rad/s) to left/right motor speeds
- 20 Hz control loop frequency
- Built on `rclpy` framework

### Gamepad Remote Control

{% label Pygame pink %} {% label Controller blue %}

Supports intuitive robot control via gamepad:

- **D-pad**: synchronous forward/backward for all four motors
- **Analog stick**: independent left/right control for differential steering

### Safety Protection

{% label Safety red %}

- **Limited acceleration ramp control**: prevents sudden motor speed changes
- **500ms cmd_vel timeout auto-stop**: automatic protection on communication loss
- **Current limit 2A**: prevents motor overload

## Physical Parameters

System parameters calibrated and verified on actual hardware:

| Parameter | Value |
|------|------|
| Wheel diameter | 0.05 m |
| Wheel track | 0.30 m |
| Max speed | 5 rad/s |
| Current limit | 2A |
| Acceleration | 10 rad/s² |

## Tech Stack

{% label Python blue %} {% label ROS2 green %} {% label Pygame pink %} {% label CAN Bus orange %} {% label RS485 red %}

- **Control language**: Python 3
- **Framework**: ROS2 (`rclpy`)
- **Gamepad library**: Pygame
- **Communication**: `pyserial`
- **Host GUI**: Qt5 (`motor_tool.exe`)
- **Motor driver**: ZE300 series

## Significance

This wall-climbing robot project was an important practice in robot control, covering the full tech stack from low-level communication protocols to high-level control algorithms. Through this project, I gained deep understanding of:

- Industrial communication protocols (CAN, RS485/Modbus) in practice
- ROS2 node communication and message mechanisms
- Differential-drive kinematic models
- Real-time control system safety design

This project laid a solid foundation for my subsequent ankle exoskeleton robot project.
