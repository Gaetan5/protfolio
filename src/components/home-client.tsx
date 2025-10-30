'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { useLocaleContext } from '@/containers/LocaleCtx';

// Composants dynamiques pour le lazy loading
const Intro = dynamic(() => import('@/components/intro'), {
  loading: () => <div className="h-screen bg-gray-200 animate-pulse" />,
  ssr: true,
});

const About = dynamic(() => import('@/components/about'), {
  loading: () => <div className="h-96 bg-gray-200 animate-pulse" />,
  ssr: true,
});

const Projects = dynamic(() => import('@/components/projects'), {
  loading: () => <div className="h-96 bg-gray-200 animate-pulse" />,
  ssr: true,
});

const Skills = dynamic(() => import('@/components/skills'), {
  loading: () => <div className="h-96 bg-gray-200 animate-pulse" />,
  ssr: true,
});

const Stats = dynamic(() => import('@/components/stats'), {
  loading: () => <div className="h-32 bg-gray-200 animate-pulse" />,
  ssr: true,
});

const Experience = dynamic(() => import('@/components/experience'), {
  loading: () => <div className="h-96 bg-gray-200 animate-pulse" />,
  ssr: true,
});

const Blog = dynamic(() => import('@/components/blog'), {
  loading: () => <div className="h-96 bg-gray-200 animate-pulse" />,
  ssr: true,
});

const Certifications = dynamic(() => import('@/components/certifications'), {
  loading: () => <div className="h-96 bg-gray-200 animate-pulse" />,
  ssr: true,
});

const GitHubStats = dynamic(() => import('@/components/github-stats'), {
  loading: () => <div className="h-96 bg-gray-200 animate-pulse" />,
  ssr: true,
});

const ExecutiveSummary = dynamic(() => import('@/components/executive-summary'), {
  loading: () => <div className="h-96 bg-gray-200 animate-pulse" />,
  ssr: true,
});

const Contact = dynamic(() => import('@/components/contact'), {
  loading: () => <div className="h-96 bg-gray-200 animate-pulse" />,
  ssr: true,
});

// Wrapper client pour les fonctionnalités avancées
const ClientWrapper = dynamic(() => import('@/components/client-wrapper'), {
  loading: () => null,
  ssr: true,
});

export default function HomeClient() {
  const { locale } = useLocaleContext();

  return (
    <ClientWrapper>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Section d'introduction */}
        <Intro />

        {/* Résumé exécutif */}
        <ExecutiveSummary />

        {/* Statistiques */}
        <Stats />

        {/* À propos */}
        <About />

        {/* Compétences */}
        <Skills />

        {/* Projets */}
        <Projects />

        {/* Expérience */}
        <Experience />

        {/* Blog */}
        <Blog />

        {/* Certifications */}
        <Certifications />

        {/* Statistiques GitHub */}
        <GitHubStats />

        {/* Contact */}
        <Contact />
      </main>
    </ClientWrapper>
  );
}
