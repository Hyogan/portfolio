import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import { locales, defaultLocale } from '@/lib/i18n/dictionaries'
import './globals.css'

/*
  WHY read the locale from a cookie here instead of URL params?
  ──────────────────────────────────────────────────────────────
  Next.js requires the root layout (app/layout.tsx) to render <html> and <body>.
  But root layouts have no access to dynamic segment params — those only exist in
  nested layouts. The proxy.ts sets a NEXT_LOCALE cookie on every request,
  which this root layout can read to get the correct lang attribute.
*/
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Arsène Fogue',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const rawLang = cookieStore.get('NEXT_LOCALE')?.value ?? defaultLocale
  const lang = (locales as readonly string[]).includes(rawLang) ? rawLang : defaultLocale

  return (
    <html lang={lang} className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased bg-bg text-fg">
        {children}
      </body>
    </html>
  )
}
