'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Loading = React.memo(function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div className="flex space-x-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.div
          className="w-3 h-3 bg-cyan-600 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: 0,
          }}
        />
        <motion.div
          className="w-3 h-3 bg-cyan-600 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-3 h-3 bg-cyan-600 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: 0.4,
          }}
        />
      </motion.div>
    </div>
  );
});

Loading.displayName = 'Loading';

export default Loading;
