---
title: Ankle Exoskeleton Robot Control System
translation_key: ankle-exoskeleton
date: 2026-06-13 22:28:11
categories:
  - Projects
tags:
  - Robotics
  - ROS
  - C++
  - Embedded
description: A complete ROS Melodic-based ankle exoskeleton control system with CAN bus motor control and AHRS inertial navigation sensor driver.
---

## Background

Exoskeleton robots are a hot topic in robotics, with applications in rehabilitation, industrial assistance, and military fields. This project implements a complete **ankle exoskeleton robot control system** based on the ROS Melodic framework.

## Architecture

{% note info %}
The system runs on Ubuntu 18.04 + ROS Melodic, consisting of two core ROS packages.
{% endnote %}

### can_ankle — CAN Bus Motor Control

Core package for ankle joint motor control via CANopen protocol.

**Key Features:**

- **Torque mode** — precise joint torque control for rehabilitation
- **Velocity mode** — smooth speed control
- **Position mode** — accurate joint angle control
- **CANopen stack** — standard CANopen device configuration via libcontrolcan

{% label C++ blue %} {% label CAN Bus green %} {% label ROS Melodic orange %}

### fdilink_ahrs — AHRS/INS Sensor Driver

Driver for the FDILink Deta-10 high-performance AHRS/INS sensor via serial communication:

- **IMU data** — acceleration, angular velocity, magnetic field
- **GPS** — latitude, longitude, altitude, velocity
- **Attitude** — Euler angles (Roll/Pitch/Yaw)
- **Odometry** — fused IMU+GPS pose estimation

{% label Python blue %} {% label IMU pink %} {% label GPS Fusion red %}

## Architecture Diagram

```
┌─────────────────────────────────────┐
│         Ankle Exoskeleton           │
├──────────────┬──────────────────────┤
│  can_ankle   │   fdilink_ahrs       │
│  (C++)       │   (Python)           │
├──────────────┼──────────────────────┤
│  CAN Bus     │   Serial/UART        │
└──────────────┴──────────────────────┘
          ↓ ROS Topic
┌─────────────────────────────────────┐
│       ROS Bag (Data Logging)        │
└─────────────────────────────────────┘
```

## Takeaways

This project gave me deep insight into robot control systems — from low-level hardware communication to high-level ROS node orchestration. The real-time nature of CAN bus, sensor fusion math, and ROS's distributed architecture have profoundly influenced my subsequent work.
