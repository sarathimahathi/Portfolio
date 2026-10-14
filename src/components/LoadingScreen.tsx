import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandMonogram } from './BrandMonogram';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1200;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(calculatedProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 400);
        }, 150);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          {/* Soft ambient electric blue glow in center */}
          <div className="absolute w-80 h-80 rounded-full bg-[#00A3C4]/15 blur-3xl pointer-events-none" />

          {/* Floating subtle ambient particles in electric cyan & petrol */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <span className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#00C2CB]/50 animate-float-slow" />
            <span className="absolute top-2/3 left-1/4 w-2 h-2 rounded-full bg-[#00A3C4]/40 animate-float-medium" />
            <span className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#175F75]/40 animate-float-slow" />
            <span className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 rounded-full bg-[#38BDF8]/50 animate-float-medium" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Geometric Symbol with Expanding Rings */}
            <div className="relative mb-8 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0.3 }}
                animate={{ scale: [0.8, 1.35, 0.8], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-24 h-24 rounded-full border border-[#00A3C4]/30"
              />
              <motion.div
                initial={{ scale: 1, opacity: 0.2 }}
                animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute w-28 h-28 rounded-full border border-[#0A232C]/15"
              />

              {/* Central Monogram */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-white p-3.5 rounded-2xl shadow-brand-md border border-[#D5E5EB]"
              >
                <BrandMonogram size={56} animated={true} />
              </motion.div>
            </div>

            {/* Title / Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-6"
            >
              <h2 className="text-sm font-semibold tracking-widest uppercase text-[#0A232C] font-mono">
                Sarathi R
              </h2>
              <p className="text-xs text-content-secondary mt-1">
                AI & Machine Learning Systems
              </p>
            </motion.div>

            {/* Thin Animated Progress Bar */}
            <div className="w-48 h-1 bg-[#F0F7F9] border border-[#D5E5EB] rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00C2CB] via-[#00A3C4] to-[#0A232C] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Progress counter text */}
            <div className="mt-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3C4] animate-pulse" />
              <span className="text-[11px] font-mono text-content-secondary">
                INITIALIZING MATRIX {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
