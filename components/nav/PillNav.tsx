import Image from 'next/image'
import {
  User, Layers, Folder, Briefcase, GraduationCap,
  Building2, HelpCircle, PenLine,
} from 'lucide-react'
import NavLink from './NavLink'
import ThemeToggle from '@/components/ui/ThemeToggle'

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

interface PillNavProps {
  items: NavItem[]
}

export default function PillNav({ items }: PillNavProps) {
  return (
    <nav
      aria-label="Navigation principale"
      className="fixed top-5 left-1/2 z-50 -translate-x-1/2 flex items-center gap-1 rounded-full border border-fg/10 bg-surface/90 px-2 py-2 backdrop-blur"
    >
      <a
        href="#home"
        title="Accueil"
        className="flex items-center px-1.5 transition-opacity hover:opacity-70"
      >
        <Image src="/assets/logo.png" alt="AT Logo" width={26} height={26} priority />
      </a>

      {items.map((item) => (
        <NavLink key={item.href} href={item.href} label={item.label}>
          {iconMap[item.icon]}
        </NavLink>
      ))}

      <ThemeToggle />
    </nav>
  )
}
