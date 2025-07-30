/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/mariemwape',
  assetPrefix: '/mariemwape/',
}

module.exports = nextConfig