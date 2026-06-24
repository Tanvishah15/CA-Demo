import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const variants = {
  primary: 'bg-gold text-navy hover:bg-gold-light shadow-lg shadow-gold/20',
  secondary: 'bg-navy text-white hover:bg-navy-light',
  outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-navy',
  ghost: 'text-navy hover:bg-surface-alt',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children, variant = 'primary', size = 'md', href, to, onClick, className, type = 'button', disabled,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer',
    disabled && 'opacity-50 pointer-events-none',
    variants[variant],
    sizes[size],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {variant === 'primary' && <ArrowRight className="w-4 h-4" />}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
      {variant === 'primary' && <ArrowRight className="w-4 h-4" />}
    </motion.button>
  );
}
