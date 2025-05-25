/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ryanguidry.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://ryanguidry.com/server-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // Add additional sitemap configurations for blog posts
  additionalPaths: async (config) => {
    // This is where you would fetch your blog posts
    // For now, we'll return an empty array
    return [];
  },
} 