interface MetaItem {
  label: string
  value: string
  highlight?: boolean
}

interface AboutMetaProps {
  items: MetaItem[]
}

export default function AboutMeta({ items }: AboutMetaProps) {
  return (
    <div className="flex flex-col gap-3 sm:min-w-[200px]">
      {items.map(({ label, value, highlight }) => (
        <div key={label}>
          <p className="text-xs text-fg/35 uppercase tracking-wide mb-1">{label}</p>
          <p className={`text-sm font-medium leading-relaxed ${highlight ? 'text-orange' : ''}`}>
            {value}
          </p>
        </div>
      ))}
    </div>
  )
}
