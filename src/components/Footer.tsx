import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { BrandMonogram } from './BrandMonogram';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#F5F9FA]/80 backdrop-blur-md border-t border-surface-border py-14 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-surface-border">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <BrandMonogram size={36} />
              <span className="font-display font-extrabold text-lg text-[#09181F]">
                {PERSONAL_DATA.name}
              </span>
            </div>
            <p className="text-xs text-content-secondary max-w-sm">
              Computer Science Engineering Student • AI, Machine Learning & RAG Specialist.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs text-content-secondary font-bold uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#00A3C4] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={PERSONAL_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-[#0A232C] hover:bg-[#00A3C4] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-[#0A232C] hover:bg-[#00A3C4] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-[#0A232C] hover:bg-[#00A3C4] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
              aria-label="LeetCode"
            >
              <LeetcodeIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-[#00A3C4] hover:bg-[#0A232C] text-white flex items-center justify-center shadow-brand-md transition-all hover:scale-105 active:scale-95"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-content-muted gap-4 text-center sm:text-left">
          <p>
            © {currentYear} {PERSONAL_DATA.name}. Architectural Slate & Electric Matrix Blue Palette.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00C2CB] animate-pulse" />
            <span className="text-[#0A232C] font-bold uppercase tracking-wider">Electric Matrix Cyan Theme</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
