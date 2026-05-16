export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: "https://llamacoop.dev/sitemap.xml",
    host: "https://llamacoop.dev",
  };
}
