import { Link } from './types';

// Informations personnelles mises à jour
export const personalInfo = {
  name: 'Gaetan Ekoro',
  title: 'Data & Software Engineer',
  email: 'ekorogaetan5@gmail.com',
  phone: '+237 6 93 81 37 01 / 6 75 48 28 47',
  location: 'Douala, Ndogbong-Playboy',
  github: 'https://github.com/Gaetan5',
  linkedin: 'https://linkedin.com/in/gaetan-ekoro',
  cvPath: '/Gaetan Ekoro CV 1.pdf',
  cvFileName: 'Gaetan Ekoro CV 1.pdf',
};

export const links: Link[] = [
  { nameEng: 'Home', nameFr: 'Accueil', hash: '#home' },
  { nameEng: 'About', nameFr: 'À propos', hash: '#about' },
  { nameEng: 'Experience', nameFr: 'Expérience', hash: '#experience' },
  { nameEng: 'Projects', nameFr: 'Projets', hash: '#projects' },
  { nameEng: 'Skills', nameFr: 'Compétences', hash: '#skills' },
  { nameEng: 'Blog', nameFr: 'Blog', hash: '#blog' },
  { nameEng: 'Certifications', nameFr: 'Certifications', hash: '#certifications' },
  { nameEng: 'GitHub', nameFr: 'GitHub', hash: '#github-stats' },
  { nameEng: 'Testimonials', nameFr: 'Témoignages', hash: '#testimonials' },
  { nameEng: 'Contact', nameFr: 'Contact', hash: '#contact' },
];

export const skillsData = [
  // Backend & APIs
  'Python',
  'Django',
  'FastAPI',
  'Node.js',
  'Java',
  'Spring Boot',
  'Micro-services',

  // Frontend
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',

  // Databases & Data
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Redis',
  'Apache Kafka',
  'Apache Spark',
  'ELK Stack',

  // DevOps & Cloud
  'Docker',
  'Git',
  'CI/CD',
  'AWS',
  'Linux',

  // Security & Networking
  'CyberSecurity',
  'CompTIA Security+',
  'API Pentesting',
  'Audit Internet-ISMS',
  'OAuth2',
  'JWT',
  'WebRTC',
  'WebSockets',
  'REST API',
  'GraphQL',

  // IoT & Hardware
  'Raspberry Pi',
  'Arduino',
  'Microcontrôleurs',
  'GPS',
  'Sensors',
  'Monitoring & Supervision',

  // Data Analytics
  'Pandas',
  'NumPy',
  'Matplotlib',
  'Plotly',
  'Dash',
  'Jupyter',

  // Tools & Others
  'Figma',
  'Postman',
  'Swagger',
  'Prisma',
  'Excel',
  'Keycloak',
  'Agora',
];

export const projectsData = [
  {
    title: 'INTERACT (Startup)',
    description:
      'Écosystème IoT visionnaire pour la digitalisation, la sécurité des données et l’autonomisation technologique. Solution complète pour startups et entreprises.',
    tags: ['IoT', 'Python', 'Microcontrôleurs', 'Sécurité', 'Digitalization'],
    imageUrl: '/image2.png',
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'EKOSE-RX (Digital Solution)',
    description:
      'Plateforme de téléconsultation avec API sécurisée, visioconférence (Agora), messagerie en temps réel et gestion médicale.',
    tags: ['Python', 'FastAPI', 'Agora', 'WebRTC', 'PostgreSQL', 'WebSockets'],
    imageUrl: '/image1.png',
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'CoStudia (Digital Solution)',
    description: 'Solution digitale collaborative pour l’éducation et le partage de connaissances.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    imageUrl: '/image3.png',
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Geolocation KIT',
    description:
      "Intégration d'un système de géolocalisation et de sécurité en temps réel pour véhicules médicalisés.",
    tags: ['IoT', 'GPS', 'Python', 'Raspberry Pi', 'Security'],
    imageUrl: '/image4.png',
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Synchronization Tools',
    description:
      'API robuste pour la synchronisation de données entre plateformes e-commerce (WooCommerce ↔ Odoo) et services tiers.',
    tags: ['Python', 'Django', 'REST API', 'MySQL', 'Automation'],
    imageUrl: '/image3.png',
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Portfolio Professionnel',
    description:
      'Portfolio moderne développé avec Next.js 15, TypeScript et Tailwind CSS. Optimisé pour les performances, le SEO et l’accessibilité.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: '/image2.png',
    githubUrl: 'https://github.com/Gaetan5/protfolio',
    liveUrl: 'https://gaetan-ekoro.vercel.app',
  },
];

