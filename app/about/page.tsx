import Link from 'next/link'

export const metadata = {
  title: "About | Kimchi Quest",
  description: "Kimchi Quest is your complete guide to Korean fermented foods - recipes, health benefits, where to buy, and the science of fermentation.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-orange-50 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-kimchi-red">Kimchi Quest</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600">
            Your complete guide to Korean fermented foods.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-kimchi-red">Mission</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Kimchi Quest was created to share the wonderful world of Korean fermented foods
                  with everyone. Whether you want to make your own kimchi at home, learn about
                  its incredible health benefits, or find the best kimchi to buy in the UK,
                  we&apos;ve got you covered.
                </p>
                <p>
                  Our team is passionate about fermentation, gut health, and Korean cuisine.
                  We combine traditional knowledge with modern science to bring you accurate,
                  helpful, and practical information.
                </p>
                <p>
                  From traditional recipes passed down through generations to the latest
                  research on probiotics and gut health, Kimchi Quest is your trusted resource
                  for all things kimchi.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-kimchi-red/10 to-orange-100 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-6">🥬</div>
              <p className="text-xl text-gray-700 font-medium">
                Helping you discover the art and science of fermentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What We <span className="text-kimchi-red">Cover</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/recipes/traditional-kimchi-recipe" className="group bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-kimchi-red transition-colors">Recipes</h3>
              <p className="text-gray-600">
                Step-by-step guides to making kimchi and dishes with it.
              </p>
            </Link>

            <Link href="/health/kimchi-benefits" className="group bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-kimchi-red transition-colors">Health Benefits</h3>
              <p className="text-gray-600">
                Science-backed research on probiotics and gut health.
              </p>
            </Link>

            <Link href="/buy/best-kimchi-uk" className="group bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-kimchi-red transition-colors">Where to Buy</h3>
              <p className="text-gray-600">
                Reviews and guides to finding great kimchi in the UK.
              </p>
            </Link>

            <Link href="/culture/history-of-kimchi" className="group bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-kimchi-red transition-colors">Culture & History</h3>
              <p className="text-gray-600">
                The rich history and cultural significance of kimchi.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-kimchi-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Start Your Kimchi Journey
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-8">
            Whether you&apos;re a complete beginner or an experienced fermenter,
            there&apos;s always something new to learn about kimchi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kimchi"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-kimchi-red font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors"
            >
              Read the Complete Guide
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
