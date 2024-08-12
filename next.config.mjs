/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eikyoustorage.s3.us-east-2.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'eikyoustorage.s3.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
