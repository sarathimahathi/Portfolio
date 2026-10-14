import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Send, Sparkles, Terminal, Database, Network, Mail } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';
import { BrandMonogram } from './BrandMonogram';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 md:py-24 overflow-hidden bg-transparent"
    >
      {/* Subtle architectural gradient banner */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#E4EFF2]/50 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full relative z-10">
        
        {/* Editorial Top Card Section in Architectural Slate Mist */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-[#E4EFF2]/75 backdrop-blur-md border border-[#D5E5EB] shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white p-1 border border-[#D5E5EB] shadow-xs shrink-0 group">
              <img
                src={PERSONAL_DATA.photo || "/profile.jpg"}
                alt={PERSONAL_DATA.name}
                className="w-full h-full object-cover object-[center_20%] rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-[#00C2CB] border-2 border-white shadow-xs" title="Available for opportunities" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#09181F] tracking-tight uppercase">
                  {PERSONAL_DATA.name}
                </h2>
                <div className="hidden sm:inline-flex opacity-85 hover:opacity-100 transition-opacity">
                  <BrandMonogram size={26} animated={false} />
                </div>
              </div>
              <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#175F75] font-bold mt-0.5">
                {PERSONAL_DATA.role}
              </p>
            </div>
          </div>

          {/* Deep Petrol Blue Square Social Icons with Electric Pop Hover */}
          <div className="flex items-center gap-2.5">
            <a
              href={PERSONAL_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#0A232C] hover:bg-[#00A3C4] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#0A232C] hover:bg-[#00A3C4] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#0A232C] hover:bg-[#00A3C4] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
              aria-label="LeetCode Profile"
            >
              <LeetcodeIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="w-10 h-10 rounded-xl bg-[#0A232C] hover:bg-[#00A3C4] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D5E5EB] shadow-soft mb-6 hover:border-[#00A3C4] transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C2CB] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A3C4]"></span>
              </span>
              <span className="text-xs font-mono font-bold text-[#0A232C] tracking-wide uppercase">
                {PERSONAL_DATA.statusBadge}
              </span>
            </motion.div>

            {/* Main Headline with Electric Cyan / Petrol Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#09181F] leading-[1.12] mb-6"
            >
              Turning Ideas Into{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00A3C4] via-[#175F75] to-[#0A232C]">
                Intelligent Solutions.
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2 text-[#00A3C4]/40"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 4 Q 25 8 50 4 T 100 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#1E293B] leading-relaxed mb-8 max-w-2xl font-normal relative z-10"
            >
              I'm a <strong className="font-semibold text-[#09181F]">Computer Science Engineering student</strong> passionate about{' '}
              <span className="text-[#09181F] font-bold bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded-lg border border-[#D5E5EB] shadow-xs inline-block my-0.5">Machine Learning</span>,{' '}
              <span className="text-[#09181F] font-bold bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded-lg border border-[#D5E5EB] shadow-xs inline-block my-0.5">Artificial Intelligence</span>,{' '}
              <span className="text-[#09181F] font-bold bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded-lg border border-[#D5E5EB] shadow-xs inline-block my-0.5">Retrieval-Augmented Generation (RAG)</span>, and building practical AI-powered applications.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <button
                onClick={() => handleScrollTo('projects')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0A232C] hover:bg-[#00A3C4] text-white font-bold text-xs uppercase tracking-wider shadow-brand-md hover:shadow-blue-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E4EFF2] border border-[#D5E5EB] text-content-primary hover:text-[#00A3C4] font-bold text-xs uppercase tracking-wider hover:border-[#00A3C4] hover:bg-white shadow-soft transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-4 h-4 text-[#00A3C4]" />
                <span>Get In Touch</span>
              </button>
            </motion.div>

            {/* Subtle Résumé Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 text-xs text-content-secondary pl-1"
            >
              <FileText className="w-3.5 h-3.5 text-[#00A3C4]" />
              <span>Looking for quick credentials?</span>
              <button
                onClick={onOpenResume}
                className="font-bold uppercase tracking-wider text-[#10495B] hover:underline hover:text-[#00A3C4] transition-colors"
              >
                View & Download Résumé
              </button>
            </motion.div>
          </div>

          {/* Right Column: Floating Technology Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-square flex items-center justify-center select-none"
            >
              {/* Outer Ambient Blue Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00A3C4]/20 via-[#175F75]/10 to-transparent blur-2xl" />

              {/* Orbiting Ring 1 */}
              <div 
                className="absolute inset-4 rounded-full border border-dashed border-[#00A3C4]/25 animate-spin-slow"
                style={{
                  transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`
                }}
              />

              {/* Orbiting Ring 2 */}
              <div 
                className="absolute inset-16 rounded-full border border-[#0A232C]/20"
                style={{
                  transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
                }}
              />

              {/* Central Glowing Portrait Card & Monogram Overlay */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
                }}
                className="relative z-20 w-[240px] sm:w-[260px] aspect-[3/4] p-2.5 rounded-3xl bg-white/95 backdrop-blur-xl shadow-brand-lg border border-[#D5E5EB] group"
              >
                {/* Glowing border accent */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#00A3C4]/30 via-[#175F75]/20 to-transparent blur-md -z-10 group-hover:from-[#00A3C4]/50 transition-all duration-500" />

                {/* Inner Image Frame */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                  <img
                    src={PERSONAL_DATA.photo || "/profile.jpg"}
                    alt={PERSONAL_DATA.name}
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle architectural vignette overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A232C]/85 via-[#0A232C]/15 to-transparent pointer-events-none" />

                  {/* Top Pill: Monogram & AI Core Status */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/60 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C2CB] animate-ping" />
                      <span className="text-[9px] font-mono font-bold text-[#0A232C] uppercase tracking-wider">AI Systems</span>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-white/90 backdrop-blur-md p-1 border border-white/60 shadow-xs flex items-center justify-center">
                      <BrandMonogram size={20} animated={false} />
                    </div>
                  </div>

                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-left pointer-events-none">
                    <p className="font-display font-bold text-white text-base leading-tight drop-shadow-sm">
                      {PERSONAL_DATA.name}
                    </p>
                    <p className="text-[11px] font-mono text-[#E4EFF2] font-medium tracking-wide drop-shadow-sm mt-0.5">
                      {PERSONAL_DATA.role}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Glass Card 1: Machine Learning */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
                style={{
                  transform: `translate(${mousePos.x * -35}px, ${mousePos.y * -35}px)`
                }}
                className="absolute top-2 left-2 z-30 glass-panel px-3.5 py-2.5 rounded-2xl shadow-soft border border-surface-border flex items-center gap-2 hover:border-[#00A3C4] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#E4EFF2] flex items-center justify-center text-[#00A3C4]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-content-primary">ML Models</div>
                  <div className="text-[10px] font-mono text-content-secondary">Scikit • PyTorch</div>
                </div>
              </motion.div>

              {/* Floating Glass Card 2: RAG Systems */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  x: [0, -6, 0],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                style={{
                  transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`
                }}
                className="absolute bottom-4 right-2 z-30 glass-panel px-3.5 py-2.5 rounded-2xl shadow-soft border border-surface-border flex items-center gap-2 hover:border-[#00A3C4] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#E4EFF2] flex items-center justify-center text-[#00A3C4]">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-content-primary">RAG Systems</div>
                  <div className="text-[10px] font-mono text-content-secondary">Qdrant • Embeddings</div>
                </div>
              </motion.div>

              {/* Floating Glass Card 3: LLMs & Agents */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }}
                style={{
                  transform: `translate(${mousePos.x * -25}px, ${mousePos.y * 25}px)`
                }}
                className="absolute bottom-6 left-4 z-30 glass-panel px-3.5 py-2 rounded-2xl shadow-soft border border-surface-border flex items-center gap-2 hover:border-[#00A3C4] transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-[#E4EFF2] flex items-center justify-center text-[#00A3C4]">
                  <Network className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold text-content-primary">LangGraph & LLMs</div>
              </motion.div>

              {/* Floating Glass Card 4: Python & FastAPI */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.1
                }}
                style={{
                  transform: `translate(${mousePos.x * 35}px, ${mousePos.y * -30}px)`
                }}
                className="absolute top-6 right-4 z-30 glass-panel px-3 py-1.5 rounded-2xl shadow-soft border border-surface-border flex items-center gap-2 hover:border-[#00A3C4] transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-[#00A3C4]" />
                <span className="text-xs font-semibold font-mono text-content-primary">Python • FastAPI</span>
              </motion.div>

              {/* Decorative Orbiting Node Dots in Electric Cyan */}
              <span className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-[#00C2CB] shadow-[0_0_8px_rgba(0,194,203,0.8)] animate-pulse" />
              <span className="absolute top-1/3 right-2 w-1.5 h-1.5 rounded-full bg-[#00A3C4] opacity-80" />
              <span className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-[#38BDF8] opacity-75" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
