'use client'

import { useState } from 'react'
import type { FAQItem } from '@/lib/types/content'
import type { Locale } from '@/lib/i18n/dictionaries'

interface FaqAccordionProps {
  items: FAQItem[]
  lang: Locale
}

export default function FaqAccordion({ items, lang }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <div className="flex flex-col max-w-2xl">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} className="border-b border-fg/10">
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 text-left text-sm font-semibold hover:text-orange transition-colors"
            >
              {item.question[lang]}
              <span
                className={`shrink-0 h-6 w-6 rounded-full border border-fg/20 flex items-center justify-center text-lg leading-none transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-400 ease-in-out ${
                isOpen ? 'max-h-[200px]' : 'max-h-0'
              }`}
            >
              <p className="text-sm text-fg/55 leading-relaxed pb-5">{item.answer[lang]}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
