import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Lenis from '@studio-freight/lenis';

export default function Hero() {
   const targetDate = new Date("2025-11-23T00:00:00"); // 🎯 countdown target
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Countdown timer
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.08),transparent_50%)] animate-glow" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
          <div className="absolute top-40 right-20 w-2 h-2 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative z-10 w-full max-w-7xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* System Init Text */}
          <div className="text-xs sm:text-sm font-mono text-secondary animate-pulse mb-4 sm:mb-6">
            &gt; INITIALIZING SYSTEM...
          </div>

          {/* Logo */}
          <div className="mb-8 sm:mb-12 animate-float">
            <img 
              src="/TCU%20logo1.png" 
              alt="TCUVERSE 2025 - INNOVATE TO INSPIRE"
              className="w-full max-w-3xl mx-auto h-auto px-4"
            />
          </div>

        <div className="flex items-center justify-center space-x-2 text-accent text-xs font-mono mb-6">
          <div className="w-16 h-16 border-2 border-secondary rounded-full animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-secondary rounded-full" />
          </div>
          <div className="text-left">
            <div className="text-lg">THIS DECEMBER 6th</div>
            <div className="text-lg">BE READY!</div>
          </div>
        </div>

         {/* Countdown Timer */}
       <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
      {Object.entries(countdown).map(([key, value]) => (
        <div key={key} className="border border-primary p-4 bg-card/50">
          <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
            {value}
          </div>
          <div className="text-xs font-mono text-muted-foreground uppercase">
            {key}
          </div>
        </div>
      ))}
    </div>


          {/* Countdown Timer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            {Object.entries(countdown).map(([key, value]) => (
              <div 
                key={key} 
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                <div className="relative border-2 border-primary/50 p-4 sm:p-6 md:p-8 bg-card/80 backdrop-blur-sm rounded-lg hover:border-primary transition-all duration-300 hover:scale-105">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-muted-foreground uppercase tracking-wider">{key}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 mb-8 sm:mb-12">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 border-2 border-secondary text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 font-mono font-bold shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transition-all duration-300 hover:scale-105"
            >
              APPLY WITH DEVFOLIO
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 font-mono font-bold shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all duration-300 hover:scale-105"
            >
              VIEW GUIDELINES
            </Button>
          </div>

          {/* Social Links Section */}
          <div className="relative mx-4 sm:mx-auto max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-lg blur-xl" />
            <div className="relative border-2 border-primary/50 bg-card/60 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-lg">
              <div className="text-xs sm:text-sm font-mono text-accent mb-4 sm:mb-6 tracking-widest">
                &gt; FOLLOW US ON SOCIALS
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                {['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'Discord'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="group relative text-sm sm:text-base font-mono text-primary hover:text-secondary transition-all duration-300"
                  >
                    <span className="relative z-10">{social}</span>
                    <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded blur-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <div className="pt-8 sm:pt-12">
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs sm:text-sm font-mono">
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-primary" />
              <span>INNOVATE TO INSPIRE</span>
              <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-secondary" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
