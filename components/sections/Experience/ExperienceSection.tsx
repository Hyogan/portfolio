import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import ExperienceItem from './ExperienceItem'
import type { ExperienceItem as ExperienceItemType } from '@/lib/types/content'
import type { Locale } from '@/lib/i18n/dictionaries'

interface ExperienceSectionProps {
  dict: {
    experience: {
      heading: string
      headingAccent: string
      current: string
    }
  }
  experience: ExperienceItemType[]
  lang: Locale
}

export default function ExperienceSection({ dict, experience, lang }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-fg/10">
      <RevealWrapper>
        <SectionHeading
          main={dict.experience.heading}
          accent={dict.experience.headingAccent}
          className="mb-14 sm:mb-20"
        />
      </RevealWrapper>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-orange/30" />
        {experience.map((item, i) => (
          <RevealWrapper key={i} delay={0.05 * i}>
            <ExperienceItem
              item={item}
              index={i}
              lang={lang}
              currentLabel={dict.experience.current}
            />
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
