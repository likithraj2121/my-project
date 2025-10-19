import React from 'react';
import { clsx } from 'clsx';
import { LucideIcon } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'text-white bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 hover:from-indigo-600 hover:via-violet-600 hover:to-fuchsia-600 focus:ring-violet-500 shadow-sm',
  secondary: 'bg-neutral-800 hover:bg-neutral-700 focus:ring-violet-500 text-neutral-100 border border-neutral-700',
  ghost: 'bg-transparent hover:bg-neutral-800 focus:ring-violet-500 text-neutral-200 border border-transparent',
  danger: 'bg-danger-500 hover:bg-danger-600 focus:ring-danger-500 text-white shadow-sm',
  success: 'bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-500 text-white shadow-sm',
  outline: 'bg-transparent border border-neutral-700 text-neutral-200 hover:bg-neutral-800 focus:ring-violet-500',
};

const buttonSizes = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-sm',
  xl: 'px-8 py-4 text-base',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  fullWidth = false,
  children,
  className,
  disabled,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(
        // Base styles
        'inline-flex items-center justify-center font-medium rounded-xl',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'transition-all duration-200 ease-in-out',
        'transform hover:scale-[1.02] active:scale-[0.98]',
        
        // Variant styles
        buttonVariants[variant],
        
        // Size styles
        buttonSizes[size],
        
        // Full width
        fullWidth && 'w-full',
        
        // Custom className
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Loading spinner */}
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      
      {/* Left icon */}
      {LeftIcon && !isLoading && (
        <LeftIcon className={clsx('w-4 h-4', children && 'mr-2')} />
      )}
      
      {/* Button content */}
      {children}
      
      {/* Right icon */}
      {RightIcon && !isLoading && (
        <RightIcon className={clsx('w-4 h-4', children && 'ml-2')} />
      )}
    </button>
  );
});

Button.displayName = 'Button';

export { Button, type ButtonProps };
export default Button;