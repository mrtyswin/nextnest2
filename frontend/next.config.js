/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, 
  swcMinify: true,
  compiler: {
    reactRemoveProperties: true,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 800,              // 0.8秒ごとにファイルの変更を監視
      aggregateTimeout: 300,  // 変更検知後の待機時間
    };
    return config;
  },
};

module.exports = nextConfig;
