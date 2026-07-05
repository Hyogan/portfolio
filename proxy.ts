/*
  proxy.ts — renamed from middleware.ts in Next.js 16 (breaking change).
  Runs on the Edge before every request that matches `config.matcher`.

  Responsibilities:
  1. Detect the user's preferred locale from the Accept-Language header
  2. Redirect paths without a locale prefix (e.g. / → /fr/)
  3. Set a NEXT_LOCALE cookie so app/layout.tsx can read it for <html lang="">
     (root layout cannot access URL params directly — cookie bridges the gap)
*/

import { type NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

export const locales = ['fr', 'en', 'es'] as const
export const defaultLocale = 'fr' as const

type SupportedLocale = (typeof locales)[number]

function getLocale(request: NextRequest): SupportedLocale {
  const acceptLanguage = request.headers.get('accept-language') ?? defaultLocale
  // Negotiator parses the Accept-Language header into a priority-sorted array
  const languages = new Negotiator({ headers: { 'accept-language': acceptLanguage } }).languages()
  try {
    // intl-localematcher picks the best match from our supported locales
    return match(languages, [...locales], defaultLocale) as SupportedLocale
  } catch {
    return defaultLocale
  }
}

function setCookieLocale(response: NextResponse, locale: string) {
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365, // 1 year
  })
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  )

  if (pathnameHasLocale) {
    // Locale already in path — just refresh the cookie so root layout stays synced
    const currentLocale =
      locales.find((l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`) ?? defaultLocale
    const response = NextResponse.next()
    setCookieLocale(response, currentLocale)
    return response
  }

  // No locale in path — detect from browser and redirect
  const locale = getLocale(request)
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url)

  // Preserve search params (e.g. /?ref=github → /fr/?ref=github)
  redirectUrl.search = request.nextUrl.search

  const response = NextResponse.redirect(redirectUrl)
  setCookieLocale(response, locale)
  return response
}

export const config = {
  matcher: [
    /*
      Match everything EXCEPT:
      - _next/static, _next/image (Next.js internals)
      - api routes
      - favicon.ico, assets folder (public files)
      Without this, proxy would intercept image optimization requests too.
    */
    '/((?!_next|api|favicon\\.ico|assets).*)',
  ],
}
