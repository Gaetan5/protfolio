'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/useInView';
import { certificationsData } from '@/lib/data';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import OptimizedImage from './optimized-image';

const Certifications = React.memo(function Certifications() {
  const { ref } = useSectionInView('#certifications');
  const { locale } = useLocaleContext();

  return (
    <section ref={ref} id="certifications" className="scroll-mt-28 mb-28 max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold capitalize mb-4 text-gray-900 dark:text-white">
          {t('certifications_title', locale)}
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
          {t('certifications_description', locale)}
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 p-6"
            >
              {/* Badge */}
              <div className="mb-4">
                <OptimizedImage
                  src={cert.imageUrl}
                  alt={cert.title}
                  width={200}
                  height={60}
                  isBadge={true}
                  className="w-full h-auto"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                  ID: {cert.credentialId}
                </div>

                {/* Verify Button */}
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                >
                  <Award className="w-4 h-4" />
                  {t('verify_certification', locale)}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl">
            <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
              {certificationsData.length}
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              {t('total_certifications', locale)}
            </div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">2024</div>
            <div className="text-gray-700 dark:text-gray-300">
              {t('latest_certification', locale)}
            </div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
            <div className="text-gray-700 dark:text-gray-300">{t('verification_rate', locale)}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Certifications.displayName = 'Certifications';

export default Certifications;
