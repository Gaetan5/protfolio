import React from 'react';
import Image from 'next/image';

// About component displaying the about section
const About = () => {
  return (
    <section id="about" className="px-10 py-10 bg-gray-50 text-gray-800 mt-auto">
      <header className="text-center mb-6 mt-10">
        <p className="mt-2 text-lg">
          👋 Hi, I&apos;m <strong>Gaetan X Ekoro (Gaetan5)</strong>
        </p>
        <p className="text-sm text-gray-600">
          🚀 Back-End Developer | 🖌 Logo Designer | 🌍 Embedded Systems Innovator
        </p>
      </header>

      <article className="max-w-3xl mx-auto space-y-6">
        <Section title="🎯 Presentation">
          <p>
            I am a passionate designer and developer with over <strong>5 years of experience</strong> in web and mobile application development. I specialize in robust back-end solutions, intuitive UI design, and embedded systems development. Additionally, I hold a <strong>Bachelor&apos;s Degree in Electrical Engineering and Industrial Information Technology</strong>, with <strong>3 years&apos; experience as an electrotechnician</strong>, allowing me to bridge the gap between software and hardware.
          </p>
          <p>
            My love for technology and my dream of revolutionizing the tech world led me to work on several impactful projects, including <strong>geolocation and security systems for medicalized electric cars</strong> and <strong>online ticket payment platforms</strong>.
          </p>
          <p>When I&apos;m not coding, you can find me:</p>
          <ul className="list-disc list-inside">
            <li>Watching <strong>anime</strong></li>
            <li>Reading <strong>manga</strong></li>
            <li>Diving into <strong>sci-fi</strong> movies</li>
            <li>Engaging in discussions about the latest tech innovations and pop culture trends.</li>
          </ul>
        </Section>

        <Section title="✨ What I Do">
          <ul className="list-disc list-inside">
            <li>💻 Back-End Development: Building high-performance, secure, and scalable web applications.</li>
            <li>⚙ Embedded Systems: Crafting innovative solutions that integrate hardware and software.</li>
            <li>🎨 Logo Design: Designing impactful logos that encapsulate brand identity.</li>
            <li>🌍 Entrepreneurial Projects: Leading initiatives like <a href="#">INTERACT</a>, a technological ecosystem aimed at driving Africa&apos;s development, focusing on data security and digital transformation.</li>
          </ul>
        </Section>

        <Section title="📂 Featured Projects">
          <ul className="list-disc list-inside">
            <li><a href="#">🌐 My Portfolio Website</a>: Showcasing my skills, achievements, and professional journey.</li>
            <li><a href="#">📱 Medicalized Electric Car Project</a>: Developed the <strong>geolocation</strong> and <strong>security systems</strong> for this innovative vehicle.</li>
            <li><a href="#">🎫 Online Ticket Payment App</a>: A web app featuring QR code generation, payment confirmations, and user subscriptions.</li>
          </ul>
        </Section>

        <Section title="📈 GitHub Stats">
          <div className="flex flex-col items-center">
            <a href="https://github.com/Gaetan5/github-readme-stats#gh-dark-mode-only">
              <img className="w-1/2" src="https://github-readme-stats.vercel.app/api?username=Gaetan5&show_icons=true&theme=github_dark#gh-dark-mode-only" alt="GitHub Stats Dark Mode" />
            </a>
            <a href="https://github.com/Gaetan5/github-readme-stats#gh-dark-mode-only">
              <img className="w-1/3" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gaetan5&layout=compact&theme=github_dark#gh-dark-mode-only" alt="Top Languages Dark Mode" />
            </a>
            <a href="https://github.com/Gaetan5/github-readme-stats#gh-light-mode-only">
              <img className="w-1/2" src="https://github-readme-stats.vercel.app/api?username=Gaetan5&show_icons=true&theme=default#gh-light-mode-only" alt="GitHub Stats Light Mode" />
            </a>
            <a href="https://github.com/Gaetan5/github-readme-stats#gh-light-mode-only">
              <img className="w-1/3" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gaetan5&layout=compact&theme=default#gh-light-mode-only" alt="Top Languages Light Mode" />
            </a>
          </div>
        </Section>

        <Section title="📫 Get in Touch">
          <ul className="list-disc list-inside">
            <li><strong>LinkedIn</strong>: <a href="https://linkedin.com/in/gaetan-ekoro">Gaetan Ekoro</a></li>
            <li><strong>Twitter</strong>: <a href="https://x.com/Gaetan5">@Gaetan5</a></li>
            <li><strong>Email</strong>: <a href="mailto:ekorogaetan5@gmail.com">ekorogaetan5@gmail.com</a></li>
          </ul>
        </Section>
      </article>
    </section>
  );
};

// Section component for reusable section structure
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h3 className="text-2xl font-semibold">{title}</h3>
    {children}
  </section>
);

export default About;
