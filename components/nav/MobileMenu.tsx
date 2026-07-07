'use client'

import { useState } from 'react'
import { Menu, X, User, Layers, Folder, Briefcase, GraduationCap, Building2, HelpCircle, PenLine } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import ThemeToggle from '@/components/ui/ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from '@/components/ui/Logo'

const iconMap: Record<string, React.ReactNode> = {
  User:          <User size={18} />,
  Layers:        <Layers size={18} />,
  Folder:        <Folder size={18} />,
  Briefcase:     <Briefcase size={18} />,
  GraduationCap: <GraduationCap size={18} />,
  Building2:     <Building2 size={18} />,
  HelpCircle:    <HelpCircle size={18} />,
  PenLine:       <PenLine size={18} />,
}

interface NavItem {
  href: string
  icon: string
  label: string
}

interface MobileMenuProps {
  items: NavItem[]
  lang: string
  langLabels: { fr: string; en: string; es: string }
}

export default function MobileMenu({ items, lang, langLabels }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden fixed top-4 left-4 right-4 z-50">

      {/* Top bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="flex items-center justify-between rounded-full border border-fg/10 bg-surface/90 px-3 py-2 backdrop-blur shadow-lg"
      >
        <a
          href="#home"
          title="Accueil"
          className="flex items-center px-1 transition-opacity hover:opacity-70"
        >
          <Logo noBg size={26} priority />
        </a>

        <div className="flex items-center gap-1">
          <LanguageSwitcher lang={lang} labels={langLabels} />
          <ThemeToggle />

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full text-fg/60 hover:bg-fg/8 hover:text-fg transition-colors"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={open ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.div>


      {/* Dropdown drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-10 cursor-default bg-black/10 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
              tabIndex={-1}
            />

            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
                ease: 'easeOut',
              }}
              className="relative z-20 mt-2 rounded-2xl border border-fg/10 bg-surface shadow-xl overflow-hidden"
            >
              {items.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.04,
                    duration: 0.2,
                  }}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-fg/60 hover:bg-fg/8 hover:text-fg transition-colors"
                >
                  <span className="text-fg/40">
                    {iconMap[item.icon]}
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  )
}