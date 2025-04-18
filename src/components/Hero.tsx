
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Circle background with centered text */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 flex items-center justify-center">
        <p className="pill text-2xl">👋 Hi, I'm TuBeo5866</p>
      </div>
      
      <div className="section-container flex items-center justify-center relative z-10">
        <div className="flex flex-col space-y-12 justify-center max-w-2xl text-center"> {/* Increased space-y from 6 to 12 */}
          {/* Logo Image */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/95074087-2854-4712-8cd7-00d21e8268fd.png" 
              alt="Logo" 
              className="h-60 w-auto animate-fade-in"
            />
          </div>
          
          <div className="space-y-1">
            <h2 className="heading-md text-muted-foreground">
              <AnimatedText 
                text="Designer & Developer"
                animationType="fade"
                delayStart={400}
                staggerDelay={30}
                el="span"
                className="tracking-[1px]"
              />
            </h2>
          </div>
          
          <p className="body-lg text-muted-foreground max-w-lg mx-auto">
            I'm a software engineer specializing in full-stack development, creating robust and scalable applications and games.
          </p>
        </div>
      </div>
      
      {/* Simplified scroll button with conditional rendering */}
      {isVisible && (
        <button 
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors flex flex-col items-center space-y-2"
          aria-label="Scroll to next section"
        >
          <span className="text-sm font-medium tracking-wide">Scroll</span>
          <ArrowDown size={20} />
        </button>
      )}
    </section>
  );
};

export default Hero;
