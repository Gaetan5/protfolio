import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  { nameEng: "Home", nameFr: "Accueil", hash: "#home" },
  { nameEng: "About", nameFr: "À propos", hash: "#about" },
  { nameEng: "Projects", nameFr: "Projets", hash: "#projects" },
  { nameEng: "Skills", nameFr: "Compétences", hash: "#skills" },
  { nameEng: "Contact", nameFr: "Contact", hash: "#contact" },
];

export const projectsData: ProjectInfo[] = [
  {
    titleEn: "Snowlake Theme",
    titleFr: "Thème Snowlake",
    descriptionEn: "A modern, minimalist blog theme built with Next.js and Tailwind CSS.",
    descriptionFr: "Un thème de blog moderne et minimaliste construit avec Next.js et Tailwind CSS.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Python"],
    imageUrl: "/image1.png",
    link: "https://www.google.com",
  },
  {
    titleEn: "Budget App",
    titleFr: "Application Budget",
    descriptionEn: "A personal finance app to track expenses and manage budgets easily.",
    descriptionFr: "Une application de gestion de finances personnelles pour suivre ses dépenses et gérer son budget facilement.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Python"],
    imageUrl: "/image2.png",
    link: "https://www.google.com",
  },
  {
    titleEn: "Storage App",
    titleFr: "Application de Stockage",
    descriptionEn: "A cloud storage solution for secure file management and sharing.",
    descriptionFr: "Une solution de stockage cloud pour gérer et partager ses fichiers en toute sécurité.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Python"],
    imageUrl: "/image3.png",
    link: "https://www.google.com",
  },
  {
    titleEn: "Missio Theme",
    titleFr: "Thème Missio",
    descriptionEn: "A portfolio and project showcase theme for creative professionals.",
    descriptionFr: "Un thème portfolio pour présenter ses projets et réalisations créatives.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Python"],
    imageUrl: "/image4.png",
    link: "https://www.google.com",
  },
];

export const skillsData = [
  "Python", "Django", "JavaScript", "TypeScript", "Java", "Next.js", "Node.js", "Git", "Tailwind", "Canvas", "MongoDB", "Excel", "Data Analytic",
];
