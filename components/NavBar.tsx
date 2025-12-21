'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🥬</span>
            <span className="font-bold text-xl text-gray-900">
              Kimchi<span className="text-kimchi-red">Quest</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/kimchi"
              className="text-gray-700 hover:text-kimchi-red font-medium transition-colors"
            >
              Guide
            </Link>
            <Link
              href="/recipes/traditional-kimchi-recipe"
              className="text-gray-700 hover:text-kimchi-red font-medium transition-colors"
            >
              Recipes
            </Link>
            <Link
              href="/health/kimchi-benefits"
              className="text-gray-700 hover:text-kimchi-red font-medium transition-colors"
            >
              Health
            </Link>
            <Link
              href="/buy/best-kimchi-uk"
              className="text-gray-700 hover:text-kimchi-red font-medium transition-colors"
            >
              Where to Buy
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-kimchi-red font-medium transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                href="/kimchi"
                className="text-gray-700 hover:text-kimchi-red font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Guide
              </Link>
              <Link
                href="/recipes/traditional-kimchi-recipe"
                className="text-gray-700 hover:text-kimchi-red font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Recipes
              </Link>
              <Link
                href="/health/kimchi-benefits"
                className="text-gray-700 hover:text-kimchi-red font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Health
              </Link>
              <Link
                href="/buy/best-kimchi-uk"
                className="text-gray-700 hover:text-kimchi-red font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Where to Buy
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-kimchi-red font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
