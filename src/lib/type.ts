(() => {
  const els = document.querySelectorAll<HTMLElement>("[data-type-line]");
  if (!els.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;

  const type = (el: HTMLElement) => {
    const text = el.textContent ?? "";
    el.textContent = "";
    let i = 0;
    const tick = () => {
      el.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(tick, 40 + Math.random() * 50);
    };
    setTimeout(tick, Number(el.dataset.typeDelay ?? 0));
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          io.unobserve(e.target);
          type(e.target as HTMLElement);
        }
      }
    },
    { threshold: 0, rootMargin: "0px 0px 12% 0px" },
  );
  els.forEach((el) => io.observe(el));
})();
export {};
