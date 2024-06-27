/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ucarecdn.com',
          },
          {
            protocol: 'https',
            hostname: 'beedsneeds-storage.s3.ap-south-1.amazonaws.com',
          },
        ],
      },
};
    

export default nextConfig;

