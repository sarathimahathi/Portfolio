import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Cpu, Layers, Quote, GraduationCap, Calendar, Compass } from 'lucide-react';
import { PERSONAL_DATA, FOCUS_AREAS } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#00A3C4]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#00A3C4]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#00A3C4]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#00A3C4]" />;
      default:
        return <Compass className="w-5 h-5 text-[#00A3C4]" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-[#F5F9FA]/60 relative overflow-hidden border-t border-surface-border">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#00A3C4]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#0A232C]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Editorial Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-[#00A3C4] rounded-full" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#10495B] uppercase">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#09181F] tracking-tight leading-tight mb-6">
              Curious by nature.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3C4] via-[#227891] to-[#0A232C]">
                Driven by technology.
              </span>
            </h2>

            {/* Quick Biographical Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs text-content-secondary">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-surface-border shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#00A3C4]" />
                <span className="font-semibold text-content-primary">{PERSONAL_DATA.degree}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-surface-border shadow-xs">
                <Calendar className="w-3.5 h-3.5 text-[#00A3C4]" />
                <span className="font-semibold text-content-primary">Born: {PERSONAL_DATA.dob}</span>
              </div>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-content-secondary text-base leading-relaxed mb-8">
              <p>
                {PERSONAL_DATA.aboutIntro}
              </p>
              <p>
                {PERSONAL_DATA.aboutDetail}
              </p>
            </div>

            {/* Philosophy Card in Architectural Teal */}
            <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-[#D5E5EB] shadow-soft overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#00A3C4] to-[#0A232C]" />
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#D5E5EB] shadow-xs bg-slate-100">
                  <img
                    src={PERSONAL_DATA.photo || "/profile.jpg"}
                    alt={PERSONAL_DATA.name}
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#10495B] font-bold mb-1">
                    <Quote className="w-3.5 h-3.5 text-[#00A3C4]" />
                    <span>Guiding Philosophy</span>
                  </div>
                  <p className="font-display text-base sm:text-lg font-bold text-content-primary italic">
                    "{PERSONAL_DATA.philosophy}"
                  </p>
                  <p className="text-[11px] font-mono text-content-secondary mt-1">
                    — {PERSONAL_DATA.name}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Focus Area Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {FOCUS_AREAS.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-surface-border shadow-soft hover:shadow-card-hover hover:border-[#00A3C4] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#E4EFF2] border border-[#D5E5EB] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#DCEDF2] transition-all duration-300">
                  {getIcon(area.icon)}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base text-content-primary mb-2 group-hover:text-[#00A3C4] transition-colors">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-content-secondary leading-relaxed">
                  {area.description}
                </p>

                {/* Subtle Electric Cyan Accent Line */}
                <div className="mt-4 pt-3 border-t border-surface-border/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#175F75] font-semibold">
                    Core Focus
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00A3C4] group-hover:scale-125 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
