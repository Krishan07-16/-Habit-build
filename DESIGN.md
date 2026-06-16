---
version: alpha
name: Habit-build-design
description: A warm, human-centered design system for a consistency coach. Designed to feel like a supportive journal — not a dashboard. Built on cream paper-soft surfaces, warm earth tones, and encouraging amber accents.

colors:
  canvas: "#faf7f2"
  canvas-soft: "#f5f0ea"
  canvas-subtle: "#efe8e0"
  ink: "#2c2420"
  body: "#5c5248"
  mute: "#8c8278"
  hairline: "#e5ddd3"
  hairline-strong: "#bfb4a8"
  primary: "#c26e2b"
  primary-hover: "#a85d22"
  primary-soft: "#fef0e0"
  on-primary: "#ffffff"
  success: "#4a8c5c"
  success-soft: "#e8f2ea"
  error: "#c24545"
  error-soft: "#f8e8e8"
  warning: "#c28e2b"
  warning-soft: "#fcf0e0"
  warning-deep: "#8c5e1a"
  link: "#5c7c8c"
  link-deep: "#3a5c6e"
  link-bg-soft: "#e0eaef"

typography:
  display:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.5px
  heading:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.3px
  subhead:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  caption-sm:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  button:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  button-lg:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0

rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  4xl: 64px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxs} {spacing.xs}"
    height: 32px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    padding: "0 {spacing.sm}"
    height: 44px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    padding: "0 {spacing.sm}"
    height: 44px
  button-sm:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    height: 36px
  button-soft:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    height: 36px
    borderColor: "{colors.hairline}"
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    borderColor: "{colors.hairline}"
  card-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-elevated:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    shadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)"
  plan-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    borderColor: "{colors.hairline}"
  timer-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  checkin-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  celebration-card:
    backgroundColor: "{colors.success-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  encouragement-banner:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  warning-banner:
    backgroundColor: "{colors.warning-soft}"
    textColor: "{colors.warning-deep}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    borderLeft: "4px solid {colors.warning}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0 {spacing.sm}"
    height: 44px
    borderColor: "{colors.hairline}"
  form-textarea:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
    borderColor: "{colors.hairline}"
  progress-bar:
    backgroundColor: "{colors.canvas-subtle}"
    fillColor: "{colors.primary}"
    rounded: "{rounded.full}"
    height: 8px
  badge:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption-sm}"
    rounded: "{rounded.full}"
    padding: "0 {spacing.xs}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    padding: "{spacing.4xl} {spacing.lg}"
  feature-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    padding: "{spacing.4xl} {spacing.lg}"
  cta-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.heading}"
    padding: "{spacing.4xl} {spacing.lg}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"

---

## Overview

Habit Build is not a productivity tool. It is a consistency coach. The design reflects that: warm, human, low-resistance. Every surface, color, and shape is chosen to feel safe and encouraging — like a notebook, not a dashboard.

