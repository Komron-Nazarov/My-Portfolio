// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// images: {
//   domains: ["your-project.supabase.co"],
// }

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   domains: ["your-project.supabase.co"],
  // },

  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "ylcrmbfuyuvmnupedoks.supabase.co",
    },
  ],
}
};

export default nextConfig;