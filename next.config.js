// const withPlugins = require('next-compose-plugins');
// // const optimizedImages = require('next-optimized-images');

// const nextConfiguration = {
//   images: {
//     disableStaticImages: true,
//   },
//   target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
// };

// module.exports = withPlugins([], nextConfiguration);

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "source.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
