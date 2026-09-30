import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";
import { apps, type AppTool } from "@/data/apps";

export const metadata: Metadata = {
  title: "Apps",
  description: "Handy tools built to simplify your day.",
};

const tintClasses: Record<AppTool["tint"], string> = {
  blue: "from-blue-500/25 to-indigo-500/10 text-blue-400",
  slate: "from-slate-500/25 to-slate-400/10 text-slate-300",
  green: "from-green-500/25 to-emerald-500/10 text-green-400",
  cyan: "from-cyan-500/25 to-sky-500/10 text-cyan-400",
  emerald: "from-emerald-500/25 to-teal-500/10 text-emerald-400",
  amber: "from-amber-500/25 to-orange-500/10 text-amber-400",
};

export default function AppsPage() {
  return (
    <div className="container-page pb-20">
      <PageTitle title="Apps" subtitle="Handy tools built to simplify your day." />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app, i) => (
          <Reveal
            key={app.title}
            index={i}
            className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-foreground/40"
          >
            {/* Gradient icon tile */}
            <div
              className={`flex h-28 items-center justify-center bg-gradient-to-br ${tintClasses[app.tint]}`}
            >
              <span className="font-mono text-2xl">{app.icon}</span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold">{app.title}</h3>
              <p className="mt-2 text-sm text-muted">{app.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
