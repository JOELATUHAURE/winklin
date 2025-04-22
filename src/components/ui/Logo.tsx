import React from 'react';
import { Recycle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ variant = 'dark', className }: LogoProps) {
  return (
    <div className={cn('flex items-center', className)}>
      <div className="bg-primary-500 p-1.5 rounded-md mr-2">
        <Recycle className="w-5 h-5 text-white" />
      </div>
      <span className={cn(
        'font-display font-bold text-2xl',
        variant === 'light' ? 'text-white' : 'text-surface-900 dark:text-white'
      )}>
        Win<span className="text-primary-500">Klin</span>
      </span>
    </div>
  );
}