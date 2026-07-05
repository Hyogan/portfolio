interface SectionHeadingProps {
  main: string
  accent: string
  size?: 'default' | 'large'
  className?: string
}

export default function SectionHeading({ main, accent, size = 'default', className }: SectionHeadingProps) {
  const sizeClass =
    size === 'large'
      ? 'text-[clamp(2.2rem,6vw,4rem)] leading-[0.92]'
      : 'text-2xl sm:text-3xl'

  return (
    <h2 className={`font-black uppercase tracking-tight ${sizeClass} ${className ?? ''}`}>
      {size === 'large' ? (
        <>
          <span className="block text-fg">{main}</span>
          <span className="block text-ghost">{accent}</span>
        </>
      ) : (
        <>
          {main} <span className="text-ghost">{accent}</span>
        </>
      )}
    </h2>
  )
}
