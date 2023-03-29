/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "pngimg.com",
      "fakestoreapi.com",
      "images-eu.ssl-images-amazon.com",
      "whitebox.com",
      "www.junglescout.com",
    ],
  },
  env: { stripe_public_key: process.env.STRIPE_PUBLIC_KEY },
};

module.exports = nextConfig;
