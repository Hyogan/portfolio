import type { EducationItem } from '@/lib/types/content'

export const education: EducationItem[] = [
  {
    degree: {
      fr: 'Licence Ingénierie Logicielle',
      en: 'Bachelor\'s Degree in Software Engineering',
      es: 'Licenciatura en Ingeniería de Software',
    },
    school: 'Institut Africain d\'Informatique (IAI)',
    location: 'Yaoundé',
    startDate: '2021-11',
    endDate: '2024-10',
    obtained: true,
  },
  {
    degree: {
      fr: 'Diplôme de Technicien Supérieur',
      en: 'Higher Technician\'s Diploma',
      es: 'Diploma de Técnico Superior',
    },
    school: 'IAI — Institut Africain d\'Informatique',
    location: 'Bafoussam',
    startDate: '2021-11',
    endDate: '2022-10',
    obtained: true,
  },
  {
    degree: {
      fr: 'Baccalauréat ESG — Série C',
      en: 'High School Diploma — Science Series',
      es: 'Bachillerato — Serie C (Ciencias)',
    },
    school: 'Lycée Bilingue de Galim',
    location: 'Galim',
    startDate: '2020-09',
    endDate: '2021-06',
    obtained: true,
  },
]
