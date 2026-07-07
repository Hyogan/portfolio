'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'

const locales = ['fr', 'en', 'es'] as const

interface LanguageSwitcherProps {
  lang: string
  labels: { fr: string; en: string; es: string }
}

export default function LanguageSwitcher({ lang, labels }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  function getPath(newLang: string) {
    const segments = pathname.split('/')
    segments[1] = newLang
    return segments.join('/')
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Select language"
        className="flex h-10 w-10 items-center justify-center rounded-full text-fg/60 hover:bg-fg/8 hover:text-fg transition-colors"
      >
        <Globe size={18} />
      </button>

      {open && (
        <>
          <button
            className="fixed inset-0 z-10 cursor-default"
            onClick={() => setOpen(false)}
            aria-label="Close language menu"
            tabIndex={-1}
          />
          <div className="absolute top-full right-0 mt-2 z-20 min-w-[110px] rounded-xl border border-fg/10 bg-surface p-1 shadow-xl">
            {locales.map((l) => (
              <a
                key={l}
                href={getPath(l)}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-colors hover:bg-fg/8 ${
                  l === lang ? 'text-orange' : 'text-fg/60 hover:text-fg'
                }`}
              >
                {l === lang && <span className="h-1 w-1 rounded-full bg-orange" />}
                {labels[l]}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
