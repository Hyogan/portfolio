/*
  'server-only' is a sentinel package, importing it causes a build error
  if this module is ever imported from a Client Component ('use client').
  This protects our translation files from ending up in the client bundle,
  which matters because:
  - JSON dictionaries can be large
  - They contain no secrets but still bloat the JS bundle needlessly
  - All translation happens server-side; only the resulting HTML reaches the browser
*/
import 'server-only'

const dictionaries = {
  fr: () => import('@/dictionaries/fr.json').then((m) => m.default),
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
  es: () => import('@/dictionaries/es.json').then((m) => m.default),
}

export type Locale = keyof typeof dictionaries

export const locales = Object.keys(dictionaries) as Locale[]
export const defaultLocale: Locale = 'fr'

/** Type-safe locale check narrows `string` to `Locale` */
export function hasLocale(locale: string): locale is Locale {
  return locale in dictionaries
}

/** Load the dictionary for a given locale. Only runs on the server. */
export async function getDictionary(locale: Locale) {
  return dictionaries[locale]()
}

/** Infer the full dictionary type from the French source (source of truth) */
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
