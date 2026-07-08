import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getDictionary, hasLocale } from '@/lib/i18n/dictionaries'

/*
  This is the locale-aware nested layout - it wraps every page under /fr/, /en/, /es/.
  It does NOT render <html> or <body> (that's the root layout's job).

  Current responsibilities:
  - Validate the locale segment (404 for unknown langs like /xx/)
  - Generate locale-specific metadata (title, description, OG, hreflang)
  - Will also wrap ThemeProvider and FloatingNav (added in commit 6 & 8)

  WHY generateStaticParams?
  Pre-renders /fr/, /en/, /es/ at build time → zero server compute per visit.
  This is what makes the portfolio deployable to a CDN/static hosting.
*/

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }, { lang: 'es' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params

  if (!hasLocale(lang)) return {}

  const dict = await getDictionary(lang)

  return {
    title: {
      default: dict.meta.title,
      template: `%s | Arsène Fogue`,
    },
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        fr: '/fr',
        en: '/en',
        es: '/es',
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'fr' ? 'fr_FR' : lang === 'es' ? 'es_ES' : 'en_US',
      siteName: 'Arsène Fogue',
    },
    twitter: {
      card: 'summary_large_image',
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  // Guard: unknown locale → 404 instead of broken page
  if (!hasLocale(lang)) notFound()

  return <>{children}</>
}
