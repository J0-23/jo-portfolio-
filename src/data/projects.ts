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
}

export const projects: Project[] = [
  {
    id: "P-01",
    name: "Portfolio — performance build",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    tags: ["Astro", "Tailwind", "Lighthouse"],
    slug: "portfolio-perf",
    stack: ["Astro", "Tailwind CSS", "TypeScript", "Vercel"],
    links: [
      { label: "Live preview", url: "#" },
      { label: "Repository", url: "#" },
    ],
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    highlights: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    ],
  },
];
