import Link from "next/link";
import BrandMark from "./BrandMark";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <BrandMark className="h-8 w-8" />
          <div>
            <p className="text-sm font-semibold">Lambdabees</p>
            <p className="text-xs text-muted">© 2026 Lambdabees. All rights reserved.</p>
          </div>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">Terms</Link>
          <Link href="/contact" className="transition-colors hover:text-foreground">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
