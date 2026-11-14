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

- [index.html](./index.html): introduction, reusable SVG architecture diagrams, carousel slides, employer panels, and contact links.
- [styles.css](./styles.css): layout, typography, colors, responsive behavior, and self-hosted font definitions.
- [script.js](./script.js): lightweight page interactions.
- [systems.css](./systems.css) and [systems.js](./systems.js): architecture carousel, nested experience panels, and diagram motion controls.
- [assets/](./assets/): portrait, font files, favicon, and social preview artwork.
- [privacy.html](./privacy.html), [terms.html](./terms.html), and [404.html](./404.html): supporting pages.

The site uses warm cream `#f5f3ee`, dark `#191b19`, and orange `#b94721`. Keep the canonical URL and sharing metadata aligned with the live address if the domain changes.

The architecture carousel supports buttons, keyboard arrows, and horizontal scrolling. Employer descriptions use native disclosures, including two nested roles at Neon.AI. The motion control pauses all animated diagrams; reduced motion preferences show static diagrams. Both the carousel and experience descriptions remain accessible without JavaScript.

## Content and design sources

- Professional content: [Kyrylo Hrymailo's CV](https://docs.google.com/document/d/1_F3qWAOfORrzUjzwwY0-BK2xuSJIb6Kf/edit).
- Public project links: [GitHub profile](https://github.com/kirgrim).
- Requested design guidance: [Landing Page Design](https://agenticskills.io/skills/landing-page-design).

This site adds no analytics, cookies, forms, or tracking scripts. Update the [privacy page](./privacy.html) if that changes.
