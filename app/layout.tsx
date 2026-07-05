import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

/*
  WHY next/font/google instead of a CDN link?
  ─────────────────────────────────────────────
  next/font/google downloads Inter at BUILD TIME and self-hosts it.
  At runtime, the browser loads the font from your own domain — no Google
  request, no privacy/GDPR concern, no external failure point.
  The `variable` option injects --font-inter as a CSS custom property on
  <html>, which our @theme inline block picks up as --font-sans.
*/
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

/*
  This is the ROOT layout — the outermost shell Next.js renders.
  It must render <html> and <body>. Nothing else lives here yet;
  the real per-locale layout (fonts, ThemeProvider, metadata, JSON-LD)
  will be in app/[lang]/layout.tsx once i18n is wired up in commit 2.

  lang="fr" is a placeholder — commit 2 makes this dynamic via locale detection.
*/
export const metadata: Metadata = {
  title: 'Arsène Fogue — Fullstack & Product Manager',
  description:
    "Portfolio d'Arsène Nelson Fogue Tiagho, développeur fullstack et product manager basé à Douala, Cameroun.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased bg-bg text-fg">
        {children}
      </body>
    </html>
  )
}
