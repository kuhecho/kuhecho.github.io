document.addEventListener("DOMContentLoaded", () => {
  const status = document.querySelector("#game-status");
  const coin = document.querySelector(".pixel-button");
  const toggle = document.querySelector(".theme-toggle");
  const revealItems = document.querySelectorAll("[data-reveal]");

  coin.addEventListener("click", () => {
    status.textContent = "PROJECTS OPEN";
  });

  toggle.addEventListener("click", () => {
    const nightMode = document.body.classList.toggle("night");
    toggle.setAttribute("aria-pressed", String(nightMode));
    toggle.textContent = nightMode ? "Day mode" : "Night mode";
  });

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
});
