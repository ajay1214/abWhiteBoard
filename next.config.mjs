/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "img.clerk.com" }],
  },
  swcMinify: true,
  experimental: {
    reactRoot: true,
  },
  compiler: {
    reactRemoveProperties: true,
    removeConsole: false,
  },
  swcOptions: {
    jsc: {
      transform: {
        react: {
          throwIfNamespace: false, // Allows JSX namespaces
        },
      },
    },
  },
};

export default nextConfig;
