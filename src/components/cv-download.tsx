'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Mail } from 'lucide-react';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import { personalInfo } from '@/lib/data';

const CVDownload = React.memo(function CVDownload() {
  const { locale } = useLocaleContext();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = personalInfo.cvPath;
    link.download = personalInfo.cvFileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmailCV = () => {
    const subject = encodeURIComponent('Demande de CV - Gaetan X Ekoro Edouard');
    const body = encodeURIComponent(`Bonjour,

Je souhaiterais recevoir votre CV en pièce jointe.

Cordialement,
[Votre nom]`);

    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      {/* Téléchargement CV */}
      <motion.button
        onClick={handleDownloadCV}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
      >
        <Download className="w-5 h-5" />
        <FileText className="w-5 h-5" />
        {t('download_cv', locale)}
      </motion.button>

      {/* Demande par email */}
      <motion.button
        onClick={handleEmailCV}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
      >
        <Mail className="w-5 h-5" />
        {t('request_cv_email', locale)}
      </motion.button>
    </div>
  );
});

CVDownload.displayName = 'CVDownload';

export default CVDownload;
