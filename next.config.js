/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_BACKEND_HOST, 'i.pravatar.cc'],
  },
};

module.exports = nextConfig;
