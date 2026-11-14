if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("is-pending");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("is-observed", "is-pending");
    revealObserver.observe(element);
  });
}

const sectionNavigation = document.querySelector(".section-navigation");

if (sectionNavigation) {
  const navigationToggle =
    sectionNavigation.querySelector(".navigation-toggle");
  const navigationLinks = [
    ...sectionNavigation.querySelectorAll('a[href^="#"]'),
  ];
  const navigationTargets = navigationLinks
    .map((link) => document.getElementById(link.hash.slice(1)))
    .filter(Boolean)
    .sort((first, second) =>
      first.compareDocumentPosition(second) & Node.DOCUMENT_POSITION_FOLLOWING
        ? -1
        : 1,
    );
  const desktopNavigation = window.matchMedia("(min-width: 1100px)");
  const setCurrent = (target) => {
    navigationLinks.forEach((link) => {
      if (link.hash === `#${target?.id}`)
        link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };
  const revealTarget = (target) => {
    for (let ancestor = target; ancestor; ancestor = ancestor.parentElement) {
      if (ancestor instanceof HTMLDetailsElement) ancestor.open = true;
    }
  };
  const syncNavigation = () => {
    sectionNavigation.open = desktopNavigation.matches;
  };
  const visitHash = () => {
    const target = document.getElementById(window.location.hash.slice(1));
    setCurrent(target ?? navigationTargets[0]);
    if (!target) return;
    revealTarget(target);
    requestAnimationFrame(() => {
      target.focus({ preventScroll: true });
    });
    return target;
  };

  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (
        event.button ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const target = document.getElementById(link.hash.slice(1));
      if (!target) return;
      revealTarget(target);
      if (!desktopNavigation.matches) sectionNavigation.open = false;
      setCurrent(target);
      requestAnimationFrame(() => target.focus({ preventScroll: true }));
    });
  });
  sectionNavigation.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || desktopNavigation.matches) return;
    event.preventDefault();
    sectionNavigation.open = false;
    navigationToggle.focus();
  });
  sectionNavigation.addEventListener("focusout", (event) => {
    if (
      !desktopNavigation.matches &&
      !sectionNavigation.contains(event.relatedTarget)
    ) {
      sectionNavigation.open = false;
    }
  });
  desktopNavigation.addEventListener("change", syncNavigation);
  window.addEventListener("hashchange", visitHash);
  syncNavigation();
  document.documentElement.classList.add("navigation-ready");
  const initialTarget = visitHash();
  if (initialTarget) {
    requestAnimationFrame(() =>
      initialTarget.scrollIntoView({ block: "start" }),
    );
  }

  if ("IntersectionObserver" in window) {
    const visibleTargets = new Set();
    let navigationObserver;
    const observeNavigation = () => {
      navigationObserver?.disconnect();
      visibleTargets.clear();
      navigationObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) visibleTargets.add(entry.target);
            else visibleTargets.delete(entry.target);
          });
          const current = navigationTargets
            .filter((target) => visibleTargets.has(target))
            .at(-1);
          if (current) setCurrent(current);
        },
        {
          rootMargin: `0px 0px -${Math.round(window.innerHeight * 0.72)}px 0px`,
        },
      );
      navigationTargets.forEach((target) => navigationObserver.observe(target));
    };
    window.addEventListener("resize", observeNavigation);
    observeNavigation();
  }
}
