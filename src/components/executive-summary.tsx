'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/useInView';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import { ArrowRight, Target, Zap, Users, TrendingUp } from 'lucide-react';
import CVDownload from './cv-download';
import ScrollReveal from './scroll-reveal';

const ExecutiveSummary = React.memo(function ExecutiveSummary() {
  const { ref } = useSectionInView('#executive-summary');
  const { locale } = useLocaleContext();

  return (
    <section ref={ref} id="executive-summary" className="scroll-mt-28 mb-28 max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '100px' }}
        transition={{ delay: 0.175 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">
          <ScrollReveal wordClassName="text-gradient font-extrabold">
            {t('executive-summary.heading', locale)}
          </ScrollReveal>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
          {t('executive-summary.subtitle', locale)}
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-10 rounded-3xl border border-white/20 dark:border-white/5 shadow-2xl transition-all duration-500 group"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                {t('executive-summary.valueProposition', locale)}
              </h3>
            </div>

            <div className="space-y-6 text-slate-600 dark:text-slate-300">
              <p className="text-xl leading-relaxed font-bold italic">
                {t('executive-summary.valuePropositionText', locale)}
              </p>

              <ul className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                    {t(`executive-summary.valuePoint${i}`, locale)}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass p-10 rounded-3xl border border-white/20 dark:border-white/5 shadow-2xl transition-all duration-500 group"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                {t('executive-summary.keyAchievements', locale)}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: Zap, color: 'text-cyan-500', bg: 'bg-cyan-500/10', titleKey: 'achievement1Title', descKey: 'achievement1Desc' },
                { icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-500/10', titleKey: 'achievement2Title', descKey: 'achievement2Desc' },
                { icon: Target, color: 'text-purple-500', bg: 'bg-purple-500/10', titleKey: 'achievement3Title', descKey: 'achievement3Desc' }
              ].map((ach, idx) => (
                <div key={idx} className={`flex items-center gap-5 p-5 rounded-2xl ${ach.bg} border border-white/10 group-hover:translate-x-2 transition-transform duration-300`}>
                  <ach.icon className={`w-8 h-8 ${ach.color}`} />
                  <div>
                    <div className="font-black text-slate-900 dark:text-white tracking-tight">
                      {t(`executive-summary.${ach.titleKey}`, locale)}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-bold">
                      {t(`executive-summary.${ach.descKey}`, locale)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="relative overflow-hidden bg-slate-900 dark:bg-white rounded-3xl p-12 text-white dark:text-slate-900 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 opacity-50" />
            <h3 className="text-3xl font-black mb-4 relative z-10 tracking-tight uppercase">
              {t('executive-summary.ctaTitle', locale)}
            </h3>
            <p className="text-slate-400 dark:text-slate-500 mb-8 max-w-2xl mx-auto font-bold text-lg relative z-10">
              {t('executive-summary.ctaDescription', locale)}
            </p>

            <div className="relative z-10">
              <CVDownload />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

ExecutiveSummary.displayName = 'ExecutiveSummary';

export default ExecutiveSummary;
