import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ['res.cloudinary.com', 'encrypted-tbn0.gstatic.com',
      'www.tarjetaalkosto.com.co',],
  },
  allowedDevOrigins: [
    'https://3000-firebase-dashboard-1746882853146.cluster-hf4yr35cmnbd4vhbxvfvc6cp5q.cloudworkstations.dev',
  ],
};

export default nextConfig;
