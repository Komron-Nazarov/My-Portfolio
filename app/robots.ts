// import type { MetadataRoute } from "next";

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: {
//       userAgent: "*",
//       allow: "/",
//       disallow: ["/admin", "/login"],
//     },
//     sitemap:
//       "https://kn-portfolio-one.vercel.app/sitemap.xml",
//   };
// }

import type { MetadataRoute } from "next";

const siteUrl =
  "https://kn-portfolio-one.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",

      allow: "/",

      disallow: [
        "/admin",
        "/login",
        "/register",
        "/api/",
      ],
    },

    sitemap: `${siteUrl}/sitemap.xml`,

    host: siteUrl,
  };
}