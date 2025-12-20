import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Decorative bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="bubble absolute w-4 h-4 bg-kimchi-red/20 rounded-full left-[10%]" style={{ animationDelay: '0s' }} />
          <div className="bubble absolute w-3 h-3 bg-kimchi-red/30 rounded-full left-[20%]" style={{ animationDelay: '0.5s' }} />
          <div className="bubble absolute w-5 h-5 bg-kimchi-red/15 rounded-full left-[80%]" style={{ animationDelay: '1s' }} />
          <div className="bubble absolute w-2 h-2 bg-kimchi-red/25 rounded-full left-[70%]" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Handcrafted
                <span className="block text-kimchi-red">Kimchi</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                Naturally fermented in London. Bursting with probiotics,
                flavour, and tradition. Every jar is made with love.
              </p>
              <p className="mt-4 text-2xl font-semibold text-kimchi-red pulse-alive">
                It&apos;s Alive!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/shop"
                  className="btn-primary rounded-full text-lg"
                >
                  Shop Now
                </Link>
                <Link
                  href="/about"
                  className="btn-secondary rounded-full text-lg"
                >
                  Our Story
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="float-animation">
                <Image
                  src="/Assets/Kimchi_B004_23-04-25.jpg"
                  alt="Ollie's Kimchi Jar"
                  width={500}
                  height={600}
                  className="mx-auto rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kimchi Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Why <span className="text-kimchi-red">Ollie&apos;s</span> Kimchi?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Made with Love</h3>
              <p className="text-gray-600">
                Every batch is handcrafted with care using traditional methods passed down through generations.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gut Friendly</h3>
              <p className="text-gray-600">
                Packed with natural probiotics and beneficial bacteria to support your digestive health.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fresh & Natural</h3>
              <p className="text-gray-600">
                No preservatives, no shortcuts. Just fresh vegetables, authentic spices, and time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/Assets/Kimchi_B006_30-11-20.jpg"
                alt="Ollie's Kimchi"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <span className="text-kimchi-red font-semibold uppercase tracking-wider">
                Our Signature
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
                Classic Napa Cabbage Kimchi
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our flagship kimchi is made with crisp napa cabbage, Korean red pepper flakes
                (gochugaru), garlic, ginger, and fish sauce. Fermented to perfection for that
                perfect balance of spicy, tangy, and umami.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-kimchi-red mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Naturally fermented
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-kimchi-red mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Live cultures in every bite
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-kimchi-red mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Vegan options available
                </li>
              </ul>
              <Link
                href="/shop"
                className="btn-primary rounded-full"
              >
                Shop All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-kimchi-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Try the Best Kimchi in London?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Order online and get fresh, naturally fermented kimchi delivered straight to your door.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-kimchi-red font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors"
          >
            Order Now
          </Link>
        </div>
      </section>
    </div>
  )
}
