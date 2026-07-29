# André Kempf — Developer Portfolio

A fast, privacy-focused, and accessible developer portfolio built with **Next.js 16 (App Router)**, **Tailwind CSS**, and **React 19**, backed by a custom **lightweight PHP analytics engine**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)

---

## 🚀 Key Features

- **Command Palette (`Cmd + K`):** Interactive utility menu with keyboard shortcuts, quick social navigation, resume downloads, and contextual actions.
- **Privacy-First Analytics Engine:** Custom PHP backend providing real-time page metric tracking using session-based rate limiting and GDPR-compliant IP hashing (no cookie consent required).
- **Terminal Inspector:** Integrated terminal widget and modal to view live system metrics, device usage ratios, and ping response latency.
- **Performance & Accessibility:** Zero layout shifts (CLS), optimized font loading, dynamic SSR/client component boundaries, and high contrast Dark/Slate aesthetic.

---

## 🛠️ Tech Stack & Architecture

### Frontend

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI & Styling:** [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Icons & Components:** Lucide Icons, Custom UI Components
- **State & Events:** Native CustomEvents, React State

### Backend & Analytics

- **Language:** PHP 8.x
- **Data Privacy:** One-way IP Hashing (`MD5` + daily salt), Session Rate Limiting
- **Protocol:** JSON REST API (`analytics.php`)

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js:** v18.18.0 or higher (v20+ / v26+ recommended)
- **Package Manager:** npm / pnpm / yarn

### Local Setup

1. **Clone the repository:**

   ```bash
   git clone https://codeberg.org/Chneemann/portfolio.git
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
│   ├── app/                        # Next.js App Router (Pages & Metadata)
│   │   ├── favicon.ico
│   │   ├── globals.css             # Global Styles & Tailwind Imports
│   │   ├── layout.tsx              # Root Layout (Fonts, Metadata, Providers)
│   │   ├── page.tsx                # Landing Page / Main View
│   │   ├── imprint/                # Imprint Page
│   │   │   └── page.tsx
│   │   └── privacy/                # Privacy Policy Page
│   │       └── page.tsx
│   │
│   ├── components/                 # Reusable UI & Layout Components
│   │   ├── About.tsx               # About Me & Bio Section
│   │   ├── AnalyticsModal.tsx      # Terminal-Style Analytics Modal
│   │   ├── AnalyticsWidget.tsx     # Footer Performance & Metrics Badge
│   │   ├── Background.tsx          # Dynamic Canvas / Background Effects
│   │   ├── CommandPalette.tsx      # Cmd+K Interactive Command Menu
│   │   ├── Contact.tsx             # Contact Form Section
│   │   ├── Footer.tsx              # Footer with Links & Credits
│   │   ├── Header.tsx              # Navigation Header & Search Trigger
│   │   ├── Hero.tsx                # Hero Section / Intro Banner
│   │   ├── Portfolio.tsx           # Project Showcase & Cards
│   │   ├── Skills.tsx              # Tech Stack & Skill Matrix
│   │   └── Social.tsx              # Social Media Links & Bar Component
│   │
│   └── lib/                        # Pure Utility Scripts, Configs & Helpers
│       ├── paletteCommands.ts      # Registered Commands & Actions
│       └── playSudoEasterEgg.ts    # Easter-Egg Shell Simulation Logic
│
├── backend/                        # Lightweight Backend & Mail/Analytics Engine
│   ├── templates/
│   │   └── emailTemplate.php       # HTML/CSS Mail Template
│   ├── analytics.php               # REST API for Traffic & Metrics
│   ├── config.php                  # Security, Rate Limiting & Hashing Setup
│   └── sendMail.php                # Contact Form Mailer & Handler
│
├── public/                         # Static Assets (Client Access)
│   ├── robots.txt                  # Search Engine Directives
│   ├── sitemap.xml                 # XML Sitemap
│   └── assets/
│       ├── icons/                  # SVG Icons & Favicons
│       ├── images/                 # Screenshots & Profile Assets
│       └── projects/               # Project Graphics & Previews
│
├── AGENTS.md                       # AI Agent Instructions
├── CLAUDE.md                       # Claude Code Instructions
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
