'use client';
import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  texts,
  speed = 100,
  delay = 2000,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }

      const timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, speed / 2);

      return () => clearTimeout(timeout);
    } else {
      if (currentText === currentFullText) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);

        return () => clearTimeout(timeout);
      }

      const timeout = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentText, currentTextIndex, isDeleting, texts, speed, delay]);

  return (
    <span className="inline-block min-h-[1.5em]">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterEffect;
