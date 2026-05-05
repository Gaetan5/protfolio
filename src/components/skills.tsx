'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/useInView';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t, ta, tr } from '@/lib/i18n';
import TiltCard from './tilt-card';
import ScrollReveal from './scroll-reveal';
import TechRadar from './tech-radar';
import {
  Code,
  Database,
  Globe,
  Palette,
  Cpu,
  GitBranch,
  BarChart3,
  Cloud,
  Shield,
  Zap,
  Server,
  Wifi,
  Activity,
  Lock,
  Settings,
  Terminal,
  Monitor,
} from 'lucide-react';

const skillIcons: { [key: string]: React.ReactNode } = {
  // Backend & APIs
  Python: <Code className="w-6 h-6" />,
  Django: <Globe className="w-6 h-6" />,
  FastAPI: <Zap className="w-6 h-6" />,
  'Node.js': <Server className="w-6 h-6" />,
  Java: <Code className="w-6 h-6" />,
  'Spring Boot': <Server className="w-6 h-6" />,
  'Micro-services': <Cpu className="w-6 h-6" />,

  // Frontend
  JavaScript: <Code className="w-6 h-6" />,
  TypeScript: <Code className="w-6 h-6" />,
  React: <Globe className="w-6 h-6" />,
  'Next.js': <Globe className="w-6 h-6" />,
  'Tailwind CSS': <Palette className="w-6 h-6" />,

  // Databases & Data
  PostgreSQL: <Database className="w-6 h-6" />,
  MySQL: <Database className="w-6 h-6" />,
  MongoDB: <Database className="w-6 h-6" />,
  Redis: <Database className="w-6 h-6" />,
  'Apache Kafka': <Activity className="w-6 h-6" />,
  'Apache Spark': <Zap className="w-6 h-6" />,

  // DevOps & Cloud
  Docker: <Server className="w-6 h-6" />,
  Git: <GitBranch className="w-6 h-6" />,
  'CI/CD': <Settings className="w-6 h-6" />,
  AWS: <Cloud className="w-6 h-6" />,
  Linux: <Terminal className="w-6 h-6" />,

  // IoT & Hardware
  'Raspberry Pi': <Cpu className="w-6 h-6" />,
  Arduino: <Cpu className="w-6 h-6" />,
  'Monitoring & Supervision': <Activity className="w-6 h-6" />,
  Microcontrôleurs: <Cpu className="w-6 h-6" />,
  Microcontrollers: <Cpu className="w-6 h-6" />,
  GPS: <Wifi className="w-6 h-6" />,
  Sensors: <Activity className="w-6 h-6" />,

  // Data Analytics
  Pandas: <BarChart3 className="w-6 h-6" />,
  NumPy: <BarChart3 className="w-6 h-6" />,
  Matplotlib: <BarChart3 className="w-6 h-6" />,
  Plotly: <BarChart3 className="w-6 h-6" />,
  Dash: <Monitor className="w-6 h-6" />,
  Jupyter: <Terminal className="w-6 h-6" />,

  // Security & APIs
  OAuth2: <Lock className="w-6 h-6" />,
  JWT: <Shield className="w-6 h-6" />,
  WebRTC: <Wifi className="w-6 h-6" />,
  WebSockets: <Activity className="w-6 h-6" />,
  'REST API': <Globe className="w-6 h-6" />,
  GraphQL: <Globe className="w-6 h-6" />,
  CyberSecurity: <Shield className="w-6 h-6" />,

  // Tools & Others
  Figma: <Palette className="w-6 h-6" />,
  Postman: <Globe className="w-6 h-6" />,
  Swagger: <Settings className="w-6 h-6" />,
  Prisma: <Database className="w-6 h-6" />,
  Excel: <BarChart3 className="w-6 h-6" />,
  Keycloak: <Lock className="w-6 h-6" />,
  Agora: <Wifi className="w-6 h-6" />,
  'PDS (Power Systems)': <Zap className="w-6 h-6" />,
  'TGBT (Switchboards)': <Settings className="w-6 h-6" />,
  'Security+': <Shield className="w-6 h-6" />,
  'ISO 27001': <Lock className="w-6 h-6" />,
  'Agile/Scrum': <Activity className="w-6 h-6" />,
  'HSE Management': <Shield className="w-6 h-6" />,
};

