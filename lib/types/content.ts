export interface TechItem {
  name: string
  icon: string
  color?: string
}

export interface TechGroup {
  category: string
  labelKey: string
  items: TechItem[]
}

export interface LangItem {
  name: string
  flag: string
  level: string
  levelKey?: string
}

export interface ExperienceItem {
  company: string
  role: string
  location: string
  startDate: string
  endDate: string | null
  bullets: {
    fr: string[]
    en: string[]
    es: string[]
  }
  tech: string[]
}

export interface EducationItem {
  degree: {
    fr: string
    en: string
    es: string
  }
  school: string
  location: string
  startDate: string
  endDate: string
  obtained: boolean
}

export interface Client {
  name: string
  location: string
  period: string
  logo?: string
}

export interface Testimonial {
  quote: {
    fr: string
    en: string
    es: string
  }
  name: string
  role: string
  initials: string
}

export interface FAQItem {
  question: {
    fr: string
    en: string
    es: string
  }
  answer: {
    fr: string
    en: string
    es: string
  }
}

export interface NavItem {
  href: string
  icon: string
  labelKey: string
}
