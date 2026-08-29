---
title: Trailmap — My Interactive Travel Map
translation_key: trailmap
date: 2026-08-29 00:00:06
categories:
  - Projects
tags:
  - Leaflet
  - JavaScript
  - Vite
  - Maps
  - Open Source
description: An interactive personal travel map built with Leaflet.js — photos, stories, a timeline player, and a 3D globe.
---

## Overview

Trailmap is an interactive personal travel map built with Leaflet.js, recording the photos and stories behind every trip. Adding or editing places only touches one data file (`locations.json`), and every push auto-deploys to GitHub Pages via GitHub Actions.

{% label Leaflet blue %} {% label Vite green %} {% label Globe.GL orange %} {% label Data-driven pink %}

### Key Features
- **Interactive map**: glowing markers that grow on hover and focus with details on click
- **Travel stories**: a sidebar list of places, dates, tags, and descriptions (bottom drawer on mobile)
- **Photo gallery**: a two-column grid in the sidebar with a full-screen Lightbox (←/→/Esc supported)
- **Timeline player**: a bottom progress bar that auto-plays the journey in date order (1.8s per step), with flowing dashed route animations between route groups
- **Tag filters**: pill-shaped tags up top to filter map markers in one click
- **3D globe**: one-click switch to Globe.GL (lazy-loaded from CDN, no first-screen cost)
- **Multiple basemaps & themes**: Explore (dark, default) / Standard / Satellite basemaps; dark & light styles with auto-saved choice
- **URL routing**: `/#/beijing` jumps straight to a place — shareable links with working back / forward

### Technical Notes
Plain-JavaScript component modules (Map / Sidebar / PhotoGallery / Timeline are independent), bundled with Vite; data and presentation are fully separated — all places, photos, tags, and route groups live in `src/data/locations.json`, so you change data, not code.

{% btn https://github.com/coderirse/trailmap, View Source, fab fa-github %}
