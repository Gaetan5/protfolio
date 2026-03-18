'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/useInView';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import { Github } from 'lucide-react';

const GitHubStats = React.memo(function GitHubStats() {
  const { ref } = useSectionInView('#github-stats');
  const { locale } = useLocaleContext();

  return (
    <section ref={ref} id="github-stats" className="scroll-mt-28 mb-28 max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold capitalize mb-4 text-gray-900 dark:text-white">
          {t('github-stats.heading', locale)}
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
          {t('github-stats.subtitle', locale)}
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GitHub Stats Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-2 border border-gray-200 dark:border-gray-700 overflow-hidden flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=Gaetan5&show_icons=true&theme=${locale === 'fr' ? 'radical' : 'tokyonight'}&hide_border=true&bg_color=00000000`}
                alt="GitHub Stats"
                className="w-full h-auto max-w-full"
                loading="lazy"
              />
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-2 border border-gray-200 dark:border-gray-700 overflow-hidden flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Gaetan5&layout=compact&theme=${locale === 'fr' ? 'radical' : 'tokyonight'}&hide_border=true&bg_color=00000000`}
                alt="Top Languages"
                className="w-full h-auto max-w-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* GitHub Stats Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-2 border border-gray-200 dark:border-gray-700 overflow-hidden flex justify-center">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=Gaetan5&theme=${locale === 'fr' ? 'radical' : 'tokyonight'}&hide_border=true&background=00000000`}
                alt="GitHub Streak"
                className="w-full h-auto max-w-full"
                loading="lazy"
              />
            </div>

            {/* Vous pouvez ajouter d'autres cartes ici si nécessaire */}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Gaetan5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900 text-white font-medium rounded-lg transition-colors"
          >
            <Github className="w-5 h-5" />
            {t('github-stats.view_profile', locale)}
          </a>
        </motion.div>
      </div>
    </section>
  );
});

GitHubStats.displayName = 'GitHubStats';

export default GitHubStats;
