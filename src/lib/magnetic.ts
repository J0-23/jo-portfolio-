(() => {
  const els = document.querySelectorAll<HTMLElement>("[data-magnetic]");
  if (!els.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(hover: hover)").matches) return;

  for (const el of els) {
    const strength = Number(el.dataset.magnetic ?? 0.2);
    let raf = 0;
    el.addEventListener("mousemove", (e) => {
      if (el.matches(":active")) return;
      const r = el.getBoundingClientRect();
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * strength}px, ${(e.clientY - r.top - r.height / 2) * strength}px)`;
      });
    });
    el.addEventListener("mousedown", () => {
      cancelAnimationFrame(raf);
      el.style.transform = "";
    });
    el.addEventListener("mouseleave", () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => (el.style.transform = ""));
    });
  }
})();
export {};
