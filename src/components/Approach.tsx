import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Cpu, Sparkles, Check } from 'lucide-react';
import { APPROACH_DATA } from '../data/portfolioData';

interface TiltCardProps {
  card: typeof APPROACH_DATA[0];
  index: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ card, index }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cardEl = e.currentTarget;
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'explore':
        return <Compass className="w-5 h-5 text-[#00A3C4]" />;
      case 'build':
        return <Cpu className="w-5 h-5 text-[#00A3C4]" />;
      case 'improve':
        return <Sparkles className="w-5 h-5 text-[#00A3C4]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#00A3C4]" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="group relative h-full p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-surface-border shadow-soft hover:shadow-card-hover hover:border-[#00A3C4] transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          {/* Top Row: Number & Icon */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-2xl font-extrabold text-[#00A3C4]/30 group-hover:text-[#00A3C4] transition-colors">
              {card.number}
            </span>
            <div className="w-12 h-12 rounded-2xl bg-[#E4EFF2] border border-[#D5E5EB] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#DCEDF2] transition-all duration-300">
              {getIcon(card.id)}
            </div>
          </div>

          {/* Title & Tagline */}
          <h3 className="font-display font-extrabold text-2xl text-content-primary mb-2 group-hover:text-[#00A3C4] transition-colors">
            {card.title}
          </h3>
          <p className="text-xs font-mono text-[#175F75] font-bold mb-4 uppercase tracking-wider">
            {card.tagline}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-6">
            {card.description}
          </p>
        </div>

        {/* Deliverables List */}
        <div className="pt-4 border-t border-surface-border/60">
          <div className="text-[11px] font-mono uppercase tracking-wider text-content-secondary font-bold mb-2.5">
            Key Practices
          </div>
          <ul className="space-y-1.5">
            {card.deliverables.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-content-primary">
                <span className="w-4 h-4 rounded-full bg-[#E4EFF2] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#00A3C4]" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-[#F5F9FA]/60 relative border-t border-surface-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#00A3C4] rounded-full" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#10495B] uppercase">
              Beyond The Code
            </span>
            <span className="w-6 h-[2px] bg-[#00A3C4] rounded-full" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#09181F] tracking-tight mb-4">
            How I Approach Engineering
          </h2>
          <p className="text-content-secondary text-sm sm:text-base leading-relaxed">
            Software is more than syntax. It is a continuous loop of first-principles exploration, disciplined construction, and rigorous optimization.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {APPROACH_DATA.map((card, index) => (
            <TiltCard key={card.id} card={card} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
