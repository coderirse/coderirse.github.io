---
title: Life Assistant — A Personal Tauri Desktop App
translation_key: life-assistant
date: 2026-08-29 00:00:05
categories:
  - Projects
tags:
  - Tauri
  - Rust
  - Desktop
  - Productivity
description: A personal study-and-life desktop app covering plans, dev work, fitness, meals and gaming — fully offline, local data only.
---

## Overview

Life Assistant is a personal study-and-life desktop app built with Tauri + Rust + WebView2, for my own use only. All data lives in a local project folder and survives refreshes, closes, and reboots; the app is fully offline except for the GitHub module, with standalone backup & restore built in.

{% label Tauri blue %} {% label Rust green %} {% label SQLite orange %} {% label Productivity pink %}

### Modules
- **Home dashboard**: today's plan progress, quick memos, per-module summaries
- **Today's plan**: schedule the day's items by time and check them off
- **Dev work**: task management, time tracking, weekly statistics
- **GitHub projects**: read-only view of my repos, assigned issues, and opened PRs (token required — the only online feature)
- **Fitness plan**: weekly plan, training log (exercise / sets / reps / weight), weight trend chart
- **Meal plan**: three meals + snacks, a personal food library, daily summary
- **Gaming**: game library, playtime records, weekly totals
- **Data & settings**: backup / restore, light / dark / system theme

### Engineering Notes
- The data layer is a standalone Rust crate (`life-assistant-core`) covered by `cargo test`, testable without Tauri
- The SQLite database and caches all live under the project's `data/` directory (nothing on C:); backups export to `backups/` in one click
- The GitHub token is stored in the Windows Credential Manager (keyring) and never enters backup files
- Layered testing: frontend pure logic via `npm test`, data layer via `cargo test -p life-assistant-core`

This is a classic "build tools for yourself" project: every module is designed around my real daily flow, so it can afford zero accounts, zero tracking, and full offline operation.
