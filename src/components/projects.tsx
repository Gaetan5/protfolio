'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/useInView';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t, tr } from '@/lib/i18n';
import OptimizedImage from './optimized-image';
import TiltCard from './tilt-card';
import ScrollReveal from './scroll-reveal';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import CyberWaves from './cyber-waves';

const Projects = React.memo(function Projects() {
  const { ref } = useSectionInView('#projects');
  const { locale } = useLocaleContext();
  const projects = tr('projects.list', locale) || [];

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '100px' }}
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

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[300px]">
        {projects.map((project: any, index: number) => {
          const isFeatured = project.featured;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200/50 dark:border-slate-800/50 hover:border-cyan-400/50 transition-all duration-500 shadow-xl hover:shadow-cyan-500/10 h-full ${
                isFeatured
                  ? 'md:col-span-2 md:row-span-2 lg:col-span-3'
                  : index >= 5 
                    ? 'md:col-span-2 lg:col-span-3' 
                    : 'md:col-span-2 lg:col-span-2'
              }`}
            >
              <TiltCard className="h-full w-full">
                <div className="relative h-full w-full flex flex-col">
                  {/* Background Layer */}
                  {isFeatured ? (
                    <div className="absolute inset-0 bg-slate-950 z-0">
                      <CyberWaves />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-white dark:bg-slate-900 transition-colors duration-300 z-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-white/20 dark:via-transparent to-transparent z-10" />
                    </div>
                  )}

                  {/* Image Layer - Absolute background */}
                  <div className="absolute inset-0 z-10 overflow-hidden transition-all duration-700 opacity-40 group-hover:opacity-70 dark:opacity-50 dark:group-hover:opacity-80">
                    <OptimizedImage
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {project.logoUrl && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="absolute top-6 left-6 z-30 w-16 h-16 p-3 glass rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                      >
                        <div className="relative w-full h-full">
                          <OptimizedImage
                            src={project.logoUrl}
                            alt={`${project.title} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Content Layer */}
                  <div className={`relative z-30 mt-auto p-6 flex flex-col justify-end transition-all duration-500 ${
                    isFeatured ? 'bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent' : 'bg-gradient-to-t from-white/90 dark:from-slate-950/90 via-white/40 dark:via-slate-950/40 to-transparent'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className={`font-black transition-colors duration-300 tracking-tight ${isFeatured
                          ? 'text-3xl text-white'
                          : 'text-2xl text-slate-900 dark:text-white group-hover:text-cyan-500'
                          }`}
                      >
                        {project.title}
                      </h3>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener"
                          className="p-2 rounded-full glass text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-lg"
                        >
                          <ArrowUpRight size={24} />
                        </a>
                      )}
                    </div>

                    <p
                      className={`text-sm mb-4 line-clamp-2 transition-colors duration-300 font-medium ${isFeatured ? 'text-slate-200' : 'text-slate-600 dark:text-slate-400'
                        }`}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag: string, i: number) => (
                        <span
                          key={i}
                          className={`text-[10px] px-2.5 py-1 rounded-lg font-black tracking-widest uppercase border transition-all duration-300 ${isFeatured
                            ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400'
                            : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 group-hover:border-cyan-500/50 group-hover:text-cyan-500'
                            }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Quick Action Links */}
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-200/50 dark:border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="flex items-center gap-2 text-xs text-cyan-500 font-black tracking-widest hover:underline"
                        >
                          <Github size={16} /> CODE SOURCE
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';
export default Projects;
