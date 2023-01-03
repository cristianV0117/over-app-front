/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API: process.env.API,
    DOMAIN_API: process.env.DOMAIN_API,
    API_JWT: process.env.API_JWT
  }
}

module.exports = nextConfig
