import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "About Us | Ollie's Kimchi",
  description: "Learn about Ollie's Kimchi - handcrafted, naturally fermented kimchi made in London with love and tradition.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/Assets/Kimchi Xmas _23_002_14-12-23.jpg"
            alt="Ollie's Kimchi"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="text-kimchi-red">Story</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300">
            Bringing the art of fermentation to London, one jar at a time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                The Journey to <span className="text-kimchi-red">Perfect Kimchi</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  It started with a love for fermented foods and a kitchen full of cabbage.
                  What began as a personal quest to recreate the perfect kimchi turned into
                  something much bigger.
                </p>
                <p>
                  After countless batches, taste tests with friends and family, and deep dives
                  into traditional Korean fermentation techniques, Ollie&apos;s Kimchi was born.
                </p>
                <p>
                  Today, we handcraft every batch in our London kitchen using the finest
                  ingredients and time-honoured methods. No shortcuts, no preservatives -
                  just pure, living, delicious kimchi.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Assets/Kimchi_B012_24-04-21.jpg"
                alt="Ollie's Kimchi Jar"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What We <span className="text-kimchi-red">Believe</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Time Matters</h3>
              <p className="text-gray-600">
                Good fermentation can&apos;t be rushed. We let nature do its work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We source the freshest vegetables and authentic Korean ingredients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Benefits</h3>
              <p className="text-gray-600">
                Packed with probiotics and live cultures for gut health.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Made with Love</h3>
              <p className="text-gray-600">
                Every jar is handcrafted with passion and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* It's Alive Section */}
      <section className="py-20 bg-kimchi-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            It&apos;s Alive!
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-8">
            Our kimchi is a living food, teeming with beneficial bacteria that continue
            to develop and evolve. That&apos;s what makes it so special - and so good for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-kimchi-red font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors"
            >
              Shop Now
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
