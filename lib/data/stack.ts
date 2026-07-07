import type { TechGroup, LangItem } from '@/lib/types/content'

export const languages: LangItem[] = [
  { name: 'Français',  flag: '🇫🇷', level: 'C2', levelKey: 'Langue maternelle' },
  { name: 'Anglais',   flag: '🇬🇧', level: 'C1', levelKey: 'Professionnel' },
  { name: 'Espagnol',  flag: '🇪🇸', level: 'A2', levelKey: 'Notions' },
]

export const techGroups: TechGroup[] = [
  {
    category: 'frontend',
    labelKey: 'stack.categoryFrontend',
    items: [
      { name: 'HTML',         icon: 'simple-icons:html5',       color: '#E34F26' },
      { name: 'CSS',          icon: 'simple-icons:css3',        color: '#1572B6' },
      { name: 'JavaScript',   icon: 'simple-icons:javascript',  color: '#F7DF1E' },
      { name: 'TypeScript',   icon: 'simple-icons:typescript',  color: '#3178C6' },
      { name: 'React',        icon: 'simple-icons:react',       color: '#61DAFB' },
      { name: 'Next.js',      icon: 'simple-icons:nextdotjs',   color: '#FFFFFF' },
      { name: 'Angular',      icon: 'simple-icons:angular',     color: '#DD0031' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', color: '#06B6D4' },
      // { name: 'SASS',         icon: 'simple-icons:sass',        color: '#CC6699' },
    ],
  },
  {
    category: 'mobile',
    labelKey: 'stack.categoryMobile',
    items: [
      { name: 'React Native', icon: 'simple-icons:react',  color: '#61DAFB' },
      { name: 'Expo',         icon: 'simple-icons:expo',   color: '#FFFFFF' },
    ],
  },
  {
    category: 'backend',
    labelKey: 'stack.categoryBackend',
    items: [
      { name: 'PHP',         icon: 'simple-icons:php',        color: '#777BB4' },
      { name: 'Laravel',     icon: 'simple-icons:laravel',    color: '#FF2D20' },
      { name: 'Spring Boot', icon: 'simple-icons:springboot', color: '#6DB33F' },
      { name: 'Java',        icon: 'simple-icons:java',       color: '#007396' },
      { name: 'Python',      icon: 'simple-icons:python',     color: '#3776AB' },
      // { name: 'Salesforce',  icon: 'simple-icons:salesforce', color: '#00A1E0' },
    ],
  },
  {
    category: 'database',
    labelKey: 'stack.categoryDatabase',
    items: [
      { name: 'MySQL',      icon: 'simple-icons:mysql',      color: '#4479A1' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
      { name: 'Nginx',      icon: 'simple-icons:nginx',      color: '#009639' },
      { name: 'Docker',     icon: 'simple-icons:docker',     color: '#2496ED' },
    ],
  },
  {
    category: 'tools',
    labelKey: 'stack.categoryTools',
    items: [
      { name: 'Git',     icon: 'simple-icons:git',               color: '#F05032' },
      { name: 'GitHub',  icon: 'simple-icons:github',            color: '#FFFFFF' },
      { name: 'VS Code', icon: 'simple-icons:visualstudiocode',  color: '#007ACC' },
      { name: 'Figma',   icon: 'simple-icons:figma',             color: '#F24E1E' },
      { name: 'Postman', icon: 'simple-icons:postman',           color: '#FF6C37' },
      { name: 'Notion',  icon: 'simple-icons:notion',            color: '#FFFFFF' },
      { name: 'UML',     icon: '',                               color: '#efb63f' },
      { name: 'SCRUM',   icon: '',                               color: '#efb63f' },
    ],
  },
]
