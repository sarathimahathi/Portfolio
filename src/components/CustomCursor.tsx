import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsTouch(!mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = target.closest('a, button, input, textarea, select, [role="button"], .clickable');
        setIsHovered(!!isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out will-change-transform"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: 0,
        top: 0,
      }}
    >
      {/* Outer pop electric blue matrix ring */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ease-out ${
          isHovered
            ? 'w-11 h-11 bg-[#00A3C4]/15 scale-110 border-[#00C2CB] shadow-[0_0_20px_rgba(0,163,196,0.6)]'
            : 'w-6 h-6 bg-[#00A3C4]/8 border-[#00A3C4]/50'
        }`}
      />
      {/* Center electric matrix cyan dot */}
      <div
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C2CB] shadow-[0_0_8px_rgba(0,194,203,0.8)] transition-all duration-150 ${
          isHovered ? 'w-2 h-2 opacity-95' : 'w-1.5 h-1.5 opacity-80'
        }`}
      />
    </div>
  );
};
