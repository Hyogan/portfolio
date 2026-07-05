import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import EducationItem from './EducationItem'
import type { EducationItem as EducationItemType } from '@/lib/types/content'
import type { Locale } from '@/lib/i18n/dictionaries'

interface EducationSectionProps {
  dict: {
    education: {
      heading: string
      headingAccent: string
      obtained: string
    }
  }
  education: EducationItemType[]
  lang: Locale
}

export default function EducationSection({ dict, education, lang }: EducationSectionProps) {
  return (
    <section id="education" className="py-16 sm:py-20 border-t border-fg/10">
      <RevealWrapper>
        <SectionHeading main={dict.education.heading} accent={dict.education.headingAccent} className="mb-12" />
      </RevealWrapper>
      <RevealWrapper delay={0.05}>
        <div className="flex flex-col gap-8">
          {education.map((item, i) => (
            <EducationItem
              key={i}
              item={item}
              lang={lang}
              obtainedLabel={dict.education.obtained}
              isLast={i === education.length - 1}
            />
          ))}
        </div>
      </RevealWrapper>
    </section>
  )
}
