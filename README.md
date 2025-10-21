# 🚀 **Portfolio Professionnel - Gaetan X Ekoro**

> **Software & Data Engineer** spécialisé en IoT, APIs et solutions médicales

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 **Aperçu**

Portfolio moderne et professionnel développé avec **Next.js 15**, **TypeScript** et **Tailwind CSS**. Présentation complète de mon expertise en développement de logiciels, systèmes IoT et Data Engineering.

**🌐 Live Demo:** [gaetan-ekoro.vercel.app](https://gaetan-ekoro.vercel.app)

## ✨ **Fonctionnalités**

### 🎨 **Interface & Design**

- ✅ **Design moderne** avec Tailwind CSS
- ✅ **Mode sombre/clair** avec transitions fluides
- ✅ **Interface responsive** adaptée à tous les appareils
- ✅ **Animations fluides** avec Framer Motion
- ✅ **Navigation intuitive** avec scroll smooth

### 📱 **Sections Principales**

- ✅ **Résumé Exécutif** - Présentation professionnelle
- ✅ **À propos** - Présentation détaillée et expertise
- ✅ **Expérience** - Timeline professionnelle
- ✅ **Projets** - Portfolio de projets Data Engineering
- ✅ **Compétences** - 40+ technologies maîtrisées
- ✅ **Blog** - Articles techniques et expertise
- ✅ **Certifications** - 6 certifications professionnelles
- ✅ **GitHub Stats** - Activité open source
- ✅ **Statistiques** - Métriques de performance
- ✅ **Contact** - Formulaire de contact fonctionnel

### ⚡ **Optimisations Techniques**

- ✅ **Performance optimisée** (Lighthouse Score 95+)
- ✅ **Images optimisées** avec Next.js Image
- ✅ **Chargement dynamique** des composants
- ✅ **Mémoisation** avec React.memo
- ✅ **Contextes optimisés** (useMemo, useCallback)
- ✅ **SEO optimisé** avec métadonnées
- ✅ **Internationalisation** (FR/EN)

## 🛠️ **Technologies Utilisées**

### **Frontend**

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes

### **Backend & APIs**

- **Python** - Langage principal
- **FastAPI** - APIs performantes
- **Django** - Framework web robuste
- **PostgreSQL** - Base de données relationnelle
- **Redis** - Cache et sessions

### **IoT & Hardware**

- **Raspberry Pi** - Systèmes embarqués
- **Arduino** - Microcontrôleurs
- **Sensors** - Capteurs et monitoring
- **GPS** - Géolocalisation

### **Data Engineering**

- **Apache Kafka** - Streaming de données
- **Apache Spark** - Traitement big data
- **Pandas** - Analyse de données
- **Plotly/Dash** - Visualisation

### **DevOps & Cloud**

- **Docker** - Conteneurisation
- **AWS** - Cloud computing
- **Git** - Version control
- **CI/CD** - Intégration continue

## 🚀 **Installation & Démarrage**

### **Prérequis**

- Node.js 18+
- npm ou yarn

### **Installation**

```bash
# Cloner le repository
git clone https://github.com/Gaetan5/protfolio.git
cd protfolio

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local et ajouter votre clé API Resend

# Démarrer en mode développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### **Scripts Disponibles**

```bash
npm run dev          # Démarrage en développement
npm run build        # Build de production
npm run start        # Démarrage en production
npm run lint         # Vérification du code
npm run test         # Tests unitaires
```

## 📊 **Structure du Projet**

```
src/
├── app/                    # App Router Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants React
│   ├── intro.tsx          # Section d'introduction
│   ├── about.tsx          # Section à propos
│   ├── experience.tsx     # Expérience professionnelle
│   ├── projects.tsx       # Portfolio de projets
│   ├── skills.tsx         # Compétences techniques
│   ├── blog.tsx           # Articles techniques
│   ├── certifications.tsx # Certifications
│   ├── github-stats.tsx   # Statistiques GitHub
│   ├── executive-summary.tsx # Résumé exécutif
│   ├── stats.tsx          # Statistiques
│   ├── contact.tsx        # Formulaire de contact
│   └── footer.tsx         # Pied de page
├── containers/            # Contextes et providers
│   ├── LocaleCtx.tsx      # Contexte d'internationalisation
│   ├── Theme-context.tsx  # Contexte de thème
│   └── providers.tsx      # Providers globaux
├── lib/                   # Utilitaires et données
│   ├── data.ts            # Données du portfolio
│   ├── i18n.ts            # Internationalisation
│   └── useInView.ts       # Hook d'intersection
└── locales/               # Fichiers de traduction
    ├── fr.json            # Traductions françaises
    └── en.json            # Traductions anglaises
```

## 🎯 **Expertise Principale**

### **Software Engineering**

- Développement d'APIs RESTful et GraphQL
- Applications web scalables avec Django/FastAPI
- Architecture microservices
- Tests unitaires et d'intégration

### **Data Engineering**

- Pipelines de données en temps réel
- Traitement big data avec Apache Spark
- Visualisation avec Plotly/Dash
- Optimisation des performances

### **IoT & Embedded Systems**

- Systèmes IoT pour la santé et la sécurité
- Intégration de microcontrôleurs
- Géolocalisation et monitoring
- Protocoles de sécurité

### **DevOps & Cloud**

- Déploiement avec Docker
- Infrastructure AWS
- CI/CD avec GitHub Actions
- Monitoring et logging

## 📈 **Métriques de Performance**

- **Lighthouse Score** : 95+
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1
- **Time to Interactive** : < 3s

## 🌐 **Déploiement**

Le portfolio est déployé sur **Vercel** avec :

- ✅ **CDN global** pour des performances optimales
- ✅ **HTTPS automatique**
- ✅ **Déploiement automatique** depuis GitHub
- ✅ **Analytics intégrés**

## 📞 **Contact**

- **Email** : gaetan.ekoro@gmail.com
- **GitHub** : [@Gaetan5](https://github.com/Gaetan5)
- **LinkedIn** : [Gaetan X Ekoro](https://linkedin.com/in/gaetan-ekoro)

## 📄 **Licence**

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Développé avec ❤️ par Gaetan X Ekoro**
