import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentScroll = window.scrollY;
        setScrollWidth((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-[#00C2CB] via-[#00A3C4] to-[#0A232C] transition-all duration-75 ease-out shadow-[0_0_12px_rgba(0,163,196,0.6)]"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
};
