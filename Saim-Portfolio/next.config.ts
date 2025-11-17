import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.saimaliahmad.com" }],
        destination: "https://saimaliahmad.com/:path*",
        permanent: true,
      },
    ];
  },
  /* other config options here */
};

export default nextConfig;
