// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['image.cdn2.seaart.me','img.freepik.com'], // Allow the entire domain
//     },
//   };
  
//   export default nextConfig;

// Deprecated since Next.js 14 in favor of strict remotePatterns in order to protect your application from malicious users.
//  Only use domains if you own all the content served from the domain.

  /** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.cdn2.seaart.me',
            // port:'',
            // search: '/**',  // Allows all paths under the hostname
          },
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
          },
        //   {
        //     protocol: 'https',
        //     hostname: '**',   //can be use all the hostnames (wildcards) including https
        //   },
        ],
      },
};

export default nextConfig;
  
