/**
 * "Experience" page — company list (left) + detail panel (right).
 * The first item shows by default.
 */

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "Your Company",
    role: "Software Developer",
    period: "2024 — Present · Remote",
    location: "India",
    bullets: [
      "Built and maintained web applications across the stack, focusing on clean, maintainable code.",
      "Collaborated with the team on features from design through deployment.",
      "Improved performance and reliability of existing services.",
      "Replace these bullets with your real responsibilities and achievements.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    company: "Earlier Company",
    role: "Software Developer Intern",
    period: "2023 — 2024 · On-site",
    location: "India",
    bullets: [
      "Contributed to feature development and bug fixes across the codebase.",
      "Learned production engineering practices and code review workflows.",
      "Wrote tests and documentation for new features.",
    ],
    tags: ["JavaScript", "React", "REST APIs", "Git"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2022 — 2023",
    location: "Remote",
    bullets: [
      "Built websites and small applications for clients.",
      "Handled everything from design to deployment.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];
