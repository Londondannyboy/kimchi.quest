import Link from 'next/link'
import { getSeoArticlesByCluster } from '@/lib/db'

export default async function HomePage() {
  const [recipes, health] = await Promise.all([
    getSeoArticlesByCluster('recipes'),
    getSeoArticlesByCluster('health'),
  ])

  const topRecipes = recipes.slice(0, 3)
  const topHealth = health.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <p className="text-sm text-kimchi-red font-bold mb-4">🥬 KIMCHI QUEST - Your UK Kimchi Resource</p>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Your Complete Guide to
              <span className="block text-kimchi-red">Kimchi</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about Korean fermented vegetables.
              Recipes, health benefits, where to buy in the UK, and more.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kimchi"
                className="btn-primary rounded-full text-lg"
              >
                Read the Guide
              </Link>
              <Link
                href="/recipes/traditional-kimchi-recipe"
                className="btn-secondary rounded-full text-lg"
              >
                Make Your Own
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/kimchi" className="group p-6 bg-gray-50 rounded-2xl hover:bg-kimchi-red/5 transition-colors">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-kimchi-red">Complete Guide</h3>
              <p className="text-sm text-gray-600 mt-1">Everything about kimchi</p>
            </Link>
            <Link href="/recipes/traditional-kimchi-recipe" className="group p-6 bg-gray-50 rounded-2xl hover:bg-kimchi-red/5 transition-colors">
              <div className="text-3xl mb-3">👨‍🍳</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-kimchi-red">Recipes</h3>
              <p className="text-sm text-gray-600 mt-1">Make kimchi at home</p>
            </Link>
            <Link href="/health/kimchi-benefits" className="group p-6 bg-gray-50 rounded-2xl hover:bg-kimchi-red/5 transition-colors">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-kimchi-red">Health Benefits</h3>
              <p className="text-sm text-gray-600 mt-1">Science-backed benefits</p>
            </Link>
            <Link href="/buy/best-kimchi-uk" className="group p-6 bg-gray-50 rounded-2xl hover:bg-kimchi-red/5 transition-colors">
              <div className="text-3xl mb-3">🛒</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-kimchi-red">Where to Buy</h3>
              <p className="text-sm text-gray-600 mt-1">Best kimchi in the UK</p>
            </Link>
          </div>
        </div>
      </section>

      {/* What is Kimchi */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-kimchi-red font-semibold uppercase tracking-wider">
                Discover
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
                What is Kimchi?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Kimchi is Korea&apos;s national dish - fermented vegetables (usually napa cabbage)
                seasoned with gochugaru, garlic, ginger, and fish sauce. It&apos;s been a cornerstone
                of Korean cuisine for over 2,000 years.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-kimchi-red mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Rich in probiotics for gut health
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-kimchi-red mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Low calorie, high in vitamins
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-kimchi-red mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Over 200 varieties exist
                </li>
              </ul>
              <Link
                href="/kimchi"
                className="btn-primary rounded-full"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-gradient-to-br from-kimchi-red/10 to-orange-100 rounded-2xl p-8 text-center">
              <div className="text-8xl mb-4">🥬</div>
              <p className="text-gray-700 font-medium">
                UNESCO recognised Kimjang (communal kimchi-making) as
                Intangible Cultural Heritage in 2013
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Recipes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Popular <span className="text-kimchi-red">Recipes</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Learn to make kimchi and delicious dishes with it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {topRecipes.map((article) => (
              <Link
                key={article.id}
                href={`/${article.slug}`}
                className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <span className="text-xs text-kimchi-red font-medium uppercase">
                  Recipe
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-kimchi-red transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-gray-600 line-clamp-2">
                  {article.excerpt || article.meta_description}
                </p>
                <span className="mt-4 inline-block text-kimchi-red font-medium">
                  Read more →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/recipes/traditional-kimchi-recipe" className="text-kimchi-red font-medium hover:underline">
              View all recipes →
            </Link>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Health <span className="text-kimchi-red">Benefits</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The science behind kimchi&apos;s superfood status
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {topHealth.map((article) => (
              <Link
                key={article.id}
                href={`/${article.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <span className="text-xs text-kimchi-red font-medium uppercase">
                  Health
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-kimchi-red transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-gray-600 line-clamp-2">
                  {article.excerpt || article.meta_description}
                </p>
                <span className="mt-4 inline-block text-kimchi-red font-medium">
                  Read more →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/health/kimchi-benefits" className="text-kimchi-red font-medium hover:underline">
              View all health articles →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-kimchi-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Kimchi Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you want to make it yourself or find the best kimchi to buy,
            we&apos;ve got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recipes/traditional-kimchi-recipe"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-kimchi-red font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors"
            >
              Make Your Own
            </Link>
            <Link
              href="/buy/best-kimchi-uk"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-colors"
            >
              Where to Buy UK
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
