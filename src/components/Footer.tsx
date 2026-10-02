import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="container-page flex items-center justify-center gap-2 py-6 text-xs text-muted">
        <span>
          © {year} {site.name}
        </span>
        <span aria-hidden>·</span>
        {/* Use next/link (not <a>) so the basePath is applied on GitHub Pages. */}
        <Link href="/privacy" className="transition-colors hover:text-foreground">
          Privacy
        </Link>
        <span aria-hidden>·</span>
        {/* TODO: src/app/status/page.tsx doesn't exist yet — this 404s. */}
        <Link href="/status" className="transition-colors hover:text-foreground">
          Status
        </Link>
      </div>
    </footer>
  );
}
