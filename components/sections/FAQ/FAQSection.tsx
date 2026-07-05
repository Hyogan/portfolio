import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import FaqAccordion from './FaqAccordion'
import type { FAQItem } from '@/lib/types/content'
import type { Locale } from '@/lib/i18n/dictionaries'

interface FAQSectionProps {
  dict: {
    faq: {
      heading: string
      headingAccent: string
    }
  }
  faq: FAQItem[]
  lang: Locale
}

export default function FAQSection({ dict, faq, lang }: FAQSectionProps) {
  return (
    <section id="faq" className="py-16 sm:py-20 border-t border-fg/10">
      <RevealWrapper>
        <SectionHeading main={dict.faq.heading} accent={dict.faq.headingAccent} className="mb-12" />
      </RevealWrapper>
      <RevealWrapper delay={0.05}>
        <FaqAccordion items={faq} lang={lang} />
      </RevealWrapper>
    </section>
  )
}
