import { MetadataRoute } from 'next'
import { page_routes } from '@/lib/routes-config'
import { getAllBlogStaticPaths } from '@/lib/markdown'

const BASE_URL = 'https://bestofgit.codes'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = page_routes.map((route) => ({
    url: `${BASE_URL}/repositories${route.href}`,
    lastModified: new Date(),
  }))

  const blogPaths = await getAllBlogStaticPaths()
  const blogRoutes = blogPaths?.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
  })) || []

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
    },
    ...routes,
    ...blogRoutes,
  ]
}

