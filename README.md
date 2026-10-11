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

The workflow uses `actions/configure-pages` to read the site's actual base
path from GitHub Pages and passes it to `next.config.ts` through
`NEXT_PUBLIC_BASE_PATH`. Project sites use `/<repo>`; user sites and custom
domains use an empty base path. Changing the domain needs no workflow edits.

`.nojekyll` is committed as `public/.nojekyll`, so Next.js copies it into
`out/.nojekyll` (without it, Pages hides the `_next/` folder and every asset
404s). The upload step also passes `include-hidden-files: true`, because
`upload-pages-artifact@v4+` skips dotfiles by default.

### Custom domain

The intended custom domain is **lambdabees.com**, registered at Porkbun.
Hosting stays on GitHub Pages; no paid Porkbun hosting is needed.

1. Recommended: in your **GitHub account Settings → Pages**, add
   `lambdabees.com` as a verified domain. Add the TXT record GitHub supplies
   in Porkbun and finish verification. Keep that TXT record.
2. In this **repository's Settings → Pages → Custom domain**, save
   `lambdabees.com` before pointing its DNS at GitHub.
3. In **Porkbun → Domain Management → lambdabees.com → DNS**, use
   **Quick DNS Config → Github**. Set the subdomain host to `www` and its
   answer to `doneshreddy.github.io` (no protocol or repository path).
   Review existing records before replacing parking records; preserve
   email records and unrelated TXT records.
4. If configuring manually, use these records (an empty Porkbun Host field
   means the root domain):

   | Type | Host | Answer |
   | --- | --- | --- |
   | A | empty | 185.199.108.153 |
   | A | empty | 185.199.109.153 |
   | A | empty | 185.199.110.153 |
   | A | empty | 185.199.111.153 |
   | CNAME | www | doneshreddy.github.io |

   Replace conflicting root/www parking or forwarding records. Any root
   AAAA records must also point to GitHub Pages, or be removed if not needed.
5. Run **Actions → Deploy to GitHub Pages → Run workflow** after changing
   the domain, so the export uses the new root base path.
6. Once GitHub's DNS check passes and the certificate is ready, enable
   **Enforce HTTPS**. DNS propagation and certificate provisioning can each
   take up to 24 hours. GitHub redirects `www.lambdabees.com` to
   `lambdabees.com` when both DNS entries are configured.

This project deploys through GitHub Actions, so a `CNAME` file in the source
is not required; the repository's Pages setting controls the custom domain.

Official guides:
[GitHub domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
and [Porkbun's GitHub quick config](https://kb.porkbun.com/article/64-how-to-connect-your-domain-to-github-pages).

### Previewing the export locally

```bash
NEXT_PUBLIC_BASE_PATH=/UtilityPortfolio npm run build
npx serve out          # http://localhost:3000/UtilityPortfolio/
```

## Personalizing

- Edit **`src/lib/site.ts`** for your name, role, tagline, email, and social links.
- Edit **`src/data/content.ts`** for your projects and the home-page cards.
