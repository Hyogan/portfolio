import TechPill from './TechPill'
import type { ExperienceItem as ExperienceItemType } from '@/lib/types/content'
import type { Locale } from '@/lib/i18n/dictionaries'

interface ExperienceItemProps {
  item: ExperienceItemType
  index: number
  lang: Locale
  currentLabel: string
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split('-')
  const d = new Date(Number(year), Number(month) - 1)
  return d.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })
}

export default function ExperienceItem({ item, index, lang, currentLabel }: ExperienceItemProps) {
  const isRight = index % 2 === 0
  const initials = item.company.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase()

  const dateRange = `${formatDate(item.startDate)} — ${item.endDate ? formatDate(item.endDate) : 'Présent'}`

  return (
    <div className="relative grid md:grid-cols-2 gap-6 md:gap-16 mb-16 sm:mb-20">
      <span className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 h-11 w-11 rounded-full ring-2 ring-orange items-center justify-center bg-surface font-bold text-[10px] z-10">
        {initials}
      </span>

      {/* Content */}
      <div className={isRight ? 'md:pr-14' : 'md:pl-14 md:order-2'}>
        <h3 className="font-bold text-lg sm:text-xl mb-1">{item.role}</h3>
        <p className="text-sm text-orange/80 mb-4">{item.company} — {item.location}</p>
        <ul className="space-y-2.5 mb-5">
          {item.bullets[lang].map((bullet, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-fg/55 leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 bg-fg/25 shrink-0 rounded-sm" />
              {bullet}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {item.tech.map((name) => (
            <TechPill key={name} name={name} />
          ))}
        </div>
      </div>

      {/* Date */}
      <div className={isRight ? 'md:pl-14' : 'md:pr-14 md:order-1 md:text-right'}>
        <p className="font-bold">{dateRange}</p>
        {!item.endDate && (
          <p className="text-xs text-fg/35 mt-0.5">{currentLabel}</p>
        )}
      </div>
    </div>
  )
}
