import type { Client } from '@/lib/types/content'

interface ClientCardProps {
  client: Client
}

export default function ClientCard({ client }: ClientCardProps) {
  return (
    <div className="bg-surface rounded-2xl px-6 py-7 flex flex-col items-center gap-3 transition-all hover:brightness-110 shadow-[0_2px_12px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.04)_inset]">
      <span className="font-extrabold text-lg text-center">{client.name}</span>
      <span className="text-xs text-fg/35">{client.location} · {client.period}</span>
    </div>
  )
}
