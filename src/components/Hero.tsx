
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import AnimatedText from './AnimatedText';
import { profileImage } from '@/assets/images';

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current || !circleRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;
      
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;
      
      const offsetX = ((mouseX - centerX) / centerX) * 10;
      const offsetY = ((mouseY - centerY) / centerY) * 10;
      
      // Subtle parallax effect for the image
      imageRef.current.style.transform = `translate(${offsetX * 0.3}px, ${offsetY * 0.3}px)`;
      
      // Movement for the circle background
      circleRef.current.style.transform = `translate(${offsetX * 0.5}px, ${offsetY * 0.5}px)`;
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPosition = window.scrollY;
      const translateY = scrollPosition * 0.3; // Parallax effect on scroll
      containerRef.current.style.transform = `translateY(${translateY}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
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
        ref={circleRef}
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/5 backdrop-blur-sm transition-transform duration-700 ease-out"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />
      
      <div 
        ref={containerRef}
        className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10"
      >
        <div className="flex flex-col space-y-6 justify-center">
          <div className="space-y-1 animate-fade-in-up">
            <p className="pill animate-fade-in-up animate-delay-100">👋 Hi, I'm TuBeo58666</p>
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
          
          <p className="body-lg text-muted-foreground max-w-lg animate-fade-in-up animate-delay-400">
            Creating minimal and delightful digital experiences through thoughtful design and clean code. Focused on crafting beautiful, functional interfaces that people love to use.
          </p>
          
          <div className="flex gap-4 pt-2 animate-fade-in-up animate-delay-500">
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
        
        <div className="flex justify-center lg:justify-end items-center">
          <div className="relative">
            {/* Profile image with glass effect frame */}
            <div className="relative z-10">
              <div className="w-[320px] h-[400px] overflow-hidden rounded-2xl border border-white/20 shadow-elevation">
                <img 
                  ref={imageRef}
                  src={profileImage} 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover image-transition"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-[-20px] right-[-20px] w-[120px] h-[120px] rounded-full bg-primary/10 animate-float animate-delay-300" />
            <div className="absolute bottom-[-40px] left-[-30px] w-[150px] h-[150px] rounded-full bg-primary/5 animate-float animate-delay-600" />
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
