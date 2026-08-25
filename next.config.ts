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
      // www serves the full site at 200 (verified in production), creating a
      // duplicate of every page. Canonicals already point at the apex; this
      // makes the host itself redirect so Google sees one origin.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.vrsrealinvest.com.au" }],
        destination: "https://vrsrealinvest.com.au/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;