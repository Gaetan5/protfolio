'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface TechRadarProps {
  axes: string[];
  values: number[];
  size?: number;
}

const TechRadar: React.FC<TechRadarProps> = ({ axes, values, size = 400 }) => {
  const center = size / 2;
  const radius = (size / 2) * 0.75;
  const angleStep = (Math.PI * 2) / axes.length;

  const axisColors = [
    '#06b6d4', // Cyan (Software)
    '#a855f7', // Purple (Data)
    '#10b981', // Emerald (Electrical)
    '#3b82f6', // Blue (Cloud)
    '#f43f5e', // Rose (Security)
  ];

  // Points calculation
  const points = values.map((val, i) => {
    const r = (val / 100) * radius;
    const angle = i * angleStep - Math.PI / 2;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  });

  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <div className="relative flex justify-center items-center py-12">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <svg width={size} height={size} className="overflow-visible filter drop-shadow-2xl">
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Web Grid (Polygons) */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => {
          const gridPoints = axes
            .map((_, j) => {
              const r = radius * scale;
              const angle = j * angleStep - Math.PI / 2;
              return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
            })
            .join(' ');

          return (
            <polygon
              key={i}
              points={gridPoints}
              fill="none"
              stroke="currentColor"
              className="text-gray-300/30 dark:text-gray-600/30"
              strokeWidth="1"
            />
          );
        })}

        {/* Axis Lines */}
        {axes.map((axis, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x2 = center + radius * Math.cos(angle);
          const y2 = center + radius * Math.sin(angle);
          const tx = center + (radius + 40) * Math.cos(angle);
          const ty = center + (radius + 40) * Math.sin(angle);

          return (
            <g key={i}>
              <line
                x1={center}
                y1={center}
                x2={x2}
                y2={y2}
                stroke={axisColors[i % axisColors.length]}
                className="opacity-20"
                strokeWidth="1"
              />
              <text
                x={tx}
                y={ty}
                textAnchor="middle"
                alignmentBaseline="middle"
                className="text-[10px] md:text-[11px] font-black fill-gray-600 dark:fill-gray-400 uppercase tracking-widest"
              >
                {axis}
              </text>
            </g>
          );
        })}

        {/* Data Area */}
        <motion.path
          d={pathData}
          initial={{ pathLength: 0, opacity: 0, scale: 0.8 }}
          whileInView={{ pathLength: 1, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'circOut' }}
          fill="url(#radarGradient)"
          stroke="white"
          strokeWidth="2"
          className="filter drop-shadow-[0_0_12px_rgba(6,182,212,0.8)] opacity-70"
        />

        {/* Data Points (Pulse effect) */}
        {points.map((p, i) => (
          <g key={i}>
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + i * 0.1 }}
              fill={axisColors[i % axisColors.length]}
              filter="url(#glow)"
            />
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [1, 2, 1], opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              fill={axisColors[i % axisColors.length]}
              className="pointer-events-none"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default TechRadar;
