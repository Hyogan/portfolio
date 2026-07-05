import type { Testimonial } from '@/lib/types/content'
import type { Locale } from '@/lib/i18n/dictionaries'

interface TestimonialCardProps {
  testimonial: Testimonial
  lang: Locale
}

export default function TestimonialCard({ testimonial, lang }: TestimonialCardProps) {
  return (
    <div className="bg-surface rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.04)_inset]">
      <p className="text-fg/35 text-3xl mb-3 leading-none">&ldquo;</p>
      <p className="text-sm text-fg/65 leading-relaxed mb-5">{testimonial.quote[lang]}</p>
      <div className="flex items-center gap-3">
        <span className="h-9 w-9 rounded-full bg-orange/20 text-orange font-bold text-xs flex items-center justify-center shrink-0">
          {testimonial.initials}
        </span>
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-fg/35">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
