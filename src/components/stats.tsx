'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import { Code, Users, Award, Clock } from 'lucide-react';

const Stats = React.memo(function Stats() {
  const { locale } = useLocaleContext();

  const stats = [
    {
      icon: <Code className="w-8 h-8" />,
      number: '50+',
      label: locale === 'fr' ? 'Projets réalisés' : 'Projects completed',
      color: 'text-cyan-600 dark:text-cyan-400',
      bgColor: 'bg-cyan-100 dark:bg-cyan-900',
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: '30+',
      label: locale === 'fr' ? 'Clients satisfaits' : 'Happy clients',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: '5+',
      label: locale === 'fr' ? "Années d'expérience" : 'Years experience',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: '24/7',
      label: locale === 'fr' ? 'Support disponible' : 'Support available',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {locale === 'fr' ? 'Chiffres clés' : 'Key Numbers'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {locale === 'fr'
              ? 'Quelques statistiques qui témoignent de mon expertise et de mon engagement'
              : 'Some statistics that demonstrate my expertise and commitment'}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Stats.displayName = 'Stats';

export default Stats;
