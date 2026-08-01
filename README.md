# André Kempf — Developer Portfolio

A fast, privacy-focused, and accessible developer portfolio built with **Next.js 16 (App Router)**, **Tailwind CSS**, and **React 19**, backed by multi-language support (`next-intl`) and a custom analytics setup.

[![Deployment Status](https://git.andre-kempf.com/Chneemann/portfolio/badges/workflows/deploy.yml/badge.svg?branch=main)](https://git.andre-kempf.com/Chneemann/portfolio/actions)
[![Website Status](https://img.shields.io/badge/website-online-brightgreen?style=flat-square&logo=google-chrome&logoColor=white)](https://andre-kempf.com)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)

---

## 🚀 Key Features

- **Command Palette (`Cmd + K`):** Interactive utility menu with keyboard shortcuts, quick social navigation, resume downloads, and contextual actions.
- **Internationalization (`next-intl`):** Fully integrated multi-language support (English and German) with localized routing (`/en`, `/de`) and dynamic message loading.
- **Privacy-First Analytics Engine:** Custom Next.js API backend providing real-time page metric tracking using session-based rate limiting and GDPR-compliant IP hashing.
- **Terminal Inspector:** Integrated terminal widget and modal to view live system metrics, device usage ratios, and ping response latency.
- **Performance & Accessibility:** Zero layout shifts (CLS), optimized font loading, dynamic SSR/client component boundaries, and high contrast Dark/Slate aesthetic.

---

## 🛠️ Tech Stack & Architecture

### Frontend

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI & Styling:** [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/)
- **Localization:** [next-intl](https://next-intl-docs.vercel.app/) (Routing, Middleware Proxy & Client/Server translation context)
- **Icons & Components:** Lucide Icons, Custom UI Components
- **State & Events:** Native CustomEvents, React State

### Backend & Analytics

- **Runtime:** Node.js / Next.js API Routes (App Router)
- **Data Privacy:** One-way IP Hashing (`SHA-256` / daily salt), Session Rate Limiting
- **Protocol:** JSON REST API / Server Actions

### Infrastructure & CI/CD

- **Hosting:** VPS / Docker Containers
- **CI/CD Pipeline:** Self-hosted Forgejo Actions (Automated build & SSH deployment)
- **Mirroring:** Automated sync to GitHub

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js:** v18.18.0 or higher (v20+ / v26+ recommended)
- **Package Manager:** npm / pnpm / yarn

### Local Setup

1. **Clone the repository:**

   ```bash
   git clone [https://git.andre-kempf.com/Chneemann/portfolio.git](https://git.andre-kempf.com/Chneemann/portfolio.git)
   cd portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Repository Structure

```text
├── src/                            # Source Code
│   ├── app/                        # Next.js App Router (Pages, Routes & API)
│   │   ├── [locale]/               # Localized App Routes (en / de)
│   │   │   ├── layout.tsx          # Localized Layout (NextIntlClientProvider & Shell UI)
│   │   │   └── page.tsx            # Landing Page / Main View
│   │   ├── api/                    # Native Next.js Route Handlers
│   │   │   └── analytics/
│   │   │       └── route.ts        # Live Metrics & Traffic Handler (JSON-based)
│   │   ├── imprint/
│   │   │   └── page.tsx            # Imprint Page
│   │   ├── privacy/
│   │   │   └── page.tsx            # Privacy Policy Page
│   │   ├── globals.css             # Global Styles & Tailwind Imports
│   │
│   ├── components/                 # Reusable UI & Layout Components
│   │   ├── About.tsx               # About Me & Bio Section
│   │   ├── AnalyticsModal.tsx      # Terminal-Style Analytics Modal
│   │   ├── AnalyticsWidget.tsx     # Footer Performance & Metrics Badge
│   │   ├── Background.tsx          # Dynamic Canvas / Background Effects
│   │   ├── CommandPalette.tsx      # Cmd+K Interactive Command Menu
│   │   ├── Contact.tsx             # Contact Form Section (Formspree Integration)
│   │   ├── Footer.tsx              # Footer with Links & Credits
│   │   ├── Header.tsx              # Navigation Header & Search Trigger
│   │   ├── Hero.tsx                # Hero Section / Intro Banner
│   │   ├── Portfolio.tsx           # Project Showcase & Cards
│   │   ├── Skills.tsx              # Tech Stack & Skill Matrix
│   │   └── Social.tsx              # Social Media Links & Bar Component
│   │
│   ├── lib/                        # Pure Utility Scripts, Configs & Helpers
│   │   ├── paletteCommands.ts      # Registered Cmd+K Commands & Actions
│   │   └── playSudoEasterEgg.ts    # Easter-Egg Shell Simulation Logic
│   │
│   ├── i18n/                       # Localization Core & Configurations
│   │   ├── messages/               # Translation JSON files (en.json, de.json)
│   │   ├── navigation.ts           # Localized navigation utilities (Link, redirect, useRouter)
│   │   ├── request.ts              # Dynamic message loading per request locale
│   │   └── routing.ts              # Supported locales and default fallback rules
│   │
│   └── proxy.ts                    # Next.js Middleware Proxy for next-intl routing
│
├── public/                         # Static Assets (Client Access)
│   ├── robots.txt                  # Search Engine Directives
│   ├── sitemap.xml                 # XML Sitemap
│   └── assets/
│       ├── downloads/              # Downloadable Files (e.g. CV PDF)
│       ├── icons/                  # SVG Icons & Favicons
│       ├── images/                 # Profile Assets & Screenshots
│       └── projects/               # Project Graphics & Previews
│
├── Dockerfile                      # Container Build Instructions
├── eslint.config.mjs               # ESLint Rules
├── next.config.ts                  # Next.js Configuration
├── package.json                    # Project Dependencies & Scripts
├── postcss.config.mjs              # PostCSS Setup
├── README.md                       # Project Documentation
└── tsconfig.json                   # TypeScript Compiler Rules
```

---

## 📜 License & Credits

- **Author:** André Kempf ([dev@andre-kempf.com](mailto:dev@andre-kempf.com))
- **Design & Code:** Built from scratch with Next.js, React & Tailwind CSS.
