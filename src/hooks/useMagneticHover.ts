import { useRef, useCallback } from 'react';

interface MagneticOptions {
  strength?: number;
  scale?: number;
}

export const useMagneticHover = (options: MagneticOptions = {}) => {
  const { strength = 0.3, scale = 1.05 } = options;
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px) scale(${scale})`;
  }, [strength, scale]);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px) scale(1)';
  }, []);

  const attachListeners = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return { ref, attachListeners };
};