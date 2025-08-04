import { Link } from './types';

// Informations personnelles mises à jour
export const personalInfo = {
  name: 'Gaetan X Ekoro Edouard',
  title: 'Software & Data Engineer',
  email: 'gaetan.ekoro@gmail.com',
  phone: '+237 6 93 81 37 01',
  location: 'Cameroun, Douala',
  github: 'https://github.com/Gaetan5',
  linkedin: 'https://linkedin.com/in/gaetan-ekoro',
  cvPath: '/CV-2025_GAETAN EKORO EDOUARD (LastUpdate).pdf',
  cvFileName: 'CV-2025_GAETAN EKORO EDOUARD.pdf',
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

  // DevOps & Cloud
  'Docker',
  'Git',
  'CI/CD',
  'AWS',
  'Linux',

  // IoT & Hardware
  'Raspberry Pi',
  'Arduino',
  'Microcontrôleurs',
  'GPS',
  'Sensors',

  // Data Analytics
  'Pandas',
  'NumPy',
  'Matplotlib',
  'Plotly',
  'Dash',
  'Jupyter',

  // Security & APIs
  'OAuth2',
  'JWT',
  'WebRTC',
  'WebSockets',
  'REST API',
  'GraphQL',

  // Tools & Others
  'Figma',
  'Postman',
  'Swagger',
  'Prisma',
  'Excel',
];

export const projectsData = [
  {
    title: 'Système IoT INTERACT',
    description:
      'Écosystème IoT pour la santé et la sécurité. Solution complète pour startups et entreprises avec intégration de microcontrôleurs.',
    tags: ['IoT', 'Python', 'Microcontrôleurs', 'Sécurité'],
    imageUrl: '/image2.png',
    githubUrl: 'https://github.com/Gaetan5/interact-iot',
    liveUrl: null,
  },
  {
    title: 'Plateforme de Téléconsultation EKOSERX',
    description:
      'API sécurisée avec visioconférence, messagerie en temps réel, et gestion des rendez-vous médicaux.',
    tags: ['Python', 'FastAPI', 'WebRTC', 'PostgreSQL', 'WebSockets'],
    imageUrl: '/image1.png',
    githubUrl: 'https://github.com/Gaetan5/ekoserx',
    liveUrl: null,
  },
  {
    title: 'Synchronisation WooCommerce ↔ Odoo',
    description:
      'API robuste pour la gestion des produits et commandes entre ces deux plateformes e-commerce.',
    tags: ['Python', 'Django', 'REST API', 'MySQL', 'WooCommerce'],
    imageUrl: '/image3.png',
    githubUrl: 'https://github.com/Gaetan5/woo-odoo-sync',
    liveUrl: null,
  },
  {
    title: 'Système de Géolocalisation Médicale',
    description:
      "Intégration d'un système de géolocalisation et de sécurité en temps réel pour voitures médicalisées.",
    tags: ['IoT', 'GPS', 'Python', 'Raspberry Pi', 'Sécurité'],
    imageUrl: '/image4.png',
    githubUrl: 'https://github.com/Gaetan5/medical-gps',
    liveUrl: null,
  },
  {
    title: 'InterPay - Paiement en Ligne',
    description:
      'Application de paiement de tickets en ligne avec génération de QR code, confirmation utilisateur et gestion des abonnements.',
    tags: ['Python', 'Django', 'Stripe API', 'QR Code', 'PostgreSQL'],
    imageUrl: '/image1.png',
    githubUrl: 'https://github.com/Gaetan5/interpay',
    liveUrl: null,
  },
  {
    title: 'Dashboard Analytics INTERACT',
    description:
      'Tableau de bord analytique pour visualiser les données IoT et métriques de performance en temps réel.',
    tags: ['Python', 'Dash', 'Plotly', 'PostgreSQL', 'Redis'],
    imageUrl: '/image2.png',
    githubUrl: 'https://github.com/Gaetan5/interact-dashboard',
    liveUrl: null,
  },
];

