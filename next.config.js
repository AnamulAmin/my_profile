/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  images: {
    domains: [
      'raw.githubusercontent.com',
      'devicons.devicon',
      'cryptoqualitysignals.com',
      'cdn.freebiesupply.com',
      'logowik.com',
      'axios-http.com',
      'www.vectorlogo.zone',
      'res.cloudinary.com',
      'th.bing.com',
      'jwt.io',
      'cdn.worldvectorlogo.com',
      'firebasestorage.googleapis.com'
    ],
  },
};

// Combine with next-transpile-modules configuration
const withTM = require('next-transpile-modules')(['gsap']);
module.exports = withTM(nextConfig);
