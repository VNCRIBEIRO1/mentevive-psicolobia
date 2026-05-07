import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/act-para-criadores",
        destination: "/o-que-e-act",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
