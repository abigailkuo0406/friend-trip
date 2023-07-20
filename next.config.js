/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['via.placeholder.com', 'localhost'],
  },
  // avoid cors with proxy
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/:path*', // Proxy to Backend
      },
    ]
  },
  env: {
    API_SERVER: 'http://localhost:3002',
  },
}
// const nextConfig = {
//   reactStrictMode: true,

//   images: {
//     loader: 'akamai',

//     path: '',
//   },

//   basePath: '/next-pages',

//   assetPrefix: '/next-pages',
// }
module.exports = nextConfig
