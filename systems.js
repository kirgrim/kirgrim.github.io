const motionToggle = document.querySelector(
  ".experience-controls .motion-toggle",
);

if (motionToggle) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let motionPaused = false;

  const syncMotion = () => {
    const paused = motionPaused || reducedMotion.matches;
    document.body.classList.toggle("diagrams-paused", paused);
    motionToggle.hidden = reducedMotion.matches;
    motionToggle.setAttribute("aria-pressed", String(paused));
    motionToggle.textContent = paused
      ? "Resume diagram motion"
      : "Pause diagram motion";
  };
  motionToggle.addEventListener("click", () => {
    motionPaused = !motionPaused;
    syncMotion();
  });
  reducedMotion.addEventListener("change", syncMotion);

  syncMotion();
  document.body.classList.add("diagrams-ready");
}
