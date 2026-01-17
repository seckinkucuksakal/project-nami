/** @type {import('next').NextConfig} */
const repo = "project-nami";

const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? `/${repo}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repo}/` : "",
  images: { unoptimized: true },
};

module.exports = nextConfig;