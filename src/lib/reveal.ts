const els = document.querySelectorAll<HTMLElement>("[data-reveal]");

const showAll = () => els.forEach((el) => el.classList.add("revealed"));

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  showAll();
} else if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle("revealed", entry.isIntersecting);
      }
    },
    { threshold: 0, rootMargin: "0px 0px 12% 0px" },
  );
  els.forEach((el) => io.observe(el));
} else {
  showAll();
}
export {};

