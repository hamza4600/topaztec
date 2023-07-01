/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // swcMinify is enabled by default in production mode
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
