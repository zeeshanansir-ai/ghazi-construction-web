# Ghazi Constructions — Design System
> Extracted from Google Stitch export · 2026-05-12

---

## Brand

| Property | Value |
|----------|-------|
| Name | Ghazi Constructions (Ghazi Builders & Real Estate) |
| Tagline | Structural Integrity Guaranteed. |
| Market | Pakistan — DHA Phase 6/8, Lahore · Islamabad · Gujranwala |
| Aesthetic | Modern Minimalist + Spanish/Classic Luxury |
| Phone | +92 321 4441444 |
| Email | info@ghaziconstructions.pk |
| Facebook | https://www.facebook.com/GhaziConstructions/ |

---

## Color Palette (Material Design 3)

### Primary — Royal Blue
| Token | Hex |
|-------|-----|
| `primary` | `#0050cd` |
| `primary-container` | `#0866ff` |
| `primary-fixed` | `#dbe1ff` |
| `primary-fixed-dim` | `#b3c5ff` |
| `inverse-primary` | `#b3c5ff` |
| `on-primary` | `#ffffff` |
| `on-primary-fixed` | `#00184a` |
| `on-primary-fixed-variant` | `#003fa5` |
| `on-primary-container` | `#f9f7ff` |
| `surface-tint` | `#0054d7` |

### Tertiary — Warm Amber (CTA accent)
| Token | Hex |
|-------|-----|
| `tertiary` | `#914300` |
| `tertiary-container` | `#b75600` |
| `tertiary-fixed` | `#ffdbc8` |
| `tertiary-fixed-dim` | `#ffb68b` |
| `on-tertiary` | `#ffffff` |
| `on-tertiary-container` | `#fff6f3` |
| `on-tertiary-fixed` | `#321200` |
| `on-tertiary-fixed-variant` | `#753400` |

### Secondary — Neutral Grey
| Token | Hex |
|-------|-----|
| `secondary` | `#5d5e61` |
| `secondary-container` | `#e2e2e5` |
| `secondary-fixed` | `#e2e2e5` |
| `secondary-fixed-dim` | `#c6c6c9` |
| `on-secondary` | `#ffffff` |
| `on-secondary-fixed` | `#1a1c1e` |
| `on-secondary-container` | `#636467` |
| `on-secondary-fixed-variant` | `#454749` |

### Surface & Background
| Token | Hex |
|-------|-----|
| `background` | `#f7f9ff` |
| `surface` | `#f7f9ff` |
| `surface-bright` | `#f7f9ff` |
| `surface-dim` | `#d7dae0` |
| `surface-variant` | `#dfe3e8` |
| `surface-container-lowest` | `#ffffff` |
| `surface-container-low` | `#f1f4fa` |
| `surface-container` | `#ebeef4` |
| `surface-container-high` | `#e5e8ee` |
| `surface-container-highest` | `#dfe3e8` |
| `inverse-surface` | `#2d3135` |
| `inverse-on-surface` | `#eef1f7` |
| `on-background` | `#181c20` |
| `on-surface` | `#181c20` |
| `on-surface-variant` | `#424656` |

### System
| Token | Hex |
|-------|-----|
| `outline` | `#727687` |
| `outline-variant` | `#c2c6d8` |
| `error` | `#ba1a1a` |
| `error-container` | `#ffdad6` |
| `on-error` | `#ffffff` |
| `on-error-container` | `#93000a` |

---

## Typography

**Font Family:** IBM Plex Sans (weights: 300, 400, 500, 600, 700)  
**Icon Library:** Material Symbols Outlined

| Scale | Size | Line Height | Weight | Letter Spacing |
|-------|------|-------------|--------|----------------|
| `headline-lg` | 32px | 40px | 600 | -0.02em |
| `headline-lg-mobile` | 28px | 36px | 600 | — |
| `headline-md` | 24px | 32px | 600 | — |
| `headline-sm` | 20px | 28px | 500 | — |
| `body-lg` | 18px | 28px | 400 | — |
| `body-md` | 16px | 24px | 400 | — |
| `body-sm` | 14px | 20px | 400 | — |
| `label-lg` | 14px | 20px | 600 | 0.05em |
| `label-md` | 12px | 16px | 500 | — |
| `label-sm` | 10px | 14px | 500 | — |

---

## Spacing

| Token | Value |
|-------|-------|
| `base` | 8px |
| `gutter` | 24px |
| `margin-mobile` | 16px |
| `margin-tablet` | 32px |
| `margin-desktop` | 48px |
| `container-max` | 1440px |

---

## Border Radius

| Scale | Value | Usage |
|-------|-------|-------|
| `DEFAULT` | 2px | Chips, tags |
| `lg` | 4px | Inputs, small cards |
| `xl` | 8px | Cards, modals |
| `2xl` | 12px | Large cards |
| `full` | 9999px | Pills |

---

## Layout Patterns (from Stitch screens)

### Navigation
- Fixed top nav, 64px height, `bg-surface/80` + `backdrop-blur-md`
- Logo: `architecture` Material icon + brand name in `text-primary`
- Links: `label-lg` weight, `hover:text-primary`
- CTA button: `bg-primary text-on-primary`, `rounded-xl`
- Mobile: hamburger menu

### Hero
- Full-bleed image, 870px height, gradient overlay `from-on-primary-fixed/80 to-transparent`
- Headline: 48px mobile / 64px desktop, white, tight leading
- CTA primary: `bg-tertiary-container text-on-tertiary-container`
- CTA secondary: `bg-white/10 border-white/30`

### Stats Strip
- `bg-surface-container`, 4-col grid
- Metric in `text-primary headline-lg`
- Label in `on-surface-variant label-lg uppercase tracking-widest`

### Service Cards
- `bg-surface-container-lowest`, `rounded-xl`, `border-outline-variant`
- Hover: `border-primary`, `shadow-lg`
- Icon container: `w-12 h-12 bg-primary/10 rounded-lg`, group-hover → `bg-primary text-on-primary`

### Project Grid
- Asymmetric: featured 8-col + sidebar 4-col
- Images with gradient overlay `from-on-background/90`
- Hover: `scale-105 transition-transform duration-500`

### Contact Form
- Split card: info panel left (md:w-1/2) + form right
- Inputs: `rounded-lg border-outline-variant bg-surface-container-low focus:ring-primary`

---

## Pages (Stitch Screens)

| Screen | Route | Status |
|--------|-------|--------|
| Public Landing Page | `/` | Build |
| Project Portfolio | `/projects` | Build |
| Project Detail | `/projects/[slug]` | Build |
| Contact / Lead Form | `/#contact` | Build (+ Supabase) |
| Executive Dashboard | `/admin` | Phase 2 |
| Financial Command Center | `/admin/finance` | Phase 2 |
| Client Lead Manager | `/admin/leads` | Phase 2 |
| Site Manager Portal (mobile) | `/admin/site` | Phase 2 |
