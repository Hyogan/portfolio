'use client'

import { Sun, Moon } from 'lucide-react'
import { useState } from 'react'

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(
    () => typeof window !== 'undefined' && document.documentElement.classList.contains('light')
  )

  function toggle() {
    const html = document.documentElement
    if (html.classList.contains('light')) {
      html.classList.remove('light')
      localStorage.setItem('theme', 'dark')
      setIsLight(false)
    } else {
      html.classList.add('light')
      localStorage.setItem('theme', 'light')
      setIsLight(true)
    }
  }

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
