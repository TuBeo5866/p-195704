
import React from 'react';
import { Heart, Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'Email',
      icon: <Mail size={18} />,
      href: 'mailto:your.email@example.com',
    },
    { 
      name: 'GitHub',
      icon: <Github size={18} />,
      href: 'https://github.com/yourusername',
    },
    { 
      name: 'LinkedIn',
      icon: <Linkedin size={18} />,
      href: 'https://linkedin.com/in/yourprofile',
    },
    { 
      name: 'Twitter',
      icon: <Twitter size={18} />,
      href: 'https://twitter.com/yourhandle',
    },
  ];
  
  return (
    <footer className="bg-secondary/30 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Tagline */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-display font-bold tracking-tight">Portfolio</a>
            <p className="text-muted-foreground mt-2 max-w-xs">
              Crafting beautiful digital experiences with precision and purpose.
            </p>
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Navigation</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
          
          {/* Column 3: Get in Touch */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Get in Touch</h3>
            <p className="text-sm text-muted-foreground">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
            <Button asChild variant="outline" className="mt-2 group">
              <a href="#contact">
                Contact Me <ExternalLink size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-primary" />
            <span>and passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
