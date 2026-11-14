const menu = document.querySelector("#mobile-menu");
const menuTrigger = document.querySelector('[aria-controls="mobile-menu"]');
const closeMenu = () => menu.close();

menuTrigger.addEventListener("click", () => {
  menu.showModal();
  menuTrigger.setAttribute("aria-expanded", "true");
  menuTrigger.classList.add("is-open");
  document.body.classList.add("has-menu");
});
menu.querySelector("button").addEventListener("click", closeMenu);
menu
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
menu.addEventListener("close", () => {
  menuTrigger.setAttribute("aria-expanded", "false");
  menuTrigger.classList.remove("is-open");
  document.body.classList.remove("has-menu");
});

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

  const navLinks = document.querySelectorAll(".desktop-nav a");
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            if (link.hash === `#${entry.target.id}`)
              link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        }
      });
    },
    { rootMargin: "-15% 0px -60% 0px" },
  );
  document
    .querySelectorAll("#intro, #work, #experience, #about, #contact")
    .forEach((section) => navObserver.observe(section));

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const tagline = document.querySelector(".tagline");
    const words = [];
    Array.from(tagline.childNodes).forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const fragment = document.createDocumentFragment();
        node.textContent.match(/\S+\s*/g)?.forEach((text) => {
          const word = document.createElement("span");
          word.className = "word";
          word.textContent = text;
          fragment.append(word);
          words.push(word);
        });
        node.replaceWith(fragment);
      }
    });
    tagline.classList.add("word-reveal");
    let activated = 0;
    let scheduled = false;
    const activateWords = () => {
      if (scheduled || activated >= words.length) return;
      scheduled = true;
      window.setTimeout(() => {
        words[activated].classList.add("is-active");
        wordObserver.unobserve(words[activated]);
        activated += 1;
        scheduled = false;
        if (
          activated < words.length &&
          words[activated].getBoundingClientRect().top <
            window.innerHeight * 0.85
        )
          activateWords();
      }, 75);
    };
    const wordObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activateWords();
          }
        });
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    words.forEach((word) => wordObserver.observe(word));
  }
}
