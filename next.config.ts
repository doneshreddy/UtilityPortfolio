import type { NextConfig } from "next";

/**
 * Static export config for GitHub Pages.
 *
 * GitHub Pages serves a project repo under a subpath, e.g.
 *   https://<user>.github.io/<repo>/
 * so we set basePath/assetPrefix from an env var during the CI build.
 *
 * For local dev (`npm run dev`) the basePath is empty, so the site
 * runs at http://localhost:3000 as usual.
 *
 * When you buy a custom domain and serve from the root, just leave
 * NEXT_PUBLIC_BASE_PATH unset and everything works at "/".
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  agentRules: false,
  output: "export", // emit a fully static site into ./out
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true, // required: no image optimization server in static export
  },
  trailingSlash: true, // friendlier static hosting (folder/index.html)
  devIndicators: false, // hide the Next.js dev overlay in the bottom corner
};

export default nextConfig;
