'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/useInView';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import SubmitBtn from './submit-btn';
import CVDownload from './cv-download';
import toast from 'react-hot-toast';
import ScrollReveal from './scroll-reveal';

const Contact = React.memo(function Contact() {
  const { ref } = useSectionInView('#contact');
  const { locale } = useLocaleContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section ref={ref} id="contact" className="scroll-mt-28 mb-28 max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold capitalize mb-4 text-gray-900 dark:text-white">
          <ScrollReveal wordClassName="text-gradient font-extrabold">
            {t('contact.heading', locale)}
          </ScrollReveal>
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
          {t('contact.subtitle', locale)}{' '}
          <a
            className="underline text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
            href="mailto:ekorogaetan5@gmail.com"
          >
            ekorogaetan5@gmail.com
          </a>{' '}
          {t('contact.or', locale)}
        </p>
      </div>

      <motion.form
        className="mt-16 flex flex-col max-w-4xl mx-auto space-y-6"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          setIsSubmitting(true);

          const formData = new FormData(form);
          const email = formData.get('senderEmail') as string;
          const message = formData.get('message') as string;

          try {
            const response = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, message }),
            });

            const data = await response.json();

            if (response.ok) {
              toast.success(t('common.success', locale));
              form.reset();
            } else {
              toast.error(data.error || t('common.error', locale));
            }
          } catch (error) {
            toast.error(t('common.network_error', locale));
            console.error('Erreur:', error);
          } finally {
            setIsSubmitting(false);
          }
        }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.175 }}
      >
        <div className="group relative">
          <input
            className="w-full h-16 px-6 glass rounded-2xl border-white/20 dark:border-white/5 dark:text-white outline-none focus:border-cyan-500/50 transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder={t('contact.email_placeholder', locale)}
            disabled={isSubmitting}
          />
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 rounded-full" />
        </div>

        <div className="group relative">
          <textarea
            className="w-full h-64 p-6 glass rounded-3xl border-white/20 dark:border-white/5 dark:text-white outline-none focus:border-cyan-500/50 transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium resize-none"
            name="message"
            placeholder={t('contact.message_placeholder', locale)}
            required
            maxLength={5000}
            disabled={isSubmitting}
          />
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 rounded-full" />
        </div>

        <div className="flex justify-center pt-4">
          <SubmitBtn
            text={isSubmitting ? t('common.sending', locale) : t('contact.submit', locale)}
          />
        </div>
      </motion.form>

      {/* CV Download Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-24 text-center glass p-10 rounded-3xl border border-white/20 dark:border-white/5 max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
          {t('contact.cv_download_title', locale)}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
          {t('contact.cv_download_description', locale)}
        </p>
        <CVDownload />
      </motion.div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
