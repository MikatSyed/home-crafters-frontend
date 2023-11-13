/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your configurations go here
    images: {
      domains: ['res.cloudinary.com','localhost','img.icons8.com'], // Add your Cloudinary domain here
    },
    webpack: (config, { isServer }) => {
      // Modify webpack config
  
      if (!isServer) {
        // Client-side only config
      }
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  