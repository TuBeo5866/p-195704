
import React, { useEffect, useRef } from 'react';
import { Code, Lightbulb, PenTool, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className }) => (
  <div className={cn(
    "glass p-6 rounded-2xl transition-all duration-300 hover:shadow-elevation group",
    className
  )}>
    <div className="flex flex-col space-y-4">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="heading-sm">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elementsToAnimate = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elementsToAnimate.forEach((el) => {
        el.classList.add('opacity-0', 'translate-y-10');
        el.classList.add('transition-all', 'duration-700', 'ease-out');
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="section-container">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="section-title mx-auto animate-on-scroll">About Me</h2>
          <h3 className="heading-lg mb-6 animate-on-scroll">
            Crafting Digital Experiences with Precision and Purpose
          </h3>
          <p className="body-lg text-muted-foreground animate-on-scroll">
            I'm a designer and developer passionate about creating elegant, functional solutions to complex problems. With expertise in both visual design and front-end development, I bridge the gap between aesthetics and implementation.
          </p>
        </div>
        
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <FeatureCard 
            icon={<PenTool size={24} />}
            title="Design"
            description="Thoughtful UI/UX design with a focus on usability, aesthetics, and attention to detail."
            className="animate-on-scroll"
          />
          <FeatureCard 
            icon={<Code size={24} />}
            title="Development"
            description="Clean, efficient code with modern frameworks and best practices for maintainable applications."
            className="animate-on-scroll"
          />
          <FeatureCard 
            icon={<Lightbulb size={24} />}
            title="Strategy"
            description="Strategic thinking to align design and technology with business goals and user needs."
            className="animate-on-scroll"
          />
          <FeatureCard 
            icon={<Sparkles size={24} />}
            title="Innovation"
            description="Continuous exploration of new technologies and approaches to create better experiences."
            className="animate-on-scroll"
          />
        </div>
        
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-on-scroll">
            <h3 className="heading-md">My Journey</h3>
            <p className="body-normal text-muted-foreground">
              With over 8 years of experience in digital design and development, I've collaborated with startups, agencies, and established companies to create meaningful digital products. My approach combines aesthetics with functionality, ensuring that every project not only looks beautiful but also performs exceptionally.
            </p>
            <p className="body-normal text-muted-foreground">
              I believe that the best digital experiences are born from a deep understanding of both user needs and business goals. My work process emphasizes research, prototyping, and iterative refinement to achieve optimal results.
            </p>
            <p className="body-normal text-muted-foreground">
              When I'm not designing or coding, you'll find me exploring photography, reading about emerging technology trends, or hiking in the mountains.
            </p>
          </div>
          
          <div className="space-y-6 animate-on-scroll">
            <div className="glass p-8 rounded-2xl">
              <h4 className="heading-sm mb-6">Professional Experience</h4>
              <div className="space-y-6">
                <div className="border-l-2 border-primary/30 pl-4 py-1">
                  <p className="font-medium">Senior Designer & Developer</p>
                  <p className="text-muted-foreground">Creative Studio • 2020 - Present</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4 py-1">
                  <p className="font-medium">UI/UX Designer</p>
                  <p className="text-muted-foreground">Digital Agency • 2018 - 2020</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4 py-1">
                  <p className="font-medium">Front-end Developer</p>
                  <p className="text-muted-foreground">Tech Startup • 2015 - 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
