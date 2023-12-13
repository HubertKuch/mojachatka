/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "http://localhost:3000",
    TOKEN_KEY: "token",
    REFRESH_KEY: "refresh_token"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },

};

module.exports = nextConfig;
