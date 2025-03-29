import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 🔥 This enables static export for Amplify compatibility
};

export default nextConfig;