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
    items: ["JavaScript", "React", "Node.js", "TypeScript"],
  },
  {
    id: "learning",
    tag: "LEARNING",
    label: "New. Building toward Java-based roles.",
    items: ["Java"],
  },
  {
    id: "alsoUsed",
    tag: "ALSO USED",
    label: "In one or more projects below",
    items: [
      "Next.js",
      "PostgreSQL",
      "MongoDB",
      "Drizzle ORM",
      "Hono.js",
      "Shadcn UI",
      "Clerk",
      "Docker",
      "AWS",
      "Vercel",
      "Git",
    ],
  },
];
