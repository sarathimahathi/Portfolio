import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  FileText, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { PERSONAL_DATA } from '../data/portfolioData';
import { BrandMonogram } from './BrandMonogram';

interface ContactProps {
  onOpenResume?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please share a brief message (minimum 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden border-t border-surface-border">
      {/* Soft blue ambient gradient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#00A3C4]/15 via-[#E4EFF2]/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#0A232C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#00A3C4] rounded-full" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#10495B] uppercase">
              Get In Touch
            </span>
            <span className="w-6 h-[2px] bg-[#00A3C4] rounded-full" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#09181F] tracking-tight mb-4">
            Have an interesting problem to solve?
          </h2>
          <p className="text-content-secondary text-base sm:text-lg leading-relaxed">
            I'm always interested in connecting with people working on AI, machine learning, and meaningful technology projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Orbital Brand Symbol */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Contact Information Card in Architectural Slate */}
            <div className="p-8 rounded-3xl bg-[#E4EFF2]/85 backdrop-blur-md border border-[#D5E5EB] shadow-soft relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-display font-extrabold text-xl text-[#09181F] mb-2">
                  Let's Discuss AI & Engineering
                </h3>
                <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-6">
                  Whether you're looking for an ML engineer, discussing research, or exploring collaboration opportunities, feel free to reach out directly.
                </p>

                {/* Direct Email Link */}
                <a
                  href={`mailto:${PERSONAL_DATA.email}`}
                  className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-[#D5E5EB] hover:border-[#00A3C4] transition-all mb-5 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E4EFF2] text-[#00A3C4] flex items-center justify-center shrink-0 group-hover:bg-[#0A232C] group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-content-secondary font-semibold">Email Directly</div>
                    <div className="text-sm font-bold text-content-primary group-hover:text-[#00A3C4] transition-colors">
                      {PERSONAL_DATA.email}
                    </div>
                  </div>
                </a>

                {/* Deep Petrol Blue Square Social Icons with Electric Pop Hover */}
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={PERSONAL_DATA.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#D5E5EB] hover:border-[#00A3C4] text-xs font-bold uppercase tracking-wider text-content-primary hover:text-[#00A3C4] transition-colors shadow-xs"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#0A232C] text-white flex items-center justify-center shrink-0">
                      <GithubIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_DATA.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#D5E5EB] hover:border-[#00A3C4] text-xs font-bold uppercase tracking-wider text-content-primary hover:text-[#00A3C4] transition-colors shadow-xs"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#0A232C] text-white flex items-center justify-center shrink-0">
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_DATA.links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#D5E5EB] hover:border-[#00A3C4] text-xs font-bold uppercase tracking-wider text-content-primary hover:text-[#00A3C4] transition-colors shadow-xs"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#0A232C] text-white flex items-center justify-center shrink-0">
                      <LeetcodeIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>LeetCode</span>
                  </a>

                  <button
                    onClick={onOpenResume}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#D5E5EB] hover:border-[#00A3C4] text-xs font-bold uppercase tracking-wider text-content-primary hover:text-[#00A3C4] transition-colors text-left shadow-xs"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#0A232C] text-white flex items-center justify-center shrink-0">
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <span>Résumé</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Orbital Brand Symbol Card */}
            <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-[#D5E5EB] shadow-soft flex items-center gap-5">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-[#00A3C4]/20 rounded-2xl blur-md" />
                <BrandMonogram size={56} animated={true} />
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A232C]">
                  Open for Opportunities
                </div>
                <p className="text-xs text-content-secondary mt-1">
                  Available for internships, research roles, and technical collaborations in Machine Learning & AI systems.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-md border border-surface-border shadow-soft">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#E4EFF2] text-[#00A3C4] flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-content-primary mb-2">
                      Message Transmitted Successfully!
                    </h3>
                    <p className="text-sm text-content-secondary max-w-md leading-relaxed mb-6">
                      Thank you for reaching out. I have received your message and will respond shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-[#E4EFF2] text-xs font-bold uppercase tracking-wider text-content-primary border border-[#D5E5EB] hover:bg-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-content-primary font-bold mb-2">
                          Your Name <span className="text-[#00A3C4]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alan Turing"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F0F7F9] border text-xs sm:text-sm text-content-primary placeholder:text-content-muted focus:outline-none focus:ring-2 focus:ring-[#00A3C4]/20 transition-all ${
                            errors.name ? 'border-red-400 bg-red-50/20' : 'border-surface-border focus:border-[#00A3C4]'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-red-500 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-content-primary font-bold mb-2">
                          Email Address <span className="text-[#00A3C4]">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. contact@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F0F7F9] border text-xs sm:text-sm text-content-primary placeholder:text-content-muted focus:outline-none focus:ring-2 focus:ring-[#00A3C4]/20 transition-all ${
                            errors.email ? 'border-red-400 bg-red-50/20' : 'border-surface-border focus:border-[#00A3C4]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-500 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-content-primary font-bold mb-2">
                        Subject <span className="text-[#00A3C4]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. AI Collaboration / Engineering Opportunity"
                        className={`w-full px-4 py-3 rounded-xl bg-[#F0F7F9] border text-xs sm:text-sm text-content-primary placeholder:text-content-muted focus:outline-none focus:ring-2 focus:ring-[#00A3C4]/20 transition-all ${
                          errors.subject ? 'border-red-400 bg-red-50/20' : 'border-surface-border focus:border-[#00A3C4]'
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-[11px] text-red-500 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-content-primary font-bold mb-2">
                        Your Message <span className="text-[#00A3C4]">*</span>
                      </label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project, idea, or questions..."
                        className={`w-full px-4 py-3 rounded-xl bg-[#F0F7F9] border text-xs sm:text-sm text-content-primary placeholder:text-content-muted focus:outline-none focus:ring-2 focus:ring-[#00A3C4]/20 transition-all resize-none ${
                          errors.message ? 'border-red-400 bg-red-50/20' : 'border-surface-border focus:border-[#00A3C4]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-500 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button in Deep Petrol Blue with Electric Cyan Hover */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl bg-[#0A232C] hover:bg-[#00A3C4] text-white font-bold text-xs uppercase tracking-wider shadow-brand-md hover:shadow-blue-glow transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          <span>Transmitting...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <span>Transmit Message</span>
                          <Send className="w-4 h-4" />
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
