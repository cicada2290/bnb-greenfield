import { cache } from 'react'
import { notFound } from 'next/navigation'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { IBM_Plex_Serif, Inconsolata } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '@/components/Header'
import type { Metadata } from 'next'

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

const locales = ['en'] as const

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif',
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inconsolata',
})

type Locale = (typeof locales)[number]

const getMetadata = cache((locale: string): Metadata => {
  if (!locales.includes(locale as Locale)) notFound()

  const safeLocale = locale as Locale

  const localizedMetadata: Record<
    Locale,
    { title: string; description: string }
  > = {
    en: {
      title: 'BooFi | Spooky Crypto-Finance Made Easy',
      description: 'xxxxx',
    },
  }

  return {
    title: {
      default: localizedMetadata[safeLocale].title,
      template: `%s | BooFi`,
    },
  }
})

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${GeistMono.variable} ${ibmPlexSerif.variable} ${inconsolata.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ChakraProvider>
          <Header />
          <main>{children}</main>
        </ChakraProvider>
      </body>
    </html>
  )
}

export async function generateMetadata({
  params: { locale },
}: RootLayoutProps): Promise<Metadata> {
  return getMetadata(locale)
}
