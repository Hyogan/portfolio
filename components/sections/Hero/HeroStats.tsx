interface Stat {
  value: string
  label: string
}

interface HeroStatsProps {
  stats: Stat[]
}

export default function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-5 mb-8">
      {stats.map(({ value, label }) => (
        <div key={value}>
          <p className="font-black text-3xl sm:text-4xl">{value}</p>
          <p
            className="text-[11px] uppercase tracking-wide text-fg/40 mt-1 leading-tight whitespace-pre-line"
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  )
}
