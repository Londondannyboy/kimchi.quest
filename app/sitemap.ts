import { MetadataRoute } from 'next'
import { getSeoArticles, getPublishedArticles } from '@/lib/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kimchi.quest'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/kimchi`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  // SEO articles from database
  const seoArticles = await getSeoArticles()
  const seoArticlePages: MetadataRoute.Sitemap = seoArticles.map((article) => ({
    url: `${baseUrl}/${article.slug}`,
    lastModified: article.updated_at || article.created_at,
    changeFrequency: 'weekly' as const,
    priority: article.cluster === 'pillar' ? 0.9 : 0.8,
  }))

  // Blog articles from database
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const blogArticles = await getPublishedArticles()
    blogPages = blogArticles.map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: article.updated_at || article.created_at,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch {
    // Blog table might not exist, continue without blog pages
  }

  return [...staticPages, ...seoArticlePages, ...blogPages]
}
