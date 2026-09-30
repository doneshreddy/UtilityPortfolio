"use client";

import { useState } from "react";
import { experience } from "@/data/experience";

export default function ExperienceView() {
  const [active, setActive] = useState(0);
  const item = experience[active];

  return (
    <div className="rounded-2xl border border-border bg-card p-4 sm:p-6">
      <div className="grid gap-6 md:grid-cols-[12rem_1fr]">
        {/* Company list */}
        <ul className="flex gap-2 overflow-x-auto border-border md:flex-col md:gap-1 md:border-l">
          {experience.map((exp, i) => (
            <li key={exp.company}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`w-full whitespace-nowrap px-4 py-2 text-left text-sm transition-colors md:-ml-px md:border-l-2 ${
                  i === active
                    ? "border-foreground font-medium text-foreground"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {exp.company}
              </button>
            </li>
          ))}
        </ul>

        {/* Detail panel */}
        <div>
          <h3 className="text-xl font-semibold">
            {item.role} <span className="text-muted">@ {item.company}</span>
          </h3>
          <p className="mt-1 font-mono text-xs text-muted">{item.period}</p>

          <ul className="mt-5 space-y-3">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted">
                <span className="mt-1 text-foreground">›</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-background-2 px-3 py-1 text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
