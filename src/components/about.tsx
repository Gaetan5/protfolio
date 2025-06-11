"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useInView";
import Image from "next/image";

// Section component for better organization
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{title}</h3>
      <div className="text-gray-700 dark:text-gray-300 space-y-3">
        {children}
      </div>
    </div>
  );
}

// About component
export default function About() {
  // Hook for section view detection
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
      <SectionHeading>About Me</SectionHeading>

      {/* Header section */}
      <header className="text-center mb-6 mt-10">
        <p className="mt-2 text-lg">
          👋 Hi, I&apos;m <br />
          <strong>
            Gaetan X Ekoro (Gaetan X)
          </strong>
        </p>
        <div className="flex justify-center my-6">
          <Image
            src="/profile1.png"
            width="280"
            height="280"
            alt="portrait"
            quality="100"
            priority={true}
            className="rounded-full object-cover shadow-xl"
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          🚀 Back-End Developer | 🖌 Logo Designer | 🌍 Embedded Systems Innovator | 🌍 Data Analyst
        </p>
      </header>

      {/* Main content */}
      <article className="max-w-3xl mx-auto space-y-6 text-left">
        {/* Presentation Section */}
        <Section title="🎯 Presentation">
          <p>
            I am a passionate designer and developer with over 
            <strong> 5 years of experience </strong> 
            in web and mobile application development. I specialize in robust back-end solutions, intuitive UI design, and embedded systems development. 
            Additionally, I hold a 
            <strong> Bachelor&apos;s ESG-TI, Degree in Electrical Engineering and Industrial Information</strong>, 
            with 
            <strong> 3 years&apos; experience as an electrotechnician</strong>, allowing me to bridge the gap between software and hardware.
          </p>
          <p>
            My love for technology and my dream of revolutionizing the tech world led me to work on several impactful projects, including 
            <strong> geolocation and security systems for medicalized electric cars </strong> 
            and 
            <strong> online ticket payment platforms</strong>.
          </p>
          <p>When I&apos;m not coding, you can find me:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Watching <strong>anime</strong></li>
            <li>Reading <strong>manga</strong></li>
            <li>Diving into <strong>sci-fi</strong> movies</li>
            <li>Engaging in discussions about the latest tech innovations and pop culture trends.</li>
          </ul>
        </Section>

        {/* What I Do Section */}
        <Section title="✨ What I Do">
          <ul className="list-disc list-inside ml-4">
            <li>💻 Back-End Development: Building high-performance, secure, and scalable web applications.</li>
            <li>⚙ Embedded Systems: Crafting innovative solutions that integrate hardware and software.</li>
            <li>🎨 Logo Design: Designing impactful logos that encapsulate brand identity.</li>
            <li>🌍 Entrepreneurial Projects: Leading initiatives like INTERACT, a technological ecosystem aimed at driving Africa&apos;s development, focusing on data security and digital transformation.</li>
          </ul>
        </Section>

        {/* Featured Projects Section */}
        <Section title="📂 Featured Projects">
          <ul className="list-disc list-inside ml-4">
            <li>🌐 My Portfolio Website: Showcasing my skills, achievements, and professional journey.</li>
            <li>📱 Medicalized Electric Car Project: Developed the <strong>geolocation</strong> and <strong>security systems</strong> for this innovative vehicle.</li>
            <li>🎫 Online Ticket Payment App: A web app featuring QR code generation, payment confirmations, and user subscriptions.</li>
          </ul>
        </Section>

        {/* GitHub Stats Section */}
        <Section title="📈 GitHub Stats">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-md">
              <Image
                src="https://github-readme-stats.vercel.app/api?username=Gaetan5&show_icons=true&theme=github_dark"
                alt="GitHub Stats"
                width={400}
                height={200}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full max-w-sm">
              <Image
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gaetan5&layout=compact&theme=github_dark"
                alt="Top Languages"
                width={300}
                height={150}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section title="📫 Get in Touch">
          <ul className="list-disc list-inside ml-4">
            <li><strong>LinkedIn</strong>: <a href="https://linkedin.com/in/gaetan-ekoro" className="text-blue-600 hover:underline">Gaetan Ekoro</a></li>
            <li><strong>Twitter</strong>: <a href="https://x.com/Gaetan5" className="text-blue-600 hover:underline">@Gaetan5</a></li>
            <li><strong>Email</strong>: <a href="mailto:ekorogaetan5@gmail.com" className="text-blue-600 hover:underline">ekorogaetan5@gmail.com</a></li>
          </ul>
        </Section>
      </article>
    </motion.section>
  );
}