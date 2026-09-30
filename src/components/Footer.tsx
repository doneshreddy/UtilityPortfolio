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
        <a href="/privacy" className="transition-colors hover:text-foreground">
          Privacy
        </a>
        <span aria-hidden>·</span>
        <a href="/status" className="transition-colors hover:text-foreground">
          Status
        </a>
      </div>
    </footer>
  );
}
