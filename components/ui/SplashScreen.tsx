'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/ui/Logo'

export default function SplashScreen() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem('splash_shown')) return
    sessionStorage.setItem('splash_shown', '1')
    setVisible(true)

    const DURATION = 1500
    const start = performance.now()

    function tick(now: number) {
      const p = Math.min((now - start) / DURATION, 1)
      setProgress(p)
      if (p < 1) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(() => setVisible(false), 250)
      }
    }

    requestAnimationFrame(tick)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg"
        >
          <motion.div
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex flex-col items-center gap-5"
          >
            <Logo size={60} noBg priority />

            <h1
              className="font-black uppercase tracking-tight leading-none"
              style={{ fontSize: 'clamp(1.6rem, 5vw, 2.4rem)' }}
            >
              Arsène<span className="text-orange">.</span>dev
            </h1>

            <p className="text-xs text-fg/35 tracking-widest uppercase">
              Dev Fullstack · Product manager
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-12 w-32 h-[2px] bg-fg/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange rounded-full transition-none"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
