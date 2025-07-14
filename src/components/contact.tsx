'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';
import { useSectionInView } from '@/lib/useInView';
import ErrorMessage from './ErrorMessage';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';

export default function Contact() {
  const { ref } = useSectionInView('#contact');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { locale } = useLocaleContext();
  console.log('Contact rendered, locale:', locale);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const form = e.currentTarget;
    const email = (form.elements.namedItem('senderEmail') as HTMLInputElement)?.value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value;
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError(t('contact_error_email', locale));
      return;
    }
    if (!message || message.length < 10) {
      setError(t('contact_error_message', locale));
      return;
    }
    // Simuler l'envoi (à remplacer par l'appel API réel)
    setTimeout(() => {
      setSuccess(t('contact_success', locale));
      form.reset();
    }, 800);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading locale={locale}>contact</SectionHeading>
      <p className="text-gray-700 mt-4 dark:text-white/80">{t('contact_intro', locale)}</p>
      <form
        className="mt-10 w-full max-w-lg flex flex-col space-y-6 dark:text-black"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="flex flex-col">
          <label
            htmlFor="senderEmail"
            className="mb-2 text-sm font-medium text-gray-700 dark:text-white/80"
          >
            {t('contact_email_label', locale)}
          </label>
          <input
            id="senderEmail"
            className="h-14 px-4 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder={t('contact_email_placeholder', locale)}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="mb-2 text-sm font-medium text-gray-700 dark:text-white/80"
          >
            {t('contact_message_label', locale)}
          </label>
          <textarea
            id="message"
            className="h-52 px-4 py-3 rounded-lg resize-none border border-gray-300 dark:border-gray-700 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
            name="message"
            placeholder={t('contact_message_placeholder', locale)}
            required
            maxLength={5000}
          />
        </div>
        <SubmitBtn text={t('contact_submit', locale)} />
        <ErrorMessage message={error} />
        {success && (
          <div className="text-green-600 bg-green-50 border border-green-200 rounded p-2 mt-2 text-sm">
            {success}
          </div>
        )}
      </form>
    </motion.section>
  );
}
