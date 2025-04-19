import React from 'react';
import { cn } from '@/lib/utils'; 
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'elevated' | 'filled';
  hoverEffect?: boolean;
}

export default function Card({
  children,
  variant = 'default',
  hoverEffect = true,
  className,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-white border border-gray-100',
    outline: 'bg-transparent border border-gray-200',
    elevated: 'bg-white shadow-lg border-0',
    filled: 'bg-amber-50 border-0',
  };

  const baseClasses = 'rounded-xl transition-all duration-300 p-6';
  const hoverClasses = hoverEffect 
    ? 'hover:shadow-lg hover:-translate-y-1' 
    : '';

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : undefined}
      className={cn(
        baseClasses,
        variants[variant],
        hoverClasses,
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
} 