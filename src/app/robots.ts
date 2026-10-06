import type { MetadataRoute } from "next";

// Hier zeggen we tegen de zoekrobotjes van Google: je mag alles bekijken!
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://creanina.vercel.app/sitemap.xml",
  };
}
