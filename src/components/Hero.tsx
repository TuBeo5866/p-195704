
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPosition = window.scrollY;
      const translateY = scrollPosition * 0.3; // Parallax effect on scroll
      containerRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Abstract Circle */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/5 backdrop-blur-sm transition-transform duration-700 ease-out"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />
      
      <div 
        ref={containerRef}
        className="section-container flex items-center justify-center relative z-10"
      >
        <div className="flex flex-col space-y-6 justify-center max-w-2xl text-center">
          <div className="space-y-1 animate-fade-in-up">
            <p className="pill animate-fade-in-up animate-delay-100">👋 Hi, I'm TuBeo5866</p>
            <h1 className="heading-xl animate-fade-in-up animate-delay-200">
              <AnimatedText 
                text="Your Name"
                animationType="slide"
                delayStart={400}
                el="span"
                className="text-gradient inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70"
              />
            </h1>
            <h2 className="heading-md text-muted-foreground animate-fade-in-up animate-delay-300">
              <AnimatedText 
                text="Designer & Developer"
                animationType="slide"
                delayStart={600}
                staggerDelay={50}
                el="span"
              />
            </h2>
          </div>
          
          <p className="body-lg text-muted-foreground max-w-lg mx-auto animate-fade-in-up animate-delay-400">
            Creating minimal and delightful digital experiences through thoughtful design and clean code. Focused on crafting beautiful, functional interfaces that people love to use.
          </p>
          
          <div className="flex gap-4 pt-2 justify-center animate-fade-in-up animate-delay-500">
            <a 
              href="#projects" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:translate-y-[-2px]"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animation-pulse flex flex-col items-center space-y-2"
        aria-label="Scroll to next section"
      >
        <span className="text-sm font-medium tracking-wide">Scroll</span>
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
