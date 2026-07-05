import type { ExperienceItem } from '@/lib/types/content'

export const experience: ExperienceItem[] = [
  {
    company: 'Ngombe SARL',
    role: 'Développeur Fullstack & Product Manager',
    location: 'Douala, Cameroun',
    startDate: '2024-11',
    endDate: null,
    bullets: {
      fr: [
        'Développement et maintenance d\'applications complètes (back-end Spring Boot/Laravel, API REST, documentation).',
        'Conception d\'interfaces riches avec Angular, React et TailwindCSS, dans une démarche orientée expérience utilisateur.',
        'Administration des bases de données SQL et gestion des processus DevOps (CI/CD, surveillance, optimisation) sur Nginx.',
        'Pilotage complet du cycle produit — idéation, planification, priorisation, coordination d\'équipes et déploiement.',
        'Analyse et cartographie des processus métier pour optimiser les flux de travail et orienter les décisions produit.',
      ],
      en: [
        'Development and maintenance of full-stack applications (Spring Boot/Laravel back-end, REST APIs, documentation).',
        'Building rich interfaces with Angular, React, and TailwindCSS, following a user-experience-first approach.',
        'SQL database administration and DevOps process management (CI/CD, monitoring, optimization) on Nginx.',
        'Full product lifecycle ownership — ideation, planning, prioritization, team coordination, and deployment.',
        'Business process analysis and mapping to optimize workflows and inform product decisions.',
      ],
      es: [
        'Desarrollo y mantenimiento de aplicaciones completas (back-end Spring Boot/Laravel, API REST, documentación).',
        'Diseño de interfaces ricas con Angular, React y TailwindCSS, con enfoque en la experiencia de usuario.',
        'Administración de bases de datos SQL y gestión de procesos DevOps (CI/CD, monitoreo, optimización) en Nginx.',
        'Gestión completa del ciclo de producto — ideación, planificación, priorización, coordinación de equipos y despliegue.',
        'Análisis y mapeo de procesos de negocio para optimizar flujos de trabajo y orientar decisiones de producto.',
      ],
    },
    tech: ['Angular', 'React', 'Spring Boot', 'Laravel', 'PostgreSQL', 'Nginx'],
  },
  {
    company: 'ADVANCE-IT GROUP',
    role: 'Développeur Frontend (Intern)',
    location: 'Yaoundé, Cameroun',
    startDate: '2024-07',
    endDate: '2025-10',
    bullets: {
      fr: [
        'Conception d\'interfaces utilisateur riches et intuitives pour applications web avec Angular.',
        'Collaboration étroite avec l\'équipe back-end pour intégrer les API et développer des applications web complètes.',
        'Optimisation de l\'expérience utilisateur et simplification des flux de travail grâce à un développement front-end efficace.',
      ],
      en: [
        'Designing rich, intuitive user interfaces for web applications with Angular.',
        'Close collaboration with the back-end team to integrate APIs and build complete web applications.',
        'Optimizing user experience and simplifying workflows through efficient front-end development.',
      ],
      es: [
        'Diseño de interfaces de usuario ricas e intuitivas para aplicaciones web con Angular.',
        'Colaboración estrecha con el equipo back-end para integrar APIs y desarrollar aplicaciones web completas.',
        'Optimización de la experiencia de usuario y simplificación de flujos de trabajo mediante desarrollo front-end eficiente.',
      ],
    },
    tech: ['Angular', 'Tailwind CSS', 'TypeScript'],
  },
  {
    company: 'Cloud Architects',
    role: 'Stagiaire Développeur Salesforce',
    location: 'Yaoundé, Cameroun',
    startDate: '2023-06',
    endDate: '2023-09',
    bullets: {
      fr: [
        'Apprentissage du développement et de l\'administration CRM à l\'aide des outils Salesforce.',
        'Configuration de flux automatisés et de tableaux de bord pour optimiser la gestion de la relation client.',
      ],
      en: [
        'Learning CRM development and administration using Salesforce tools.',
        'Configuring automated flows and dashboards to optimize customer relationship management.',
      ],
      es: [
        'Aprendizaje del desarrollo y administración de CRM con las herramientas Salesforce.',
        'Configuración de flujos automatizados y paneles de control para optimizar la gestión de relaciones con clientes.',
      ],
    },
    tech: ['Salesforce'],
  },
]
