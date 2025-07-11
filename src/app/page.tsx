import React from 'react';
import dynamic from 'next/dynamic';
import Intro from '@/components/intro';
import Footer from '@/components/footer';

const About = dynamic(() => import('@/components/about'), { loading: () => <div>Loading...</div> });
const Projects = dynamic(() => import('@/components/projects'), {
  loading: () => <div>Loading...</div>,
});
const Skills = dynamic(() => import('@/components/skills'), {
  loading: () => <div>Loading...</div>,
});
const Contact = dynamic(() => import('@/components/contact'), {
  loading: () => <div>Loading...</div>,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center pt-20 md:pt-28 px-4 space-y-8">
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
