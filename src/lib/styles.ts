// Shared class-string tokens for section-level layout & typography.
// Previously each component (Contact, Hero, Perf, Projects, Services, Stack,
// TopBar) redeclared its own copy of these — same strings, 7 places to edit.

export const wrap =
  "mx-auto w-full max-w-[1920px] px-[min(8vw,6rem)] max-[820px]:px-[6vw]";

export const band =
  "border border-line bg-surface px-[min(5vw,3.75rem)] py-[min(5vw,3.75rem)] max-[820px]:px-6 max-[820px]:py-8";

// Base vertical rhythm for a full-width section. Most sections sit between
// others and get a bottom border; Contact is the last section on the page
// and omits it, so it composes from sectionBase instead of section.
export const sectionBase =
  "py-27.5 max-[820px]:py-20 scroll-mt-22";
export const section = `border-b border-line ${sectionBase}`;

export const eyebrow =
  "font-mono text-meta tracking-[0.16em] text-primary flex items-center gap-2.5 mb-5 before:content-[''] before:w-5.5 before:h-px before:bg-primary";

export const sectionHead =
  "flex flex-wrap items-end justify-between gap-4 mb-13";
export const sectionTitle = "text-h2 font-extrabold tracking-[-0.01em] text-ink";
export const sectionNote =
  "font-mono text-meta text-right text-dim max-w-70";

export const focusRing =
  "focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export const primaryBtn = `sheen inline-flex group items-center gap-2.5 bg-primary text-white font-mono font-semibold text-ui-sm px-5.5 py-3.5 tracking-[0.02em] transition hover:-translate-y-0.5 hover:shadow-[0_0.625rem_1.5rem_rgba(36,85,201,0.22)] active:translate-y-0 active:scale-[0.98] ${focusRing}`;

export const secondaryBtn =
  "inline-flex group items-center gap-2.5 border border-line text-ink font-mono text-ui-sm px-5 py-3.25 transition hover:border-primary hover:text-primary active:translate-y-0 active:scale-[0.98] focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
