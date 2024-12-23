/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatar.iran.liara.run", "lh3.googleusercontent.com"], // Add the domain here
  },
};

module.exports = nextConfig;
