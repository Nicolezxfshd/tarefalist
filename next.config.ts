import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",
  images: {
    // Required for static export
    unoptimized: true,
  },
  // If deploying to a project page like https://<user>.github.io/<repo>,
  // set basePath = "/<repo>" and assetPrefix = "/<repo>".
  basePath: process.env.NEXT_BASE_PATH || undefined,
  assetPrefix: process.env.NEXT_BASE_PATH || undefined,
};

export default nextConfig;
