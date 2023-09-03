/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*', // 匹配你的API路由
        destination: 'http://121.36.249.62:3000/:path*', // 目标API的地址
      },
    ];
  },
};

module.exports = nextConfig;
