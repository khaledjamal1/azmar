/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://images.pexels.com', 'https://flaticon.com'],
  },
};

module.exports = nextConfig;
