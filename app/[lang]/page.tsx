import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/i18n/dictionaries'

/*
  Home page stub — replaced with full section assembly in commit 19.
  Exists now to prove the i18n routing and dictionary loading work correctly.
  Visit /fr → sees French, /en → English, /es → Spanish.
*/
export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6">
      <p className="text-orange font-black text-3xl tracking-tight">
        Arsène<span className="text-fg">.</span>dev
      </p>
      <p className="text-fg/55 text-sm">
        [{lang.toUpperCase()}] {dict.meta.title}
      </p>
      <p className="text-fg/30 text-xs">
        {dict.hero.heading1} {dict.hero.heading2}
      </p>
    </main>
  )
}
