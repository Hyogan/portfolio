import Link from 'next/link'

export default function ProjectNotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 min-h-[60vh]">
      <p className="text-orange font-black text-3xl">404</p>
      <p className="text-fg/55 text-sm">Project not found.</p>
      <Link href="/" className="text-sm text-orange hover:underline">← Back to portfolio</Link>
    </main>
  )
}
