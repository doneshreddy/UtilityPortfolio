import type { Metadata } from "next";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Reveal from "@/components/Reveal";
import { company, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI, Web, Mobile & Desktop Software Studio",
  description:
    "Lambdabees engineers AI-enabled web, iOS, Android, and Windows applications for modern businesses.",
};

const solutions = [
  {
    number: "01",
    title: "Agentic AI Integration",
    description:
      "Building context-aware, LLM-powered autonomous agents to streamline complex workflows and support better decisions.",
    items: ["RAG systems", "Tool-using agents", "Human-in-the-loop controls"],
    icon: (
      <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    ),
  },
  {
    number: "02",
    title: "Custom Software Engineering",
    description:
      "Architecting scalable web applications, native mobile experiences, Windows software, robust APIs, and secure data systems.",
    items: ["Web platforms", "iOS & Android apps", "Desktop & backend systems"],
    icon: <path d="m9 18-6-6 6-6m6 0 6 6-6 6m-2-15-2 18" />,
  },
  {
    number: "03",
    title: "Workflow Automation",
    description:
      "Eliminating operational bottlenecks by turning repetitive business processes into reliable automated pipelines.",
    items: ["System integrations", "Data orchestration", "Operational tooling"],
    icon: <path d="M5 7h9a4 4 0 0 1 4 4m0 0-3-3m3 3 3-3M19 17h-9a4 4 0 0 1-4-4m0 0 3 3m-3-3-3 3" />,
  },
];

const stackGroups = [
  {
    label: "AI & intelligence",
    technologies: ["OpenAI API", "Anthropic Claude", "Google Gemini", "LangChain", "LangGraph", "RAG", "Vector Search"],
  },
  {
    label: "Web & backend",
    technologies: ["Java", "Spring Boot", "TypeScript", "Angular", "Vue.js", "React", "Next.js", "Node.js", "Python", "FastAPI", "REST", "GraphQL"],
  },
  {
    label: "Mobile & desktop",
    technologies: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "React Native", "Flutter", "C#", ".NET", "Electron", "Tauri"],
  },
  {
    label: "Data & infrastructure",
    technologies: ["PostgreSQL", "Redis", "Supabase", "Firebase", "AWS", "Cloudflare", "Docker", "GitHub Actions"],
  },
];

const workflow = [
  { step: "Discover", text: "Clarify the business problem, users, constraints, and measures of success." },
  { step: "Architect", text: "Design a secure system with the right interfaces, data model, and AI boundaries." },
  { step: "Build & refine", text: "Ship in focused increments, validate behavior, and prepare the product for production." },
];

function ArrowIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: "https://lambdabees.com",
    email: company.email,
    description: company.description,
    founder: {
      "@type": "Person",
      name: site.name,
      url: "https://lambdabees.com/portfolio/",
    },
    sameAs: [site.socials.github, site.socials.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="hero-grid relative overflow-hidden border-b border-border">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container-page relative grid min-h-[calc(100vh-4.5rem)] items-center gap-14 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-honey/40 bg-honey-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-honey-strong shadow-[0_0_0_4px_var(--honey-soft)]" />
                Independent product lab · United States
              </div>
            </Reveal>
            <Reveal index={1}>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.03] tracking-[-0.055em] sm:text-6xl lg:text-[4.5rem]">
                Engineering next-generation <span className="text-gradient">intelligent applications.</span>
              </h1>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                Lambdabees is an independent product lab and software studio building custom AI-driven workflows, agentic automation, and high-performance digital architectures.
              </p>
            </Reveal>
            <Reveal index={3} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/#solutions" className="button-primary group">
                Explore our solutions
                <span className="transition-transform group-hover:translate-x-1"><ArrowIcon /></span>
              </Link>
              <Link href="/portfolio" className="button-secondary">
                View founder portfolio
              </Link>
            </Reveal>
            <Reveal index={4}>
              <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted" aria-label="Supported platforms">
                {["Web applications", "iOS & Android", "Windows software", "AI systems"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-honey-strong">◆</span>{item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal index={2} variant="scale-in" className="relative mx-auto w-full max-w-[33rem]">
            <div className="architecture-card relative overflow-hidden rounded-[2rem] border border-border bg-card/90 p-5 shadow-2xl shadow-foreground/5 backdrop-blur sm:p-7">
              <div className="mb-7 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <BrandMark className="h-11 w-11 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold">Intelligent product system</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">Architecture overview</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Online
                </span>
              </div>

              <div className="space-y-3">
                <div className="system-layer">
                  <span className="system-label">Experience layer</span>
                  <div className="flex flex-wrap gap-2"><span>Web</span><span>Mobile</span><span>Desktop</span></div>
                </div>
                <div className="flex justify-center text-honey-strong" aria-hidden="true">↓</div>
                <div className="system-layer border-honey/50 bg-honey-soft">
                  <span className="system-label">Intelligence layer</span>
                  <div className="flex flex-wrap gap-2"><span>Agents</span><span>RAG</span><span>Automation</span></div>
                </div>
                <div className="flex justify-center text-honey-strong" aria-hidden="true">↓</div>
                <div className="system-layer">
                  <span className="system-label">Platform layer</span>
                  <div className="flex flex-wrap gap-2"><span>APIs</span><span>Data</span><span>Cloud</span></div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-5 text-center">
                <div><p className="font-mono text-xs font-semibold">01</p><p className="mt-1 text-[11px] text-muted">Design</p></div>
                <div><p className="font-mono text-xs font-semibold">02</p><p className="mt-1 text-[11px] text-muted">Engineer</p></div>
                <div><p className="font-mono text-xs font-semibold">03</p><p className="mt-1 text-[11px] text-muted">Ship</p></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="solutions" className="section-space border-b border-border">
        <div className="container-page">
          <Reveal className="section-heading">
            <p className="eyebrow">Core solutions</p>
            <h2>Software systems built around real business outcomes.</h2>
            <p>From a focused prototype to a production platform, every engagement combines product thinking, careful engineering, and practical AI.</p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <Reveal key={solution.title} index={index + 1} as="article" className="solution-card group">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-honey/40 bg-honey-soft text-foreground transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{solution.icon}</svg>
                  </div>
                  <span className="font-mono text-xs text-muted">{solution.number}</span>
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-tight">{solution.title}</h3>
                <p className="mt-3 leading-7 text-muted">{solution.description}</p>
                <ul className="mt-7 space-y-2 border-t border-border pt-5 text-sm">
                  {solution.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5"><span className="text-honey-strong">◆</span>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="tech-stack" className="section-space tech-grid border-b border-border bg-background-2/55">
        <div className="container-page grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <Reveal className="section-heading lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Our tech stack</p>
            <h2>Modern tools, chosen for the problem.</h2>
            <p>We combine proven engineering foundations with current AI platforms. The architecture stays portable, observable, and maintainable as the product grows.</p>
            <div className="mt-7 flex items-center gap-3 text-sm text-muted">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card font-mono text-xs">λ</span>
              Product-focused. Platform-agnostic.
            </div>
          </Reveal>

          <div className="space-y-4">
            {stackGroups.map((group, index) => (
              <Reveal key={group.label} index={index + 1} className="rounded-2xl border border-border bg-card p-6 sm:p-7">
                <div className="grid gap-5 sm:grid-cols-[10rem_1fr] sm:items-start">
                  <h3 className="text-sm font-semibold capitalize">{group.label}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.technologies.map((technology) => (
                      <li key={technology} className="tech-badge">{technology}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-b border-border">
        <div className="container-page">
          <Reveal className="section-heading max-w-2xl">
            <p className="eyebrow">How we build</p>
            <h2>A clear route from idea to production.</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {workflow.map((item, index) => (
              <Reveal key={item.step} index={index + 1} className="relative border-l border-border pl-6">
                <span className="absolute -left-2 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-honey"><span className="h-1.5 w-1.5 rounded-full bg-foreground" /></span>
                <p className="font-mono text-xs text-muted">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold">{item.step}</h3>
                <p className="mt-2 leading-7 text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="founder" className="section-space overflow-hidden border-b border-border bg-ink text-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <p className="eyebrow text-honey">About the founder</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Backed by proven engineering expertise.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Lambdabees was founded as a vehicle to ship robust production software. Its technical direction is led by a solo founder with nearly a decade of hands-on experience building full-stack products, cloud systems, automation, and applied AI.
            </p>
            <Link href="/portfolio" className="group mt-8 inline-flex items-center gap-2 font-semibold text-honey transition-colors hover:text-white">
              Explore Founder Portfolio &amp; Case Studies
              <span className="transition-transform group-hover:translate-x-1"><ArrowIcon /></span>
            </Link>
          </Reveal>

          <Reveal index={1} className="rounded-[1.75rem] border border-white/12 bg-white/[.055] p-7 backdrop-blur sm:p-9">
            <div className="flex items-start justify-between gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-honey text-base font-bold text-ink">DRK</div>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60">Founder-led studio</span>
            </div>
            <h3 className="mt-8 text-2xl font-semibold">{site.name}</h3>
            <p className="mt-1 text-white/60">Founder &amp; Software Developer</p>
            <p className="mt-6 leading-7 text-white/70">Nearly a decade of building thoughtful software across frontend, backend, cloud, mobile, desktop, automation, and applied AI.</p>
            <div className="mt-7 flex gap-5 border-t border-white/10 pt-6 text-sm">
              <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="text-white/60 transition-colors hover:text-honey">GitHub ↗</a>
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 transition-colors hover:text-honey">LinkedIn ↗</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section-space">
        <div className="container-page">
          <Reveal className="contact-panel relative overflow-hidden rounded-[2rem] border border-border px-6 py-14 text-center sm:px-12 sm:py-16">
            <BrandMark className="mx-auto h-12 w-12" />
            <p className="eyebrow mt-6">Start a conversation</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Have a product, workflow, or ambitious idea to build?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">Tell us what you are working toward. We will respond with the right questions and a practical next step.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`mailto:${company.email}`} className="button-primary group">
                {company.email}<span className="transition-transform group-hover:translate-x-1"><ArrowIcon /></span>
              </a>
              <Link href="/contact" className="button-secondary">Open contact page</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
