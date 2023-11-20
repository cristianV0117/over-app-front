/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API: process.env.API,
    DOMAIN_API: process.env.DOMAIN_API,
    API_JWT: process.env.API_JWT
  }
}
const withTM = require('next-transpile-modules')(['laravel-echo', 'pusher-js']);

module.exports = withTM(nextConfig)
