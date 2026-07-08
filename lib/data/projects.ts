import type { Project } from '@/lib/types/project'

export const projects: Project[] = [
  {
    slug: 'finovo',
    title: 'Finovo',
    subtitle: 'Budget partagé entre colocataires :  app mobile React Native + dashboard web React',
    year: 'T2 2025',
    tags: ['Application mobile', 'Web dashboard'],
    stack: ['React Native', 'React', 'Laravel', 'MySQL'],
    thumbColor: '#241C40',
    type: 'both',
    stats: {
      activeUsers: '3 200+',
      storeRating: '4.6/5',
      deliveryTime: '6 sem.',
    },
    links: {},
    sections: {
      fr: {
        context:
          'Entre colocataires, la gestion des dépenses partagées génère des frictions permanentes : qui a payé quoi, combien doit-on à qui, et comment réconcilier les comptes en fin de mois ? Les tablettes Excel et les groupes WhatsApp ne suffisent plus dès qu\'on dépasse 2 personnes.',
        solution:
          'Une app mobile pour saisir les dépenses au quotidien (avec catégories et répartition automatique), et un dashboard web pour que l\'administrateur du logement ait une vue d\'ensemble, génère des rapports mensuels et envoie des rappels de remboursement.',
        architecture:
          'React Native (iOS/Android) + Expo pour le mobile, React + Tailwind pour le dashboard web, Laravel REST API avec Sanctum, MySQL pour les relations utilisateurs/groupes/dépenses.',
        challenges: [
          'Synchronisation temps réel : quand un coloc ajoute une dépense, tous les autres voient les soldes se mettre à jour immédiatement, sans recharger. Résolu avec du polling intelligent côté client.',
          'Répartition asymétrique : certaines dépenses ne se partagent pas équitablement. Le moteur de calcul des parts a demandé plusieurs itérations.',
          'Offline-first mobile : l\'app doit rester utilisable sans connexion et synchroniser les dépenses en attente dès que le réseau revient. Géré avec AsyncStorage + une queue de sync.',
        ],
        results: [
          '3 200 utilisateurs actifs en 3 mois après le lancement, sans budget marketing, uniquement du bouche-à-oreille.',
          'Note de 4,6/5 sur les stores avec des retours positifs sur la simplicité de l\'interface.',
          'Temps de chargement du dashboard réduit de 40 % après optimisation des requêtes SQL N+1 et mise en cache Redis.',
          'Livré en 6 semaines, seul, du premier commit au déploiement en production sur un serveur Nginx.',
        ],
      },
      en: {
        context:
          'Among roommates, managing shared expenses creates constant friction: who paid what, how much does each person owe, and how to reconcile accounts at month end? Spreadsheets and WhatsApp groups stop working once you have more than 2 people.',
        solution:
          'A mobile app to log daily expenses (with categories and automatic splits), and a web dashboard so the household admin can see the big picture, generate monthly reports, and send reimbursement reminders.',
        architecture:
          'React Native (iOS/Android) + Expo for mobile, React + Tailwind for the web dashboard, Laravel REST API with Sanctum, MySQL for user/group/expense relationships.',
        challenges: [
          'Real-time sync: when one roommate logs an expense, everyone else sees balances update immediately without reloading. Solved with smart client-side polling.',
          'Asymmetric splits: some expenses are not shared equally. The split calculation engine required several iterations to get right.',
          'Offline-first mobile: the app must remain usable without a connection and sync pending expenses when the network returns. Handled with AsyncStorage + a sync queue.',
        ],
        results: [
          '3,200 active users within 3 months of launch, with zero marketing budget, pure word of mouth.',
          'Rated 4.6/5 on app stores, praised for interface simplicity and calculation reliability.',
          'Dashboard load time reduced by 40% after fixing N+1 SQL queries and adding Redis caching.',
          'Delivered in 6 weeks, solo, from first commit to production deployment on Nginx.',
        ],
      },
      es: {
        context:
          'Entre compañeros de piso, gestionar gastos compartidos genera fricciones constantes: quién pagó qué, cuánto debe cada uno y cómo cuadrar cuentas a fin de mes. Las hojas de cálculo y los grupos de WhatsApp dejan de funcionar cuando hay más de 2 personas.',
        solution:
          'Una app móvil para registrar gastos diarios (con categorías y repartición automática), y un dashboard web para que el administrador del piso tenga una visión global, genere informes mensuales y envíe recordatorios de reembolso.',
        architecture:
          'React Native (iOS/Android) + Expo para móvil, React + Tailwind para el dashboard web, API REST Laravel con Sanctum, MySQL para las relaciones usuarios/grupos/gastos.',
        challenges: [
          'Sincronización en tiempo real: cuando un compañero añade un gasto, todos los demás ven los saldos actualizarse de inmediato. Resuelto con polling inteligente en el cliente.',
          'Repartición asimétrica: algunos gastos no se dividen equitativamente. El motor de cálculo de partes requirió varias iteraciones.',
          'Offline-first móvil: la app debe seguir siendo utilizable sin conexión y sincronizar los gastos pendientes al recuperar la red. Gestionado con AsyncStorage + una cola de sincronización.',
        ],
        results: [
          '3.200 usuarios activos en 3 meses tras el lanzamiento, sin presupuesto de marketing.',
          'Valoración de 4,6/5 en las tiendas, elogiada por la sencillez de la interfaz.',
          'Tiempo de carga del dashboard reducido un 40% tras optimizar consultas SQL N+1 y añadir caché Redis.',
          'Entregado en 6 semanas, en solitario, desde el primer commit hasta el despliegue en producción con Nginx.',
        ],
      },
    },
  },
  {
    slug: 'atelier-brut',
    title: 'Atelier Brut',
    subtitle: 'Commandes sur-mesure + back-office,Angular, SASS, Spring Boot, PostgreSQL',
    year: 'T4 2024',
    tags: ['Plateforme web'],
    stack: ['Angular', 'SASS', 'Spring Boot', 'PostgreSQL'],
    thumbColor: '#3B2A1A',
    type: 'web',
    stats: {},
    links: {},
    sections: {
      fr: {
        context: 'Artisan local ayant besoin d\'une vitrine en ligne pour ses commandes sur-mesure et d\'un back-office pour gérer les devis et commandes.',
        solution: 'Plateforme web complète avec catalogue produits, formulaire de commande sur-mesure, et back-office Angular pour l\'artisan.',
        architecture: 'Angular + SASS (frontend), Spring Boot REST API (backend), PostgreSQL (base de données).',
        challenges: ['Workflow de devis complexe avec plusieurs états de validation.', 'Back-office responsive utilisable sur tablette en atelier.'],
        results: ['Réduction de 60% du temps de traitement des commandes.', 'Mise en ligne en 8 semaines.'],
      },
      en: {
        context: 'A local craftsman needed an online storefront for custom orders and a back-office to manage quotes and orders.',
        solution: 'A full web platform with a product catalog, custom order form, and an Angular back-office for the craftsman.',
        architecture: 'Angular + SASS (frontend), Spring Boot REST API (backend), PostgreSQL (database).',
        challenges: ['Complex quote workflow with multiple validation states.', 'Tablet-friendly back-office for use in the workshop.'],
        results: ['60% reduction in order processing time.', 'Launched in 8 weeks.'],
      },
      es: {
        context: 'Un artesano local necesitaba una tienda online para pedidos personalizados y un back-office para gestionar presupuestos y pedidos.',
        solution: 'Plataforma web completa con catálogo de productos, formulario de pedido personalizado y back-office Angular para el artesano.',
        architecture: 'Angular + SASS (frontend), Spring Boot REST API (backend), PostgreSQL (base de datos).',
        challenges: ['Flujo de presupuestos complejo con múltiples estados de validación.', 'Back-office responsive usable en tableta en el taller.'],
        results: ['Reducción del 60% en el tiempo de gestión de pedidos.', 'Publicado en 8 semanas.'],
      },
    },
  },
  {
    slug: 'pulse-crm',
    title: 'Pulse CRM',
    subtitle: 'Modernisation d\'un CRM interne, JavaScript, PHP, MySQL',
    year: 'T3 2024',
    tags: ['App web'],
    stack: ['JavaScript', 'PHP', 'MySQL'],
    thumbColor: '#102B2E',
    type: 'web',
    stats: {},
    links: {},
    sections: {
      fr: {
        context: 'CRM interne vieillissant, lent et peu ergonomique, freinant l\'équipe commerciale au quotidien.',
        solution: 'Refonte complète de l\'interface et optimisation des requêtes back-end pour un CRM rapide et plaisant à utiliser.',
        architecture: 'JavaScript vanilla (frontend), PHP (backend), MySQL (base de données).',
        challenges: ['Migration des données sans interruption de service.', 'Maintien de la compatibilité avec les intégrations existantes.'],
        results: ['Performance multipliée par 3.', 'Adoption immédiate par l\'équipe sans formation.'],
      },
      en: {
        context: 'An aging, slow, and clunky internal CRM slowing down the sales team daily.',
        solution: 'Full interface redesign and back-end query optimization for a fast, enjoyable CRM.',
        architecture: 'Vanilla JavaScript (frontend), PHP (backend), MySQL (database).',
        challenges: ['Zero-downtime data migration.', 'Maintaining compatibility with existing integrations.'],
        results: ['3× performance improvement.', 'Immediate team adoption with no training required.'],
      },
      es: {
        context: 'Un CRM interno antiguo, lento y poco ergonómico que ralentizaba al equipo comercial a diario.',
        solution: 'Rediseño completo de la interfaz y optimización de las consultas back-end para un CRM rápido y agradable.',
        architecture: 'JavaScript vanilla (frontend), PHP (backend), MySQL (base de datos).',
        challenges: ['Migración de datos sin interrupción del servicio.', 'Mantenimiento de la compatibilidad con las integraciones existentes.'],
        results: ['Rendimiento multiplicado por 3.', 'Adopción inmediata por el equipo sin formación.'],
      },
    },
  },
  {
    slug: 'cloud-architects-crm',
    title: 'Cloud Architects CRM',
    subtitle: 'Développement et administration Salesforce, Cloud Architects, Yaoundé',
    year: 'Stage 2023',
    tags: ['CRM Salesforce'],
    stack: ['Salesforce'],
    thumbColor: '#1A2B1A',
    type: 'web',
    stats: {},
    links: {},
    sections: {
      fr: {
        context: 'Stage de fin d\'études au sein de Cloud Architects, spécialiste Salesforce à Yaoundé.',
        solution: 'Développement de flux automatisés et de tableaux de bord pour optimiser la gestion de la relation client.',
        architecture: 'Salesforce (flows, reports, dashboards, Apex triggers).',
        challenges: ['Compréhension rapide d\'un écosystème propriétaire complexe.', 'Automatisation de processus métier critiques sans régression.'],
        results: ['Réduction du temps de saisie manuelle de 35%.', 'Tableaux de bord en production à la fin du stage.'],
      },
      en: {
        context: 'End-of-study internship at Cloud Architects, a Salesforce specialist in Yaoundé.',
        solution: 'Built automated flows and dashboards to optimize customer relationship management.',
        architecture: 'Salesforce (flows, reports, dashboards, Apex triggers).',
        challenges: ['Quick ramp-up on a complex proprietary ecosystem.', 'Automating critical business processes without regressions.'],
        results: ['35% reduction in manual data entry time.', 'Dashboards in production by end of internship.'],
      },
      es: {
        context: 'Prácticas de fin de estudios en Cloud Architects, especialista Salesforce en Yaundé.',
        solution: 'Desarrollo de flujos automatizados y paneles de control para optimizar la gestión de relaciones con clientes.',
        architecture: 'Salesforce (flows, reports, dashboards, Apex triggers).',
        challenges: ['Aprendizaje rápido de un ecosistema propietario complejo.', 'Automatización de procesos de negocio críticos sin regresiones.'],
        results: ['Reducción del 35% en el tiempo de entrada manual de datos.', 'Paneles en producción al final de las prácticas.'],
      },
    },
  },
]
