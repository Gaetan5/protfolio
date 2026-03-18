'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/useInView';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t, tr } from '@/lib/i18n';
import OptimizedImage from './optimized-image';
import TiltCard from './tilt-card';
import ScrollReveal from './scroll-reveal';
import { Github, ExternalLink } from 'lucide-react';

const Projects = React.memo(function Projects() {
  const { ref } = useSectionInView('#projects');
  const { locale } = useLocaleContext();
  const projects = tr('projects.list', locale) || [];

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold capitalize mb-4 text-gray-900 dark:text-white">
          <ScrollReveal wordClassName="text-gradient font-extrabold">
            {t('projects.heading', locale)}
          </ScrollReveal>
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
          {t('projects.subtitle', locale)}
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any, index: number) => (
            <TiltCard key={index} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative glass rounded-xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-900/40 transition-all duration-300 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:border-cyan-400/50 dark:hover:border-cyan-600/50 h-full"
              >
                {/* Image du projet */}
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>

                {/* Contenu du projet */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Liens */}
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        <Github size={20} />
                        <span className="text-sm">{t('projects.viewCode', locale)}</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span className="text-sm">{t('projects.viewProject', locale)}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
