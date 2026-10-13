/**
 * Single source of truth for all site content.
 * Edit everything here — every page reads from this file.
 */

export const site = {
  name: "D R K",
  initials: "DRK",
  role: "Software Developer",
  location: "USA",
  // Two-line hero intro.
  intro:
    "I build reliable software and enjoy turning complex ideas into clean, well-crafted solutions that just work.",
  email: "contact@lambdabees.com",
  socials: {
    github: "https://github.com/doneshreddy",
    //linkedin: "https://www.linkedin.com/doneshreddy/",
    email: "mailto:contact@lambdabees.com",
  },
  githubUser: "doneshreddy",
  //linkedinUser: "doneshreddy",
};

export const company = {
  name: "Lambdabees",
  email: "contact@lambdabees.com",
  domain: "lambdabees.com",
  description:
    "An independent product lab and software studio building intelligent applications across web, mobile, desktop, and AI systems.",
};

export const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Apps", href: "/apps" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];
