import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Do not let search engines crawl the admin dashboard
    },
    sitemap: 'https://nandanitravels.com/sitemap.xml',
  }
}
