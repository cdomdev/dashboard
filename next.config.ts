import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ['res.cloudinary.com'],
  },
  allowedDevOrigins: ['https://studio.firebase.google.com'],
};

export default nextConfig;
