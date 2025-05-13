/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://pouchcare.com",
  generateRobotsTxt: true,
  // optional settings:
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin"],
};
