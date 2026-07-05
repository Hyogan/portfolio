import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import TestimonialCard from './TestimonialCard'
import type { Testimonial } from '@/lib/types/content'
import type { Locale } from '@/lib/i18n/dictionaries'

interface TestimonialsSectionProps {
  dict: {
    testimonials: {
      heading: string
      headingAccent: string
    }
  }
  testimonials: Testimonial[]
  lang: Locale
}

export default function TestimonialsSection({ dict, testimonials, lang }: TestimonialsSectionProps) {
  return (
    <section className="py-16 sm:py-20 border-t border-fg/10">
      <RevealWrapper>
        <SectionHeading main={dict.testimonials.heading} accent={dict.testimonials.headingAccent} className="mb-12" />
      </RevealWrapper>
      <RevealWrapper delay={0.05}>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.initials} testimonial={t} lang={lang} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  )
}
