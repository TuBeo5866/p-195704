
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Link } from 'lucide-react';

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 20;
      if (isScrolled !== shouldBeScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
      
      if (window.scrollY % 5 === 0) {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + 300;
        
        sections.forEach(section => {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = section.clientHeight;
          const sectionId = section.getAttribute('id') || '';
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled, activeSection]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (href: string) => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2',
        isScrolled ? 'py-2' : 'py-3'
      )}
    >
      <div className="max-w-7xl mx-auto px-2">
        <div className="acrylic px-3 py-1.5 flex justify-between items-center max-w-xl mx-auto">
          <a 
            href="#home" 
            className="hover:opacity-80 transition-opacity flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick('#home');
            }}
          >
            <img 
              src="/lovable-uploads/95074087-2854-4712-8cd7-00d21e8268fd.png" 
              alt="Logo" 
              className="h-8 w-auto"
            />
            <span className="text-sm font-medium">TuBeo5866</span>
          </a>
          
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-3 items-center">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-all duration-200 hover:text-primary relative py-1 px-2',
                    activeSection === item.href.slice(1) ? 'text-primary' : 'text-foreground'
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuItemClick(item.href);
                  }}
                >
                  {item.label}
                  <span 
                    className={cn(
                      'absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 transform', 
                      activeSection === item.href.slice(1) ? 'bg-primary scale-x-100' : 'bg-muted-foreground/30 scale-x-0'
                    )}
                  />
                </a>
              ))}
            </div>
          </nav>
          
          <div className="hidden md:block">
            <a 
              href="https://linktr.ee/tubeo5866" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#1A1F2C]/90 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 rounded-full px-3 py-1.5 text-sm font-medium border border-white/10"
            >
              <Link size={14} />
              Linktree
            </a>
          </div>
          
          <button 
            className="md:hidden text-foreground p-1 focus:outline-none relative h-10 w-10 flex items-center justify-center overflow-hidden" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <Menu 
              size={22} 
              className={cn(
                "absolute transition-all duration-300 ease-in-out",
                isMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
              )} 
            />
            <X 
              size={22} 
              className={cn(
                "absolute transition-all duration-300 ease-in-out",
                isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
              )} 
            />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 px-4 md:hidden z-50">
          <div className="neo-blur border border-white/10 rounded-xl shadow-lg overflow-hidden mx-auto max-w-xs">
            <div className="flex flex-col">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'px-5 py-3 text-center transition-colors hover:bg-white/5',
                    activeSection === item.href.slice(1) ? 'text-primary' : 'text-foreground'
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuItemClick(item.href);
                  }}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <div className="w-10 h-0.5 bg-primary mx-auto mt-1.5" />
                  )}
                </a>
              ))}
              
              <div className="p-4">
                <a 
                  href="https://linktr.ee/tubeo5866" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200 rounded-lg w-full py-2.5 text-sm font-medium"
                >
                  <Link size={16} />
                  Linktree
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
