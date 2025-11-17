import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // If you set a CSP elsewhere, merge this into frame-src
          { key: "X-Frame-Options", value: "ALLOWALL" }, // optional if you manage CSP yourself
          { key: "Content-Security-Policy", value: "frame-src https://www.loom.com https://cdn.loom.com 'self';" },
        ],
      },
    ];
  },
};


export default nextConfig;
