export interface ServiceStep {
  no: string;
  title: string;
  description: string;
}

export const services: ServiceStep[] = [
  {
    no: "01",
    title: "Discovery",
    description:
      "A conversation about your goals, users, and constraints. What the site or app actually needs to do.",
  },
  {
    no: "02",
    title: "Planning",
    description:
      "A written scope, timeline, and cost so we both know what we're building before any code happens.",
  },
  {
    no: "03",
    title: "Proposal & preview",
    description:
      "A visual preview, wireframe or mockup, so we're aligned before development starts.",
  },
  {
    no: "04",
    title: "Development",
    description:
      "Clean, typed code, built for accessibility, responsiveness, and performance from the start. Regular check-ins.",
  },
  {
    no: "05",
    title: "Testing & revisions",
    description:
      "I test on different devices and browsers before launch, then leave room for a revision round if something needs tweaking.",
  },
  {
    no: "06",
    title: "Launch & support",
    description:
      "Site goes live. Ongoing support available to keep things running and up to date.",
  },
];
