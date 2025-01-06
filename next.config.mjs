/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.cdn2.seaart.me',
            search: '**',
          },
        ],
      },
};

export default nextConfig;
