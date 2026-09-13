import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/services/klaviyo-setup',
        destination: '/services/klaviyo-account-setup',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
