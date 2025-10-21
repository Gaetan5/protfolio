'use client';
import React from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt?: string;
  isBadge?: boolean;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  className = '',
  isBadge = false,
  priority = false,
  ...props
}) => {
  if (isBadge) {
    return (
      <Image
        {...props}
        className={`${className} h-auto w-auto`}
        style={{ width: 'auto', height: 'auto' }}
        sizes="(max-width: 768px) 120px, 120px"
        alt={props.alt || 'Badge'}
        loading="lazy"
        priority={priority}
      />
    );
  }

  const defaultSizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  return (
    <Image
      {...props}
      className={className}
      sizes={props.sizes || defaultSizes}
      alt={props.alt || 'Image'}
      loading={priority ? 'eager' : 'lazy'}
      priority={priority}
    />
  );
};

export default OptimizedImage;
