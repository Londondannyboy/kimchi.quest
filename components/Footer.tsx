import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🥬</span>
              <span className="font-bold text-2xl">
                Kimchi<span className="text-kimchi-red">Quest</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Your complete guide to kimchi - recipes, health benefits,
              where to buy, and everything you need to know about Korean fermented foods.
            </p>
          </div>

          {/* Content Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kimchi" className="text-gray-400 hover:text-kimchi-red transition-colors">
                  Kimchi Guide
                </Link>
              </li>
              <li>
                <Link href="/recipes/traditional-kimchi-recipe" className="text-gray-400 hover:text-kimchi-red transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/health/kimchi-benefits" className="text-gray-400 hover:text-kimchi-red transition-colors">
                  Health Benefits
                </Link>
              </li>
              <li>
                <Link href="/buy/best-kimchi-uk" className="text-gray-400 hover:text-kimchi-red transition-colors">
                  Where to Buy UK
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-kimchi-red transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/culture/types-of-kimchi" className="text-gray-400 hover:text-kimchi-red transition-colors">
                  Types of Kimchi
                </Link>
              </li>
              <li>
                <Link href="/culture/history-of-kimchi" className="text-gray-400 hover:text-kimchi-red transition-colors">
                  History of Kimchi
                </Link>
              </li>
              <li>
                <Link href="/buy/korean-supermarkets" className="text-gray-400 hover:text-kimchi-red transition-colors">
                  Korean Supermarkets UK
                </Link>
              </li>
              <li>
                <Link href="/guides/how-to-store-kimchi" className="text-gray-400 hover:text-kimchi-red transition-colors">
                  Storage Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Kimchi Quest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
