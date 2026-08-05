import screenshot from "../assets/projects/portfolio.png";
import type { ImageMetadata } from "astro";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
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
    name: "Portfolio performance build",
    description:
      "The site you're on. Zero-JS Astro build, self-hosted fonts, typed-data sections, a hand-rolled motion system. Kept light on purpose.",
    tags: ["Astro", "Tailwind CSS", "TypeScript", "Vercel"],
    slug: "portfolio-perf",
    screenshot: screenshot,
    stack: ["Astro", "Tailwind CSS", "TypeScript", "Fontsource", "Vercel"],
    links: [
      { label: "Live preview", url: "https://jorgeoliveira23.vercel.app" },
      { label: "Repository", url: "https://github.com/J0-23/jo-portfolio-" },
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
];
