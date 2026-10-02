# UtilityPortfolio

My personal portfolio and a growing set of handy utilities, built with
**Next.js + TypeScript + Tailwind CSS**.

The site is static for now and deploys to GitHub Pages. It's structured so I
can add backend features (budget tracker, notes) later without a rewrite.

## Tech stack

- **Next.js 16** (App Router) — full-stack React framework (frontend + backend-ready)
- **React 19** — UI components
- **TypeScript** — type safety
- **Tailwind CSS v4** — styling

## Project structure

```
src/
  app/                 # pages (App Router). Each folder = a route.
    page.tsx           #   /            → Home
    projects/page.tsx  #   /projects
    budget/page.tsx    #   /budget      (placeholder)
    notes/page.tsx     #   /notes       (placeholder)
    contact/page.tsx   #   /contact
    layout.tsx         #   shared shell (Navbar + Footer)
    globals.css        #   design tokens + Tailwind
  components/          # reusable UI: Navbar, Footer, Card, Section
  data/content.ts      # projects + feature cards (edit your content here)
  lib/site.ts          # your name, role, links, nav (edit your details here)
```

### Adding a new page

1. Create `src/app/<name>/page.tsx`.
2. Add a link in `navLinks` inside `src/lib/site.ts`.

That's it — it shows up in the navbar and footer automatically.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs a static site to ./out
```

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static site and publishes the `out/` folder to GitHub Pages.

### One-time setup (required)

The very first deploy failed with
`Ensure GitHub Pages has been enabled`, because the Pages site didn't exist
yet. Enable it once:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. The repo must be **public**. GitHub Pages on a **private** repo requires a
   paid plan (Pro / Team / Enterprise) — on the free plan the API returns
   *"Your current plan does not support GitHub Pages for this repository."*

Or do step 1 from the CLI:

```bash
gh api -X POST repos/doneshreddy/UtilityPortfolio/pages -f build_type=workflow
```

Once enabled the site lives at
`https://doneshreddy.github.io/UtilityPortfolio/`.

### How the base path is handled

A *project* repo is served from a subpath (`/<repo>/`), so the workflow derives
`NEXT_PUBLIC_BASE_PATH=/<repo>` from the repository name and passes it to
`next.config.ts` during the build. That means **renaming the repo needs no code
changes**. A repo named `<user>.github.io` is served from the root, so the
workflow leaves the base path empty for those.

`.nojekyll` is committed as `public/.nojekyll`, so Next.js copies it into
`out/.nojekyll` (without it, Pages hides the `_next/` folder and every asset
404s). The upload step also passes `include-hidden-files: true`, because
`upload-pages-artifact@v4+` skips dotfiles by default.

### Custom domain

Buy the domain, add it under **Settings → Pages → Custom domain**, then make
the build serve from the root by setting `base_path=""` in the
`Compute base path` step of the workflow (a custom domain serves from `/`, not
from `/<repo>/`).

### Previewing the export locally

```bash
NEXT_PUBLIC_BASE_PATH=/UtilityPortfolio npm run build
npx serve out          # http://localhost:3000/UtilityPortfolio/
```

## Personalizing

- Edit **`src/lib/site.ts`** for your name, role, tagline, email, and social links.
- Edit **`src/data/content.ts`** for your projects and the home-page cards.
