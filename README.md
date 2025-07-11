# Portfolio Next.js

![Build](https://img.shields.io/github/actions/workflow/status/Gaetan5/portfolio/main.yml?branch=main)

Portfolio personnel développé avec Next.js, TypeScript, Tailwind CSS, Framer Motion, Zustand.

## Démarrage rapide

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le résultat.

## Tests

```bash
npm test
```

## Lint & format

```bash
npm run lint
```

## Internationalisation

Le projet supporte l’anglais et le français (voir `src/locales`).

## Déploiement

Déployable sur [Vercel](https://vercel.com/) ou tout hébergeur Next.js compatible.

## Contribution

Voir [CONTRIBUTING.md](./CONTRIBUTING.md)

---

### SEO & Accessibilité

- Balises meta dynamiques et Open Graph à ajouter pour chaque page.
- Accessibilité vérifiée avec Lighthouse ou axe-core.

#### Audit accessibilité rapide

```bash
npm install -g axe-core
npx axe http://localhost:3000 --exit --tags wcag2a,wcag2aa
```

---

### Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Zustand
- Framer Motion

## Formatage automatique

```bash
npm run format      # Formate tout le code avec Prettier
npm run format:check # Vérifie le formatage Prettier
```

## Audit accessibilité

```bash
npm run a11y:audit # Audit accessibilité avec axe-core (lancer le serveur local d'abord)
```

## Lint avancé

ESLint est configuré avec les plugins :

- prettier (formatage)
- jsx-a11y (accessibilité)
- import (gestion des imports)

## Audit SEO

```bash
npm run seo
```
