/**
 * "Blogs" page. `tint` colors the cover banner (no real images needed).
 */

export type BlogPost = {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  tint: string; // tailwind gradient classes
  href?: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Getting Started with Next.js and Static Export",
    category: "NEXT.JS",
    date: "September 20, 2026",
    readTime: "8 min read",
    excerpt:
      "How I set up this site as a fully static Next.js app deployed to GitHub Pages.",
    tint: "from-blue-600/40 to-indigo-500/10",
  },
  {
    title: "Why I Chose TypeScript for My Portfolio",
    category: "TYPESCRIPT",
    date: "September 10, 2026",
    readTime: "6 min read",
    excerpt:
      "Type safety, better tooling, and fewer bugs — a look at what TypeScript brings to a small project.",
    tint: "from-cyan-500/40 to-teal-500/10",
  },
  {
    title: "Building a Simple Budget Tracker",
    category: "PROJECTS",
    date: "August 28, 2026",
    readTime: "10 min read",
    excerpt:
      "Planning the data model and UI for the monthly budget utility on this site.",
    tint: "from-emerald-500/40 to-green-500/10",
  },
  {
    title: "Dark Mode Done Right with next-themes",
    category: "CSS",
    date: "August 15, 2026",
    readTime: "5 min read",
    excerpt:
      "Adding a flash-free dark/light toggle to a Next.js site with CSS variables.",
    tint: "from-purple-500/40 to-fuchsia-500/10",
  },
  {
    title: "Deploying to GitHub Pages with Actions",
    category: "DEVOPS",
    date: "July 30, 2026",
    readTime: "7 min read",
    excerpt:
      "Automating build and deploy of a static Next.js site on every push to main.",
    tint: "from-orange-500/40 to-amber-500/10",
  },
  {
    title: "Lessons from My First Portfolio",
    category: "CAREER",
    date: "July 12, 2026",
    readTime: "4 min read",
    excerpt:
      "What I learned building portfolio v1 and what I changed the second time around.",
    tint: "from-rose-500/40 to-pink-500/10",
  },
];
