/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Required for Sanity Studio embedded in Next.js 14
  experimental: {
    serverComponentsExternalPackages: ["sanity"],
  },
};

export default nextConfig;
