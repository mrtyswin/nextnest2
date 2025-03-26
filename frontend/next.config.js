/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, 
  swcMinify: true,
  compiler: {
    reactRemoveProperties: true,
  }
};

module.exports = nextConfig;
