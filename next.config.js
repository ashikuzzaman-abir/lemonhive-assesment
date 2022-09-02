/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["*", "api.react-finland.fi", "www.reason-conf.com"],
  },
};

module.exports = nextConfig;
