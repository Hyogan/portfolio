import { Layers, Grid2X2, ArrowUpRight } from 'lucide-react'

interface HeroCardsProps {
  stackLabel: string
  projectsLabel: string
}

export default function HeroCards({ stackLabel, projectsLabel }: HeroCardsProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <a
        href="#stack"
        className="group relative bg-orange rounded-2xl p-6 h-36 flex flex-col justify-between overflow-hidden"
      >
        <Layers size={22} color="#111" />
        <p className="font-extrabold text-base sm:text-lg leading-snug text-card-fg">{stackLabel}</p>
        <span className="absolute bottom-4 right-4 h-8 w-8 rounded-md border border-card-fg/30 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight size={14} color="#111" />
        </span>
      </a>

      <a
        href="#projects"
        className="group relative bg-lime rounded-2xl p-6 h-36 flex flex-col justify-between overflow-hidden"
      >
        <Grid2X2 size={22} color="#111" />
        <p className="font-extrabold text-base sm:text-lg leading-snug text-[#111]">{projectsLabel}</p>
        <span className="absolute bottom-4 right-4 h-8 w-8 rounded-md border border-[#111]/30 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight size={14} color="#111" />
        </span>
      </a>
    </div>
  )
}
