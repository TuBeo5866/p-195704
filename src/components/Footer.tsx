
import React from 'react';
import { 
  ExternalLink,
  Link
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A1F2C]/60 backdrop-blur-md py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Tagline */}
          <div className="space-y-4 text-center md:text-left">
            <a href="#" className="text-2xl font-display font-bold tracking-tight">TuBeo5866</a>
            <p className="text-muted-foreground mt-2 max-w-xs mx-auto md:mx-0">
              Crafting beautiful digital experiences with precision and purpose.
            </p>
            <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
              <a 
                href="https://linktr.ee/tubeo5866"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1F2C]/80 backdrop-blur-lg hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-colors duration-200 w-auto px-5 flex items-center gap-2 border border-white/10"
                aria-label="Linktree"
              >
                <Link size={18} /> Linktree
              </a>
            </div>
          </div>
          
          {/* Column 2: Navigation Links */}
          <div className="space-y-4 text-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Menu</h3>
            <nav className="flex flex-col space-y-3 items-center">
              <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
          
          {/* Column 3: Get in Touch */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Get in Touch</h3>
            <p className="text-sm text-muted-foreground">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
            <Button asChild variant="outline" className="mt-2 group bg-[#1A1F2C]/80 backdrop-blur-lg border border-white/10">
              <a href="#contact">
                Contact Me <ExternalLink size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex justify-center text-sm text-muted-foreground text-center">
          <p>&copy; {currentYear} TuBeo5866. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
