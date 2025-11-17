// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['picsum.photos'], // ✅ Allow external image domain
  },
};

export default nextConfig;
