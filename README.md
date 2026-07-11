# Kartikey Dwivedi — Personal Portfolio

A cinematic, single-page personal portfolio built with **Next.js 14 (App Router)**, featuring a Three.js particle hero section, smooth GSAP animations, and a fully responsive, theme-aware design.

**Live site:** https://kartikeyy-dwivedi-portfolio.vercel.app/

---

## ✨ Features

- 🎬 Cinematic hero section with video intro, Three.js bokeh particle layer, and mouse parallax
- 🌗 Light/Dark theme toggle
- 🧭 Sticky, scroll-aware navbar with smooth-scroll section links
- 📄 Resume button with **View** (opens in new tab) and **Download** dropdown options
- 🧑‍💻 About, Skills, Education, Experience, Projects, Certifications, and Contact sections
- 📬 Working contact form (powered by Web3Forms — no backend required)
- 📱 Fully responsive across desktop, tablet, and mobile
- ⚡ Optimized performance — code-split, GPU-friendly Three.js layer, compositor-friendly animations

---

## 🧱 Tech Stack

| Category        | Tech |
|------------------|------|
| Framework        | [Next.js 14](https://nextjs.org/) (App Router, `'use client'` components) |
| UI Library       | React 18 |
| 3D / Graphics    | [Three.js](https://threejs.org/) — particle hero background |
| Animation        | [GSAP 3](https://gsap.com/) — entrance & scroll animations |
| Styling          | CSS Modules (scoped, collision-free) |
| Fonts            | Google Fonts — Syne (display) + Inter (body) |
| Forms            | Web3Forms (contact form submission) |
| Hosting          | Vercel |

---

## 📂 Project Structure

```
app/
  layout.jsx              ← Root layout, font imports, metadata
  page.jsx                ← Assembles all sections into the home page
  globals.css              ← Global reset, CSS variables, theme tokens

components/
  Navbar.jsx               ← Sticky nav bar + Resume View/Download dropdown
  ThemeToggle.jsx           ← Light/Dark mode switch
  Hero.jsx                  ← Hero section wrapper
  VideoIntro.jsx             ← Video/avatar intro, hero orchestration
  CinematicLayer.jsx          ← Three.js particle canvas (lazy-loaded, SSR-safe)
  About.jsx                 ← About Me section
  Skills.jsx                ← Technical skills section
  Education.jsx              ← Academic timeline
  Experience.jsx             ← Work experience timeline
  Projects.jsx               ← Featured projects grid
  Certifications.jsx          ← Certifications list
  ContactForm.jsx             ← Contact form + social links

styles/
  Navbar.module.css
  Hero.module.css
  VideoIntro.module.css
  Sections.module.css        ← Shared styles for About/Skills/Education/Experience/Projects/Certifications
  ContactForm.module.css
  Home.module.css

public/
  Kartikey_Dwivedi_Resume.pdf   ← Resume served via View/Download in navbar
  kartikey.jpg                  ← Profile photo
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

```bash
# Production build
npm run build
npm run start
```

---

## 🔧 Configuration

### Resume
Replace `public/Kartikey_Dwivedi_Resume.pdf` with your own resume file (keep the same filename, or update the path referenced in `components/Navbar.jsx`).

### Contact form
The contact form uses [Web3Forms](https://web3forms.com/). Update the `access_key` inside `components/ContactForm.jsx` with your own Web3Forms access key.

### Sections content
Each section's content lives as a simple array/object at the top of its component file — update these directly to add/edit entries:

| Section | File | Data variable |
|---|---|---|
| Skills | `components/Skills.jsx` | — |
| Education | `components/Education.jsx` | `EDUCATION` |
| Experience | `components/Experience.jsx` | `EXPERIENCE` |
| Projects | `components/Projects.jsx` | `PROJECTS` |
| Certifications | `components/Certifications.jsx` | — |

---

## 🎨 Theming

Theme colors are controlled via CSS custom properties in `app/globals.css` under `:root` (dark, default) and `[data-theme='light']` (light mode), toggled by `ThemeToggle.jsx`.

---

## 🖼️ Three.js Particle System (Hero)

- ~750 warm-orange/white/blue particles (350 on mobile for performance)
- Additive blending for a soft bokeh glow
- Per-particle sine-wave oscillation for organic floating motion
- Smoothed mouse-parallax camera movement (60fps)
- Fully disposed on component unmount to avoid memory leaks

### Performance notes
- `CinematicLayer` is dynamically imported (`next/dynamic`, no SSR) and code-split
- `renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5))` caps GPU load
- `depthWrite: false` + `AdditiveBlending` keeps overdraw cost low
- Particle count is halved automatically on mobile
- GSAP animations run only on compositor-friendly `transform` + `opacity`

---

## 📦 Deployment

This project is deployed on **[Vercel](https://vercel.com/)**. Any push to the connected GitHub branch triggers an automatic redeploy.

```bash
# Manual deploy via Vercel CLI (optional)
npm i -g vercel
vercel
```

---

## 📄 License

This project is for personal portfolio use. Feel free to fork it for inspiration, but please don't reuse personal content (resume, photos, project details) as your own.

---

## 📬 Contact

- **GitHub:** [KartikeyDwivedii](https://github.com/KartikeyDwivedii)
- **LinkedIn:** [kartikeyydwivedi](https://www.linkedin.com/in/kartikeyydwivedi/)
- **LeetCode:** [CtLP6EcvDr](https://leetcode.com/u/CtLP6EcvDr/)
