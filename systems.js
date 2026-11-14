const architectureTrack = document.querySelector(".architecture-track");

if (architectureTrack) {
  const slides = [...architectureTrack.querySelectorAll(".architecture-slide")];
  const controls = document.querySelector(".architecture-controls");
  const tabs = [...controls.querySelectorAll(".architecture-tab")];
  const previous = controls.querySelector(".carousel-prev");
  const next = controls.querySelector(".carousel-next");
  const status = controls.querySelector(".carousel-status");
  const motionToggle = controls.querySelector(".motion-toggle");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeSlide = 0;
  let motionPaused = false;

  const activate = (index) => {
    activeSlide = index;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
      slide.inert = slideIndex !== index;
    });
    tabs.forEach((tab, tabIndex) => {
      if (tabIndex === index) tab.setAttribute("aria-current", "true");
      else tab.removeAttribute("aria-current");
    });
    previous.disabled = index === 0;
    next.disabled = index === slides.length - 1;
    status.textContent = `${index + 1} of ${slides.length}`;
  };

  const show = (index) => {
    const destination = Math.max(0, Math.min(index, slides.length - 1));
    activate(destination);
    architectureTrack.scrollTo({
      left: slides[destination].offsetLeft - slides[0].offsetLeft,
      behavior: reducedMotion.matches ? "instant" : "smooth",
    });
  };

  previous.addEventListener("click", () => show(activeSlide - 1));
  next.addEventListener("click", () => show(activeSlide + 1));
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => show(Number(tab.dataset.slide)));
  });
  architectureTrack.addEventListener("keydown", (event) => {
    if (event.target !== architectureTrack) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      show(activeSlide + (event.key === "ArrowRight" ? 1 : -1));
    }
  });

  if ("IntersectionObserver" in window) {
    const slideObserver = new IntersectionObserver(
      (entries) => {
        const visibleSlide = entries.find(
          (entry) => entry.isIntersecting && entry.intersectionRatio >= 0.6,
        );
        if (visibleSlide) activate(slides.indexOf(visibleSlide.target));
      },
      { root: architectureTrack, threshold: 0.6 },
    );
    slides.forEach((slide) => slideObserver.observe(slide));
  }

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

  document
    .querySelectorAll('.architecture-copy a[href^="#job-"]')
    .forEach((link) => {
      link.addEventListener("click", (event) => {
        if (
          event.button ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        )
          return;
        const experience = document.getElementById(link.hash.slice(1));
        if (experience instanceof HTMLDetailsElement) experience.open = true;
      });
    });

  activate(0);
  syncMotion();
  controls.hidden = false;
  document.body.classList.add("diagrams-ready");
}
