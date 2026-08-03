export interface Social {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  status: string;
  intro: string;
  experience: string;
  freelance: boolean;
  socials: Social[];
}

export const profile: Profile = {
  name: "Jorge Oliveira",
  role: "Full-stack developer / JavaScript, React, Node.js",
  location: "Portugal, remote-friendly",
  status: "Open to full-time roles",
  experience: "3+ years",
  freelance: true,
  intro:
    "I build pages and apps for a living. Obsessed with efficiency, load speed, keeping things light. Internal tools, personal projects, a bit of everything.",
  socials: [
    { label: "LinkedIn", url: "#" },
    { label: "GitHub", url: "#" },
  ],
};
