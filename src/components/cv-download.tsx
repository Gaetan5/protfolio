'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Mail, Zap } from 'lucide-react';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import { personalInfo } from '@/lib/data';

const CVDownload = React.memo(function CVDownload() {
  const { locale } = useLocaleContext();
  const [email, setEmail] = React.useState('');
  const [isSending, setIsSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = personalInfo.cvPath;
    link.download = personalInfo.cvFileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSending(true);
    setError('');

    try {
      const response = await fetch('/api/send-cv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale }),
      });

      if (response.ok) {
        setSent(true);
        setEmail('');
        setTimeout(() => setSent(false), 5000);
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to send email');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        {/* Téléchargement CV */}
        <motion.button
          onClick={handleDownloadCV}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl transition-all shadow-2xl hover:shadow-cyan-500/20 active:scale-95 group"
        >
          <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          <span className="uppercase tracking-widest text-sm">
            {t('cv-download.download', locale)}
          </span>
        </motion.button>
      </div>

      {/* Formulaire d'envoi par email */}
      <div className="w-full">
        <form onSubmit={handleSendEmail} className="flex flex-col sm:flex-row gap-3 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('contact.email_placeholder', locale) || 'votre@email.com'}
            required
            className="flex-1 px-6 py-4 glass rounded-2xl border border-white/20 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500/50 transition-all font-bold"
          />
          <motion.button
            type="submit"
            disabled={isSending || !email}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all shadow-xl ${
              sent
                ? 'bg-emerald-500 text-white'
                : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-cyan-500/30'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isSending ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {t('cv-download.sending', locale)}
              </>
            ) : sent ? (
              <>
                <Zap className="w-5 h-5 fill-current" />
                {t('cv-download.success', locale)}
              </>
            ) : (
              <>
                <Mail className="w-5 h-5" />
                {t('cv-download.requestEmail', locale)}
              </>
            )}
          </motion.button>
        </form>
        {error && <p className="text-red-500 text-xs font-bold mt-2 text-center">{error}</p>}
        {sent && (
          <p className="text-emerald-500 text-xs font-bold mt-2 text-center">
            {t('cv-download.success', locale)}
          </p>
        )}
      </div>
    </div>
  );
});

CVDownload.displayName = 'CVDownload';

export default CVDownload;
