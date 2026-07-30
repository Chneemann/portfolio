/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
