import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "nexo" | "nexo-white" | "nexo-outline" | "premium" | "hero" | "elegant" | "glow" | "minimal";
  size?: "default" | "sm" | "lg" | "icon" | "xl" | "2xl";
  href?: string;
  onClick?: () => void;
}

const MagneticButton = ({ 
  children, 
  className, 
  variant = "default", 
  size = "default",
  href,
  onClick
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.05)`;
    };

    const handleMouseLeave = () => {
      if (!ref.current) return;
      ref.current.style.transform = 'translate(0px, 0px) scale(1)';
    };

    const element = ref.current;
    if (!element) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Button 
          ref={ref}
          variant={variant}
          size={size}
          className={cn(
            "transition-all duration-300 ease-out",
            "hover:shadow-glow hover:shadow-primary/25",
            className
          )}
          onClick={onClick}
        >
          {children}
        </Button>
      </a>
    );
  }

  return (
    <Button 
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "transition-all duration-300 ease-out",
        "hover:shadow-glow hover:shadow-primary/25",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default MagneticButton;