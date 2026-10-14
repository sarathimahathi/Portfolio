import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, CheckCircle2 } from 'lucide-react';
import { PERSONAL_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

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

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-surface-border overflow-hidden z-10 my-8 flex flex-col max-h-[85vh]"
        >
          {/* Header Controls in Architectural Slate Mist */}
          <div className="px-6 py-4 border-b border-surface-border flex items-center justify-between bg-[#E4EFF2]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A3C4]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A232C]">
                Curriculum Vitae Preview • {PERSONAL_DATA.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#D5E5EB] text-xs font-bold uppercase tracking-wider text-content-primary hover:border-[#00A3C4] transition-colors shadow-xs"
              >
                <Printer className="w-3.5 h-3.5 text-[#00A3C4]" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white text-content-secondary hover:text-content-primary transition-colors"
                aria-label="Close resume preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Document Body */}
          <div className="p-8 sm:p-10 overflow-y-auto space-y-6 text-left">
            {/* Header info */}
            <div className="border-b border-surface-border pb-6 flex items-start gap-5">
              <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-2xl overflow-hidden shrink-0 border border-[#D5E5EB] shadow-xs bg-slate-100">
                <img
                  src={PERSONAL_DATA.photo || "/profile.jpg"}
                  alt={PERSONAL_DATA.name}
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
              <div className="flex-1">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-content-primary">
                  {PERSONAL_DATA.name}
                </h2>
                <p className="text-xs sm:text-sm font-bold text-[#00A3C4] mt-1 uppercase tracking-wide">
                  Computer Science Engineering • AI & Machine Learning Systems
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-content-secondary">
                  <span>Email: {PERSONAL_DATA.email}</span>
                  <span>GitHub: github.com/sarathi-r</span>
                  <span>LinkedIn: linkedin.com/in/sarathi-r</span>
                  <span>LeetCode: leetcode.com/u/sarathi-r</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A232C] mb-2 border-b border-[#BDDEE7] pb-1">
                Education
              </h3>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-sm text-content-primary">
                    {PERSONAL_DATA.degree}
                  </h4>
                  <p className="text-xs text-content-secondary">
                    Anna University Affiliated Institution • DOB: {PERSONAL_DATA.dob}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#00A3C4] font-bold">2024 — Present</span>
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A232C] mb-2 border-b border-[#BDDEE7] pb-1">
                Technical Competencies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-bold text-content-primary">AI & Machine Learning:</span>{' '}
                  <span className="text-content-secondary">Machine Learning, Scikit-learn, PyTorch, Data Preprocessing, Model Evaluation</span>
                </div>
                <div>
                  <span className="font-bold text-content-primary">Generative AI & RAG:</span>{' '}
                  <span className="text-content-secondary">RAG Architectures, Vector DBs (Qdrant), Embeddings, LangGraph, LLM APIs</span>
                </div>
                <div>
                  <span className="font-bold text-content-primary">Languages:</span>{' '}
                  <span className="text-content-secondary">Python, Java, C, TypeScript, SQL</span>
                </div>
                <div>
                  <span className="font-bold text-content-primary">Backend & Tools:</span>{' '}
                  <span className="text-content-secondary">FastAPI, Flask, MongoDB, Docker, Git, Linux</span>
                </div>
              </div>
            </div>

            {/* Featured Engineering Projects */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A232C] mb-3 border-b border-[#BDDEE7] pb-1">
                Engineering Projects
              </h3>
              <div className="space-y-4">
                {PROJECTS_DATA.map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-content-primary">{proj.title}</span>
                      <span className="font-mono text-[10px] text-[#00A3C4] font-bold">{proj.status}</span>
                    </div>
                    <p className="text-content-secondary mb-1">
                      {proj.description}
                    </p>
                    <div className="text-[11px] font-mono text-content-muted">
                      Technologies: {proj.technologies.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hackathons & Milestones */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A232C] mb-2 border-b border-[#BDDEE7] pb-1">
                Honors & Problem Solving
              </h3>
              <ul className="space-y-1.5 text-xs text-content-secondary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3C4] shrink-0" />
                  <span>National Level AI Innovation Hackathon Finalist — Rapid RAG and classification prototype</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3C4] shrink-0" />
                  <span>Active LeetCode Problem Solver across Graphs, Dynamic Programming, and Trees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3C4] shrink-0" />
                  <span>Deep Learning & Neural Architectures Specialization</span>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
