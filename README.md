# Lambdabees Website

The company website for **Lambdabees**, an independent software and AI product
studio. The founder portfolio remains available at `/portfolio` with its
projects, apps, and writing linked from there.

The site is built with **Next.js + TypeScript + Tailwind CSS**, exported as a
fully static site, and hosted on GitHub Pages at `https://lambdabees.com`.

## Tech stack

- **Next.js 16** (App Router) — full-stack React framework (frontend + backend-ready)
- **React 19** — UI components
- **TypeScript** — type safety
- **Tailwind CSS v4** — styling

## Project structure

```
src/
  app/                 # pages (App Router). Each folder = a route.
    page.tsx           #   /            → Lambdabees landing page
    portfolio/page.tsx #   /portfolio   → founder portfolio
    projects/page.tsx  #   /projects
    apps/              #   /apps
    blogs/             #   /blogs
    contact/page.tsx   #   /contact
    privacy/page.tsx   #   /privacy
    terms/page.tsx     #   /terms
    layout.tsx         #   shared shell (Navbar + Footer)
    globals.css        #   design tokens + Tailwind
  components/          # reusable UI and Lambdabees brand mark
  data/                # portfolio projects, apps, experience, and writing
  lib/site.ts          # company and founder contact details
```

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
