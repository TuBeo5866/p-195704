
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delayStart?: number; // delay before animation starts in ms
  staggerDelay?: number; // delay between each character in ms
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
    
    timeoutId = setTimeout(() => {
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.transform = 'translateY(0) scale(1)';
        }, index * staggerDelay);
      });
      
      renderedRef.current = true;
    }, delayStart);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, once, delayStart, staggerDelay]);

  const getInitialStyles = (): React.CSSProperties => {
    switch (animationType) {
      case 'slide':
        return { opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' };
      case 'scale':
        return { opacity: '0', transform: 'scale(0.9)', transition: 'opacity 0.6s ease, transform 0.6s ease' };
      case 'fade':
      default:
        return { opacity: '0', transition: 'opacity 0.6s ease' };
    }
  };

  return (
    <div ref={containerRef} className={cn('inline-block', className)} aria-label={text}>
      {text.split('').map((char, index) => (
        <Element 
          key={`${char}-${index}`}
          style={getInitialStyles()}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </Element>
      ))}
    </div>
  );
};

export default AnimatedText;
