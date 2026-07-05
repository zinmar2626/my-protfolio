---
marp: true
paginate: true
transition: fade
---

<!-- slide 1 -->
# Stack
### Core Technologies
- **Next.js 16** — App Router, Turbopack, Server Components
- **React 19** — Server-first rendering, zero client JS by default
- **TypeScript 5** — Strict mode, discriminated unions, no `any`
- **Tailwind CSS v4** — Utility-first styling, dark mode, mobile-first
- **Vercel** — Hosting, Speed Insights, automatic deployments

---

<!-- slide 2 -->
# Agents
### Custom AI Personas
- **Senior Frontend Developer** (`.claude/agents/developer.md`)
  - 10+ years React/Next.js expertise persona
  - Component-first, performance-by-default mindset
  - Enforces: accessibility, SEO, TypeScript discipline
- **MCP Servers** (`.mcp.json`)
  - `github` — PRs, issues, commits via GitHub API
  - `filesystem` — Direct workspace read/write access
- **Subagents** — Parallelized Explore → Plan → Implement → Verify

---

<!-- slide 3 -->
# Skills
### Enforced Rules & Standards
- **Portfolio Builder** (`.claude/skills/portfolio-builder/SKILL.md`)
  - Formatting: kebab-case files, PascalCase components, max 150 lines
  - Styling: Tailwind tokens, `dark:` variants, `focus-visible:ring-2`
  - Performance: LCP < 2.5s, CLS < 0.1, bundle < 150 KB/route
  - Accessibility: semantic HTML, alt text, WCAG 2.2 compliance
  - Deliverables checklist enforced on every build

---

<!-- slide 4 -->
# Methodology
### How the AI Pipeline Works
1. **Read** — Understand data types (`resume.ts`) and project structure
2. **Plan** — Decompose into component tree: page → sections → primitives
3. **Build** — Mobile-first, Server Components by default, `'use client'` only when needed
4. **Verify** — Adversarial review subagent checks correctness & regressions
- Component boundaries enforced: `ui/` primitives, `sections/` composed, `hooks/` shared
- Data flows through typed context — no global mutable state
- Metadata generated from the same types that render the UI

---

<!-- slide 5 -->
# Trigger
### How to Start
- **`npm run dev`** — Start Turbopack dev server (port 3000)
- **`npm run build`** — Production build with static generation
- **`npm start`** — Serve production build
- **Claude Code** — Run `/help` for slash commands, `/agents` for personas
- **MCP** — Auto-connects GitHub + filesystem on session start
- **Deploy** — Push to `main` triggers automatic Vercel deployment

---

<!-- slide 6 -->
# Commands
### Quick Reference
| Command | What it does |
| --- | --- |
| `npm run dev` | Turbopack dev server on localhost:3000 |
| `npm run build` | Production build + static generation |
| `npm run lint` | ESLint with Next.js config |
| `npm start` | Serve production build |
| `/help` | List available Claude Code commands |
| `/agents` | Switch agent personas |
| `git push` | Trigger Vercel auto-deploy |

---

<!-- slide 7 -->
# Architecture
### File Structure at a Glance
```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Home (Server Component)
│   ├── about/        # About page
│   ├── experience/   # Experience timeline
│   ├── projects/     # Project highlights
│   └── contact/      # Contact form
├── components/
│   ├── ui/           # Primitives: ThemeToggle, SkipLink
│   ├── sections/     # Composed: Hero, TechStack, Timeline
│   └── layout/       # Navigation
├── hooks/            # Shared custom hooks
├── lib/              # Pure utilities (utils.ts, resume.ts)
└── types/            # TypeScript definitions (resume.ts)
```