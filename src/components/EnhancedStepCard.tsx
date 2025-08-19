import { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useMagneticHover } from '@/hooks/useMagneticHover';
import { cn } from '@/lib/utils';

interface EnhancedStepCardProps {
  step: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
}

const EnhancedStepCard = ({ 
  step, 
  title, 
  description, 
  icon, 
  delay = 0 
}: EnhancedStepCardProps) => {
  const { ref: scrollRef, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: magneticRef, attachListeners } = useMagneticHover({ 
    strength: 0.15, 
    scale: 1.02 
  });

  useEffect(() => {
    const cleanup = attachListeners();
    return cleanup;
  }, [attachListeners]);

  return (
    <div 
      ref={(el) => {
        scrollRef.current = el;
        magneticRef.current = el;
      }}
      className={cn(
        "bg-card/90 backdrop-blur-sm rounded-2xl p-8 border border-border/30",
        "transition-all duration-700 ease-out cursor-pointer",
        "hover:bg-card hover:border-primary/30 hover:shadow-glow",
        "group relative overflow-hidden",
        isVisible 
          ? "opacity-100 translate-y-0 rotate-0" 
          : "opacity-0 translate-y-12 rotate-1"
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      
      {/* Step badge with glow */}
      <div className="relative mb-6">
        <span className="bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-border/50 group-hover:border-primary/50 group-hover:text-primary transition-all duration-300">
          {step}
        </span>
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* Icon with animation */}
      {icon && (
        <div className="mb-6 text-primary group-hover:text-primary-glow transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-2">
          {icon}
        </div>
      )}
      
      {/* Content */}
      <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground font-inter leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
        {description}
      </p>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
};

export default EnhancedStepCard;