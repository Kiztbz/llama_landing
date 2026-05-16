export default function sitemap() {
  const baseUrl = "https://llamacoop.dev";

  const routes = [
    { path: "",          changeFrequency: "weekly",  priority: 1.0 },
    { path: "/careers",  changeFrequency: "weekly",  priority: 0.9 },
    { path: "/about",    changeFrequency: "monthly", priority: 0.8 },
    { path: "/membership", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact",  changeFrequency: "monthly", priority: 0.8 },
    { path: "/projects", changeFrequency: "monthly", priority: 0.7 },
    { path: "/scholar",  changeFrequency: "monthly", priority: 0.7 },
    { path: "/donate",   changeFrequency: "monthly", priority: 0.6 },
    { path: "/join",     changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacy",  changeFrequency: "yearly",  priority: 0.3 },
    { path: "/terms",    changeFrequency: "yearly",  priority: 0.3 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
