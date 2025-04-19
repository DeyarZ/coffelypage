import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function to merge class names with Tailwind CSS classes
 * Using clsx for conditional classes and tailwind-merge to handle Tailwind-specific conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 