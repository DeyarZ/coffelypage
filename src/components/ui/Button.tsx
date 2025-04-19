import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Union der möglichen Button-Varianten
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

// Gemeinsame Basis-Props
type BaseButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fullWidth?: boolean;
};

// Spezifische Props für Button-Element
type ButtonAsButtonProps = BaseButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  href?: undefined;
};

// Spezifische Props für Link-Element
type ButtonAsLinkProps = BaseButtonProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'href'> & {
  href: string;
};

// Vereinigter Typ für alle möglichen Button-Props
type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export default function Button(props: ButtonProps) {
  const { 
    children,
    variant = 'primary',
    size = 'md',
    className,
    fullWidth = false,
    ...rest
  } = props;

  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50';
  
  const variants = {
    primary: 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-md hover:shadow-lg hover:-translate-y-1',
    secondary: 'bg-white text-amber-600 border border-amber-500 hover:bg-amber-50 hover:shadow-md hover:-translate-y-1',
    outline: 'bg-transparent text-gray-700 border border-gray-300 hover:border-amber-500 hover:text-amber-600',
    text: 'bg-transparent text-amber-600 hover:bg-amber-50 hover:text-amber-700',
  };
  
  const sizes = {
    sm: 'text-sm py-2 px-3',
    md: 'text-base py-2.5 px-5',
    lg: 'text-lg py-3 px-6',
  };
  
  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className
  );
  
  // Überprüfen, ob es sich um einen Link-Button handelt
  if ('href' in props && props.href !== undefined) {
    return (
      <Link 
        href={props.href}
        className={classes} 
        {...(rest as Omit<ButtonAsLinkProps, 'href' | 'className' | keyof BaseButtonProps>)}
      >
        {children}
      </Link>
    );
  }
  
  // Standardfall: Rendert einen regulären Button
  return (
    <button 
      className={classes}
      type="button"
      {...(rest as Omit<ButtonAsButtonProps, 'className' | keyof BaseButtonProps>)}
    >
      {children}
    </button>
  );
} 