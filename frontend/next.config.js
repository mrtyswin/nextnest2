/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    watchDirs: ['./'],  // ファイル変更の監視を明示
  },
};

module.exports = nextConfig;
