'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextValue {
  isLight: boolean
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  isLight: false,
  toggle: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light') {
      document.documentElement.classList.add('light')
      setIsLight(true)
    }
  }, [])

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
    <ThemeContext.Provider value={{ isLight, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
