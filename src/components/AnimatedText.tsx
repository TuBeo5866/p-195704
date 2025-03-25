
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delayStart?: number;
  staggerDelay?: number;
  animationType?: 'fade' | 'slide' | 'scale';
  el?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  once = true,
  delayStart = 0,
  staggerDelay = 30,
  animationType = 'fade',
  el: Element = 'span',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (renderedRef.current && once) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    const spans = Array.from(container.children) as HTMLSpanElement[];
    
    let timeoutId: NodeJS.Timeout;
    
    // Use a simpler animation approach
    timeoutId = setTimeout(() => {
      // Animate all elements at once rather than staggering each character
      spans.forEach((span) => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0) scale(1)';
      });
      
      renderedRef.current = true;
    }, delayStart);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, once, delayStart]);

  const getInitialStyles = (): React.CSSProperties => {
    switch (animationType) {
      case 'slide':
        return { opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease' };
      case 'scale':
        return { opacity: '0', transform: 'scale(0.9)', transition: 'opacity 0.5s ease, transform 0.5s ease' };
      case 'fade':
      default:
        return { opacity: '0', transition: 'opacity 0.5s ease' };
    }
  };

  // Group characters into words for more efficient rendering
  const words = text.split(' ');

  return (
    <div ref={containerRef} className={cn('inline-block', className)} aria-label={text}>
      {words.map((word, index) => (
        <Element 
          key={`${word}-${index}`}
          style={getInitialStyles()}
          className="inline-block mr-1"
        >
          {word}
        </Element>
      ))}
    </div>
  );
};

export default AnimatedText;
