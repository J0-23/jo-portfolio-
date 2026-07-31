export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  slug: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: "P-05",
    name: "Task Flow",
    description:
      "Task management with real-time insights and secure, intuitive workflows.",
    tags: ["React", "Node.js"],
    slug: "task-flow",
    link: "#",
  },
  {
    id: "P-06",
    name: "Sentri-Auth",
    description:
      "Authentication & authorization API — role-based access, email verification, password reset.",
    tags: ["Node.js", "JWT"],
    slug: "sentri-auth",
    link: "#",
  },
];
