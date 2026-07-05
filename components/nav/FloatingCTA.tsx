'use client'

import { useEffect, useState } from 'react'

interface FloatingCTAProps {
  label: string
}

export default function FloatingCTA({ label }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#contact"
      aria-label={label}
      className={`fixed bottom-6 right-6 z-50 hidden sm:flex items-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-bold text-card-fg shadow-[0_8px_24px_-6px_rgba(239,182,63,0.55)] hover:bg-fg transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-card-fg animate-pulse-dot" />
      {label}
    </a>
  )
}
