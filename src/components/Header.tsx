"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";

const companyLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Our Tech Stack", href: "/#tech-stack" },
  { label: "About the Founder", href: "/#founder" },
];

const portfolioLinks = [
  { label: "Overview", href: "/portfolio" },
  { label: "Projects", href: "/projects" },
  { label: "Apps", href: "/apps" },
  { label: "Writing", href: "/blogs" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onCompanyHome = pathname === "/";
  const links = onCompanyHome ? companyLinks : portfolioLinks;

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <nav className="container-page flex h-[4.5rem] items-center justify-between gap-5">
        <Link
          href="/"
          aria-label="Lambdabees home"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <BrandMark className="h-9 w-9 transition-transform duration-300 group-hover:-rotate-6" />
          <span className="text-[1.05rem] font-bold tracking-[-0.025em]">
            Lambda<span className="text-honey-strong">bees</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-background-2 hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          {!onCompanyHome && (
            <Link
              href="/"
              className="hidden rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground sm:inline-flex"
            >
              Company site
            </Link>
          )}
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
          >
            Get in touch
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-background-2 lg:hidden"
          >
            <svg width="19" height="19" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path d="m4 4 12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background px-5 py-4 lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-muted hover:bg-background-2 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-foreground px-4 py-3 text-center text-sm font-semibold text-background"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
