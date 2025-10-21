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

const Contact = React.memo(function Contact() {
  const { ref } = useSectionInView('#contact');
  const { locale } = useLocaleContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-28 max-w-7xl mx-auto px-4"
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold capitalize mb-4 text-gray-900 dark:text-white">
          {t('contact_title', locale)}
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
          {t('contact_description', locale)}{' '}
          <a className="underline text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300" href="mailto:gaetan.ekoro@gmail.com">
            ekorogaetan5@gmail.com
          </a>{' '}
          {t('contact_or', locale)}
        </p>
      </div>

      <motion.form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={async (e) => {
          e.preventDefault();
          setIsSubmitting(true);

          const formData = new FormData(e.currentTarget);
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
              toast.success('Message envoyé avec succès ! 🎉');
              e.currentTarget.reset();
            } else {
              toast.error(data.error || "Erreur lors de l'envoi");
            }
          } catch (error) {
            toast.error('Erreur réseau. Veuillez réessayer.');
            console.error('Erreur:', error);
          } finally {
            setIsSubmitting(false);
          }
        }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={t('contact_email_placeholder', locale)}
          disabled={isSubmitting}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none resize-none"
          name="message"
          placeholder={t('contact_message_placeholder', locale)}
          required
          maxLength={5000}
          disabled={isSubmitting}
        />
        <SubmitBtn text={isSubmitting ? 'Envoi...' : t('contact_submit', locale)} />
      </motion.form>

      {/* CV Download Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16"
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {t('cv_download_title', locale)}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          {t('cv_download_description', locale)}
        </p>
        <CVDownload />
      </motion.div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
