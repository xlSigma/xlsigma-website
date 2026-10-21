import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Unlisted static case study. Served from public/case-studies without showing .html.
      {
        source: "/case-studies/wealth-integration-assessment",
        destination: "/case-studies/wealth-integration-assessment.html",
      },
    ];
  },
};

export default nextConfig;
