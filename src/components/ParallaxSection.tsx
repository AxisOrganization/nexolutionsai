import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

const ParallaxSection = ({ children, className, speed = 0.5 }: ParallaxSectionProps) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      className={cn("relative", className)}
      style={{
        transform: `translateY(${offsetY}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;