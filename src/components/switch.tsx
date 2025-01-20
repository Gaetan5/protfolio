"use client";

import React from 'react';
import useMouveStore from '@/lib/store';

const Switch = () => {
  const { theme, toggleTheme } = useMouveStore();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default Switch;
