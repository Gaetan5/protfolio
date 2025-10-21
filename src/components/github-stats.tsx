'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/useInView';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import { Github, Star, GitBranch, Eye, TrendingUp, Calendar, Code } from 'lucide-react';

const GitHubStats = React.memo(function GitHubStats() {
  const { ref } = useSectionInView('#github-stats');
  const { locale } = useLocaleContext();

  return (
    <section ref={ref} id="github" className="scroll-mt-28 mb-28 max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold capitalize mb-4 text-gray-900 dark:text-white">
          {t('github_stats_title', locale)}
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
          {t('github_stats_description', locale)}
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Github className="w-6 h-6" />
                {t('github_overview', locale)}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t('repositories', locale)}
                  </div>
                </div>

                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                    1.2k+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t('commits', locale)}
                  </div>
                </div>

                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                    25+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t('stars', locale)}
                  </div>
                </div>

                <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                    15+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t('forks', locale)}
                  </div>
                </div>
              </div>
            </div>

            {/* Top Languages */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('top_languages', locale)}
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Python</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-cyan-600 h-2 rounded-full w-[85%]"></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">85%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full w-[70%]"></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">70%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">TypeScript</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-[60%]"></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">60%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Java</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full w-[45%]"></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">45%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* GitHub Activity Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* GitHub Stats Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                {t('github_activity', locale)}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700 dark:text-gray-300">Total Commits</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">1,247</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">Stars Earned</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">25</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">Repositories</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">50+</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700 dark:text-gray-300">Profile Views</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">2.1k</span>
                </div>
              </div>
            </div>

            {/* Contribution Streak */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('contribution_streak', locale)}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Current Streak</span>
                  <span className="font-bold text-green-600 dark:text-green-400">7 days</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Longest Streak</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">45 days</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Total Contributions</span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">1,247</span>
                </div>

                <div className="grid grid-cols-7 gap-1 mt-4">
                  {Array.from({ length: 35 }, (_, i) => (
                    <div
                      key={i}
                      className={`h-3 rounded-sm ${
                        i < 25
                          ? 'bg-green-500'
                          : i < 30
                            ? 'bg-green-300'
                            : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
            {t('view_github_profile', locale)}
          </a>
        </motion.div>
      </div>
    </section>
  );
});

GitHubStats.displayName = 'GitHubStats';

export default GitHubStats;
