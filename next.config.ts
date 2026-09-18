import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tagmango.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/services",
        destination: "/properties",
        permanent: true,
      },
      // www is the preferred host (client requirement). The apex would
      // otherwise serve the full site at 200, duplicating every page; this
      // makes the host itself redirect so Google sees one origin.
      {
        source: "/:path*",
        has: [{ type: "host", value: "vrsrealinvest.com.au" }],
        destination: "https://www.vrsrealinvest.com.au/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;