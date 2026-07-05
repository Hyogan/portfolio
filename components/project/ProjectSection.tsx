import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

interface ProjectSectionProps {
  number: string
  label: string
  heading: string
  children: React.ReactNode
}

export default function ProjectSection({ number, label, heading, children }: ProjectSectionProps) {
  return (
    <section className="py-10 border-t border-fg/10">
      <RevealWrapper>
        <SectionLabel number={number} label={label} />
        <h2 className="font-black text-2xl sm:text-3xl mb-6">{heading}</h2>
      </RevealWrapper>
      <RevealWrapper delay={0.05}>
        {children}
      </RevealWrapper>
    </section>
  )
}
