
import React, { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projectImage1, projectImage2, projectImage3 } from '@/assets/images';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with a focus on user experience and conversion optimization. Features include personalized recommendations, seamless checkout process, and responsive design.",
      image: projectImage1,
      tags: ["React", "Node.js", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "A minimal, elegant portfolio for a photographer showcasing their work with optimal image loading strategies, animations, and thoughtful typography.",
      image: projectImage2,
      tags: ["Next.js", "Framer Motion", "Sanity CMS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard for businesses to track key performance metrics, visualize data trends, and generate reports.",
      image: projectImage3,
      tags: ["TypeScript", "D3.js", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 md:py-32"
    >
      <div className="section-container">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="section-title mx-auto animate-on-scroll">Projects</h2>
          <h3 className="heading-lg mb-6 animate-on-scroll">
            Selected Work
          </h3>
          <p className="body-lg text-muted-foreground animate-on-scroll">
            Explore some of my recent projects showcasing my expertise in design and development. Each project represents a unique challenge solved with creativity and technical precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              {...project}
              className={`animate-on-scroll animate-delay-${index * 200}`}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <a 
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium transition-all duration-300 transform hover:translate-y-[-2px]"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
