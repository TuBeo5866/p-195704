
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <a href="#" className="text-2xl font-display font-bold tracking-tight">Portfolio</a>
            <p className="text-muted-foreground mt-2">
              Crafting beautiful digital experiences with precision and purpose.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <nav className="flex space-x-6">
              <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-primary" />
            <span>and precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
