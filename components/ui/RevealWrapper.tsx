'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface RevealWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function RevealWrapper({ children, className, delay = 0 }: RevealWrapperProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
