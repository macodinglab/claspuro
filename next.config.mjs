/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // <-- add this line
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,        // required for static export
  },
};

export default nextConfig;
