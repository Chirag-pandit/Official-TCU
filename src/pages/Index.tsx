import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import SystemMonitor from '@/components/SystemMonitor';
import Hero from '@/components/Hero';
import Terminal from '@/components/Terminal';
import Sections from '@/components/Sections';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <SystemMonitor />
      <Navigation />
      <Hero />
      <Terminal />
      <Sections />
      
      <footer className="border-t border-primary/20 bg-card/50 backdrop-blur-sm py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xs font-mono text-muted-foreground mb-4">
            &gt; SYSTEM INITIALIZED | TCU VERSE HACKATHON 2025
          </div>
          <div className="text-sm font-mono text-accent">
            © 2025 TCU verse Hackathon. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
