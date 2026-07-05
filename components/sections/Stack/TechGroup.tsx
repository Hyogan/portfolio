import TechCard from './TechCard'

interface TechItem {
  name: string
  icon: string
  color?: string
}

interface TechGroupProps {
  label: string
  items: TechItem[]
}

export default function TechGroup({ label, items }: TechGroupProps) {
  return (
    <div className="mb-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange mb-4">{label}</p>
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
        {items.map((item) => (
          <TechCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  )
}
