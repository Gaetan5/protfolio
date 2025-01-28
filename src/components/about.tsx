"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useInView";
import Section from "./Section"; // Adjust the path as necessary
import Image from "next/image";

// Composant About
export default function About() {
  // Utilisation du hook pour détecter si la section est en vue
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      {/* En-tête de la section */}
      <header className="text-center mb-6 mt-10">
        <p className="mt-2 text-lg">
          👋 Hi, I&apos;m <br />
          <strong>
            Gaetan X Ekoro (Gaetan X)
          </strong>
          <Image
            src="/profile1.png"
            width="280"
            height="280"
            alt="portrait"
            quality="100"
            priority={true}
            className="rounded-full object-cover shadow-xl"
          />
        </p>
        <p className="text-sm text-gray-600">
          🚀 Back-End Developer | 🖌 Logo Designer | 🌍 Embedded Systems Innovator| 🌍 Data Analytic
        </p>
      </header>

      {/* Contenu principal de la section */}
      <article className="max-w-3xl mx-auto space-y-6">
        {/* Section Présentation */}
        <Section title="🎯 Presentation">
          <p>
            I am a passionate designer and developer with over 
            <strong>
              5 years of experience
            </strong> 
            in web and mobile application development. I specialize in robust back-end solutions, intuitive UI design, and embedded systems development. 
            Additionally, I hold a 
            <strong>
              Bachelor&apos;s ESG-TI, Degree in Electrical Engineering and Industrial Information 
            </strong>, 
            with 
            <strong>
              3 years&apos; experience as an electrotechnician
            </strong>, allowing me to bridge the gap between software and hardware.
          </p>
          <p>
            My love for technology and my dream of revolutionizing the tech world led me to work on several impactful projects, including 
            <strong>
              geolocation and security systems for medicalized electric cars
            </strong> 
            and 
            <strong>
              online ticket payment platforms
            </strong>.
          </p>
          <p>When I&apos;m not coding, you can find me:</p>
          <ul className="list-disc list-inside">
            <li>Watching <strong>anime</strong></li>
            <li>Reading <strong>manga</strong></li>
            <li>Diving into <strong>sci-fi</strong> movies</li>
            <li>Engaging in discussions about the latest tech innovations and pop culture trends.</li>
          </ul>
        </Section>

        {/* Section Ce que je fais */}
        <Section title="✨ What I Do">
          <ul className="list-disc list-inside">
            <li>💻 Back-End Development: Building high-performance, secure, and scalable web applications.</li>
            <li>⚙ Embedded Systems: Crafting innovative solutions that integrate hardware and software.</li>
            <li>🎨 Logo Design: Designing impactful logos that encapsulate brand identity.</li>
            <li>🌍 Entrepreneurial Projects: Leading initiatives like <a href="#">INTERACT</a>, a technological ecosystem aimed at driving Africa&apos;s development, focusing on data security and digital transformation.</li>
          </ul>
        </Section>

        {/* Section Projets en vedette */}
        <Section title="📂 Featured Projects">
          <ul className="list-disc list-inside">
            <li><a href="#">🌐 My Portfolio Website</a>: Showcasing my skills, achievements, and professional journey.</li>
            <li><a href="#">📱 Medicalized Electric Car Project</a>: Developed the <strong>geolocation</strong> and <strong>security systems</strong> for this innovative vehicle.</li>
            <li><a href="#">🎫 Online Ticket Payment App</a>: A web app featuring QR code generation, payment confirmations, and user subscriptions.</li>
          </ul>
        </Section>

        {/* Section Statistiques GitHub */}
        <Section title="📈 GitHub Stats">
          <div className="flex flex-col items-center">
            <a href="https://github.com/Gaetan5/github-readme-stats#gh-dark-mode-only">
              <img className="w-1/2" src="https://github-readme-stats.vercel.app/api?username=Gaetan5&show_icons=true&theme=github_dark#gh-dark-mode-only" alt="GitHub Stats Dark Mode" />
            </a>
            <a href="https://github.com/Gaetan5/github-readme-stats#gh-dark-mode-only">
              <img className="w-1/3" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gaetan5&layout=compact&theme=github_dark#gh-dark-mode-only" alt="Top Languages Dark Mode" />
            </a>
          </div>
        </Section>

        {/* Section Contact */}
        <Section title="📫 Get in Touch">
          <ul className="list-disc list-inside">
            <li><strong>LinkedIn</strong>: <a href="https://linkedin.com/in/gaetan-ekoro">Gaetan Ekoro</a></li>
            <li><strong>Twitter</strong>: <a href="https://x.com/Gaetan5">@Gaetan5</a></li>
            <li><strong>Email</strong>: <a href="mailto:ekorogaetan5@gmail.com">ekorogaetan5@gmail.com</a></li>
          </ul>
        </Section>
      </article>
    </motion.section>
  );
}