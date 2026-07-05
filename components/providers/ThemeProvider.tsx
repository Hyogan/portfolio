'use client'

import { useEffect } from 'react'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light') {
      document.documentElement.classList.add('light')
    }
  }, [])

  return <>{children}</>
}
