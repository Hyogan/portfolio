import { Icon } from '@iconify/react'

interface TechCardProps {
  name: string
  icon: string
  color?: string
}

export default function TechCard({ name, icon, color }: TechCardProps) {
  return (
    <div className="flex flex-col items-center gap-2.5 rounded-2xl border border-fg/8 bg-fg/[0.04] px-3 py-[18px] cursor-default transition-all hover:bg-fg/[0.08] hover:border-orange/35 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
      {icon ? (
        <Icon icon={icon} width={32} height={32} style={{ color }} />
      ) : (
        <span
          className="flex h-8 w-8 items-center justify-center rounded-lg text-[10px] font-bold text-orange"
          style={{ background: 'rgba(239,182,63,0.15)' }}
        >
          {name}
        </span>
      )}
      <span className="text-[11px] font-semibold text-fg/65 text-center leading-tight">{name}</span>
    </div>
  )
}
