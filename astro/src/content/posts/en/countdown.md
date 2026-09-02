---
title: Countdown App — Concept & Product Design
translation_key: countdown
date: 2026-08-29 00:00:03
categories:
  - Projects
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - Glance
  - Product Design
description: A countdown / count-up day tracker built around home-screen widgets — full PRD and tech selection notes (concept stage).
cover: /img/covers/cover-05.jpg
---

## Overview

This is an Android countdown / count-up day tracker currently at the concept stage — the full product document (PRD v0.1) and technical design are done, but coding hasn't started yet. Sharing the design process here is a "writing as design" exercise.

**One-line pitch**: put the days that matter right where you'll see them — a home-screen widget that always tells you how many days remain until — or have passed since — your target date.

{% label Android blue %} {% label Jetpack Glance green %} {% label Product Design orange %}

### Product Thinking
- **Not a calendar — an emotional tool**: the core value isn't schedule management but the sense of certainty and ritual of seeing time distance at a glance — days together, exam countdowns, baby's days, payday / loan due dates
- **Minimal core path**: first open adds your first event within 3 steps and guides you to place a widget; daily use doesn't even require opening the app — just glance at the home / lock screen widget
- **Restraint**: no payments, no ads, no accounts, no cloud sync; personal use first, fully open source later

### Scenario-driven Event Types
- Exam countdowns (college entrance / CET / finals) — big numbers + pre-exam reminders
- Anniversary counters (days together, days since birth)
- Workday countdowns (payday / loan / project deadlines) — visible on the lock screen
- Habit streaks (day N of doing something, streaks and milestones)

### Tech Selection
The design doc compares three widget approaches and settles on **Jetpack Glance + Compose** as the main route: a declarative DSL consistent with the Compose mental model, native Material You dynamic color support, and the same API reusable for Wear OS Tiles later; classic AppWidgetProvider fills in for complex interactions. The data layer plans Room + DataStore, with the widget's daily-update mechanism worked through in the doc. The skeleton is ready (Kotlin 2.2 + Compose BOM 2026.02, minSdk 35 / Android 15).

Progress will be updated in this article.
