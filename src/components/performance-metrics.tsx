'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, TrendingUp } from 'lucide-react';

interface PerformanceMetricsProps {
  className?: string;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    performanceScore: 0,
  });

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType(
          'navigation',
        )[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;

        // Simuler les métriques de mémoire (non disponible dans tous les navigateurs)
        const memoryUsage = Math.random() * 100;
        const performanceScore = Math.max(0, 100 - loadTime / 100);

        setMetrics({
          loadTime: Math.round(loadTime),
          memoryUsage: Math.round(memoryUsage),
          performanceScore: Math.round(performanceScore),
        });
      }
    };

    // Mesurer après le chargement complet
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);

  const metricItems = [
    {
      icon: Clock,
      label: 'Temps de chargement',
      value: `${metrics.loadTime}ms`,
      color: 'text-blue-500',
    },
    {
      icon: Zap,
      label: 'Score Performance',
      value: `${metrics.performanceScore}/100`,
      color: 'text-green-500',
    },
    {
      icon: TrendingUp,
      label: 'Optimisation',
      value: 'Excellent',
      color: 'text-purple-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}
    >
      {metricItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
        >
          <div className="flex items-center space-x-3">
            <item.icon className={`w-6 h-6 ${item.color}`} />
            <div>
              <p className="text-sm text-gray-400">{item.label}</p>
              <p className="text-lg font-semibold text-white">{item.value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PerformanceMetrics;
