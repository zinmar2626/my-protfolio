# Portfolio Builder Skill

## Purpose

This skill establishes formatting rules, UI styling standards (Tailwind CSS), and performance optimization guidelines for building a personal portfolio website from a resume.

## Formatting Rules

### Code Style
- Use **TypeScript** with strict mode enabled.
- Prefer **functional components** with explicit return type annotations (e.g., `React.FC<Props>` or direct `JSX.Element`).
- Use **named exports** for components (`export function HeroSection()`) and **default exports** only for Next.js App Router pages (`page.tsx`, `layout.tsx`).
- Organize imports in this order: React/Next.js → third-party libraries → local modules → types.
- Keep components **under 150 lines**. Split larger components into sub-components or extract hooks.
- File naming: `kebab-case` for utility files, `PascalCase` for component files, `camelCase` for hooks.

### Component Structure
Every component follows this template:

```tsx
// 1. Imports
import { cn } from '@/lib/utils';

// 2. Types
interface ExampleProps {
  title: string;
  className?: string;
}

// 3. Component
export function Example({ title, className }: ExampleProps) {
  return (
    <section className={cn('...', className)}>
      <h2>{title}</h2>
    </section>
  );
}
```

### Data Flow
- Pass resume data through a **single typed context or prop chain** — avoid global mutable state.
- Use a shared `ResumeData` type defined in `src/types/resume.ts` that all components reference.
- Derive computed values (e.g., "years of experience") in a `src/lib/resume.ts` utility, not inside components.

## Tailwind CSS UI Styling Standards

### Design Tokens (via `tailwind.config.ts`)
- **Colors**: Define a cohesive palette with `primary`, `secondary`, `accent`, `background`, `surface`, `muted`, and semantic colors (`success`, `warning`, `error`).
- **Typography**: Use a typography scale with `text-balance` for headings and `text-pretty` for body copy.
- **Spacing**: Stick to Tailwind's default spacing scale. Use `gap-*` for flex/grid layouts instead of manual margins.
- **Border Radius**: Use `rounded-lg` for cards, `rounded-full` for avatars/badges, `rounded-md` for buttons.
- **Shadows**: Use `shadow-sm` for subtle elevation, `shadow-md` for cards, `shadow-lg` for modals.

### Responsive Design (Mobile-First)
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).
- Always start with mobile styles, then layer on larger breakpoints.
- Use `container` class with `mx-auto` and appropriate `max-w-*` constraints.
- Grid layouts: 1 column on mobile, 2 on `md`, 3 on `lg` for card grids.

### Dark Mode
- Support dark mode via the `class` strategy (`darkMode: 'class'` in config).
- Use `dark:` variant for all background, text, and border colors.
- Provide a theme toggle component that persists to `localStorage`.

### Accessibility
- All interactive elements must have visible `focus-visible:ring-2` outlines.
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`.
- Images must have meaningful `alt` text or `role="presentation"` if decorative.
- Ensure minimum color contrast ratios (4.5:1 for text, 3:1 for large text).

### Animation & Motion
- Use Tailwind's built-in transition/animation utilities where possible.
- For custom animations, define them in `tailwind.config.ts` under `theme.extend.keyframes`.
- Respect `prefers-reduced-motion` — disable animations when the user requests it.
- Keep entrance animations under 500ms; use `animate-fade-in`, `animate-slide-up` patterns.

## Performance Optimization Guidelines

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Image Optimization
- Use Next.js `<Image>` component for all raster images — never use raw `<img>`.
- Explicit `width` and `height` on every `<Image>` to prevent layout shift.
- Use `priority` prop on above-the-fold images (hero, avatar).
- Provide WebP/AVIF formats via `next.config.ts` image formats config.
- Lazy-load below-the-fold images with `loading="lazy"` (default in `<Image>`).

### Font Loading
- Use `next/font/google` or `next/font/local` for all fonts — self-host to avoid external requests.
- Set `display: 'swap'` to prevent FOIT (Flash of Invisible Text).
- Prefer `woff2` format. Subset fonts to Latin unless multilingual content is needed.

### JavaScript & Bundling
- Use **Server Components** by default; add `'use client'` only when interactivity is needed.
- Lazy-load heavy client components with `next/dynamic` and a loading skeleton fallback.
- Tree-shake third-party libraries — prefer ESM builds and avoid barrel imports.
- Keep the initial bundle per route under 150 KB (uncompressed).

### Caching & Data
- Use Next.js built-in caching: `unstable_cache` for expensive computations, `revalidate` for ISR.
- Statically generate all resume content pages at build time where possible (`generateStaticParams`).
- Set appropriate `Cache-Control` headers for static assets (at least 1 year for hashed assets).

### Metrics & Monitoring
- Add a `src/app/layout.tsx` `<SpeedInsights>` component (from `@vercel/speed-insights/next`).
- Optionally add `<Analytics>` (from `@vercel/analytics/react`) for traffic monitoring.
- Use the React DevTools profiler to identify unnecessary re-renders.

## Deliverables Checklist

When building the portfolio, verify each item:

- [ ] Resume content fully represented (sections, timeline, skills, contact)
- [ ] Mobile-first responsive layout works at all breakpoints
- [ ] Dark mode toggle functional and persisted
- [ ] All images use `<Image>` with proper dimensions
- [ ] Semantic HTML structure throughout
- [ ] Meta tags, Open Graph, and structured data present
- [ ] `page.tsx` for each route is a Server Component (no `'use client'` unless needed)
- [ ] Lighthouse scores: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 90, SEO ≥ 100
