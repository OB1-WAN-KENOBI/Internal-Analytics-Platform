# Internal Analytics Platform

A modern SaaS landing page for Internal Analytics Platform - real-time dashboards & internal tools. Built with React 18+, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

## Product Description

Internal Analytics Platform is a comprehensive solution for teams that need visibility into their internal tools and systems. It provides real-time metrics monitoring, role-based access control, feature flags, and comprehensive audit logs. Trusted by 500+ teams worldwide.

## Tech Stack

### Core
- **React 18+** - Modern React with hooks
- **TypeScript** - Strict type checking
- **Vite** - Fast build tool and dev server

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components (Button, Card, Badge)

### Animation
- **Framer Motion** - Minimal animations for smooth UX

### Quality
- Mobile-first responsive design
- SEO optimized with meta tags
- TypeScript strict mode
- Lighthouse score target: 90+

## Sections Overview

The landing page consists of 9 main sections:

1. **Hero Section** - Main headline, subheadline, CTA buttons, and dashboard mockup
2. **Social Proof** - Trust indicators with company logos
3. **Features** - 4 feature cards (Real-time metrics, Role-based access, Feature flags, Audit logs)
4. **Screenshots** - Large dashboard screenshot with annotations
5. **How It Works** - 3-step process explanation
6. **Pricing** - 3 pricing plans (Free, Pro, Enterprise)
7. **FAQ** - 6 frequently asked questions with accordion
8. **CTA Section** - Final call-to-action
9. **Footer** - Navigation links, GitHub, legal pages

## Project Structure

```
src/
├── app/
│   ├── layout/
│   │   ├── Header.tsx       # Navigation header with mobile menu
│   │   ├── Footer.tsx       # Footer with links and copyright
│   │   └── Layout.tsx       # Main layout wrapper
│   └── providers/
│       └── ThemeProvider.tsx
├── sections/
│   ├── hero/                # Hero section with CTA
│   ├── social-proof/        # Company logos
│   ├── features/            # Feature cards
│   ├── screenshots/        # Dashboard screenshot
│   ├── how-it-works/        # 3-step process
│   ├── pricing/             # Pricing plans
│   ├── faq/                 # FAQ accordion
│   └── cta/                 # Final CTA
├── shared/
│   ├── ui/                  # UI component wrappers
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Badge.tsx
│   ├── hooks/               # Custom React hooks
│   ├── assets/              # Static assets (SVG icons, images)
│   │   ├── icons/
│   │   ├── dashboard-mockup.tsx
│   │   └── dashboard-screenshot.tsx
│   └── utils/               # Utility functions
│       ├── cn.ts            # Class name utility
│       └── index.ts
├── styles/
│   └── globals.css          # Global styles and CSS variables
├── App.tsx                   # Main app component
└── main.tsx                 # Entry point
```

## How to Run Locally

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Internal Analytics Platform"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Design System

### Colors
- **Primary**: Indigo/Blue (`#4f46e5` / `#3b82f6`)
- **Accent**: Violet (`#8b5cf6`) - used minimally
- **Background**: `#f8fafc`
- **Text**: `#0f172a`
- **Muted**: `#64748b`

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold
- **Body**: Regular

### UI Elements
- **Rounded corners**: 8-12px
- **Cards**: Light shadow
- **Buttons**: Solid primary color

### Animations
- Minimal fade-in animations using Framer Motion
- Smooth scroll reveals
- Card hover effects

## Lighthouse Score

After optimization, the project targets:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## Features

- ✅ Fully responsive (mobile-first)
- ✅ TypeScript strict mode
- ✅ SEO optimized
- ✅ Accessible UI components
- ✅ Smooth animations
- ✅ Modern design (SaaS, minimal, enterprise)

## Notes

- All CTA buttons link to `/dashboard` (mock link)
- No backend or real form submissions
- Images are static assets imported via ES modules
- Follows feature-based architecture
- Isolated sections without god-components

## License

ISC
