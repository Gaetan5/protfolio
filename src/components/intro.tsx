'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';

import { useSectionInView } from '@/lib/useInView';
import { useActiveSectionContext } from '@/containers/active-section';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import { Mail } from 'lucide-react';

export default function Intro() {
  const { ref } = useSectionInView('#home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { locale } = useLocaleContext();

  return (
    <section
      ref={ref}
      id="home"
      className=" text-center sm:mb-0 h-screen flex flex-col justify-center"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            <div className="relative w-60 h-60 sm:w-80 sm:h-80 rounded-full overflow-hidden">
              <Image
                src="/Profile1.png"
                width={'400'}
                height={'400'}
                alt="portrait"
                quality="100"
                priority={true}
                className="object-cover shadow-xl"
              />
            </div>
          </motion.div>

          <motion.span
            className="text-6xl absolute bottom-2 right-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          ></motion.span>
        </div>
      </div>

      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
        <h1 className="mb-10 mt-4 px-4 text-2xl sm:text-4xl">
          <span className="font-medium !leading-[1.5] ">{t('intro_headline', locale)}</span>{' '}
          <p className="text-[14px]">{t('intro_sub', locale)}</p>
        </h1>
      </Fade>

      <motion.div
        className="flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="mailto:ekorogaetan5@gmail.com"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
          onClick={() => {
            setActiveSection('#contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          {t('intro_connect', locale)} <Mail color={'#9ca3af'} />
        </Link>

        <a
          className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/gaetan-x-ekoro-56z/"
          target="_blank"
          rel="noopener"
          title="LinkedIn - Gaetan X Ekoro"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Gaetan5"
          target="_blank"
          rel="noopener"
          title="GitHub - Gaetan5"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
