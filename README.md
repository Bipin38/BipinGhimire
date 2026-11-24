# bipin38.github.io/BipinGhimire

Personal site of Bipin Ghimire, a data engineer and AI researcher. It's a static site built with [Astro](https://astro.build) and TypeScript, and styled with Tailwind CSS 4. It ships almost no JavaScript: just the theme toggle and the copy-email button.

## Run it

Requires Node 22.23.4 or newer. `.node-version` pins 24, so `fnm` and `nvm` pick it up automatically.

```sh
npm install
npm run dev        # http://localhost:4321/BipinGhimire/
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
npm run check      # astro check + tsc, ESLint, Prettier (what CI runs)
npm run format     # fix formatting
```

## Edit content

All content lives in typed data files. Components only render it.

| What                                                | File                            |
| --------------------------------------------------- | ------------------------------- |
| Name, role, tagline, bio, contact, education, certs | `src/data/profile.ts`           |
| Projects (engineering and research)                 | `src/data/projects.ts`          |
| Experience timeline                                 | `src/data/experience.ts`        |
| Skills                                              | `src/data/skills.ts`            |
| Publications                                        | `src/data/publications.ts`      |
| Case-study pages                                    | `src/pages/projects/<slug>.mdx` |

- **Projects.** `featured: true` gives a project the full spec table, and the rest appear in the compact "Also built" list. `kind` puts it under Work or Research.
- **Case studies.** To add one, set `caseStudy: true` on the project and create `src/pages/projects/<slug>.mdx` with `layout: ../../layouts/CaseStudy.astro` and `slug: <slug>` in the frontmatter. Use `<Pipeline>` for architecture figures (see the existing case studies).
- **Photo.** Put the image in `src/assets/`, then set `photo` in `profile.ts`:

  ```ts
  import photo from '../assets/photo.jpg';
  // ...
  photo,
  ```

  Astro resizes it and converts it to modern formats at build time. The current photo is `src/assets/portrait.png`; replace that file to change it.

- **Résumé.** Put the PDF at `public/resume.pdf` and set `resume: 'resume.pdf'` in `profile.ts`. The Résumé button stays hidden until you do.
- **Social card.** `public/og.png` is a screenshot of `scripts/og.html`. If you change your name or role, regenerate it:

  ```sh
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --hide-scrollbars \
    --window-size=1200,630 --screenshot="$PWD/public/og.png" "file://$PWD/scripts/og.html"
  ```

`docs/` is git-ignored. It holds the private source résumé, which must not be published.

## Deploy

`.github/workflows/deploy.yml` runs the checks and the build on every pull request. On every push to `master` it also deploys `dist/` to GitHub Pages.

**One-time setup:** go to _Settings → Pages → Build and deployment → Source_ and select **GitHub Actions**. The old `gh-pages` branch is no longer used once you do this.

The site is served from `/BipinGhimire/` (`base` in `astro.config.mjs`). Changing it changes every public URL. The home-page anchors `#about`, `#experience` and `#contact` from the previous site still work, and `#portfolio` jumps to Work.

## Structure

```
src/
  data/         content (typed)
  pages/        index.astro, 404.astro, projects/*.mdx
  layouts/      Base.astro (head, header, footer), CaseStudy.astro
  components/   Section, ProjectSpec, ProjectRows, Pipeline
  styles/       global.css (theme tokens, Tailwind)
  lib/theme.ts  theme toggle + base-path helper
public/         favicons, og.png
```
