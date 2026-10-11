import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Founder Portfolio",
  description: `Meet ${site.name}, founder of Lambdabees, and explore his software engineering work.`,
};

const profileLinks = [
  { label: "Selected projects", href: "/projects", detail: "Software, APIs, and product builds" },
  { label: "Apps & utilities", href: "/apps", detail: "Focused tools built to solve practical problems" },
  { label: "Writing", href: "/blogs", detail: "Notes on engineering and products" },
];

export default function PortfolioPage() {
  return (
    <div>
      <section className="page-glow border-b border-border">
        <div className="container-page grid min-h-[38rem] items-center gap-12 py-20 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <Reveal>
              <p className="eyebrow">Founder portfolio</p>
            </Reveal>
            <Reveal index={1}>
              <h1 className="mt-5 text-5xl font-bold tracking-[-0.055em] sm:text-7xl">{site.name}</h1>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-4 font-mono text-sm tracking-wide text-honey-strong">Founder of Lambdabees · {site.role}</p>
            </Reveal>
            <Reveal index={3}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">With nearly a decade of hands-on software development experience, I build reliable products across web, mobile, desktop, cloud, automation, and applied AI. Through Lambdabees, I turn that experience into focused, production-ready software.</p>
            </Reveal>
            <Reveal index={4} className="mt-9 flex flex-wrap gap-3">
              <Link href="/projects" className="button-primary">Explore projects →</Link>
              <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="button-secondary">GitHub ↗</a>
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="button-secondary">LinkedIn ↗</a>
            </Reveal>
          </div>

          <Reveal index={2} variant="scale-in" className="rounded-[2rem] border border-border bg-card p-7 shadow-xl shadow-foreground/5 sm:p-9">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-honey text-lg font-bold text-ink">DRK</div>
            <div className="mt-8 space-y-5">
              <div className="border-b border-border pb-5">
                <p className="text-xs uppercase tracking-[0.14em] text-muted">Focus</p>
                <p className="mt-2 font-medium">Full-stack systems, product engineering, applied AI</p>
              </div>
              <div className="border-b border-border pb-5">
                <p className="text-xs uppercase tracking-[0.14em] text-muted">Location</p>
                <p className="mt-2 font-medium">{site.location} · Remote friendly</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted">Contact</p>
                <a href={site.socials.email} className="mt-2 inline-block font-medium transition-colors hover:text-honey-strong">{site.email}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <Reveal className="section-heading">
            <p className="eyebrow">Explore the work</p>
            <h2>A practical body of work.</h2>
            <p>Explore the projects, applications, and technical writing behind the product direction of Lambdabees.</p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {profileLinks.map((link, index) => (
              <Reveal key={link.href} index={index + 1}>
                <Link href={link.href} className="group flex min-h-40 flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-honey-strong hover:shadow-lg">
                  <span className="text-sm text-muted">0{index + 1}</span>
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold">{link.label} <span className="inline-block transition-transform group-hover:translate-x-1">→</span></h3>
                    <p className="mt-2 text-sm text-muted">{link.detail}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