The dominant surface is a warm cream `{colors.canvas}` (#faf7f2) — soft enough to feel paper-like, never clinical white. Type is set in Inter at comfortable sizes with neutral tracking. The single chromatic accent is a warm amber `{colors.primary}` (#c26e2b) used for actions, encouragement, and celebration — it signals warmth and forward motion without urgency or aggression.

Cards have gentle rounded corners (`{rounded.lg}` 12px) and sit on the page with subtle warmth, not heavy drops. Buttons are pill-shaped (`{rounded.full}`) to feel friendly and approachable. Progress bars use a soft green `{colors.success}` (#4a8c5c) to celebrate growth without triggering competition anxiety.

There are no monospace labels, no aggressive tracking, no dark hero bands, no technical voice. The system speaks like a coach: calm, warm, direct.

**Key Characteristics:**
- Warm cream canvas replaces clinical white — reduces visual resistance
- Single amber accent `{colors.primary}` for CTAs and encouragement markers
- Soft green `{colors.success}` for celebration — growth, not gamification
- No monospace type anywhere — no developer voice
- Pill-shaped buttons everywhere (`{rounded.full}`) — friendly, low-friction
- Cards use gentle 12px (`{rounded.lg}`) or 16px (`{rounded.xl}`) corners
- Progress bars track consistency, not streaks
- Feedback banners use soft tinted backgrounds, never aggressive alerts
- No dark mode polarity flip — dark mode uses warm deep tones, not black

---

## Colors

### Brand & Accent
- **Amber** (`{colors.primary}` — #c26e2b): The single action color. Primary CTAs, celebration highlights, link emphasis. Warm, encouraging, never urgent.
- **Amber Hover** (`{colors.primary-hover}` — #a85d22): Darker press state for the primary CTA.
- **Amber Soft** (`{colors.primary-soft}` — #fef0e0): Warm tinted background for encouragement banners and success moments.

### Surface
- **Canvas** (`{colors.canvas}` — #faf7f2): Default page background. Warm cream — like quality paper, reduces eye strain and feels safe.
- **Canvas Soft** (`{colors.canvas-soft}` — #f5f0ea): Slightly deeper warm tone for cards, check-in sections, and secondary surfaces.
- **Canvas Subtle** (`{colors.canvas-subtle}` — #efe8e0): Deeper warm tone for progress bar backgrounds, skeleton loading states.
- **Hairline** (`{colors.hairline}` — #e5ddd3): 1px warm borders on cards, inputs, dividers.
- **Hairline Strong** (`{colors.hairline-strong}` — #bfb4a8): Stronger warm border for keyboard shortcut hints, emphasis dividers.

### Text
- **Ink** (`{colors.ink}` — #2c2420): All headings and body text. Warm dark brown, not harsh black.
- **Body** (`{colors.body}` — #5c5248): Secondary text, supporting copy, descriptions.
- **Mute** (`{colors.mute}` — #8c8278): Placeholder text, fine print, lowest-priority labels.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on amber primary buttons.

### Semantic
- **Success Green** (`{colors.success}` — #4a8c5c): Positive indicators — "you showed up," consistency milestones. Soft, non-competitive.
- **Success Soft** (`{colors.success-soft}` — #e8f2ea): Background for celebration cards and achievement states.
- **Error Red** (`{colors.error}` — #c24545): Validation errors and destructive actions. Muted enough to not cause alarm.
- **Error Soft** (`{colors.error-soft}` — #f8e8e8): Background for error states.
- **Warning Gold** (`{colors.warning}` — #c28e2b): Gentle reminders — "having a hard day?" markers.
- **Warning Soft** (`{colors.warning-soft}` — #fcf0e0): Background for warning banners.
- **Warning Deep** (`{colors.warning-deep}` — #8c5e1a): Text on warning banners.
- **Link Slate** (`{colors.link}` — #5c7c8c): Inline links and edit buttons. Warm blue-gray, calm and reliable.
- **Link Deep** (`{colors.link-deep}` — #3a5c6e): Pressed link state.
- **Link Bg Soft** (`{colors.link-bg-soft}` — #e0eaef): Background for informational banners.

---

## Typography

### Font Family
A single sans-serif family carries everything: **Inter** at weights 400, 500, and 600. No serif, no monospace. The voice is clear, readable, and human.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 32px | 600 | 1.15 | -0.5px | Page headlines ("Build habits that stick.") |
| `{typography.heading}` | 24px | 600 | 1.25 | -0.3px | Section headings, plan overview titles |
| `{typography.subhead}` | 20px | 600 | 1.3 | 0 | Card titles, feature names |
| `{typography.body}` | 16px | 400 | 1.6 | 0 | Default body paragraph |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Secondary body, card descriptions, nav links |
| `{typography.caption}` | 13px | 400 | 1.4 | 0 | Labels, timestamps, metadata |
| `{typography.caption-sm}` | 12px | 400 | 1.3 | 0 | Fine print, progress step labels |
| `{typography.button}` | 14px | 500 | 1.2 | 0 | Small / nav-scale button labels |
| `{typography.button-lg}` | 16px | 500 | 1.2 | 0 | Marketing-scale pill button labels |

### Principles
- **No aggressive tracking.** Neutral letter-spacing at all sizes. The system reads as spoken, not typeset.
- **No monospace.** Everything in the sans family. Labels are sentence-case or lowercase, never uppercase mono.
- **Comfortable line-height.** Body at 1.6 for reading ease. Display at 1.15 for impact without crowding.
- **Weight 600 is the ceiling.** No weight 700+. The system stays calm.
- **Sentence-case always.** Never all-caps, never uppercase labels.

---

## Components

### Buttons

**`button-primary`** — The primary CTA pill. Used for "Start," "Continue," and primary actions.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button-lg}`, `{rounded.full}`, height 44px.

**`button-secondary`** — The secondary outline pill beside primary CTAs.
- Background `{colors.canvas}`, text `{colors.ink}`, `{typography.button-lg}`, `{rounded.full}`, height 44px, 1px `{colors.hairline}` border.

**`button-sm`** — Small primary button for check-in actions, nav CTAs.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button}`, `{rounded.full}`, height 36px.

**`button-soft`** — Soft outline button for "Back," "Cancel," secondary inline actions.
- Background `{colors.canvas}`, text `{colors.ink}`, `{typography.button}`, `{rounded.full}`, height 36px, 1px `{colors.hairline}` border.

### Cards & Containers

**`card`** — The default card surface. Used for plan sections, feature cards, check-in summaries.
- Background `{colors.canvas}`, text `{colors.ink}`, `{typography.body}`, `{rounded.lg}` (12px), padding `{spacing.lg}` (24px), 1px `{colors.hairline}` border.

**`card-soft`** — Slightly tinted card for callouts, tips, and coaching messages.
- Background `{colors.canvas-soft}`, same chrome as `card`.

**`card-elevated`** — Raised card for modals, focus overlays.
- Background `{colors.canvas}`, `{rounded.lg}`, shadow: `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)`.

**`plan-card`** — Plan detail cards (minimum/target/maximum display).
- Background `{colors.canvas}`, `{rounded.lg}`, padding `{spacing.lg}`, 1px `{colors.hairline}` border.

**`timer-card`** — Timer/stopwatch surface.
- Background `{colors.canvas}`, `{rounded.xl}` (16px), padding `{spacing.lg}`.

**`checkin-card`** — Daily check-in summary card.
- Background `{colors.canvas-soft}`, `{rounded.md}` (8px), padding `{spacing.md}` (16px).

**`celebration-card`** — Achievement celebration surface ("You showed up!").
- Background `{colors.success-soft}`, text `{colors.ink}`, `{rounded.lg}`, padding `{spacing.md}`.

### Banners

**`encouragement-banner`** — Coaching encouragement messages.
- Background `{colors.primary-soft}`, `{rounded.md}`, padding `{spacing.sm} {spacing.md}`.

**`warning-banner`** — Gentle reminders for hard days.
- Background `{colors.warning-soft}`, text `{colors.warning-deep}`, `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, 4px left border `{colors.warning}`.

### Inputs & Forms

**`form-input`** — Text/number input fields.
- Background `{colors.canvas}`, text `{colors.ink}`, `{typography.body}`, `{rounded.md}` (8px), height 44px, padding `0 {spacing.sm}`, 1px `{colors.hairline}` border.

**`form-textarea`** — Multi-line text fields.
- Background `{colors.canvas}`, text `{colors.ink}`, `{typography.body-sm}`, `{rounded.md}`, padding `{spacing.sm}`, 1px `{colors.hairline}` border.

### Navigation

**`nav-bar`** — Sticky top navigation bar.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64px, padding `{spacing.sm} {spacing.lg}`.

**`nav-link`** — Link row inside the nav bar.
- Text `{colors.body}`, `{typography.body-sm}`, `{rounded.md}`, padding `{spacing.xs} {spacing.sm}`.

**`nav-cta`** — Primary CTA in the nav ("Start" button).
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button}`, `{rounded.md}`, height 32px, padding `{spacing.xxs} {spacing.xs}`.

### Indicators

**`badge`** — Small status pills ("Week 1," step labels).
- Background `{colors.canvas-soft}`, text `{colors.body}`, `{typography.caption-sm}`, `{rounded.full}`.

**`progress-bar`** — Consistency and plan progress bars.
- Background `{colors.canvas-subtle}`, fill `{colors.primary}`, `{rounded.full}`, height 8px.

### Bands

**`hero-band`** — Page hero section.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.lg}`. Warm ambient glow from a soft single-color radial gradient.

**`feature-band`** — Feature description sections.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.lg}`.

**`cta-band`** — Call-to-action band at page bottom.
- Background `{colors.primary}`, text `{colors.on-primary}`, padding `{spacing.4xl} {spacing.lg}`.

**`footer`** — Site footer.
- Background `{colors.canvas}`, text `{colors.body}`, padding `{spacing.4xl} {spacing.lg}`.

---

## Do's and Don'ts

### Do
- Use `{colors.primary}` amber for primary CTAs and encouragement highlights only.
- Use `{colors.success}` green for celebration moments — showing up is the win.
- Keep page surfaces on `{colors.canvas}` warm cream; use `{colors.canvas-soft}` for section alternation.
- Set headings in weight 600, body in 400 — the contrast is the hierarchy.
- Use `{rounded.full}` pill shape for all CTAs — friendly and low-friction.
- Use `{rounded.lg}` (12px) for cards — soft but not childlike.
- Layer feedback on tinted backgrounds (`{colors.primary-soft}`, `{colors.success-soft}`, `{colors.warning-soft}`) — never on raw white with a colored border.
- Write in warm, encouraging language. Frame difficulty as normal.

### Don't
- Don't use monospace fonts anywhere — no technical voice.
- Don't use aggressive negative tracking — the system reads human, not engineered.
- Don't use pure white (#ffffff) as a page background — always use the warm cream `{colors.canvas}`.
- Don't introduce a second chromatic accent alongside amber — amber is the single action color.
- Don't use heavy drop-shadows on cards — the system sits on the page, not above it.
- Don't use uppercase or all-caps labels — sentence-case and lowercase only.
- Don't shame users with color — red is for gentle error states only, never for "missed day."
- Don't render progress as streaks — track consistency, not chains.

---

## Layout

### Spacing System
- **Base unit**: 4px.
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.2xl}` 40px · `{spacing.3xl}` 48px · `{spacing.4xl}` 64px.
- Card interior padding: `{spacing.lg}` (24px) on feature cards, `{spacing.md}` (16px) on compact cards.
- Section padding: `{spacing.4xl}` (64px) top and bottom. Hero uses generous spacing to let the headline breathe.

### Grid & Container
- **Max width**: ~1400px. Content centered with horizontal padding of `{spacing.lg}` (24px) on desktop, `{spacing.md}` on mobile.
- **Column patterns**: single-column for coaching content, 2-up to 3-up for feature cards at wider viewports.

### Responsive Strategy
- **Mobile** (< 600px): Single column, stacked cards, hamburger nav, full-width CTAs.
- **Tablet** (600-959px): 2-up cards, horizontal nav still shown.
- **Desktop** (960px+): Full layout, 3-up feature grids.
- **Wide** (1200px+): Content caps at 1400px max-width.

## Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, 1px `{colors.hairline}` border | Default cards, plan display |
| 1 — Soft | `0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)` | Slightly raised cards, elevated surfaces |
| 2 — Overlay | `0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.04)` | Modal dialogs, focus overlays |

Shadows are subtle and warm-tinted — the system prefers flat cards with hairlines over heavy drops.

## Dark Mode

Dark mode inverts the warm surface ladder into deep warm tones — not pure black:
- Canvas: `#1a1816` (deep warm brown, not #000)
- Canvas-soft: `#242120` (slightly lighter warm dark)
- Canvas-subtle: `#2e2a28`
- Ink: `#e8e2dc` (warm off-white)
- Primary: `#d9822b` (slightly brighter amber for contrast)
- All other tokens shift proportionally
