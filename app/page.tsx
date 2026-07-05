import { redirect } from 'next/navigation'
import { defaultLocale } from '@/lib/i18n/dictionaries'

/*
  Safety net: if a request reaches this page without a locale prefix
  (e.g. during static export or if proxy.ts didn't run), redirect to the default.
  In normal operation, proxy.ts catches / before this page is ever rendered.
*/
export default function RootPage() {
  redirect(`/${defaultLocale}`)
}
