import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import LangCard from './LangCard'
import TechGroup from './TechGroup'
import type { TechGroup as TechGroupType, LangItem } from '@/lib/types/content'

interface StackSectionProps {
  dict: {
    stack: {
      heading: string
      headingAccent: string
      categoryLanguages: string
      categoryFrontend: string
      categoryMobile: string
      categoryBackend: string
      categoryDatabase: string
      categoryTools: string
    }
  }
  techGroups: TechGroupType[]
  languages: LangItem[]
}

const categoryLabelMap: Record<string, keyof StackSectionProps['dict']['stack']> = {
  frontend: 'categoryFrontend',
  mobile:   'categoryMobile',
  backend:  'categoryBackend',
  database: 'categoryDatabase',
  tools:    'categoryTools',
}

export default function StackSection({ dict, techGroups, languages }: StackSectionProps) {
  const { stack } = dict

  return (
    <section id="stack" className="py-16 sm:py-20 border-t border-fg/10">
      <RevealWrapper>
        <SectionHeading main={stack.heading} accent={stack.headingAccent} className="mb-10" />
      </RevealWrapper>

      {/* Spoken languages */}
      <RevealWrapper delay={0.05}>
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange mb-4">
            {stack.categoryLanguages}
          </p>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <LangCard key={lang.name} {...lang} />
            ))}
          </div>
        </div>
      </RevealWrapper>

      {/* Tech categories */}
      {techGroups.map((group, i) => {
        const labelKey = categoryLabelMap[group.category]
        return (
          <RevealWrapper key={group.category} delay={0.05 + i * 0.04}>
            <TechGroup label={stack[labelKey] as string} items={group.items} />
          </RevealWrapper>
        )
      })}
    </section>
  )
}
