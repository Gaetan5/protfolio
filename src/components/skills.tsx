'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/useInView';
import { skillsData } from '@/lib/data';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Palette,
  Cpu,
  GitBranch,
  BarChart3,
  Cloud,
  Shield,
  Zap,
  Server,
  Wifi,
  BarChart,
  Lock,
  Settings,
  Terminal,
  Layers,
  Activity,
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
  Microcontrôleurs: <Cpu className="w-6 h-6" />,
  GPS: <Wifi className="w-6 h-6" />,
  Sensors: <Activity className="w-6 h-6" />,

  // Data Analytics
  Pandas: <BarChart3 className="w-6 h-6" />,
  NumPy: <BarChart3 className="w-6 h-6" />,
  Matplotlib: <BarChart className="w-6 h-6" />,
  Plotly: <BarChart className="w-6 h-6" />,
  Dash: <Monitor className="w-6 h-6" />,
  Jupyter: <Terminal className="w-6 h-6" />,

  // Security & APIs
  OAuth2: <Lock className="w-6 h-6" />,
  JWT: <Shield className="w-6 h-6" />,
  WebRTC: <Wifi className="w-6 h-6" />,
  WebSockets: <Activity className="w-6 h-6" />,
  'REST API': <Globe className="w-6 h-6" />,
  GraphQL: <Globe className="w-6 h-6" />,

  // Tools & Others
  Figma: <Palette className="w-6 h-6" />,
  Postman: <Globe className="w-6 h-6" />,
  Swagger: <Settings className="w-6 h-6" />,
  Prisma: <Database className="w-6 h-6" />,
  Excel: <BarChart3 className="w-6 h-6" />,
};

const Skills = React.memo(function Skills() {
  const { ref } = useSectionInView('#skills');
  const { locale } = useLocaleContext();

  return (
    <section ref={ref} id="skills" className="scroll-mt-28 mb-28 max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold capitalize mb-4 text-gray-900 dark:text-white">
          {t('skills_title', locale)}
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
          {t('skills_description', locale)}
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-900/40 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-cyan-400/50 dark:hover:border-cyan-600/50 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900 rounded-full text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {skillIcons[skill] || <Code className="w-6 h-6" />}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{skill}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section expertise */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto mt-16 px-4"
      >
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
          {t('expertise_title', locale)}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl">
            <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center">
              <Code className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
              {t('expertise_backend', locale)}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t('expertise_backend_desc', locale)}
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
              <Palette className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
              {t('expertise_design', locale)}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t('expertise_design_desc', locale)}
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <Cpu className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
              {t('expertise_iot', locale)}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t('expertise_iot_desc', locale)}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;
