import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  subtitle?: string;
};

/** Big centered page title + subtitle, matching the reference inner pages. */
export default function PageTitle({ title, subtitle }: Props) {
  return (
    <div className="page-glow py-14 text-center sm:py-16">
      <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="animate-fade-up stagger mx-auto mt-4 max-w-xl text-muted" style={{ ["--i" as string]: 1 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
