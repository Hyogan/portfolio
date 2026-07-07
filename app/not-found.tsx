import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">

      {/* Logo */}
      <Link href="/" className="mb-10 transition-opacity hover:opacity-70">
        <Logo size={40} noBg priority />
      </Link>

      {/* 404 number */}
      <p
        className="font-black uppercase leading-none tracking-tight text-orange select-none"
        style={{ fontSize: 'clamp(6rem, 20vw, 12rem)' }}
        aria-hidden="true"
      >
        404
      </p>

      {/* Heading */}
      <h1
        className="font-black uppercase leading-[0.92] tracking-tight mt-2 mb-6"
        style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}
      >
        <span className="text-fg">Page</span>{' '}
        <span className="text-ghost">introuvable</span>
      </h1>

      <p className="text-fg/45 text-sm sm:text-base max-w-sm leading-relaxed mb-10">
        Cette page n&apos;existe pas ou a été déplacée.
        Retournez à l&apos;accueil pour reprendre votre navigation.
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-bold text-[#111] transition-opacity hover:opacity-85"
      >
        ← Retour à l&apos;accueil
      </Link>

      {/* Subtle brand line */}
      <p className="mt-16 text-xs text-fg/20 tracking-widest uppercase">
        Arsène<span className="text-orange">.</span>dev
      </p>

    </main>
  )
}
