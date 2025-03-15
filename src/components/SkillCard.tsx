
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: number; // 1-10
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, level, className }) => {
  // Converting the 10-point scale to a 5-segment visual display
  const normalizedLevel = Math.ceil(level / 2);
  
  return (
    <div 
      className={cn(
        "group flex items-center p-4 rounded-xl border border-border bg-card/60 hover:bg-card hover:shadow-subtle transition-all duration-300",
        className
      )}
    >
      <div className="mr-4 text-primary/80 group-hover:text-primary transition-colors duration-300">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium text-foreground">{name}</h4>
          <span className="text-sm text-muted-foreground">{level}/10</span>
        </div>
        <div className="flex space-x-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i}
              className={cn(
                "h-1 w-6 rounded-full transition-all duration-500",
                i < normalizedLevel ? "bg-primary" : "bg-muted",
                i < normalizedLevel && "group-hover:bg-primary/80"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
