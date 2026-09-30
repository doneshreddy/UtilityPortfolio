import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of things I've designed, built, and shipped.",
};

export default function ProjectsPage() {
  return (
    <div className="container-page pb-20">
      <PageTitle
        title="Projects"
        subtitle="A selection of things I've designed, built, and shipped."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal
            as="article"
            key={project.title}
            index={i}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-foreground/40"
          >
            {/* Preview */}
            {project.preview.kind === "terminal" ? (
              <div className="border-b border-border bg-background-2 p-4 font-mono text-xs">
                <div className="mb-3 flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-muted">
                    {project.preview.label}
                  </span>
                </div>
                <div className="space-y-1 text-muted">
                  {project.preview.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className={`flex h-36 items-center justify-center border-b border-border bg-gradient-to-br ${project.preview.tint}`}
              >
                <span className="text-lg font-bold">
                  {project.preview.label}
                </span>
              </div>
            )}

            {/* Body */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex gap-4 text-sm font-medium">
                {project.walkthrough && (
                  <a
                    href={project.walkthrough}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    Walkthrough →
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
