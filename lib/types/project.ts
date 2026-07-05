export interface ProjectStats {
  activeUsers?: string
  storeRating?: string
  deliveryTime?: string
}

export interface ProjectSection {
  context: string
  solution: string
  architecture: string
  challenges: string[]
  results: string[]
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  year: string
  tags: string[]
  stack: string[]
  stats: ProjectStats
  thumbColor: string
  sections: {
    fr: ProjectSection
    en: ProjectSection
    es: ProjectSection
  }
  links?: {
    live?: string
    github?: string
    store?: string
  }
  type: 'web' | 'mobile' | 'both'
}
