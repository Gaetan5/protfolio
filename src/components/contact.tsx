'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/useInView';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import SubmitBtn from './submit-btn';
import CVDownload from './cv-download';

const Contact = React.memo(function Contact() {
  const { ref } = useSectionInView('#contact');
  const { locale } = useLocaleContext();

  return (
    <section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>{t('contact_title', locale)}</SectionHeading>
      <p className="text-gray-700 dark:text-gray-300 -mt-6">
        {t('contact_description', locale)}{' '}
        <a className="underline" href="mailto:gaetan.ekoro@gmail.com">
          gaetan.ekoro@gmail.com
        </a>{' '}
        {t('contact_or', locale)}
      </p>

      <motion.form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          // TODO: Implement email sending functionality
          console.log('Form submitted:', formData);
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
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none resize-none"
          name="message"
          placeholder={t('contact_message_placeholder', locale)}
          required
          maxLength={5000}
        />
        <SubmitBtn text={t('contact_submit', locale)} />
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
