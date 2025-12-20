import { neon } from '@neondatabase/serverless'

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set')
}

export const sql = neon(DATABASE_URL)

// Blog article type
export interface Article {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  featured_image?: string
  author: string
  category: string
  tags: string[]
  published: boolean
  published_at: Date | null
  created_at: Date
  updated_at: Date
}

// Get all published articles
export async function getPublishedArticles(): Promise<Article[]> {
  const articles = await sql`
    SELECT * FROM articles
    WHERE published = true
    ORDER BY published_at DESC
  `
  return articles as Article[]
}

// Get article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await sql`
    SELECT * FROM articles
    WHERE slug = ${slug} AND published = true
    LIMIT 1
  `
  return (articles[0] as Article) || null
}

// Get articles by category
export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const articles = await sql`
    SELECT * FROM articles
    WHERE category = ${category} AND published = true
    ORDER BY published_at DESC
  `
  return articles as Article[]
}

// Get recent articles
export async function getRecentArticles(limit: number = 3): Promise<Article[]> {
  const articles = await sql`
    SELECT * FROM articles
    WHERE published = true
    ORDER BY published_at DESC
    LIMIT ${limit}
  `
  return articles as Article[]
}

// Get all categories
export async function getCategories(): Promise<string[]> {
  const result = await sql`
    SELECT DISTINCT category FROM articles
    WHERE published = true
    ORDER BY category
  `
  return result.map((r) => r.category as string)
}
