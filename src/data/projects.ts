/**
 * "Projects" page.
 * `preview` renders a terminal-style mock header when it's a "terminal",
 * or a colored banner label when it's an "image" (no real image needed).
 */

export type Project = {
  title: string;
  description: string;
  tags: string[];
  preview:
    | { kind: "terminal"; label: string; lines: string[] }
    | { kind: "banner"; label: string; tint: string };
  walkthrough?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Utility Portfolio",
    description:
      "This site: a personal portfolio with a companion set of handy utilities, an AI assistant, and a blog. Built with Next.js and TypeScript.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    preview: {
      kind: "terminal",
      label: "utility-portfolio — dev",
      lines: [
        "$ npm run dev",
        "▲ Next.js ready on http://localhost:3000",
        "✓ Compiled / in 1.2s",
        "○ Static export → ./out",
      ],
    },
    repo: "https://github.com/doneshreddy",
    walkthrough: "#",
  },
  {
    title: "Portfolio v1",
    description:
      "My first portfolio website, built with React and hosted on GitHub Pages. Where it all started.",
    tags: ["React", "GitHub Pages", "CSS"],
    preview: {
      kind: "banner",
      label: "Portfolio v1",
      tint: "from-indigo-500/30 to-blue-500/10",
    },
    repo: "https://github.com/doneshreddy/Portfolio",
    walkthrough: "https://doneshreddy.github.io/Portfolio/",
  },
  {
    title: "Task Manager API",
    description:
      "A REST API for managing tasks and projects with authentication, built to practice backend patterns.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    preview: {
      kind: "terminal",
      label: "task-api — server",
      lines: [
        "$ npm start",
        "INF Server listening on :4000",
        "INF Connected to PostgreSQL",
        "INF GET /api/tasks 200 12ms",
      ],
    },
    repo: "https://github.com/doneshreddy",
  },
];
