import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, Cpu, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A232C]/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-surface-border overflow-hidden z-10 my-8"
        >
          {/* Header Bar in Architectural Slate Mist */}
          <div className="px-6 py-5 border-b border-surface-border flex items-center justify-between bg-[#E4EFF2]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A3C4] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A232C]">
                {project.status}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white text-content-secondary hover:text-content-primary transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* Title & Category */}
            <div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-content-primary tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-[#00A3C4] font-bold mt-1">
                {project.problemStatement}
              </p>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-content-secondary font-bold mb-2">
                Project Overview
              </h4>
              <p className="text-sm text-content-secondary leading-relaxed">
                {project.fullOverview}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="p-5 rounded-2xl bg-[#F0F7F9] border border-surface-border">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-[#00A3C4]" />
                <h4 className="text-xs font-mono uppercase tracking-wider text-content-primary font-bold">
                  System Architecture & Technical Innovations
                </h4>
              </div>
              <ul className="space-y-2">
                {project.architectureHighlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-content-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3C4] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsible AI Feature */}
            {project.responsibleAIFeature && (
              <div className="p-5 rounded-2xl bg-[#E4EFF2] border border-[#D5E5EB]">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00A3C4]" />
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#0A232C] font-bold">
                    Responsible & Privacy-First AI Design
                  </h4>
                </div>
                <p className="text-xs text-brand-950 leading-relaxed">
                  {project.responsibleAIFeature}
                </p>
              </div>
            )}

            {/* Technology Stack Tags */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-content-secondary font-bold mb-2.5">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#E4EFF2] text-content-primary border border-[#D5E5EB]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-4 border-t border-surface-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F0F7F9] hover:bg-white text-content-primary border border-surface-border text-xs font-bold uppercase tracking-wider shadow-xs transition-all hover:border-[#00A3C4]"
                >
                  <GithubIcon className="w-4 h-4 text-[#00A3C4]" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A232C] hover:bg-[#00A3C4] text-white text-xs font-bold uppercase tracking-wider shadow-brand-md transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo Preview</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="text-xs text-content-secondary hover:text-content-primary font-bold uppercase tracking-wider"
              >
                Close details
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
