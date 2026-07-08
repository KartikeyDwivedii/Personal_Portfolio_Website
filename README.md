# Kartikey Dwivedi — Cinematic Portfolio

Premium data-engineer portfolio hero section built with Next.js 14 App Router, Three.js, and GSAP.

## Stack
- **Next.js 14** (App Router, `'use client'` components)
- **Three.js** — cinematic bokeh particle layer with mouse parallax
- **GSAP 3** — smooth entrance animations
- **CSS Modules** — scoped, collision-free styles
- **Google Fonts** — Plus Jakarta Sans (display) + Inter (body)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Asset setup

Place your assets in `/public`:

| File | Description |
|------|-------------|
| `hero-video.mp4` | Talking-head video (main foreground) |
| `avatar.png` | Static fallback photo |
| `Kartikey_Dwivedi_Resume.pdf` | Downloadable resume |

The video is used in two ways:
1. **Foreground** — cropped right side, mask-faded at top/bottom
2. **Background ambient layer** — blurred, darkened, desaturated duplicate

If no video is available, it gracefully falls back to the static avatar photo.

## Component API

```jsx
<VideoIntro
  videoSrc="/hero-video.mp4"   // path to your MP4 (can be null)
  avatarSrc="/avatar.png"      // static photo fallback
  nextSectionId="about"        // scroll target on CTA click
/>
```

## Architecture

```
components/
  VideoIntro.jsx      ← Main hero section (all orchestration)
  CinematicLayer.jsx  ← Three.js particle canvas (lazy-loaded, SSR-safe)

styles/
  VideoIntro.module.css   ← Hero scoped styles
  Home.module.css         ← About section styles

app/
  layout.jsx   ← Root layout with font imports
  page.jsx     ← Home page assembling all sections
  globals.css  ← Reset + global tokens
```

## Three.js particle system

- ~750 warm-orange/white/blue particles (350 on mobile)
- Additive blending for dreamy bokeh glow
- Per-particle sine-wave oscillation for organic float
- Mouse parallax camera movement (smoothed, 60fps)
- Full disposal on component unmount

## Performance notes
- `CinematicLayer` is `dynamic()` imported (no SSR, code-split)
- `renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5))` caps GPU load
- `depthWrite: false` + `AdditiveBlending` keeps overdraw cost low
- Particle count halved automatically on mobile
- GSAP animations run on compositor-friendly `transform` + `opacity` only
