'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeProvider'

export default function ThemeToggle() {
  const { isLight, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className="flex h-10 w-10 items-center justify-center rounded-full text-fg/60 hover:bg-fg/8 hover:text-fg transition-colors"
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}
