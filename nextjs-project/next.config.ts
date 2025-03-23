import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',        // 🚨 Critical for static export
  experimental: {
    appDir: true           // 🚨 Required for App Router (since you're using `/src/app/`)
  },
  trailingSlash: true,      // Optional but recommended for static builds
  images: {
    unoptimized: true       // Required for `<Image>` in static builds
  }
}

export default nextConfig