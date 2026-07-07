import Logo from '@/components/ui/Logo'

export default function Loading() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-6">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-16 w-16 rounded-full border-2 border-fg/10 border-t-orange animate-spin" />
        <Logo size={32} priority />
      </div>
      <p className="text-xs text-fg/30 tracking-widest uppercase">
        Arsène<span className="text-orange">.</span>dev
      </p>
    </main>
  )
}
