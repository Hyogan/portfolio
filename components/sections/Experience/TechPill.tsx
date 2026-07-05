import { Icon } from '@iconify/react'
import { techGroups } from '@/lib/data/stack'

const allTech = techGroups.flatMap((g) => g.items)

function findTech(name: string) {
  return allTech.find((t) => t.name.toLowerCase() === name.toLowerCase())
}

interface TechPillProps {
  name: string
}

export default function TechPill({ name }: TechPillProps) {
  const tech = findTech(name)

  return (
    <span className="flex items-center gap-1.5 text-xs font-medium bg-fg/[0.05] border border-fg/10 px-2.5 py-1.5 rounded-full">
      {tech?.icon && (
        <Icon icon={tech.icon} width={14} height={14} style={{ color: tech.color }} />
      )}
      {name}
    </span>
  )
}
