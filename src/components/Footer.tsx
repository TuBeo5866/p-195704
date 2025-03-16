
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  ExternalLink, 
  Facebook, 
  Youtube, 
  Instagram, 
  Music, 
  Disc, 
  Gamepad2, 
  MessageSquare
} from 'lucide-react';
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
      className: 'w-auto px-3',
    },
    { 
      name: 'LinkedIn',
      icon: <Linkedin size={18} />,
      href: 'https://linkedin.com/in/yourprofile',
    },
    { 
      name: 'Twitter (X)',
      icon: <Twitter size={18} />,
      href: 'https://twitter.com/yourhandle',
    },
    { 
      name: 'Discord',
      icon: <MessageSquare size={18} />,
      href: 'https://discord.com/users/yourusername',
    },
    { 
      name: 'YouTube',
      icon: <Youtube size={18} />,
      href: 'https://youtube.com/@yourchannel',
    },
    { 
      name: 'TikTok',
      icon: <Music size={18} />,
      href: 'https://tiktok.com/@yourusername',
    },
    { 
      name: 'Threads',
      icon: <ExternalLink size={18} />,
      href: 'https://threads.net/@yourusername',
    },
    { 
      name: 'Bluesky',
      icon: <ExternalLink size={18} />,
      href: 'https://bsky.app/profile/yourusername',
    },
    { 
      name: 'Facebook 1',
      icon: <Facebook size={18} />,
      href: 'https://facebook.com/yourusername1',
    },
    { 
      name: 'Facebook 2',
      icon: <Facebook size={18} />,
      href: 'https://facebook.com/yourusername2',
    },
    { 
      name: 'Reddit',
      icon: <ExternalLink size={18} />,
      href: 'https://reddit.com/user/yourusername',
    },
    { 
      name: 'Instagram',
      icon: <Instagram size={18} />,
      href: 'https://instagram.com/yourusername',
    },
    { 
      name: 'Steam',
      icon: <Gamepad2 size={18} />,
      href: 'https://steamcommunity.com/id/yourusername',
    },
    { 
      name: 'SoundCloud',
      icon: <Music size={18} />,
      href: 'https://soundcloud.com/yourusername',
    },
    { 
      name: 'Spotify',
      icon: <Disc size={18} />,
      href: 'https://open.spotify.com/user/yourusername',
    },
  ];
  
  return (
    <footer className="bg-secondary/30 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Tagline */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-display font-bold tracking-tight">TuBeo5866</a>
            <p className="text-muted-foreground mt-2 max-w-xs">
              Crafting beautiful digital experiences with precision and purpose.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "bg-background hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-colors duration-200",
                    link.className
                  )}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Navigation Links */}
          <div className="space-y-4 text-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Menu</h3>
            <nav className="flex flex-col space-y-3 items-center">
              <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
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
        
        <div className="border-t border-border mt-8 pt-8 flex justify-center text-sm text-muted-foreground">
          <p>&copy; 2025 TuBeo5866. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Add the missing cn import
import { cn } from '@/lib/utils';
