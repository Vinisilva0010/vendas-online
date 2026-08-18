import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://zanvendas.zanvexis.com/sitemap.xml",
    host: "https://zanvendas.zanvexis.com",
  };
}