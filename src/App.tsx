import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { MatrixCanvasBackground } from './components/MatrixCanvasBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Approach } from './components/Approach';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-content-primary selection:bg-brand-100 selection:text-brand-900 relative">
      {/* Page Loading Experience */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Interactive Gliding Matrix Blue Background Canvas */}
      <MatrixCanvasBackground />

      {/* Ultra-thin Blue Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Non-intrusive Desktop Pointer Accent */}
      <CustomCursor />

      {/* Sticky Premium Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Experience & Timeline Section */}
        <Experience />

        {/* Beyond The Code (Approach) */}
        <Approach />

        {/* Contact Section */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
