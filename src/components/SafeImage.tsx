import React, { useState } from 'react';
import { Flame, Star, Coffee, Sparkles } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
  referrerPolicy?: 'no-referrer' | 'anonymous';
}

export default function SafeImage({
  src,
  alt,
  className = '',
  category = '',
  referrerPolicy = 'no-referrer',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  // Pick an icon based on category for a customized aesthetic fallback
  const getFallbackIcon = () => {
    const cat = category.toUpperCase();
    if (cat.includes('BURGER')) {
      return (
        <div className="flex flex-col items-center gap-1.5 text-brand-yellow">
          <span className="text-3xl">🍔</span>
          <span className="text-[10px] font-black tracking-widest font-sans uppercase text-yellow-300">Burger</span>
        </div>
      );
    }
    if (cat.includes('BROAST')) {
      return (
        <div className="flex flex-col items-center gap-1.5 text-brand-yellow">
          <span className="text-3xl">🍗</span>
          <span className="text-[10px] font-black tracking-widest font-sans uppercase text-yellow-300">Broast</span>
        </div>
      );
    }
    if (cat.includes('FRIES')) {
      return (
        <div className="flex flex-col items-center gap-1.5 text-brand-yellow">
          <span className="text-3xl">🍟</span>
          <span className="text-[10px] font-black tracking-widest font-sans uppercase text-yellow-300">Fries</span>
        </div>
      );
    }
    if (cat.includes('ROLL')) {
      return (
        <div className="flex flex-col items-center gap-1.5 text-brand-yellow">
          <span className="text-3xl">🌯</span>
          <span className="text-[10px] font-black tracking-widest font-sans uppercase text-yellow-300">Roll</span>
        </div>
      );
    }
    if (cat.includes('BBQ')) {
      return (
        <div className="flex flex-col items-center gap-1 rounded justify-center text-brand-yellow">
          <Flame className="w-8 h-8 fill-brand-yellow animate-pulse" />
          <span className="text-[10px] font-black tracking-widest font-sans uppercase text-yellow-400">Charcoal BBQ</span>
        </div>
      );
    }
    if (cat.includes('SANDWICH')) {
      return (
        <div className="flex flex-col items-center gap-1.5 text-brand-yellow">
          <span className="text-3xl">🥪</span>
          <span className="text-[10px] font-black tracking-widest font-sans uppercase text-yellow-300">Sandwich</span>
        </div>
      );
    }
    if (cat.includes('BEVERAGES') || cat.includes('DRINK')) {
      return (
        <div className="flex flex-col items-center gap-1.5 text-brand-yellow">
          <span className="text-3xl">🥤</span>
          <span className="text-[10px] font-black tracking-widest font-sans uppercase text-yellow-300">Cold Drink</span>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center gap-1 text-brand-yellow">
        <Sparkles className="w-8 h-8 fill-brand-yellow text-brand-yellow" />
        <span className="text-[10px] font-black tracking-widest font-sans uppercase text-yellow-300">Kami Special</span>
      </div>
    );
  };

  const getOptimizedSrc = (url: string) => {
    if (url && url.includes('images.unsplash.com')) {
      let optimized = url;
      // Replace w=... parameter with w=250
      if (optimized.includes('w=')) {
        optimized = optimized.replace(/([?&])w=\d+/, '$1w=250');
      } else {
        optimized += (optimized.includes('?') ? '&' : '?') + 'w=250';
      }
      // Replace q=... parameter with q=70
      if (optimized.includes('q=')) {
        optimized = optimized.replace(/([?&])q=\d+/, '$1q=70');
      } else {
        optimized += '&q=70';
      }
      // Ensure browser-friendly auto-formatting is set
      if (!optimized.includes('auto=format')) {
        optimized += '&auto=format';
      }
      return optimized;
    }
    return url;
  };

  if (hasError || !src) {
    return (
      <div 
        id="image-fallback-container"
        className={`bg-gradient-to-br from-brand-red to-brand-red-dark border border-brand-red-light/20 flex flex-col items-center justify-center p-4 text-center select-none ${className}`}
      >
        {getFallbackIcon()}
        <span className="text-white/40 text-[9px] font-medium font-sans mt-2 block uppercase tracking-wider">
          Kami Fast Food 🇵🇰
        </span>
      </div>
    );
  }

  return (
    <img
      src={getOptimizedSrc(src)}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      referrerPolicy={referrerPolicy}
      loading="lazy"
    />
  );
}
