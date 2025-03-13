
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={cn(
        "group rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 hover:shadow-elevation relative",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        {/* Blurred placeholder */}
        <div className={cn(
          "absolute inset-0 bg-muted animate-pulse", 
          imageLoaded ? "opacity-0" : "opacity-100"
        )} />
        
        <img 
          src={image} 
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            isHovered ? "scale-105" : "scale-100",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Overlay gradient */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0"
        )} />
        
        {/* Quick action links */}
        <div className={cn(
          "absolute top-4 right-4 flex space-x-2 transition-all duration-500",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        )}>
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="View live site"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="View GitHub repository"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="pill bg-secondary/50 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="heading-sm group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground line-clamp-3">{description}</p>
        
        <button className="flex items-center text-primary font-medium mt-4 group">
          <span className="mr-2">View Details</span>
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
