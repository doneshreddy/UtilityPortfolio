import Link from "next/link";
import { site } from "@/lib/site";

/** Small inline SVG icons for the social row. */
function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.575.106.785-.25.785-.556 0-.274-.01-1-.015-1.965-3.196.695-3.87-1.54-3.87-1.54-.523-1.33-1.276-1.684-1.276-1.684-1.043-.713.08-.698.08-.698 1.153.08 1.76 1.184 1.76 1.184 1.026 1.758 2.69 1.25 3.345.955.104-.743.402-1.25.73-1.538-2.552-.29-5.236-1.276-5.236-5.68 0-1.255.448-2.28 1.183-3.084-.119-.29-.513-1.46.112-3.043 0 0 .965-.309 3.163 1.178a11 11 0 0 1 5.76 0c2.196-1.487 3.16-1.178 3.16-1.178.626 1.583.232 2.753.114 3.043.737.804 1.18 1.83 1.18 3.084 0 4.415-2.688 5.386-5.25 5.67.413.356.78 1.057.78 2.13 0 1.538-.014 2.778-.014 3.157 0 .308.207.667.79.554A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <section className="page-glow relative overflow-hidden">
      <div className="container-page flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-20 text-center">
        <h1 className="animate-fade-up text-5xl font-extrabold tracking-tight sm:text-7xl">
          {site.name}
        </h1>

        <p
          className="animate-fade-up stagger mt-4 font-mono text-base tracking-wide text-muted sm:text-lg"
          style={{ ["--i" as string]: 1 }}
        >
          {site.role}
        </p>

        <p
          className="animate-fade-up stagger mt-3 flex items-center gap-1.5 text-sm text-muted"
          style={{ ["--i" as string]: 2 }}
        >
          <PinIcon />
          {site.location}
        </p>

        <p
          className="animate-fade-up stagger mt-6 max-w-xl text-lg leading-relaxed text-muted"
          style={{ ["--i" as string]: 3 }}
        >
          {site.intro}
        </p>

        <div
          className="animate-fade-up stagger mt-8"
          style={{ ["--i" as string]: 4 }}
        >
          <Link
            href="/apps"
            className="inline-block rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          >
            View Apps
          </Link>
        </div>

        <div
          className="animate-fade-up stagger mt-8 flex items-center gap-5 text-muted"
          style={{ ["--i" as string]: 5 }}
        >
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GitHubIcon />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <LinkedInIcon />
          </a>
          <a
            href={site.socials.email}
            aria-label="Email"
            className="transition-colors hover:text-foreground"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
