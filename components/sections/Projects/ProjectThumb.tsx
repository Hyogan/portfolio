interface ProjectThumbProps {
  slug: string
  color: string
  type: 'web' | 'mobile' | 'both'
}

function FinovoThumb() {
  return (
    <div className="flex gap-1 mb-2">
      <div className="flex flex-col gap-1 flex-1">
        <div className="h-3 w-3/5 rounded-sm bg-[#6D5DFC]/70 mb-1.5" />
        <div className="h-2 w-4/5 rounded-sm bg-fg/15 mb-3" />
        <div className="flex items-end gap-1 h-10">
          <span className="w-1/5 h-3/5 rounded-sm bg-[#6D5DFC]/80" />
          <span className="w-1/5 h-full rounded-sm bg-[#6D5DFC]" />
          <span className="w-1/5 h-2/5 rounded-sm bg-[#6D5DFC]/60" />
          <span className="w-1/5 h-4/5 rounded-sm bg-[#6D5DFC]/90" />
        </div>
      </div>
    </div>
  )
}

function AtelierBrutThumb() {
  return (
    <>
      <div className="flex gap-1.5 mb-3">
        <span className="h-2.5 w-8 rounded-full bg-[#E8A33D]/30" />
        <span className="h-2.5 w-6 rounded-full bg-fg/15" />
      </div>
      <div className="h-3.5 w-full rounded-sm bg-fg/80 mb-1" />
      <div className="h-3.5 w-4/5 rounded-sm bg-fg/80 mb-3" />
      <span className="inline-block h-4 w-10 rounded-full bg-[#E8A33D]" />
    </>
  )
}

function PulseCRMThumb() {
  return (
    <div className="flex gap-1.5 h-full">
      <div className="w-2 rounded-sm bg-[#2EC4B6]/30 flex flex-col gap-1.5 pt-1 items-center">
        <span className="h-1.5 w-1.5 rounded-full bg-[#2EC4B6]" />
        <span className="h-1.5 w-1.5 rounded-full bg-fg/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-fg/20" />
      </div>
      <div className="flex-1 flex flex-col gap-1.5 pt-1">
        <span className="h-2 w-full rounded-sm bg-fg/20" />
        <span className="h-2 w-4/5 rounded-sm bg-fg/15" />
        <span className="h-2 w-full rounded-sm bg-fg/15" />
        <span className="h-2 w-3/5 rounded-sm bg-[#2EC4B6]/60" />
      </div>
    </div>
  )
}

function CloudArchitectsThumb() {
  return (
    <div className="flex flex-col gap-2 pt-1 h-full w-full">
      <span className="h-2 w-3/4 rounded-sm bg-lime/50" />
      <span className="h-2 w-full rounded-sm bg-fg/15" />
      <span className="h-7 w-full rounded-sm bg-lime/25" />
      <span className="h-2 w-2/3 rounded-sm bg-fg/15" />
    </div>
  )
}

const thumbMap: Record<string, React.ReactNode> = {
  'finovo':              <FinovoThumb />,
  'atelier-brut':        <AtelierBrutThumb />,
  'pulse-crm':           <PulseCRMThumb />,
  'cloud-architects-crm': <CloudArchitectsThumb />,
}

export default function ProjectThumb({ slug, color }: ProjectThumbProps) {
  return (
    <div
      className="thumb relative shrink-0 w-24 h-28 sm:w-32 sm:h-36 rounded-xl overflow-hidden p-2.5 transition-transform duration-[350ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-[3px] group-hover:scale-[1.02]"
      style={{ backgroundColor: color }}
    >
      <div className="flex gap-1 mb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-fg/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-fg/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-fg/25" />
      </div>
      {thumbMap[slug] ?? null}
    </div>
  )
}
