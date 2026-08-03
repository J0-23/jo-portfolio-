const btn = document.querySelector<HTMLButtonElement>(
  '[aria-controls="mobile-menu"]',
);
const menu = document.getElementById("mobile-menu");

const setOpen = (open: boolean) => {
  btn?.classList.toggle("active", open);
  menu?.classList.toggle("active", open);
  btn?.setAttribute("aria-expanded", String(open));
};

btn?.addEventListener("click", () => {
  setOpen(btn.getAttribute("aria-expanded") !== "true");
});

menu?.addEventListener("click", (e) => {
  if ((e.target as HTMLElement).closest("a")) setOpen(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setOpen(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) setOpen(false);
});
