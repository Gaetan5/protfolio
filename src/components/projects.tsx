'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project-card';
import { useSectionInView } from '@/lib/useInView';
import { useLocaleContext } from '@/containers/LocaleCtx';

export default function Projects() {
  const { ref } = useSectionInView('#projects', 0.1);
  const { locale } = useLocaleContext();

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading locale={locale}>projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project {...project} locale={locale} key={index} />
        ))}
      </div>
    </section>
  );
}
