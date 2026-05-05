'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '100px' }}
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

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GitHub Stats Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="group relative bg-white/5 dark:bg-gray-800/20 backdrop-blur-xl rounded-3xl p-4 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="https://github-readme-stats-sigma-five.vercel.app/api?username=Gaetan5&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117"
                alt="GitHub Stats"
                width={495}
                height={195}
                className="w-full h-auto max-w-full relative z-10"
                unoptimized
              />
            </div>

            <div className="group relative bg-white/5 dark:bg-gray-800/20 backdrop-blur-xl rounded-3xl p-4 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=Gaetan5&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117"
                alt="Top Languages"
                width={495}
                height={195}
                className="w-full h-auto max-w-full relative z-10"
                unoptimized
              />
            </div>
          </motion.div>

          {/* GitHub Stats Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-stretch"
          >
            <div className="group relative w-full bg-white/5 dark:bg-gray-800/20 backdrop-blur-xl rounded-3xl p-4 border border-white/10 hover:border-rose-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-500/10 overflow-hidden flex flex-col justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src={`https://github-readme-streak-stats.herokuapp.com/?user=Gaetan5&theme=transparent&stroke=f43f5e&fire=f43f5e&ring=f43f5e&sideNums=94a3b8&currStreakNum=94a3b8&currStreakLabel=f43f5e&sideLabels=94a3b8&dates=64748b&hide_border=true`}
                alt="GitHub Streak"
                width={495}
                height={195}
                className="w-full h-auto max-w-full relative z-10"
                unoptimized
              />
            </div>
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
