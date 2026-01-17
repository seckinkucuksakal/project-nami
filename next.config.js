/** @type {import('next').NextConfig} */
const repo = "project-nami";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true },
};

module.exports = nextConfig;
