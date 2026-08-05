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
  email: string;
  socials: Social[];
}

export const profile: Profile = {
  name: "Jorge Oliveira",
  role: "Full-stack developer / JavaScript, React, Node.js",
  location: "Portugal, remote-friendly",
  status: "Open to full-time roles",
  experience: "3+ years",
  freelance: true,
  email: "hello@jorgeoliveira.dev",
  intro:
    "Full-stack developer in Portugal, 3+ years building React and Node.js apps. I care about load speed, clean typed code, and interfaces people actually enjoy using.",
  socials: [
    { label: "LinkedIn", url: "#" },
    { label: "GitHub", url: "#" },
  ],
};
