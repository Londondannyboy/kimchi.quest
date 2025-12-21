import Link from 'next/link'

export const metadata = {
  title: "Contact | Kimchi Quest",
  description: "Get in touch with the Kimchi Quest team. We'd love to hear your questions, feedback, or suggestions about kimchi and fermented foods.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Get in <span className="text-kimchi-red">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question about kimchi? Found an error in one of our articles?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kimchi-red focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kimchi-red focus:border-transparent transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kimchi-red focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kimchi-red focus:border-transparent transition-colors"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="question">Question about Kimchi</option>
                  <option value="recipe">Recipe Help</option>
                  <option value="correction">Article Correction</option>
                  <option value="suggestion">Content Suggestion</option>
                  <option value="feedback">General Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kimchi-red focus:border-transparent transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary rounded-full w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info Cards */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About Kimchi Quest</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Kimchi Quest is your comprehensive guide to Korean fermented foods.
                  We cover recipes, health benefits, where to buy, and the fascinating
                  culture behind kimchi.
                </p>
                <p>
                  Our content is researched and written by fermentation enthusiasts
                  passionate about sharing the joy of kimchi with the UK.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-kimchi-red rounded-2xl shadow-sm p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Popular Resources</h2>
              <p className="text-white/90 mb-6">
                Looking for something specific? Check out our most popular guides:
              </p>
              <div className="space-y-3">
                <Link
                  href="/recipes/traditional-kimchi-recipe"
                  className="block text-white hover:text-white/80 transition-colors"
                >
                  → How to Make Traditional Kimchi
                </Link>
                <Link
                  href="/health/kimchi-benefits"
                  className="block text-white hover:text-white/80 transition-colors"
                >
                  → Health Benefits of Kimchi
                </Link>
                <Link
                  href="/buy/best-kimchi-uk"
                  className="block text-white hover:text-white/80 transition-colors"
                >
                  → Best Kimchi to Buy in the UK
                </Link>
                <Link
                  href="/guides/how-to-store-kimchi"
                  className="block text-white hover:text-white/80 transition-colors"
                >
                  → How to Store Kimchi
                </Link>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">New to Kimchi?</h2>
              <p className="text-gray-600 mb-6">
                Start with our comprehensive guide that covers everything from
                what kimchi is to how to make it at home.
              </p>
              <Link
                href="/kimchi"
                className="text-kimchi-red hover:underline font-semibold"
              >
                Read the Complete Kimchi Guide →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
