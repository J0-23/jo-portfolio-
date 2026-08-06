import screenshot from "../assets/projects/portfolio.png";
import sentriauth from "../assets/projects/sentriauth.png";
import taskflow from "../assets/projects/taskflow.png";
import casino from "../assets/projects/casino.png";
import type { ImageMetadata } from "astro";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  slug: string;
  stack?: string[];
  links?: ProjectLink[];
  summary?: string;
  highlights?: string[];
  screenshot?: ImageMetadata;
  outcome?: string;
}

export const projects: Project[] = [
  {
    id: "P-01",
    name: "Portfolio",
    category: "Personal",
    description:
      "The site you're on. Zero-JS Astro build, self-hosted fonts, typed-data sections, a hand-rolled motion system. Kept light on purpose.",
    tags: ["Astro", "Tailwind CSS", "TypeScript", "Vercel"],
    slug: "portfolio-perf",
    screenshot: screenshot,
    stack: ["Astro", "Tailwind CSS", "TypeScript", "Fontsource", "Vercel"],
    links: [
      { label: "Live preview", url: "#" },
      { label: "Repository", url: "#" },
    ],
    summary:
      "Built as its own case study, so everything here is a trade-off in favour of speed. Astro ships zero client JavaScript by default. The only two inline scripts, the scroll reveals and the typewriter terminal, are guarded by @media (scripting: enabled) and a full prefers-reduced-motion fallback. Inter and IBM Plex Mono are self-hosted via Fontsource, with critical weights preloaded. Tailwind v4 tokens live in one @theme block, shared class tokens in src/lib/styles.ts, and all content is typed data in src/data/, so every section renders from data instead of hardcoded markup.",
    outcome: "Lighthouse 100 performance",
    highlights: [
      "Zero external JavaScript. Animation is CSS plus two small inline observers, no libraries.",
      "Self-hosted, preloaded fonts. No third-party font requests.",
      "scripting: enabled and prefers-reduced-motion guards keep every section readable without JS or motion.",
      "Typed, data-driven content keeps the build lean.",
      "SEO wired up: OG image, sitemap, robots.txt, JSON-LD.",
    ],
  },
  {
    id: "P-02",
    name: "SentriAuth",
    category: "Security",
    description:
      "Full-stack authentication system with JWT session handling, bcrypt password hashing, rate limiting, input validation, and a responsive React dashboard. Built to demonstrate modern auth security practices.",
    tags: ["Authentication", "Security", "Full-Stack", "JWT", "Express"],
    slug: "sentri-auth",
    screenshot: sentriauth,
    stack: [
      "Express 5",
      "Node.js (ESM)",
      "MongoDB (Mongoose 9)",
      "JWT",
      "bcryptjs",
      "Helmet",
      "express-rate-limit",
      "express-validator",
      "React 19",
      "Vite 8",
      "React Router 7",
      "Tailwind CSS v4",
      "shadcn/ui",
      "lucide-react",
      "sonner",
      "Vitest",
      "Supertest",
      "mongodb-memory-server",
      "Testing Library",
    ],
    links: [
      { label: "Live preview", url: "#" },
      { label: "Repository", url: "#" },
    ],
    summary:
      "SentriAuth is a monorepo (npm workspaces) with an Express 5 REST API and a Vite/React SPA. It covers registration, login, logout, and protected profile management, with JWT sessions delivered in HTTP-only cookies, bcrypt (cost 10) password hashing, per-endpoint validation, Helmet security headers, strict CORS, and layered rate limiting (10 req/15 min on auth, 100 req/15 min globally). The codebase is organized into config/controllers/middleware/models/routes and ships full backend and frontend test suites. Repo docs note an aspirational V2 rebuild (TypeScript, Prisma/PostgreSQL, refresh-token rotation) that is still a roadmap, not implemented code. A detailed security audit report (SECURITY_AUDIT_REPORT.md) documents both strengths and production blockers.",
    outcome:
      "Full automated test suite covering register/login/logout, middleware, 404/error handling, and profile flows (Vitest + Supertest; 7 frontend tests documented).",
    highlights: [
      "JWT auth in HTTP-only, SameSite cookies instead of localStorage to resist XSS.",
      "bcrypt hashing with salt rounds = 10 and enforced 8-char minimum on both tiers.",
      "Defense-in-depth: Helmet headers, CORS origin allowlist, generic error messages, rate limiting, 10KB body limit.",
      "Express 5 app structured for testability (importable app + in-memory MongoDB tests).",
      "Clean separation of concerns: controllers, middleware, models, routes, validators.",
      "Full setup/deployment docs (Render + Atlas) plus a self-review security audit.",
    ],
  },
  {
    id: "P-03",
    name: "TaskFlow",
    category: "Internal Tool",
    description:
      "Full-stack textile production management system for tracking orders, production runs, roll output, machines, and team members, with JWT-authenticated dashboards and audit logging.",
    tags: ["React", "Express", "MongoDB", "Production Management", "JWT Auth"],
    slug: "taskflow",
    screenshot: taskflow,
    stack: [
      "Node.js",
      "Express 5",
      "Mongoose 9 (MongoDB)",
      "JWT (HTTP-only cookies)",
      "express-validator",
      "Helmet",
      "CORS",
      "express-rate-limit",
      "React 19",
      "React Router 7",
      "TanStack Query",
      "Tailwind CSS 4",
      "Radix UI / shadcn",
      "Vite 8",
      "lucide-react",
      "sonner",
      "Vitest",
      "Supertest",
      "@testing-library/react",
      "mongodb-memory-server",
    ],
    links: [
      { label: "Live preview", url: "#" },
      { label: "Repository", url: "#" },
    ],
    summary:
      "TaskFlow is a full-stack MERN-style app for managing a textile factory's production lifecycle: creating orders, splitting them into production runs, recording roll output with weight/shift/defects, tracking machines and workers, and visualizing progress on a dashboard. It exists to replace manual/spreadsheet tracking of production progress. Key decisions: modular backend layout (routes/controllers/models per domain), JWT auth in httpOnly+sameSite cookies, all mutation endpoints validated, aggregate dashboard queries batched to avoid N+1, and an audit log on every mutation. Testability was prioritized — mongodb-memory-server means backend tests run with zero external dependencies, achieving 97% coverage.",
    outcome:
      "282 automated tests passing (109 backend, 173 frontend); 97% backend coverage.",
    highlights: [
      "Full production lifecycle: orders → runs → rolls → machines → dashboard, with progress computed from actual roll weights.",
      "Audit trail on every create/update/delete across all domains.",
      "Hardened auth: httpOnly cookies, rate limiting on login/register, helmet security headers, input validation on all mutation routes.",
      "Zero-dependency testing setup via mongodb-memory-server with 97% backend coverage.",
      "Batch-fetched dashboard aggregates (two queries instead of N+1) with 5 recent defective rolls and due-this-week orders.",
      "Seed data endpoint that populates 24 orders, 20 runs, 38 rolls, and 15 workers for instant demo.",
    ],
  },
  {
    id: "P-04",
    name: "Casino Incremental",
    category: "Game",
    description:
      "A browser-based casino slot game with a progressive jackpot system, free spins, and win multipliers. Features a hand-built Spring Boot backend that simulates the game odds and a React frontend with layered win animations and sound design.",
    tags: ["React", "Spring Boot", "Java", "Slot Game", "Progressive Jackpot"],
    slug: "casino-incremental",
    screenshot: casino,
    stack: [
      "React 18",
      "Vite 6",
      "Tailwind CSS 4",
      "Framer Motion",
      "Web Audio API",
      "Java 21",
      "Spring Boot 3.4",
      "Maven",
      "Docker",
      "Render",
      "Vercel",
      "Git",
    ],
    links: [
      { label: "Live demo", url: "#" },
      { label: "Repository", url: "#" },
    ],
    summary:
      "A slot-machine incremental game built to learn Java, Spring Boot, and modern frontend architecture as a pair. The player spins a resizable 3–5×1–3 grid of number tiles; the sum of revealed numbers is the payout. The Spring Boot backend owns all game state (balance, progressive jackpot pools, free-spin mode) and the odds math, tuned to a target RTP of 85% with a ~10% house edge. Key architectural decisions: all money handled as integer cents server-side, progressive jackpot pools seeded per grid size and fed 2.5% of each paid spin, jackpot payouts isolated from the win-multiplier chain, and a forced-outcome API that lets the demo showcase any reward on demand. The React side is deliberately mobile-first with a side-panel layout, synthesized (non-sampled) sound effects, and a warm board-game-casino visual theme rather than a generic neon look.",
    highlights: [
      "Full-stack, language separation of concerns: Spring Boot state machine + odds engine vs. React presentation layer.",
      "Progressive dual jackpot pools (regular + mega) with seed reset and feed-on-spin, plus a forced-outcome API for demoing every reward.",
      "Custom audio: all SFX synthesized via Web Audio API (tile lands, coin wins, jackpot fanfares) with a pitch-ascending tile reveal.",
      "Layered win feedback: screen shake tiers, full-screen celebration overlay, free-spin session summary, gold \"MEGA WIN\" treatment.",
      "Monte Carlo RTP simulator (scripts/calcRtp.js) used to rebalance odds when analysis showed ~140% effective RTP.",
      "Dockerized backend with multi-stage build; boot-warming splash screen that polls until the cold-started server is live.",
    ],
  },
];
