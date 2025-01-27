import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**', // Allows all paths for plus.unsplash.com
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Allows all paths for images.unsplash.com
      },
      {
        protocol: 'https',
      hostname :"${parsedSrc.hostname}",
        pathname: '/**', // Allows all paths for images.unsplash.com
      },
      {
        protocol: 'https',
      hostname :"drive.google.com",
        pathname: '/**', // Allows all paths for images.unsplash.com
      },
    ],
  },
};

export default nextConfig;
