import { getPublishedArticles, getCategories } from '@/lib/db'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "Blog | Kimchi Quest",
  description: "Discover recipes, health tips, and everything you need to know about kimchi and fermented foods.",
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogPage() {
  const [articles, categories] = await Promise.all([
    getPublishedArticles(),
    getCategories(),
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            The <span className="text-kimchi-red">Kimchi</span> Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Recipes, tips, and the science behind fermentation.
            Everything you need to know about kimchi and gut health.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <span className="px-4 py-2 bg-kimchi-red text-white rounded-full text-sm font-medium">
              All
            </span>
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-kimchi-red hover:text-kimchi-red transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        {/* Articles Grid */}
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {article.featured_image && (
                  <div className="aspect-video relative overflow-hidden bg-gray-100">
                    <Image
                      src={article.featured_image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-kimchi-red/10 text-kimchi-red text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    {article.published_at && (
                      <span className="text-xs text-gray-500">
                        {new Date(article.published_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-kimchi-red transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-gray-600 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 text-kimchi-red font-medium text-sm group-hover:underline">
                    Read more &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="bg-kimchi-red py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Fermentation Tips in Your Inbox
          </h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter for recipes, health tips, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-kimchi-red font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
