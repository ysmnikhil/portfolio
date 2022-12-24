/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: ['media.licdn.com', 'www.uvdesk.com', 'www.bookingcommerce.com'],
  },
}

module.exports = nextConfig
