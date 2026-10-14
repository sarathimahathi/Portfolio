import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandMonogram } from './BrandMonogram';
import { PERSONAL_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-xs border-b border-[#D5E5EB] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-3 select-none"
          aria-label="Sarathi R Home"
        >
          <div className="transition-transform duration-300 group-hover:scale-105">
            <BrandMonogram size={38} />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base tracking-tight text-[#09181F] group-hover:text-[#00A3C4] transition-colors">
              {PERSONAL_DATA.name}
            </span>
            <span className="text-[11px] font-mono tracking-wider uppercase text-content-secondary">
              AI / ML Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F0F7F9]/80 backdrop-blur-md border border-[#D5E5EB] px-3 py-1.5 rounded-full shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 uppercase tracking-wider ${
                  isActive
                    ? 'text-[#0A232C] font-bold'
                    : 'text-content-secondary hover:text-content-primary hover:bg-white/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white border border-[#BDDEE7] rounded-full shadow-xs -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Work With Me / Let's Connect */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="text-xs font-semibold text-content-secondary hover:text-[#00A3C4] px-3 py-2 transition-colors flex items-center gap-1 uppercase tracking-wider"
            >
              Résumé
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00A3C4]" />
            </button>
          )}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group relative inline-flex items-center justify-center px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#0A232C] hover:bg-[#00A3C4] rounded-full shadow-brand-sm hover:shadow-blue-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Work With Me
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2CB] animate-pulse" />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-content-primary hover:bg-[#E4EFF2] border border-[#D5E5EB] transition-colors"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#00A3C4]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#D5E5EB] px-6 py-6 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                      isActive
                        ? 'bg-[#E4EFF2] text-[#0A232C] border border-[#BDDEE7] shadow-xs'
                        : 'text-content-secondary hover:text-content-primary hover:bg-[#F0F7F9]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#D5E5EB] flex flex-col gap-2.5">
                {onOpenResume && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-center text-content-primary bg-[#F0F7F9] border border-[#D5E5EB] rounded-xl"
                  >
                    View Résumé
                  </button>
                )}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-center text-white bg-[#0A232C] hover:bg-[#00A3C4] rounded-xl shadow-brand-sm"
                >
                  Work With Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
