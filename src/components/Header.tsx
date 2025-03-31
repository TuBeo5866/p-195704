
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
      // Only update state when crossing the threshold
      const shouldBeScrolled = window.scrollY > 20;
      if (isScrolled !== shouldBeScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
      
      // Less frequent section detection
      if (window.scrollY % 5 === 0) { // Only check every 5px of scroll
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
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
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
        <div className="bg-[#1A1F2C]/80 backdrop-blur-lg rounded-full px-4 py-2 flex justify-between items-center border border-white/10">
          <a 
            href="#home" 
            className="text-2xl font-display font-bold tracking-tight hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick('#home');
            }}
          >
            TuBeo5866
          </a>
          
          {/* Centered Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8 items-center">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-all duration-200 hover:text-primary relative py-2',
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
          
          {/* Linktree Button */}
          <div className="hidden md:block">
            <a 
              href="https://linktr.ee/tubeo5866" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1A1F2C]/90 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 rounded-full px-4 py-2 text-sm font-medium border border-white/10"
            >
              <Link size={16} />
              Linktree
            </a>
          </div>
          
          <button 
            className="md:hidden text-foreground p-2 focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden"
        >
          <nav className="flex flex-col items-center space-y-8 py-8">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'text-2xl font-medium transition-all duration-300 hover:text-primary',
                  activeSection === item.href.slice(1) ? 'text-primary font-semibold' : 'text-foreground'
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuItemClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Linktree Button */}
            <a 
              href="https://linktr.ee/tubeo5866" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1A1F2C]/90 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 rounded-full px-5 py-2 text-lg font-medium border border-white/10 mt-4"
            >
              <Link size={20} />
              Linktree
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
