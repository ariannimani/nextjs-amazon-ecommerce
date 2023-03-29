/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "pngimg.com",
      "fakestoreapi.com",
      "images-eu.ssl-images-amazon.com",
      "whitebox.com",
    ],
  },
};

module.exports = nextConfig;
