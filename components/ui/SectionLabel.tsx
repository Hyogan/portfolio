interface SectionLabelProps {
  number: string
  label: string
  className?: string
}

export default function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <p className={`text-xs font-bold uppercase tracking-[0.18em] text-orange mb-4 ${className ?? ''}`}>
      {number} — {label}
    </p>
  )
}
