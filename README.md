<div align="center">

<img src="public/assets/logos/android-head_3D.svg" alt="Android Club VIT Bhopal" width="116" />

# Android Club
### VIT Bhopal University

*If it's Android, it's Us.*

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4-0C100D?style=flat-square&logo=nextdotjs&logoColor=white)](package.json)
[![React 19](https://img.shields.io/badge/React-19.1-0C100D?style=flat-square&logo=react&logoColor=61DAFB)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-0C100D?style=flat-square&logo=typescript&logoColor=3178C6)](package.json)
[![Material Design 3](https://img.shields.io/badge/Material_Design_3-Expressive-3DDC84?style=flat-square&logo=android&logoColor=0C100D)](src/app/globals.css)

[Android Design Language](#android-design-language) · [Visual Tour](#visual-tour) · [Engineering](#engineering) · [Run Locally](#run-locally)

</div>

---

> **Personal Note**
>
> Looking at the current Android Club website, I noticed it did not reflect Google's Android design identity despite representing an Android developer community. For this build, I set out to design and engineer a club website grounded in Google's **Android Material Design 3 (Expressive)** philosophy, pairing live Monet dynamic color extraction, tactile Android geometry, and Android Robot character with fast, mobile-first Next.js engineering.

---

## Android Design Language

Rather than adopting generic web templates, every surface, transition, and component follows Google's **Material Design 3 Expressive** system and Android brand identity:

- **Tonal Surface Hierarchy**: Pixel Carbon dark mode (`#0C100D` / `#131915` / `#1A221D`) and warm Material light surfaces (`#F8FAF8` / `#EEF3EE` / `#FFFFFF`) anchor every card, paired with official **Android Green** (`#3DDC84`). Theme state initializes before first paint in [src/app/layout.tsx](src/app/layout.tsx) to avoid flicker.
- **Live Monet Dynamic Seed Engine**: The **Material You Color Picker** in the Domains section lets visitors switch the site's seed color live between **Android Botanical** (`#3DDC84`), **Pixel Cobalt** (`#4C8DF6`), **Bhopal Clay**, and **Citron Gold**. Selecting a seed recalculates CSS variables (`--m3-primary`, `--m3-primary-container`, `--m3-secondary-container`) across components, buttons, and Bugdroid accents immediately.
- **Official `@material/web` Motion & Shape Tokens**: Defined directly in [src/app/globals.css](src/app/globals.css), using Material emphasized easing curves (`--md-sys-motion-easing-emphasized`, `--md-sys-motion-easing-emphasized-decelerate`), structured corner radii (`8px` to `28px` and full pills), and layered tonal elevations.
- **Material 3 Expressive Geometry & Inverted Cutouts**: 12-sided scalloped starburst badges (`M3Starburst`), sawtooth pills (`M3JaggedBadge`), Pixel device hardware frames around open-source builds, and `InvertedCutoutCard` concave corner pockets calculated dynamically with `ResizeObserver` and quadratic Bezier SVG `<clipPath>` geometry (`buildCutoutPath`).
- **Bugdroid & Androidify Identity**: Interactive 3D Bugdroids (`BugdroidRig`, `android-head_3D.svg`) plus a prompt-driven **Androidify Studio** preview card matching Google's playful character customization language.
- **Google Font Stack**: `Plus Jakarta Sans`, `Roboto Flex`, and `JetBrains Mono` loaded via `next/font/google` with `display: "swap"`.

---

## Visual Tour

### Light & Dark Hero Architecture

| Pixel Carbon Dark (`#0C100D`) | Clean Material Light (`#F8FAF8`) |
| :---: | :---: |
| ![Hero Desktop Dark](docs/screenshots/hero-desktop-dark.png) | ![Hero Desktop Light](docs/screenshots/hero-desktop-light.png) |

---

### Live Monet Engine & Chapter Pillars

Four core engineering tracks (**Native Android**, **Flutter & KMP**, **Material You Design**, and **On-Device AI & IoT**) arranged inside an expressive Material 3 bento grid alongside the live **Material You Color Picker** and `ColorScheme.kt` preview.

![Domains Bento Grid and Material You Color Picker](docs/screenshots/domains-bento.png)

---

### Manifesto, Androidify Studio, Events & Shipped Software

![About Manifesto Showcase](docs/screenshots/about-manifesto.png)

| Androidify Custom Bot Studio | Chapter Events & Arenas |
| :---: | :---: |
| ![Androidify Bot Studio](docs/screenshots/androidify-showcase.png) | ![Events Showcase](docs/screenshots/events-showcase.png) |

| Pixel-Framed Open-Source Software | Droid Coins Vault |
| :---: | :---: |
| ![Open-Source Projects Showcase](docs/screenshots/projects-showcase.png) | ![Droid Coins Section](docs/screenshots/droidcoins-section.png) |

---

### Core Council (2026 - 2027), Recruitment & Campus Map

Departmental roster filtering (`SDC` view shown below), recruitment FAQ accordion, and the footer housing a live dark-mode Google Map pinned to **VIT Bhopal University** alongside the rising 3D Android return-to-top trigger.

![SDC Core Council Showcase](docs/screenshots/team-sdc-showcase.png)

| Chapter FAQ & Application Form | Branded Footer & Live Campus Map |
| :---: | :---: |
| ![Join and FAQ Section](docs/screenshots/join-faq-showcase.png) | ![Footer Showcase](docs/screenshots/footer-showcase.png) |

---

### Mobile-First Responsive Layout (`390x844` Verified)

Designed mobile-first with touch-ready hit targets, clean card stacking, and verified zero horizontal overflow (`scrollWidth === innerWidth`) at `390px`.

| Mobile Hero & Navigation | Mobile Open-Source Builds |
| :---: | :---: |
| <img src="docs/screenshots/mobile-hero.png" alt="Mobile Hero Screenshot" width="320" /> | <img src="docs/screenshots/mobile-projects.png" alt="Mobile Projects Screenshot" width="320" /> |

---

## Engineering

### Tech Stack

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Framework** | Next.js `16.4.6` (App Router, Turbopack) | Static pre-rendering, metadata routes, asset caching |
| **UI Runtime** | React `19.1.0` & TypeScript `5.8.0` | Strictly typed component architecture and section data |
| **Styling & Design System** | Tailwind CSS `4.1.0` & `@material/web` CSS Tokens | Pixel Carbon / light tonal surfaces and dynamic Monet seeds |
| **Motion & Scrolling** | GSAP `3.12.7` + Lenis `1.3.4` | ScrollTrigger reveals synced with smooth scrolling and reduced-motion guards |
| **Typography** | `Plus Jakarta Sans`, `Roboto Flex`, `JetBrains Mono` | Variable display, UI, and code typography via `next/font/google` |
| **SVG & Cutout Geometry** | Custom SVG `<clipPath>` + `ResizeObserver` | Dynamic concave cutouts (`InvertedCutoutCard`) and Material 3 badges |
| **Tooling** | ESLint `9.22.0` (`eslint-config-next`), `clsx` `2.1.1` | Code quality linting and conditional class composition |

### Technical Highlights

- **Single-Source Typed Data**: Chapter metrics, tracks, events, projects, FAQ items, Droid Coins rewards, and team directories live in [src/data/club.ts](src/data/club.ts), cleanly decoupled from presentation components.
- **Zero-Shimmer Cached Images**: `SmartImage` detects already-decoded browser assets (`complete && naturalWidth > 0`) and renders immediately without skeleton flicker, backed by 1-year immutable `Cache-Control` headers for `/assets/` in [next.config.ts](next.config.ts).
- **Accessible Motion Guardrails**: GSAP `3.12.7` ScrollTrigger animations sync with Lenis `1.3.4` smooth scrolling in [src/lib/motion.ts](src/lib/motion.ts) and turn off automatically when `prefers-reduced-motion` is enabled.
- **SEO, GEO & AEO Coverage**: Full `Schema.org` JSON-LD graph (`Organization`, `WebSite`, `Event`, `FAQPage`) in [src/app/layout.tsx](src/app/layout.tsx), plain-text AI knowledge endpoint at [public/llms.txt](public/llms.txt), crawler routes (`/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`), and [public/humans.txt](public/humans.txt).

---

## Run Locally

Requires **Node.js 20+** and **npm 10+**.

```bash
git clone https://github.com/Android-Club-VIT-Bhopal/Android-Club-Website.git
cd Android-Club-Website
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Quality Checks & Production Build

```bash
npx tsc --noEmit
npm run lint
npm run build
npm run start
```

---

## Legal & Author

Android is a trademark of Google LLC. The Android robot is reproduced or modified from work created and shared by Google and used according to terms described in the [Creative Commons 3.0 Attribution License](https://creativecommons.org/licenses/by/3.0/). Fonts load under the SIL Open Font License.

Designed and engineered by **John Varghese (J0X)**:
- **GitHub**: [John-Varghese-EH](https://github.com/John-Varghese-EH)
- **LinkedIn**: [/in/John--Varghese/](https://www.linkedin.com/in/John--Varghese/)

<img src="public/assets/logos/android-brand-new-logo-3D-animation.gif" alt="Android Club VIT Bhopal" width="116" align="center"/>
