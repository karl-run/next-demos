import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Bør styres via miljøvariabel
  assetPrefix: "https://cdn.example.com/",
};

export default nextConfig;
