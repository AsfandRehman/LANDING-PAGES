import type { ButtonHTMLAttributes, ReactNode } from 'react';
import React from 'react';
import clsx from 'clsx';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<CustomButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center text-sm font-semibold transition-all duration-300 ease-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden group';

  const sizeStyles = fullWidth ? 'w-full px-6 py-3' : 'px-5 py-2.5';

  const variantStyles = {
    primary:
      'bg-blue-900 text-white hover:bg-white hover:text-blue-900 border border-blue-900',
    outline:
      'border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white',
    ghost:
      'text-blue-900 hover:bg-blue-100',
  };

  const textAnimation =
    'relative z-10 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:opacity-90';

  return (
    <button
      className={clsx(
        baseStyles,
        sizeStyles,
        variantStyles[variant],
        'rounded-full',
        className
      )}
      {...props}
    >
      <span className={textAnimation}>{children}</span>
    </button>
  );
};

export default Button;
