# Zin Mar Win — Portfolio

**Portfolio** — Senior Frontend Developer with 6+ years of experience crafting accessible, high-performance web applications across fintech, e-commerce, travel, and ed-tech.

## Demo

🔗 **[zinmarwin.vercel.app](https://zinmarwin.vercel.app/)**

## Screenshot

<img width="2880" height="2440" alt="zinmarwin-vercel-app-2026-06-18-22_12_54" src="https://github.com/user-attachments/assets/6a3220ed-4568-4ab0-8a88-48cd0adfb5b0" />

## Language & Tools

| Category    | Stack                                                              |
| ----------- | ------------------------------------------------------------------ |
| Framework   | [Next.js 16](https://nextjs.org/) (App Router, Turbopack)          |
| Language    | [TypeScript](https://www.typescriptlang.org/)                      |
| Runtime     | [React 19](https://react.dev/)                                     |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com/)                        |
| Linting     | [ESLint 9](https://eslint.org/) + [eslint-config-next](https://nextjs.org/docs/app/api-reference/config/eslint) |
| Hosting     | [Vercel](https://vercel.com/)                                      |
| Monitoring  | [Vercel Speed Insights](https://vercel.com/docs/speed-insights)    |
| Package Mgr | npm                                                                |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Production

```bash
# Production build
npm run build

# Start production server
npm start
```

## Pages

| Page       | Route          | Description                                   |
| ---------- | -------------- | --------------------------------------------- |
| Home       | `/`            | Hero, summary, and quick links                |
| About      | `/about`       | Bio, education, and tech stack (skills grid)  |
| Experience | `/experience`  | Work history with highlights per role         |
| Projects   | `/projects`    | Featured projects with tags and links         |
| Contact    | `/contact`     | Contact form and social links                 |

## Agent Skill

This project includes AI-assisted development capabilities via Claude Code with MCP integration:

- **Claude Code** — primary AI coding agent for the terminal and IDE
- **MCP (Model Context Protocol)** — connects Claude to external tools (GitHub API, filesystem, IDE diagnostics)
- **AI Agents** — task-specific agents for code review, exploration, refactoring, and more
- **Subagents** — parallelized sub-tasks spawned by the main agent to handle complex, multi-step workflows efficiently (e.g., parallel code audits, multi-file migrations)

### MCP Servers

Configured in `.mcp.json`:

| Server       | Purpose                                 |
| ------------ | --------------------------------------- |
| `github`     | Manage repos, PRs, issues, commits      |
| `filesystem` | Read/write files within the project     |
| `ide`        | Execute code and get diagnostics in VS Code |
| `pencil`     | Design system and UI prototyping (.pen files) |

## Environment

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

| Variable                         | Description                       |
| -------------------------------- | --------------------------------- |
| `GITHUB_PERSONAL_ACCESS_TOKEN`   | GitHub personal access token for MCP GitHub server |

## Subagent Workflow

Complex tasks are decomposed into parallel subagents for speed and reliability:

1. **Explore** — subagent scans the codebase for relevant files and patterns
2. **Plan** — findings are synthesized into an implementation plan
3. **Implement** — targeted edits across multiple files
4. **Verify** — adversarial review subagent checks for correctness and regressions

This architecture keeps each subagent focused on a single concern, reducing context pollution and improving output quality.

## License

MIT
