import { MetadataRoute } from 'next'
import { getAllBlogStaticPaths } from '@/lib/markdown'
import { page_routes } from '@/lib/routes-config'
import fs from 'fs/promises'
import path from 'path'

async function generateSitemapEntries() {
  const baseUrl = 'https://bestofgit.vercel.app'
  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Add blog posts
  const blogPaths = await getAllBlogStaticPaths()
  blogPaths?.forEach(slug => {
    entries.push({
      url: `${baseUrl}/blogs/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  // Add docs pages
  const docsDir = path.join(process.cwd(), 'contents', 'docs')
  const docFiles = await fs.readdir(docsDir)
  for (const file of docFiles) {
    if (file.endsWith('.md')) {
      const slug = file.replace('.md', '')
      entries.push({
        url: `${baseUrl}/docs/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    }
  }

  // Add other pages
  page_routes.forEach(route => {
    entries.push({
      url: `${baseUrl}${route.href}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  return entries
}

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  return generateSitemapEntries()
}
