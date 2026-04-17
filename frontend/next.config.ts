// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placehold.co"], // allow external image host
  },
   devIndicators: {
    buildActivity: false, // hides the bottom-right "N" indicator in dev
  },
};

export default nextConfig;
