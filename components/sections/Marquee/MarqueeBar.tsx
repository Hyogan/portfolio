interface MarqueeBarProps {
  items: string[]
}

function Track({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center shrink-0 gap-3 px-4 text-sm font-semibold text-fg/60 whitespace-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse-dot" />
          {item}
          <span className="text-fg/20 ml-3">✦</span>
        </span>
      ))}
    </>
  )
}

export default function MarqueeBar({ items }: MarqueeBarProps) {
  return (
    <div className="overflow-hidden border-y border-fg/10 py-3.5" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        <Track items={items} />
        <Track items={items} />
      </div>
    </div>
  )
}
