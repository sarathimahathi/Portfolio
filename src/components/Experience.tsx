import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Trophy, 
  Award, 
  Code, 
  Calendar, 
  Building2, 
  ExternalLink
} from 'lucide-react';
import { TIMELINE_DATA, PERSONAL_DATA } from '../data/portfolioData';
import type { TimelineEntry } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getTypeIcon = (type: TimelineEntry['type']) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-[#00A3C4]" />;
      case 'event':
        return <Trophy className="w-4 h-4 text-[#00A3C4]" />;
      case 'certification':
        return <Award className="w-4 h-4 text-[#00A3C4]" />;
      case 'achievement':
        return <Code className="w-4 h-4 text-[#00A3C4]" />;
    }
  };

  const getTypeLabel = (type: TimelineEntry['type']) => {
    switch (type) {
      case 'education':
        return 'Academic Foundation';
      case 'event':
        return 'Competitive Event';
      case 'certification':
        return 'Verified Credential';
      case 'achievement':
        return 'Milestone';
    }
  };

  return (
    <section id="experience" className="py-24 bg-transparent relative">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#00A3C4] rounded-full" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#10495B] uppercase">
              Trajectory & Milestones
            </span>
            <span className="w-6 h-[2px] bg-[#00A3C4] rounded-full" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#09181F] tracking-tight mb-4">
            Education, Experience & Milestones
          </h2>
          <p className="text-content-secondary text-sm sm:text-base leading-relaxed">
            A chronological timeline of academic foundations, hackathons, technical certifications, and engineering milestones.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#BDDEE7] space-y-12">
          
          {TIMELINE_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Electric Cyan Glowing Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#00A3C4] shadow-[0_0_10px_rgba(0,163,196,0.5)] flex items-center justify-center transition-transform group-hover:scale-125">
                <span className="w-2 h-2 rounded-full bg-[#00C2CB]" />
              </div>

              {/* Timeline Card */}
              <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-[#D5E5EB] shadow-soft group-hover:shadow-card-hover group-hover:border-[#00A3C4] transition-all duration-300">
                {/* Top Meta Line */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#0A232C] bg-[#E4EFF2] px-2.5 py-0.5 rounded-full border border-[#D5E5EB]">
                      {getTypeIcon(item.type)}
                      <span>{getTypeLabel(item.type)}</span>
                    </span>
                    <span className="text-xs font-mono text-content-secondary flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3 text-[#00A3C4]" />
                      {item.year}
                    </span>
                  </div>

                  <span className="text-xs font-medium text-content-secondary flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-[#175F75]" />
                    {item.organization}
                  </span>
                </div>

                {/* Entry Title */}
                <h3 className="font-display font-bold text-lg text-content-primary mb-2 group-hover:text-[#00A3C4] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-surface-border/60">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F0F7F9] text-content-primary border border-surface-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {item.type === 'achievement' && item.title.includes('LeetCode') && (
                    <a
                      href={PERSONAL_DATA.links.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#00A3C4] hover:text-[#0A232C] transition-colors"
                    >
                      <span>LeetCode Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
