import type { Metadata } from 'next'
import { Outfit, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Kimchi Quest | Your Complete Guide to Korean Fermented Foods",
  description: "Everything you need to know about kimchi - recipes, health benefits, where to buy, and the science of fermentation. Your UK guide to Korean fermented foods.",
  keywords: ['kimchi', 'kimchi recipes', 'fermented foods', 'korean food', 'probiotics', 'kimchi uk', 'how to make kimchi'],
  openGraph: {
    title: "Kimchi Quest",
    description: "Your complete guide to kimchi - recipes, health benefits, where to buy in the UK, and more.",
    url: 'https://kimchi.quest',
    siteName: "Kimchi Quest",
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${sourceSerif.variable}`}>
      <head>
        {/* Favicon - Q for Quest branding */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Kimchi Quest" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
