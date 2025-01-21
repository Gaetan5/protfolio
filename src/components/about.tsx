import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="px-4 py-8 bg-gray-50 text-gray-800">
      <header className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
        <p className="mt-2 text-lg">
          👋 Hi, I&apos;m <strong>Gaetan X Ekoro (Gaetan5)</strong>
        </p>
        <p className="text-sm text-gray-600">
          🚀 Back-End Developer | 🖌 Logo Designer | 🌍 Embedded Systems Innovator
        </p>
      </header>

      <article className="max-w-3xl mx-auto space-y-6">
        <section>
          <h3 className="text-2xl font-semibold">🎯 About Me</h3>
          <p>
            I am a passionate designer and developer with over <strong>5 years of experience</strong> in web and mobile application development. I specialize in robust back-end solutions, intuitive UI design, and embedded systems development. Additionally, I hold a <strong>Bachelor&apos;s Degree in Electrical Engineering and Industrial Information Technology</strong>, with <strong>3 years&apos; experience as an electrotechnician</strong>, allowing me to bridge the gap between software and hardware.
          </p>
          <p>
            My love for technology and my dream of revolutionizing the tech world led me to work on several impactful projects, including <strong>geolocation and security systems for medicalized electric cars</strong> and <strong>online ticket payment platforms</strong>.
          </p>
          <p>When I&apos;m not coding, you can find me:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Watching <strong>anime</strong></li>
            <li>Reading <strong>manga</strong></li>
            <li>Diving into <strong>sci-fi</strong> movies</li>
            <li>Discussing tech innovations and pop culture trends</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold">✨ What I Do</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>💻 <strong>Back-End Development</strong>: Building high-performance, secure, and scalable web applications.</li>
            <li>⚙ <strong>Embedded Systems</strong>: Crafting innovative solutions that integrate hardware and software.</li>
            <li>🎨 <strong>Logo Design</strong>: Designing impactful logos that encapsulate brand identity.</li>
            <li>🌍 <strong>Entrepreneurial Projects</strong>: Leading initiatives like <a href="#" className="text-blue-600 hover:underline">INTERACT</a>, a technological ecosystem focused on Africa&apos;s development.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold">📂 Featured Projects</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">🌐 My Portfolio Website</a>: Showcasing my skills, achievements, and professional journey.</li>
            <li><a href="#" className="text-blue-600 hover:underline">📱 Medicalized Electric Car Project</a>: Developed the <strong>geolocation</strong> and <strong>security systems</strong> for this innovative vehicle.</li>
            <li><a href="#" className="text-blue-600 hover:underline">🎫 Online Ticket Payment App</a>: A web app featuring QR code generation, payment confirmations, and user subscriptions.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold">📈 GitHub Stats</h3>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Image
              width={500}
              height={300}
              src="https://github-readme-stats.vercel.app/api?username=Gaetan5&show_icons=true&theme=github_dark"
              alt="Gaetan5's GitHub stats in dark mode"
            />
            <Image
              width={400}
              height={300}
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gaetan5&layout=compact&theme=github_dark"
              alt="Top languages in dark mode"
            />
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold">📫 Get in Touch</h3>
          <ul className="list-none space-y-2">
            <li><strong>LinkedIn</strong>: <a href="https://linkedin.com/in/gaetan-ekoro" className="text-blue-600 hover:underline" rel="noopener noreferrer" target="_blank">Gaetan Ekoro</a></li>
            <li><strong>Twitter</strong>: <a href="https://x.com/Gaetan5" className="text-blue-600 hover:underline" rel="noopener noreferrer" target="_blank">@Gaetan5</a></li>
            <li><strong>Email</strong>: <a href="mailto:ekorogaetan5@gmail.com" className="text-blue-600 hover:underline">ekorogaetan5@gmail.com</a></li>
          </ul>
        </section>
      </article>
    </section>
  );
};

export default About;
