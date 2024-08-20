/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay rebuild after the first change (300ms)
      };
      
    }

    return config;
  },
  images: {
    domains: ['console.cloudinary.com', 'res.cloudinary.com'], 
  },
};

export default nextConfig;
