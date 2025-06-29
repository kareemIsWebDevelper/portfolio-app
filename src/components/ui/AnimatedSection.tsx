import React, { useEffect, useRef, useState } from 'react';
import type { AnimationType } from '../../types';

interface AnimatedSectionProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly animation?: AnimationType;
  readonly delay?: number;
  readonly threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);

  const animationClasses: Record<AnimationType, string> = {
    'fade-up': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    'fade-in': isVisible ? 'opacity-100' : 'opacity-0',
    'slide-left': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
    'slide-right': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
    'scale': isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
  } as const;

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;