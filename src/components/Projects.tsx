import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ExternalLink, 
  ShieldCheck, 
  Activity, 
  Sprout
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'ml' | 'rag' | 'systems'>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  // Custom visual mockup renderers in architectural petrol blue & electric cyan matrix tones
  const renderVisualMockup = (projectId: string) => {
    switch (projectId) {
      case 'depression-prediction':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#E4EFF2] to-white rounded-2xl p-4 border border-[#D5E5EB] flex flex-col justify-between overflow-hidden relative">
            <div className="flex items-center justify-between border-b border-[#D5E5EB] pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00A3C4] animate-pulse" />
                <span className="text-[10px] font-mono text-[#09181F] font-bold">ETHICAL SENTIMENT EVALUATION</span>
              </div>
              <span className="text-[10px] font-mono text-[#0A232C] bg-white px-2 py-0.5 rounded border border-[#D5E5EB] font-bold">
                PRIVACY: AIR-GAP
              </span>
            </div>
            {/* Visual Confidence Bars in Electric Cyan */}
            <div className="space-y-2 my-auto">
              <div>
                <div className="flex justify-between text-[10px] font-mono text-content-secondary mb-1">
                  <span>Syntactic Biomarkers</span>
                  <span className="text-[#00A3C4] font-bold">Calibrated 88%</span>
                </div>
                <div className="w-full h-1.5 bg-[#D5E5EB] rounded-full overflow-hidden">
                  <div className="w-[88%] h-full bg-[#00A3C4] rounded-full shadow-[0_0_8px_rgba(0,163,196,0.6)]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] font-mono text-content-secondary mb-1">
                  <span>Sentiment Shift Dynamics</span>
                  <span className="text-[#175F75] font-bold">Calibrated 74%</span>
                </div>
                <div className="w-full h-1.5 bg-[#D5E5EB] rounded-full overflow-hidden">
                  <div className="w-[74%] h-full bg-[#175F75] rounded-full" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#D5E5EB] text-[9px] font-mono text-content-muted">
              <span>Token Anonymization: ACTIVE</span>
              <span>SHAP Explainability: ON</span>
            </div>
          </div>
        );

      case 'sovereign-workbench':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#E4EFF2] to-white rounded-2xl p-4 border border-[#D5E5EB] flex flex-col justify-between overflow-hidden relative font-mono text-[10px]">
            <div className="flex items-center justify-between border-b border-[#D5E5EB] pb-2">
              <span className="font-bold text-[#09181F]">QDRANT VECTOR PIPELINE</span>
              <span className="text-[#0A232C] bg-white px-2 py-0.5 rounded border border-[#D5E5EB] font-bold">100% AIR-GAPPED</span>
            </div>
            {/* Node flow visual */}
            <div className="flex items-center justify-between gap-1 my-auto">
              <div className="p-2 bg-white rounded-lg border border-[#D5E5EB] text-center flex-1">
                <div className="text-[#00A3C4] font-bold">DOCS INGEST</div>
                <div className="text-[8px] text-content-muted">Dense Chunks</div>
              </div>
              <span className="text-[#00A3C4] font-bold">→</span>
              <div className="p-2 bg-[#F0F7F9] rounded-lg border border-[#BDDEE7] text-center flex-1 shadow-xs">
                <div className="text-[#0A232C] font-bold">QDRANT INDEX</div>
                <div className="text-[8px] text-[#00A3C4]">Cosine Sim</div>
              </div>
              <span className="text-[#00A3C4] font-bold">→</span>
              <div className="p-2 bg-white rounded-lg border border-[#D5E5EB] text-center flex-1">
                <div className="text-[#09181F] font-bold">LANGGRAPH</div>
                <div className="text-[8px] text-content-muted">Citation Check</div>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-[#D5E5EB] text-[9px] text-content-muted">
              <span>Cloud API Exfiltration: 0.00%</span>
              <span className="text-[#00A3C4] font-bold">Self-Hosted Engine</span>
            </div>
          </div>
        );

      case 'rpm-anomaly-detector':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-[#E4EFF2] to-white rounded-2xl p-4 border border-[#D5E5EB] flex flex-col justify-between overflow-hidden relative">
            <div className="flex items-center justify-between border-b border-[#D5E5EB] pb-2">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#00A3C4]" />
                <span className="text-[10px] font-mono font-bold text-[#09181F]">STREAMING TELEMETRY (100Hz)</span>
              </div>
              <span className="text-[9px] font-mono text-[#0A232C] bg-white px-2 py-0.5 rounded border border-[#D5E5EB] font-bold">
                DYNAMIC ISOLATION FOREST
              </span>
            </div>
            {/* Simulated ECG pulse curve in electric blue */}
            <div className="relative h-16 w-full flex items-center justify-center my-1">
              <svg className="w-full h-full text-[#00A3C4]" viewBox="0 0 300 60" fill="none">
                <path
                  d="M 0 30 L 50 30 L 60 10 L 70 50 L 80 20 L 90 30 L 150 30 L 160 5 L 175 55 L 190 15 L 200 30 L 300 30"
                  stroke="#00A3C4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="175" cy="55" r="4" fill="#00C2CB" className="animate-ping" />
                <circle cx="175" cy="55" r="3" fill="#00C2CB" />
              </svg>
              <span className="absolute top-1 right-12 text-[8px] font-mono bg-white text-[#0A232C] px-1.5 py-0.5 rounded border border-[#D5E5EB] shadow-xs">
                Anomaly Detected (Z: +3.2)
              </span>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono text-content-muted">
              <span>Latency: &lt; 42ms</span>
              <span>FastAPI WebSockets</span>
            </div>
          </div>
        );

      case 'agrosim-ai':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-[#E4EFF2] to-white rounded-2xl p-4 border border-[#D5E5EB] flex flex-col justify-between overflow-hidden relative">
            <div className="flex items-center justify-between border-b border-[#D5E5EB] pb-2">
              <div className="flex items-center gap-1.5">
                <Sprout className="w-3.5 h-3.5 text-[#00A3C4]" />
                <span className="text-[10px] font-mono font-bold text-[#09181F]">CLIMATE SOWING SIMULATOR</span>
              </div>
              <span className="text-[9px] font-mono text-[#0A232C] bg-white px-2 py-0.5 rounded border border-[#D5E5EB] font-bold">
                OPTIMAL WINDOW: 18-24 OCT
              </span>
            </div>
            {/* Agro curves */}
            <div className="grid grid-cols-3 gap-2 my-auto text-center font-mono">
              <div className="bg-white p-2 rounded-xl border border-[#D5E5EB]">
                <div className="text-[9px] text-content-secondary">Soil Moisture</div>
                <div className="text-xs font-bold text-[#00A3C4] mt-0.5">38.4% Ideal</div>
              </div>
              <div className="bg-white p-2 rounded-xl border border-[#D5E5EB]">
                <div className="text-[9px] text-content-secondary">Rain Probability</div>
                <div className="text-xs font-bold text-[#175F75] mt-0.5">82% Forecast</div>
              </div>
              <div className="bg-white p-2 rounded-xl border border-[#D5E5EB]">
                <div className="text-[9px] text-content-secondary">Yield Risk Factor</div>
                <div className="text-xs font-bold text-[#0A232C] mt-0.5">Low (0.14)</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono text-content-muted">
              <span>Crop: Sorghum / Pulse</span>
              <span>Regional Weather Integration</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#F5F9FA]/60 relative border-t border-surface-border">
      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#00A3C4] rounded-full" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#10495B] uppercase">
              Featured Engineering Projects
            </span>
            <span className="w-6 h-[2px] bg-[#00A3C4] rounded-full" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#09181F] tracking-tight mb-4">
            Practical AI Built for Real Impact
          </h2>
          <p className="text-content-secondary text-sm sm:text-base leading-relaxed">
            From clinical early-risk detection to self-hosted document RAG workbenches and anomaly detectors, engineered with responsible design and clean architecture.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[
            { label: 'All Projects', value: 'all' },
            { label: 'Machine Learning', value: 'ml' },
            { label: 'Generative AI & RAG', value: 'rag' },
            { label: 'Autonomous Systems', value: 'systems' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value as any)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === tab.value
                  ? 'bg-[#0A232C] text-white shadow-brand-md'
                  : 'bg-white/80 backdrop-blur-md text-content-secondary hover:text-[#00A3C4] border border-surface-border'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Varied Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-white/90 backdrop-blur-md border border-surface-border shadow-soft hover:shadow-card-hover hover:border-[#00A3C4] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Preview / Mockup Area */}
                <div className="p-6 pb-2">
                  <div className="relative rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
                    {renderVisualMockup(project.id)}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 pt-3 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Status & Category */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0A232C] bg-[#E4EFF2] px-2.5 py-1 rounded-full border border-[#D5E5EB]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A3C4] animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-content-primary mb-2 group-hover:text-[#00A3C4] transition-colors">
                      {project.title}
                    </h3>

                    {/* Problem Statement */}
                    <p className="text-xs text-[#10495B] font-semibold mb-3 italic">
                      "{project.problemStatement}"
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Responsible AI Tag if present */}
                    {project.responsibleAIFeature && (
                      <div className="mb-5 flex items-start gap-2 p-3 rounded-xl bg-[#E4EFF2]/80 border border-[#D5E5EB] text-[11px] text-content-secondary">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#00A3C4] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">
                          <strong className="text-content-primary">Responsible Design:</strong> {project.responsibleAIFeature}
                        </span>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#F0F7F9] text-content-primary border border-surface-border font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-surface-border flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A232C] hover:text-[#00A3C4] transition-colors"
                    >
                      <span>View Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#00A3C4]" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-content-secondary hover:text-white hover:bg-[#0A232C] border border-surface-border transition-all"
                        aria-label={`GitHub repo for ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4 text-[#00A3C4]" />
                      </a>
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-content-secondary hover:text-white hover:bg-[#0A232C] border border-surface-border transition-all"
                        aria-label={`Live preview for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4 text-[#00A3C4]" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