const Skills = React.memo(function Skills() {
  const { ref } = useSectionInView('#skills');
  const { locale } = useLocaleContext();
  const skills = ta('skills.list', locale);
  const radarData = tr('skills.radar', locale);

  const categoryStyles: {
    [key: string]: { bg: string; text: string; shadow: string; border: string; bar: string };
  } = {
    software: {
      bg: 'bg-[hsl(var(--skill-software)/0.1)]',
      text: 'text-[hsl(var(--skill-software))]',
      shadow: 'hover:shadow-[hsl(var(--skill-software)/0.2)]',
      border: 'hover:border-[hsl(var(--skill-software)/0.5)]',
      bar: 'from-[hsl(var(--skill-software))] to-blue-500',
    },
    cloud: {
      bg: 'bg-[hsl(var(--skill-cloud)/0.1)]',
      text: 'text-[hsl(var(--skill-cloud))]',
      shadow: 'hover:shadow-[hsl(var(--skill-cloud)/0.2)]',
      border: 'hover:border-[hsl(var(--skill-cloud)/0.5)]',
      bar: 'from-[hsl(var(--skill-cloud))] to-indigo-500',
    },
    data: {
      bg: 'bg-[hsl(var(--skill-data)/0.1)]',
      text: 'text-[hsl(var(--skill-data))]',
      shadow: 'hover:shadow-[hsl(var(--skill-data)/0.2)]',
      border: 'hover:border-[hsl(var(--skill-data)/0.5)]',
      bar: 'from-[hsl(var(--skill-data))] to-pink-500',
    },
    electrical: {
      bg: 'bg-[hsl(var(--skill-electrical)/0.1)]',
      text: 'text-[hsl(var(--skill-electrical))]',
      shadow: 'hover:shadow-[hsl(var(--skill-electrical)/0.2)]',
      border: 'hover:border-[hsl(var(--skill-electrical)/0.5)]',
      bar: 'from-[hsl(var(--skill-electrical))] to-teal-500',
    },
    security: {
      bg: 'bg-[hsl(var(--skill-security)/0.1)]',
      text: 'text-[hsl(var(--skill-security))]',
      shadow: 'hover:shadow-[hsl(var(--skill-security)/0.2)]',
      border: 'hover:border-[hsl(var(--skill-security)/0.5)]',
      bar: 'from-[hsl(var(--skill-security))] to-red-500',
    },
    methods: {
      bg: 'bg-[hsl(var(--skill-methods)/0.1)]',
      text: 'text-[hsl(var(--skill-methods))]',
      shadow: 'hover:shadow-[hsl(var(--skill-methods)/0.2)]',
      border: 'hover:border-[hsl(var(--skill-methods)/0.5)]',
      bar: 'from-[hsl(var(--skill-methods))] to-orange-500',
    },
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="scroll-mt-28 mb-28 max-w-7xl mx-auto px-4 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '100px' }}
        transition={{ delay: 0.175 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold capitalize mb-4 text-gray-900 dark:text-white">
          <ScrollReveal wordClassName="text-gradient font-extrabold">
            {t('skills.heading', locale)}
          </ScrollReveal>
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
          {t('skills.subtitle', locale)}
        </p>
      </motion.div>

      {/* Tech Radar Visualization */}
      {radarData && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <TechRadar axes={radarData.axes} values={radarData.values} />
        </motion.div>
      )}

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill: any, index: number) => {
            const style = categoryStyles[skill.category] || categoryStyles.software;
            return (
              <TiltCard key={skill.name} className="h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '100px' }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative h-full"
                >
                  <div
                    className={`glass p-5 rounded-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 ${style.shadow} ${style.border} h-full flex flex-col justify-between`}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div
                        className={`p-3 ${style.bg} rounded-2xl ${style.text} group-hover:scale-110 transition-transform duration-300`}
                      >
                        {skillIcons[skill.name] || <Code className="w-6 h-6" />}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-gray-900 dark:text-white text-xs md:text-sm">
                          {skill.name}
                        </h3>
                        <div className="flex flex-col items-center gap-1.5">
                          <span
                            className={`text-[10px] font-black px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}
                          >
                            {skill.level}%
                          </span>
                          <div className="w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              className={`h-full bg-gradient-to-r ${style.bar}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                        className={`h-full bg-gradient-to-r ${
                          skill.category === 'software'
                            ? 'from-cyan-500 to-blue-500'
                            : skill.category === 'cloud'
                              ? 'from-blue-500 to-indigo-500'
                              : skill.category === 'data'
                                ? 'from-purple-500 to-pink-500'
                                : skill.category === 'electrical'
                                  ? 'from-emerald-500 to-teal-500'
                                  : skill.category === 'security'
                                    ? 'from-rose-500 to-red-500'
                                    : 'from-amber-500 to-orange-500'
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* Section expertise */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '100px' }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto mt-16 px-4"
      >
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
          <ScrollReveal delay={0.2} wordClassName="text-gradient">
            {t('skills.expertise', locale)}
          </ScrollReveal>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="w-16 h-16 mx-auto mb-6 bg-cyan-100 dark:bg-cyan-900/50 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
              <Code className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              {t('skills.backend', locale)}
            </h4>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {t('skills.backend_desc', locale)}
            </p>
          </div>

          <div className="group p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
              <Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              {t('skills.design', locale)}
            </h4>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {t('skills.design_desc', locale)}
            </p>
          </div>

          <div className="group p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10">
            <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
              <Cpu className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              {t('skills.iot', locale)}
            </h4>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {t('skills.iot_desc', locale)}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;
