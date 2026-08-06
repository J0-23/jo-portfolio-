export type StackGroupId = "core" | "learning" | "alsoUsed";

export interface StackGroup {
  id: StackGroupId;
  tag: string;
  label: string;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    id: "core",
    tag: "CORE",
    label: "Daily use, production-ready",
    items: ["JavaScript", "TypeScript", "React", "Node.js"],
  },
  {
    id: "learning",
    tag: "LEARNING",
    label: "New. Building toward Java-based roles.",
    items: ["Java", "Spring Boot"],
  },
  {
    id: "alsoUsed",
    tag: "ALSO USED",
    label: "In one or more projects below",
    items: [
      "Astro",
      "Vite",
      "Express 5",
      "MongoDB (Mongoose)",
      "JWT",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Framer Motion",
      "Vitest",
      "Docker",
      "Render",
      "Vercel",
      "Git",
    ],
  },
];
