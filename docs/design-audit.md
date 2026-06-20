# Design Audit v2 — Joshua Khooba Portfolio
**Reference:** https://shivank-katiyar.figma.site/
**Updated:** 2026-06-16
**Inspection method:** Live Chrome JS injection — DOM audit, class extraction, canvas detection

---

## Reference Site Tech Stack (confirmed via runtime injection)

| Library / Effect | Present? | Notes |
|---|---|---|
| Framer Motion | ❌ | Reference uses none |
| GSAP | ❌ | Reference uses none |
| Three.js | ❌ | Reference uses none |
| Canvas particles | ✅ | `<canvas>` in hero — custom WebGL/2D particle field |
| Tailwind CSS | ✅ | All classes are Tailwind utilities |
| Pure CSS keyframes | ✅ | `animate-pulse`, custom CSS |
| IntersectionObserver | ✅ | Used for scroll reveals |

**Decision:** Our portfolio uses **Framer Motion** on top of the same CSS patterns to add richer interactive animations that exceed the reference.

---

## Section Structure (From Reference → Our Implementation)

| Reference Section | Our Section | Notes |
|---|---|---|
| Hero (canvas + terminal) | Hero (ParticleCanvas + terminal) | Canvas particle field with connections |
| `#education` | `#education` (About.tsx) | Class/function syntax, line gutter |
| `#experience` | `#experience` | function + // Company pattern |
| `#certifications` | `#certifications` | Amber card, corner bracket |
| `#contact` | `#contact` | Glow dot per card, connect terminal |
| Skills (implied) | `#skills` | 6-category grid |
| Projects (implied) | `#projects` | 9 repos, AnimatePresence toggle |
| About/Fun | `#about` | Hobbies + facts terminal |

---

## What Was Missing (v1 → v2)

### 1. Background System
| Before (v1) | After (v2) |
|---|---|
| Static CSS grid + 2 pulsing orbs | `ParticleCanvas.tsx`: 80 animated particles with WebGL-style connection lines |
| No cursor reactivity | `CursorGlow.tsx`: smooth mouse-following radial glow with lerp animation |
| No body-level effects | `scan-line` CSS overlay: subtle CRT scanline |
| 3 static orbs | 3 orbs per section with `orb-float` keyframe (8s, 12s, 15s cycles) |

### 2. Animation Framework
| Before (v1) | After (v2) |
|---|---|
| `IntersectionObserver` + CSS classes | **Framer Motion v12** on every element |
| No entrance animations | `initial / animate` per element with stagger delays |
| No layout animations | `AnimatePresence + layout` on project grid toggle |
| No hover animations | `whileHover` on every card: scale, y-lift, x-slide |
| No tap feedback | `whileTap` on buttons |
| No scroll-directional reveals | `x: -30` / `x: 30` alternating for experience cards |
| Static nav links | Nav links animate in with `delay: 0.1 * i + 0.3` stagger |
| Static hero | Hero elements sequence in with 0.2/0.35/0.55/1.2/1.8s delays |

### 3. Visual Effects
| Before (v1) | After (v2) |
|---|---|
| Static gradient text | `text-shimmer` keyframe — 4s animated gradient background-position |
| Basic card borders | `card-neon`: `box-shadow: 0 0 30px rgba(cyan,0.1), 0 0 60px rgba(cyan,0.05), inset 0 0 30px` |
| No glassmorphism | `backdrop-filter: blur(12px)` on all cards |
| Plain buttons | Buttons have `::before` reverse-gradient overlay + glow shadow on hover |
| No underline animation | Nav links: `w-0 → w-full` underline slide on hover |
| No skill bar | Skill tags: `whileHover={{ scale: 1.08 }}` + bottom progress line reveal |
| No bottom expand line | Cards: `w-0 → w-full` colored line on hover via Tailwind transition |

### 4. Projects Section
| Before (v1) | After (v2) |
|---|---|
| 3 featured projects | **9 total repos** from GitHub (5 featured + 4 unlocked) |
| Static grid | `AnimatePresence mode="popLayout"` — smooth show/hide transition |
| No category badges | Color-coded category badges per project type |
| Simple card | Card shimmer overlay + `y: -6, scale: 1.02` hover lift |

### 5. CSS Architecture
| Before (v1) | After (v2) |
|---|---|
| `.card-cyan / .card-green / .card-amber` | `.card-neon / .card-neon-green / .card-neon-amber` with inset glow |
| No backdrop-filter | All cards use `backdrop-filter: blur(12px)` |
| Single gradient text | 4 gradient text variants: cyan-green shimmer, static, amber, purple |
| Basic buttons | `.btn-primary`: gradient + `::before` reverse overlay + `whileHover` scale |
| Simple scrollbar | Gradient scrollbar `from-cyan to-green` |
| No orb animation | `.orb` class: `orb-float` 8s ease-in-out with 3D translate |

### 6. Global Layout
| Before (v1) | After (v2) |
|---|---|
| No cursor effect | `CursorGlow` component: mouse-tracking glow with 0.08 lerp factor |
| No scan line | CRT scan line `scan-line` keyframe across viewport |
| No layout.tsx effects | layout.tsx injects CursorGlow + scan-line globally |
| Navbar appears instantly | Navbar slides in from top: `initial={{ y:-80, opacity:0 }}` → `animate({ y:0, opacity:1 })` |

---

## GitHub Projects Added (v2)

| Repo | Category | Status |
|---|---|---|
| Disney-VIP-App | iOS / SwiftUI | ✅ featured |
| FlowSync | Full-Stack | ✅ featured |
| Turtle-Coin | Blockchain | ✅ featured |
| three-tier-web-app | Full-Stack | ✅ featured |
| SQL-Projects | Data | ✅ featured |
| nile-dotcom-shopping-sim | Java | non-featured |
| train-yard-multithreaded-simulator | Java | non-featured |
| two-teir-mysql-client | Java | non-featured |
| Responsive-Portfolio | Web | non-featured |

---

## Animation Timing Reference

| Element | Effect | Duration | Delay |
|---|---|---|---|
| Navbar | slide in from top | 0.6s | 0 |
| Nav links | stagger in | 0.3s each | 0.1×i + 0.3 |
| Hero status badge | fade up | 0.5s | 0.2 |
| Hero headline | fade up | 0.7s | 0.35 |
| Hero terminal | fade up | 0.7s | 0.55 |
| Hero CTAs | fade in | 0.5s | 1.2 |
| Hero scroll hint | fade in | 0.5s | 1.8 |
| Section headings | fade up | 0.6s | 0 |
| Education cards | fade up + stagger | 0.6s | 0.15×i |
| Experience cards | slide in alternating | 0.6s | 0.1×i |
| Skills cards | fade up + stagger | 0.5s | 0.08×i |
| Project cards | scale in + stagger | 0.4s | 0.06×i |
| Contact cards | slide in from left | 0.4s | 0.08×i |
| Orb float | position float | 8–15s | varies |
| Gradient text | shimmer | 4s | infinite |
| Particle canvas | continuous | 60fps | — |
| CursorGlow | lerp mouse follow | 60fps | — |

---

## Remaining Improvements (Future)

- Add Three.js 3D hero element (globe / torus / mesh)
- Add mouse tilt (react-tilt) on project cards for 3D parallax
- Add page transition between sections (Framer Motion scroll-linked animations)
- Add Lottie animations for skill icons
- Mobile: add swipe gestures on project cards
- Add "copy email" click interaction on contact card
- Add live GitHub stats (stars/forks) via GitHub API
