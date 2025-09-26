# Kai - The Integrated Path

A Next.js web application showcasing an integrated framework for personal development through Zen, ACT (Acceptance & Commitment Therapy), and Somatic work.

## Features

- **Responsive Design**: Mobile-first approach with comprehensive breakpoints
- **Smooth Animations**: Intersection Observer-based reveal animations
- **Modern Stack**: Next.js 15 with React 19, TypeScript, and Turbopack
- **Touch Optimized**: Enhanced touch interactions for mobile devices
- **Accessibility**: ARIA labels and keyboard navigation support

## Development

This project uses Bun as the package manager and runtime.

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Runtime**: React 19 RC
- **Language**: TypeScript
- **Bundler**: Turbopack
- **Package Manager**: Bun
- **Styling**: Pure CSS with custom properties

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
└── components/
    ├── Navigation.tsx   # Navigation component with mobile menu
    └── RevealOnScroll.tsx # Scroll-based animation component
```

## Converted from HTML

This project was converted from a static HTML page while maintaining all original styling, animations, and functionality using modern React patterns and hooks.