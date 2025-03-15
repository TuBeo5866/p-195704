
import React, { useRef, useEffect } from 'react';
import { 
  Paintbrush, Code, PenTool, Layers, Monitor, 
  Users, Shield, Gamepad2, Database, Terminal
} from 'lucide-react';
import SkillCard from './SkillCard';
import { cn } from '@/lib/utils';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
        { name: "C++", level: 10, icon: <Code size={24} /> },
        { name: "Python", level: 9, icon: <Terminal size={24} /> },
        { name: "JavaScript", level: 8, icon: <Database size={24} /> },
        { name: "HTML, CSS", level: 8, icon: <Monitor size={24} /> },
      ]
    },
    {
      name: "Other",
      skills: [
        { name: "Managing", level: 9, icon: <Users size={24} /> },
        { name: "Reviewing", level: 8, icon: <PenTool size={24} /> },
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
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    className={cn(
                      "animate-on-scroll",
                      `animate-delay-${(categoryIndex * 100) + (skillIndex * 100)}`
                    )}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 glass p-8 rounded-2xl animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="heading-md mb-6">My Approach to Learning</h3>
              <p className="text-muted-foreground mb-4">
                I believe in continuous growth and expanding my skillset. Technology evolves rapidly, and I'm committed to staying at the forefront by regularly learning new tools and techniques.
              </p>
              <p className="text-muted-foreground">
                My learning process involves hands-on projects, contributing to open source, and participating in design and development communities to exchange knowledge.
              </p>
            </div>
            <div>
              <h3 className="heading-md mb-6">Currently Learning</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span>Three.js for immersive web experiences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span>Motion design principles for fluid animations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span>WebGL and GLSL for custom visual effects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
