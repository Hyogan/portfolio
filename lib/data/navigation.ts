import type { NavItem } from '@/lib/types/content'

export const navigation: NavItem[] = [
  { href: '#about',      icon: 'User',        labelKey: 'nav.about' },
  { href: '#stack',      icon: 'Layers',      labelKey: 'nav.stack' },
  { href: '#projects',   icon: 'Folder',      labelKey: 'nav.projects' },
  { href: '#experience', icon: 'Briefcase',   labelKey: 'nav.experience' },
  { href: '#education',  icon: 'GraduationCap', labelKey: 'nav.education' },
  { href: '#clients',    icon: 'Building2',   labelKey: 'nav.clients' },
  { href: '#faq',        icon: 'HelpCircle',  labelKey: 'nav.faq' },
  { href: '#contact',    icon: 'PenLine',     labelKey: 'nav.contact' },
]
