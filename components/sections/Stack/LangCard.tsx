interface LangCardProps {
  flag: string
  name: string
  level: string
  levelKey: string
}

export default function LangCard({ flag, name, level, levelKey }: LangCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-fg/8 bg-fg/[0.04] px-4 py-3 transition-all hover:border-orange/30 hover:bg-fg/[0.07]">
      <span className="text-[22px] leading-none" aria-hidden="true">{flag}</span>
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-[10px] text-fg/35 mt-0.5">{levelKey}</p>
      </div>
      <span className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full bg-orange/10 text-orange">
        {level}
      </span>
    </div>
  )
}
