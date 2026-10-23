---
title: Reps — Turn a CSV Question Bank into an Offline Quiz App
translation_key: reps
date: 2026-10-23 00:00:01
updated: 2026-10-23
categories:
  - Projects
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - Education
  - Open Source
description: Turn a teacher-provided CSV question bank into an offline Android study app with four practice modes, a wrong-answer book and progress recovery.
---

{% note info %}
Status: beta · Role: solo developer · Code: [public](https://github.com/coderirse/Reps) · Updated: 2026-10
{% endnote %}

## Why I built it

Many courses hand out a CSV question bank. Reading it on a laptop is awkward, and most quiz apps want an account, show ads and upload your data.

Reps takes a simpler route: **put the CSV on your phone and study offline.** No account required, no network needed, no study data collected.

## What it does

- **Generic CSV import**: auto-detects UTF-8 / GBK, previews and validates before import, reports row-level errors
- **Four practice modes**: study, mock exam, wrong-answer practice, favourites; configurable question count, timer and order
- **Exam-style scoring**: answers are revealed only after submission, then written to the wrong-answer book
- **Wrong-answer book**: automatically collects mistakes, marks them mastered after two correct answers, supports manual flags
- **Progress recovery**: saves on every question, every five seconds, and when the app goes to the background; restores up to seven days of progress
- **Dark mode, font size, data reset**

It ships with a 390-question metalworking internship bank, and accepts any standard CSV.

## How it works

Kotlin + Jetpack Compose (Material 3) + Room/SQLite. CSV parsing is isolated in its own module and validated locally before import. Question banks, progress, mistakes and notes live only in the app's private storage and are removed on uninstall.

The network boundary is deliberately narrow: login, online banks, activation codes, material downloads and update checks. Study data is not uploaded. A build-time `verifyNetworkContainment` check keeps network calls inside a designated package, so data cannot leak out by accident later.

## Limitations

- Beta (0.x); the data format may still change
- Online banks and accounts depend on the server; pure offline use means importing local CSV files
- Android only — no iOS or web version
- Not an official university app; question content is for revision reference only

{% note warning %}
Reps is a personal project, not an official university app, and is not affiliated with the university, the academic affairs office or the academic system operator. Question content is not guaranteed to match exams; exam arrangements and grades are governed by the university.
{% endnote %}

{% btn https://github.com/coderirse/Reps, View source, fab fa-github %} {% btn https://github.com/coderirse/Reps/releases, Download APK, fas fa-download %}
