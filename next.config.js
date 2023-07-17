/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'via.placeholder.com',
      'localhost',
      'static.skillshare.com',
      'images.unsplash.com',
    ],
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

module.exports = nextConfig