export const experiencesData = [
  {
    title: 'Software & Data Engineer',
    location: 'Freelance / INTERACT',
    description:
      "Développement d'applications web robustes et scalables. Spécialisation en Python, FastAPI, et bases de données. Conception de solutions IoT et systèmes embarqués pour la santé et la sécurité.",
    icon: '💻',
    date: '2023 - Présent',
  },
  {
    title: 'IoT Systems Architect',
    location: 'Projets INTERACT',
    description:
      'Conception et développement de systèmes IoT innovants. Intégration de microcontrôleurs, capteurs et géolocalisation pour des solutions médicales et de sécurité.',
    icon: '🔧',
    date: '2022 - Présent',
  },
  {
    title: 'Back-End Developer',
    location: 'Freelance',
    description:
      "Développement d'APIs RESTful avec Python/Django/FastAPI. Intégration de bases de données PostgreSQL/MySQL et mise en place de systèmes d'authentification sécurisés.",
    icon: '⚙️',
    date: '2021 - Présent',
  },
  {
    title: 'Data Analytics Specialist',
    location: 'Projets Personnels',
    description:
      'Analyse de données avec Pandas, NumPy et visualisation avec Plotly/Dash. Création de tableaux de bord analytiques pour le monitoring en temps réel.',
    icon: '📊',
    date: '2021 - Présent',
  },
  {
    title: 'Logo Designer & UI/UX',
    location: 'Freelance',
    description:
      "Création d'identités visuelles uniques et mémorables. Design de logos professionnels et interfaces utilisateur modernes pour diverses entreprises.",
    icon: '🎨',
    date: '2020 - Présent',
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
  {
    title: 'Data Engineering avec Apache Kafka et PostgreSQL',
    excerpt:
      "Pipeline de données en temps réel pour l'analyse de flux IoT avec Kafka, Spark et PostgreSQL.",
    content:
      "Implémentation d'un pipeline de données robuste pour traiter des millions d'événements IoT par seconde...",
    tags: ['Kafka', 'PostgreSQL', 'Data Engineering', 'IoT'],
    date: '2024-01-05',
    readTime: '15 min',
    imageUrl: '/image3.png',
    slug: 'data-engineering-kafka-postgresql',
  },
  {
    title: 'Sécurité des Systèmes IoT : Bonnes Pratiques',
    excerpt:
      'Protocoles de sécurité pour protéger les données sensibles dans les systèmes IoT médicaux.',
    content:
      'Mise en place de protocoles de chiffrement, authentification multi-facteurs et monitoring de sécurité...',
    tags: ['IoT', 'Security', 'Medical', 'Encryption'],
    date: '2023-12-20',
    readTime: '10 min',
    imageUrl: '/image4.png',
    slug: 'securite-systemes-iot',
  },
];

export const certificationsData = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-123456',
    imageUrl:
      'https://img.shields.io/badge/AWS_Certified_Solutions_Architect-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white',
    verifyUrl: 'https://aws.amazon.com/verification',
  },
  {
    title: 'Python Professional Certification',
    issuer: 'Python Institute',
    date: '2023',
    credentialId: 'PCAP-789012',
    imageUrl:
      'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
    verifyUrl: 'https://pythoninstitute.org/verify',
  },
  {
    title: 'Django Web Development',
    issuer: 'Django Software Foundation',
    date: '2023',
    credentialId: 'DJANGO-345678',
    imageUrl:
      'https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white',
    verifyUrl: 'https://www.djangoproject.com/verify',
  },
  {
    title: 'PostgreSQL Database Administrator',
    issuer: 'PostgreSQL Global Development Group',
    date: '2023',
    credentialId: 'PG-901234',
    imageUrl:
      'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',
    verifyUrl: 'https://www.postgresql.org/verify',
  },
  {
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: '2023',
    credentialId: 'DCA-567890',
    imageUrl:
      'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white',
    verifyUrl: 'https://www.docker.com/verify',
  },
  {
    title: 'Git & GitHub Advanced',
    issuer: 'GitHub',
    date: '2023',
    credentialId: 'GITHUB-123789',
    imageUrl:
      'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
    verifyUrl: 'https://github.com/verify',
  },
];
