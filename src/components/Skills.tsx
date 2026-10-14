import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  BrainCircuit, 
  Sparkles, 
  Server, 
  Layout, 
  Wrench, 
  CheckCircle2,
  Check
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import type { SkillItem } from '../data/portfolioData';

type FilterCategory = 'all' | 'ai_ml' | 'genai_rag' | 'programming' | 'backend' | 'frontend' | 'tools';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filterTabs: { label: string; value: FilterCategory; icon: React.ReactNode }[] = [
    { label: 'All Disciplines', value: 'all', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { label: 'AI & Machine Learning', value: 'ai_ml', icon: <BrainCircuit className="w-3.5 h-3.5" /> },
    { label: 'Generative AI & RAG', value: 'genai_rag', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { label: 'Programming', value: 'programming', icon: <Code2 className="w-3.5 h-3.5" /> },
    { label: 'Backend APIs', value: 'backend', icon: <Server className="w-3.5 h-3.5" /> },
    { label: 'Frontend', value: 'frontend', icon: <Layout className="w-3.5 h-3.5" /> },
    { label: 'Databases & Tools', value: 'tools', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills = activeFilter === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((skill) => skill.category === activeFilter);

  const getLevelBadge = (level: SkillItem['level']) => {
    switch (level) {
      case 'Specialized':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#E4EFF2] text-[#0A232C] border border-[#BDDEE7]">
            Specialized
          </span>
        );
      case 'Advanced':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#F0F7F9] text-[#175F75] border border-surface-border">
            Advanced
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white text-content-secondary border border-surface-border">
            Core
          </span>
        );
    }
  };

  const getCategoryIcon = (category: SkillItem['category']) => {
    switch (category) {
      case 'ai_ml':
        return <BrainCircuit className="w-4 h-4 text-[#00A3C4]" />;
      case 'genai_rag':
        return <Sparkles className="w-4 h-4 text-[#00A3C4]" />;
      case 'programming':
        return <Code2 className="w-4 h-4 text-[#00A3C4]" />;
      case 'backend':
        return <Server className="w-4 h-4 text-[#00A3C4]" />;
      case 'frontend':
        return <Layout className="w-4 h-4 text-[#00A3C4]" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-[#00A3C4]" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#00A3C4] rounded-full" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#10495B] uppercase">
              Technical Competencies
            </span>
            <span className="w-6 h-[2px] bg-[#00A3C4] rounded-full" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#09181F] tracking-tight mb-4">
            Engineered for High-Impact Roles
          </h2>
          <p className="text-content-secondary text-sm sm:text-base leading-relaxed">
            Curated technical repertoire spanning mathematical ML foundations, modern RAG orchestrations, scalable backend architectures, and production workflows.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0A232C] text-white shadow-brand-md'
                    : 'bg-white/80 backdrop-blur-md text-content-secondary hover:text-[#00A3C4] hover:bg-white border border-[#D5E5EB]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group relative p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-surface-border shadow-soft hover:shadow-card-hover hover:border-[#00A3C4] transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#E4EFF2] border border-[#D5E5EB] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#DCEDF2] transition-all">
                        {getCategoryIcon(skill.category)}
                      </div>
                      <h3 className="font-display font-bold text-sm text-content-primary group-hover:text-[#00A3C4] transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                    {getLevelBadge(skill.level)}
                  </div>

                  {/* Highlight note */}
                  {skill.highlight && (
                    <p className="text-xs text-content-secondary line-clamp-2 leading-relaxed">
                      {skill.highlight}
                    </p>
                  )}
                </div>

                {/* Subtle indicator bar */}
                <div className="mt-3 pt-2 border-t border-surface-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-content-muted">
                    <CheckCircle2 className="w-3 h-3 text-[#00A3C4]" />
                    <span>Production verified</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00A3C4] group-hover:scale-125 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Competency Pillars Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#E4EFF2]/80 backdrop-blur-md border border-[#D5E5EB] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-left">
            <h4 className="font-display font-bold text-base text-content-primary">
              Committed to Rigorous Code Quality & Responsible AI
            </h4>
            <p className="text-xs text-content-secondary mt-1">
              Zero black-box dogma. Every model is built with explainability, reproducibility, and security from Day 1.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#0A232C] bg-white px-3 py-1.5 rounded-full border border-[#D5E5EB]">
              <Check className="w-3.5 h-3.5 text-[#00A3C4]" /> PEP8 & Clean Code
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#0A232C] bg-white px-3 py-1.5 rounded-full border border-[#D5E5EB]">
              <Check className="w-3.5 h-3.5 text-[#00A3C4]" /> Type Safety
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
