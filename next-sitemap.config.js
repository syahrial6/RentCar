/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://rentalmobilpnk.com', // Ganti dengan domain kamu
    generateRobotsTxt: true, // Generate robots.txt juga
    sitemapSize: 5000, // Untuk batasi jumlah URL per sitemap
    changefreq: 'weekly',
    priority: 0.7,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  };
  