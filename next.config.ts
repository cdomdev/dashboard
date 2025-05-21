import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      
    ],
  },
  allowedDevOrigins: [
    'https://3000-firebase-dashboard-1746882853146.cluster-hf4yr35cmnbd4vhbxvfvc6cp5q.cloudworkstations.dev',
  ],
};

export default nextConfig;
