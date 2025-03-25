
import React, { useRef, useEffect } from 'react';
import { 
  Paintbrush, Code, PenTool, Layers, Monitor, 
  Users, Shield, Gamepad2
} from 'lucide-react';
import SkillCard from './SkillCard';
import { cn } from '@/lib/utils';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Simplified IntersectionObserver with fewer updates
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
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

  const categories = [
    {
      name: "Design",
      skills: [
        { name: "UI Design", level: 9, icon: <Paintbrush size={24} /> },
        { name: "UX Design", level: 8, icon: <Users size={24} /> },
        { name: "Visual Design", level: 7, icon: <PenTool size={24} /> },
        { name: "Wireframing", level: 8, icon: <Layers size={24} /> },
      ]
    },
    {
      name: "Development",
      skills: [
        { name: "Minecraft Developer", level: 9, icon: <Gamepad2 size={24} /> },
        { name: "Program Developer", level: 8, icon: <Code size={24} /> },
        { name: "Game Developer", level: 8, icon: <Gamepad2 size={24} /> },
        { name: "Website Developer", level: 9, icon: <Monitor size={24} /> },
      ]
    },
    {
      name: "Other",
      skills: [
        { name: "Managing", level: 9, icon: <Users size={24} /> },
        { name: "Supporting", level: 8, icon: <PenTool size={24} /> },
        { name: "Network Security", level: 9, icon: <Shield size={24} /> },
        { name: "Gaming - Player", level: 10, icon: <Gamepad2 size={24} /> },
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="section-container">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="section-title mx-auto animate-on-scroll">Skills</h2>
          <h3 className="heading-lg mb-6 animate-on-scroll">
            Technical Expertise
          </h3>
          <p className="body-lg text-muted-foreground animate-on-scroll">
            A curated collection of my technical skills and proficiencies across design, development, and related disciplines that I've honed over the years.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {categories.map((category, categoryIndex) => (
            <div key={category.name} className="space-y-6 animate-on-scroll">
              <h3 className="heading-md text-foreground pb-2 border-b border-border">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillCard 
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    className="animate-on-scroll"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Merged section with centered content */}
        <div className="mt-24 glass p-8 rounded-2xl animate-on-scroll">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="heading-md mb-6">Currently Working & Doing</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>Setting up Hosting (for free, I think...)</li>
              <li>Making programs & games</li>
              <li>Learning 3D, including Three.js</li>
              <li>Exploring WebGL and GLSL for custom visual effects</li>
              <li>Building immersive web experiences</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
