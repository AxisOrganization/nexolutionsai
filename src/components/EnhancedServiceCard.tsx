import { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useMagneticHover } from '@/hooks/useMagneticHover';
import { cn } from '@/lib/utils';

interface EnhancedServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

const EnhancedServiceCard = ({ 
  title, 
  description, 
  icon, 
  className = "",
  delay = 0
}: EnhancedServiceCardProps) => {
  const { ref: scrollRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: magneticRef, attachListeners } = useMagneticHover({ 
    strength: 0.2, 
    scale: 1.03 
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
        "bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50",
        "transition-all duration-700 ease-out cursor-pointer",
        "hover:bg-card/90 hover:border-primary/20 hover:shadow-elegant",
        "group relative overflow-hidden",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl" />
      
      {/* Icon with enhanced animation */}
      {icon && (
        <div className="w-12 h-12 mb-6 text-primary group-hover:text-primary-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>
      )}
      
      {/* Content */}
      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground font-inter leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
        {description}
      </p>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-all duration-500" />
    </div>
  );
};

export default EnhancedServiceCard;