# Kyrylo Hrymailo · Professional portfolio

A responsive, static career landing page for [kirgrim.github.io](https://kirgrim.github.io/). Plain HTML, CSS, and JavaScript, with a self-hosted Manrope font. No build step or package installation is required.

## Preview locally

From this directory, run either:

```sh
python3 -m http.server 8000
```

```sh
npx --yes http-server . -p 8000
```

Open [localhost:8000](http://localhost:8000). Serve the directory over HTTP so that routes, fonts, and assets behave as they do on GitHub Pages.

## Publish with GitHub Pages

For the root URL `https://kirgrim.github.io/`, the repository must be named `kirgrim.github.io`.

1. Push the site files to the `main` branch.
2. In the repository's **Settings → Pages**, choose **Deploy from a branch**.
3. Select **main** and **/ (root)**, then save.

The root [.nojekyll](./.nojekyll) file tells GitHub Pages to serve the files directly. GitHub's Pages deployment publishes future pushes to `main` automatically.

## Edit the site

- [index.html](./index.html): introduction, contact links, employer panels, side projects, and reusable SVG system diagrams.
- [styles.css](./styles.css): layout, typography, colors, responsive behavior, and self-hosted font definitions.
- [script.js](./script.js): lightweight page interactions.
- [systems.css](./systems.css) and [systems.js](./systems.js): nested experience panels and diagram motion controls.
- [assets/](./assets/): supplied portrait, company logos, social icons, font files, favicon, and social preview artwork.
- [privacy.html](./privacy.html), [terms.html](./terms.html), and [404.html](./404.html): supporting pages.

The site uses warm cream `#f5f3ee`, dark `#191b19`, and orange `#b94721`. Keep the canonical URL and sharing metadata aligned with the live address if the domain changes.

Email, LinkedIn, GitHub, and CV links sit beside the introduction. Employer descriptions use native disclosures, including two nested roles at Neon.AI. Diagrams animate briefly on load and when a role opens, then settle within 4.3 seconds; reduced motion preferences show static diagrams. Education is in the useful details section. Contact links and experience descriptions remain accessible without JavaScript.

Longevity, AI Interview Buddy, and Genkit appear in the side-projects section using the same native disclosures. Genkit lists the role as open-source contributor, with links to merged pull requests. The Longevity and AI Interview Buddy descriptions are based on the supplied local repositories; they do not claim product usage or commercial results.

Project start months come from the first commits: Longevity on 14 March 2026, AI Interview Buddy on 2 March 2025, and the first attributable Genkit contribution on 4 February 2025. Ongoing dates reflect the author's confirmed current involvement.

The PDF link uses the original Google Doc's PDF export and sharing permissions. The repository contains no copy of the CV document. SVG symbol definitions follow the main content and are hidden from assistive technology.

Numbers on the page come from the supplied CV: a team of up to five, a petabyte-scale migration, and a 30% increase in total test coverage. The source does not specify a coverage baseline or percentage points. Public-source links identify authored changes, without claiming current production results or current test status.

## Content and design sources

- Professional content: [Kyrylo Hrymailo's CV](https://docs.google.com/document/d/1_F3qWAOfORrzUjzwwY0-BK2xuSJIb6Kf/edit).
- Authored public work: [API controller](https://github.com/NeonGeckoCom/neon_api_proxy/commit/e871a2aa8ea9aee0eea045bcf87bb4e9cd62c46e), [RabbitMQ publishing](https://github.com/NeonGeckoCom/neon_mq_connector/commit/e780cbe25f74d8427397ec624103e8225cefc86d), and [LLM persona synchronization](https://github.com/NeonGeckoCom/neon-llm-core/commit/d3bc687772a3628bea32b8f3c3ad8d4c11c1995d).
- Genkit contributions: [merged pull requests by kirgrim](https://github.com/genkit-ai/genkit/pulls?q=is%3Apr+author%3Akirgrim+is%3Amerged), including the [Python Ollama plugin](https://github.com/genkit-ai/genkit/pull/1828), [structured responses](https://github.com/genkit-ai/genkit/pull/2300), and [local vector store](https://github.com/genkit-ai/genkit/pull/2379).
- Genkit start date: [first authored Ollama-plugin commit](https://github.com/genkit-ai/genkit/commit/7ad270f61bd21b0b7ad2125382cc32b477d7b12d).
- Side projects: user-selected Longevity and AI Interview Buddy, checked against their local source and project documentation. The Longevity icon comes from the supplied app assets; its [public website](https://www.mplongevityapp.com/) provides a product link.
- Public project links: [GitHub profile](https://github.com/kirgrim).
- Requested design guidance: [Landing Page Design](https://agenticskills.io/skills/landing-page-design).
- Social icons: [Phosphor](https://github.com/phosphor-icons/core), with the bundled [MIT license](./assets/Phosphor-LICENSE.txt).
- Company logos: official sites for [Tracr](https://tracr.com/), [Complexio](https://complexio.com/press-kit), [Neon.AI](https://www.neon.ai/), [Tripledot](https://www.tripledotstudios.com/), and [Anodot](https://www.anodot.com/).

This site adds no analytics, cookies, forms, or tracking scripts. Update the [privacy page](./privacy.html) if that changes.