export const experiencesData = [
  {
    title: 'Software Engineer (Stage Professionnel)',
    location: 'Mega-Ique Digital',
    description:
      "Audit et expertise clientèles. Travail sous environnement Docker et Micro-services. Monitoring et analyse du trafic Wireless/Tx. Investigation et résolution d'incidents.",
    icon: '💻',
    date: '11/2024 - 05/2025',
  },
  {
    title: 'Engineer',
    location: 'VisionTelecoms',
    description:
      'Installation de systèmes SDI et caméras de surveillance. Maintenance et installation réseau (téléphonie, audio, télévision). Installation de baies et locaux techniques.',
    icon: '🔧',
    date: '2022 - 2024',
  },
  {
    title: 'Full-stack Developer (Stage Académique)',
    location: 'PB Telecom',
    description:
      'Développement web et mobile. Maintenance informatique. Déploiement et installation de réseaux en environnements professionnels.',
    icon: '⚙️',
    date: '2019 - 2021',
  },
  {
    title: 'Software & Data Engineer (Freelance)',
    location: 'Projets Divers / INTERACT',
    description:
      "Développement d'applications robustes, pipelines de données et solutions IoT. Spécialisation en transformation d'idées ambitieuses en solutions durables.",
    icon: '📊',
    date: '2023 - Présent',
  },
];

export const blogData = [
  {
    title: "Architecture IoT pour la Santé : Cas d'usage INTERACT",
    excerpt:
      'Comment concevoir un système IoT scalable pour la surveillance médicale en temps réel avec Python et microcontrôleurs.',
    content:
      "Découvrez l'architecture complète du système INTERACT, de la collecte de données via capteurs à l'analyse en temps réel...",
    tags: ['IoT', 'Python', 'Architecture', 'Santé'],
    date: '2024-01-15',
    readTime: '8 min',
    imageUrl: '/image2.png',
    slug: 'architecture-iot-sante-interact',
  },
  {
    title: 'Optimisation des APIs FastAPI pour la Production',
    excerpt:
      'Meilleures pratiques pour déployer des APIs FastAPI performantes avec monitoring et sécurité avancée.',
    content:
      "Guide complet sur l'optimisation des performances, la sécurité OAuth2/JWT, et le monitoring des APIs FastAPI...",
    tags: ['FastAPI', 'Python', 'Performance', 'Security'],
    date: '2024-01-10',
    readTime: '12 min',
    imageUrl: '/image1.png',
    slug: 'optimisation-fastapi-production',
  },
];

export const certificationsData = [
  {
    title: 'React JS Professional',
    issuer: 'Certification Réelle',
    date: '2024',
    credentialId: 'REACT-EK-2024',
    imageUrl:
      'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black',
    verifyUrl: '#',
  },
  {
    title: 'Python 3 Mastery',
    issuer: 'Certification Réelle',
    date: '2023',
    credentialId: 'PY3-EK-2023',
    imageUrl:
      'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
    verifyUrl: '#',
  },
  {
    title: 'CompTIA Security +',
    issuer: 'CompTIA',
    date: '2024',
    credentialId: 'SEC-EK-2024',
    imageUrl:
      'https://img.shields.io/badge/CompTIA_Security+-FF0000?style=for-the-badge&logo=comptia&logoColor=white',
    verifyUrl: '#',
  },
  {
    title: 'Audit Internet-ISMS',
    issuer: 'Professionnel',
    date: '2024',
    credentialId: 'ISMS-EK-2024',
    imageUrl:
      'https://img.shields.io/badge/Audit-ISMS-316192?style=for-the-badge&logo=security&logoColor=white',
    verifyUrl: '#',
  },
  {
    title: 'CyberSécurité & API Pentesting',
    issuer: 'CEH / Professionnel',
    date: '2024',
    credentialId: 'CYBER-EK-2024',
    imageUrl:
      'https://img.shields.io/badge/Cybersecurity-000000?style=for-the-badge&logo=kali-linux&logoColor=white',
    verifyUrl: '#',
  },
  {
    title: 'MS Excel Advanced',
    issuer: 'Microsoft / IUT-Dla',
    date: '2023',
    credentialId: 'EXCEL-EK-2023',
    imageUrl:
      'https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white',
    verifyUrl: '#',
  },
];
