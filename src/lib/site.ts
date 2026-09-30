/**
 * Single source of truth for all site content.
 * Edit everything here — every page reads from this file.
 */

export const site = {
  name: "Donesh Kalluri",
  initials: "DK",
  role: "Software Developer",
  location: "USA",
  // Two-line hero intro.
  intro:
    "I build reliable software and enjoy turning complex ideas into clean, well-crafted solutions that just work.",
  email: "doneshkalluri@gmail.com",
  socials: {
    github: "https://github.com/doneshreddy",
    linkedin: "https://www.linkedin.com/doneshreddy/",
    email: "mailto:doneshkalluri@gmail.com",
  },
  githubUser: "doneshreddy",
  linkedinUser: "doneshreddy",
};

export const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Apps", href: "/apps" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];
