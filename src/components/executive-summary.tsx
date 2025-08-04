'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/useInView';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import { ArrowRight, Target, Zap, Users, TrendingUp } from 'lucide-react';
import CVDownload from './cv-download';

const ExecutiveSummary = React.memo(function ExecutiveSummary() {
  const { ref } = useSectionInView('#executive-summary');
  const { locale } = useLocaleContext();

  return (
    <section ref={ref} id="executive-summary" className="scroll-mt-28 mb-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="max-w-[45rem] text-center leading-8 sm:mb-40"
      >
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">
          {t('executive_summary_title', locale)}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12">
          {t('executive_summary_description', locale)}
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-cyan-600" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('value_proposition', locale)}
              </h3>
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">{t('value_proposition_text', locale)}</p>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-cyan-600" />
                  {t('value_point_1', locale)}
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-cyan-600" />
                  {t('value_point_2', locale)}
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-cyan-600" />
                  {t('value_point_3', locale)}
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('key_achievements', locale)}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3 p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                <Zap className="w-6 h-6 text-cyan-600" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {t('achievement_1_title', locale)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t('achievement_1_desc', locale)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {t('achievement_2_title', locale)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t('achievement_2_desc', locale)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Target className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {t('achievement_3_title', locale)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t('achievement_3_desc', locale)}
                  </div>
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
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">{t('cta_title', locale)}</h3>
            <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">{t('cta_description', locale)}</p>

            <CVDownload />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

ExecutiveSummary.displayName = 'ExecutiveSummary';

export default ExecutiveSummary;
