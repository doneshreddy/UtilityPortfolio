/**
 * "Apps" page — handy utility tools.
 * `tint` picks the gradient color for the icon tile.
 * Add new tools here as you build them.
 */

export type AppTool = {
  title: string;
  description: string;
  icon: string; // emoji or short glyph shown in the tile
  tint: "blue" | "slate" | "green" | "cyan" | "emerald" | "amber";
  href?: string;
};

export const apps: AppTool[] = [
  {
    title: "Monthly Budget",
    description:
      "Track your spending month over month, grouped by category, with simple summaries and totals.",
    icon: "📊",
    tint: "blue",
  },
  {
    title: "Notes",
    description:
      "Capture notes, snippets, and things worth remembering. Tag and search them quickly.",
    icon: "📝",
    tint: "slate",
  },
  {
    title: "JSON Formatter",
    description:
      "Format, validate, and minify JSON instantly. Spot syntax errors with clear line numbers.",
    icon: "{ }",
    tint: "green",
  },
  {
    title: "Unit Converter",
    description:
      "Convert between units of length, weight, temperature, and more with a clean interface.",
    icon: "📐",
    tint: "cyan",
  },
  {
    title: "Password Generator",
    description:
      "Generate strong, random passwords with configurable length and character sets.",
    icon: "🔑",
    tint: "emerald",
  },
  {
    title: "Markdown Preview",
    description:
      "Write Markdown and preview the rendered output live, side by side.",
    icon: "🔤",
    tint: "amber",
  },
];
