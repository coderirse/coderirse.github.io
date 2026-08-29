---
title: BeikeSchedule — Course Schedule App for USTB
translation_key: beike-schedule
date: 2026-08-29 00:00:02
categories:
  - Projects
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - Schedule
  - USTB
  - Open Source
description: A USTB course schedule app with one-tap academic-system import, teaching-week calendar mapping, weekly timetable and class reminders.
---

## Overview

BeikeSchedule is a course schedule app for the University of Science and Technology Beijing (USTB): sign in to the academic system through a built-in WebView to import your timetable in one tap, view it as a weekly schedule, and get class reminders. Release APKs are published for direct in-place upgrades.

{% label Kotlin blue %} {% label Compose green %} {% label Room orange %} {% label AlarmManager pink %}

### Key Features
- **One-tap import**: a built-in WebView handles the university SSO login (the app never touches your credentials), fetches the semester timetable JSON, and saves it after a preview step
- **Official teaching-week calendar**: the academic calendar is imported alongside the timetable, giving exact teaching-week ↔ date mapping — long holidays don't consume teaching-week numbers, and the app auto-locates the first teaching week after a holiday
- **Weekly timetable**: laid out by "block periods", with swipe-to-change weeks, a week jump dropdown, odd/even week markers, a separate list for courses without fixed times, and building / room numbers on separate lines
- **Course management**: manual add / edit / delete coexists with imported data
- **Class reminders**: system notification N minutes before each block (default 15, adjustable), exact-alarm support, automatic rescheduling after reboot
- **Current-week detection**: survives process death; three-state dark mode

### Technical Notes
- Kotlin + Jetpack Compose (Material 3); Room (courses / period times) + DataStore (semester config / calendar / reminders)
- Academic-system adapter: injected JavaScript reuses the WebView login session to call structured JSON endpoints directly (32-bit week bitmaps, full calendar mapping) — no HTML scraping
- Parsers and week logic are unit-tested against real API fixtures

**Privacy**: credentials are only entered by you into the university's own login page inside the system WebView; the app never reads, stores, or uploads them, and timetable data stays on-device.

{% btn https://github.com/coderirse/BeikeSchedule, View Source, fab fa-github %} {% btn https://github.com/coderirse/BeikeSchedule/releases, Download APK, fas fa-download %}
