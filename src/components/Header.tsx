import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset + 300;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 backdrop-blur-sm',
        isScrolled ? 'bg-muted shadow-subtle' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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
        
        <nav className="hidden md:flex space-x-8 bg-gray-200/20 backdrop-blur-sm px-4 py-2 rounded-full">
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
        </nav>
        
        <button 
          className="md:hidden text-foreground p-2 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div 
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 md:hidden',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col items-center space-y-8 py-8">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                'text-2xl font-medium transition-all duration-300 hover:text-primary transform',
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
