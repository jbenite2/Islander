import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve images directly from /public instead of Next.js' on-demand
    // optimizer. On Vercel's Hobby plan the Image Optimization quota gets
    // exhausted by the 60+ covers (each transcoded into multiple sizes ×
    // AVIF/WebP), and past the cap uncached images fail to generate. The
    // covers are already reasonably sized, and blur placeholders still work
    // because they're baked in at build time by plaiceholder.
    unoptimized: true,
  },
};

export default nextConfig;
