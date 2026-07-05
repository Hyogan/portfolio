import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import ClientCard from './ClientCard'
import type { Client } from '@/lib/types/content'

interface ClientsSectionProps {
  dict: {
    clients: {
      heading: string
      headingAccent: string
      subtitle: string
      cta: string
    }
  }
  clients: Client[]
}

export default function ClientsSection({ dict, clients }: ClientsSectionProps) {
  return (
    <section id="clients" className="py-16 sm:py-20 border-t border-fg/10">
      <RevealWrapper>
        <SectionHeading main={dict.clients.heading} accent={dict.clients.headingAccent} className="mb-4" />
        <p className="text-fg/40 text-sm mb-10">{dict.clients.subtitle}</p>
      </RevealWrapper>

      <RevealWrapper delay={0.05}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {clients.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
          {/* CTA tile */}
          <div className="bg-surface rounded-2xl px-6 py-7 flex flex-col items-center gap-3 border border-dashed border-fg/8 shadow-[0_2px_12px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.04)_inset]">
            <span className="text-2xl text-fg/40">+</span>
            <span className="text-xs text-fg/35 text-center whitespace-pre-line">{dict.clients.cta}</span>
          </div>
        </div>
      </RevealWrapper>
    </section>
  )
}
