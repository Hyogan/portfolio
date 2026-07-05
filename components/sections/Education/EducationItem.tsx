import type { EducationItem as EducationItemType } from '@/lib/types/content'
import type { Locale } from '@/lib/i18n/dictionaries'

interface EducationItemProps {
  item: EducationItemType
  lang: Locale
  obtainedLabel: string
  isLast: boolean
}

function formatYear(dateStr: string): string {
  const [year, month] = dateStr.split('-')
  if (!month) return year
  const d = new Date(Number(year), Number(month) - 1)
  return d.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })
}

export default function EducationItem({ item, lang, obtainedLabel, isLast }: EducationItemProps) {
  return (
    <div className={`grid sm:grid-cols-[1fr_auto] gap-3 sm:gap-10 items-start ${isLast ? '' : 'border-b border-fg/10 pb-8'}`}>
      <div>
        <h3 className="font-bold text-lg mb-1">{item.degree[lang]}</h3>
        <p className="text-sm text-orange/80 mb-1">{item.school} — {item.location}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="font-semibold text-sm">
          {formatYear(item.startDate)} — {formatYear(item.endDate)}
        </p>
        {item.obtained && (
          <p className="text-xs text-fg/35 mt-0.5">{obtainedLabel}</p>
        )}
      </div>
    </div>
  )
}
