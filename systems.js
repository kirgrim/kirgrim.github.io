const replayDiagrams = () => {
  document.body.classList.remove("diagrams-ready");
  void document.body.offsetWidth;
  document.body.classList.add("diagrams-ready");
};

document
  .querySelectorAll(".experience-entry, .career-role")
  .forEach((entry) => {
    entry.addEventListener("toggle", () => {
      if (entry.open) replayDiagrams();
    });
  });

replayDiagrams();
