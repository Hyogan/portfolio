import type { Testimonial } from '@/lib/types/content'

export const testimonials: Testimonial[] = [
  {
    quote: {
      fr: 'Arsène comprend les enjeux métier avant d\'écrire la première ligne de code. Une qualité rare chez un développeur.',
      en: 'Arsène understands the business stakes before writing a single line of code. A rare quality in a developer.',
      es: 'Arsène comprende los desafíos del negocio antes de escribir la primera línea de código. Una cualidad poco común en un desarrollador.',
    },
    name: 'Gaël Etienne Anyouzoa',
    role: 'Gérant, Ngombe SARL',
    initials: 'GE',
  },
  {
    quote: {
      fr: 'Livraisons ponctuelles, communication claire à chaque étape. On savait toujours où en étaient les choses, c\'est précieux.',
      en: 'On-time delivery, clear communication at every step. We always knew where things stood, that\'s invaluable.',
      es: 'Entregas puntuales, comunicación clara en cada etapa. Siempre supimos cómo estaban las cosas, eso es muy valioso.',
    },
    name: 'Kévin M.',
    role: 'CTO, Startup SaaS',
    initials: 'KM',
  },
  {
    quote: {
      fr: 'Il a corrigé des problèmes de performance qu\'on n\'avait pas identifiés, tout en livrant les fonctionnalités prévues dans les délais.',
      en: 'He fixed performance issues we hadn\'t even identified, while delivering the planned features on time.',
      es: 'Corrigió problemas de rendimiento que no habíamos identificado, mientras entregaba las funcionalidades previstas en plazo.',
    },
    name: 'Sophie R.',
    role: 'Directrice produit',
    initials: 'SR',
  },
]
