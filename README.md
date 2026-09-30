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

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static site and publishes it to GitHub Pages at:

```
https://<your-username>.github.io/UtilityPortfolio/
```

Enable it once in **GitHub → Settings → Pages → Build and deployment →
Source: GitHub Actions**.

When you later buy a custom domain and serve from the root, remove the
`NEXT_PUBLIC_BASE_PATH` env var in the workflow.

## Personalizing

- Edit **`src/lib/site.ts`** for your name, role, tagline, email, and social links.
- Edit **`src/data/content.ts`** for your projects and the home-page cards.
