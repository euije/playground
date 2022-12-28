// @type {import('next').NextConfig}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
    ],
    unoptimized : true
  },
};

module.exports = nextConfig;