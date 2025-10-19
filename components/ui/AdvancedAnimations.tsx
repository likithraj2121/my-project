import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, useScroll } from 'framer-motion';

// Magnetic Button Component
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = '', 
  onClick, 
  strength = 0.3 
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || !mounted) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    
    setPosition({ x: deltaX, y: deltaY });
  };
  
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  
  // Always render the same structure, just disable interactions during SSR
  return (
    <motion.button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      whileTap={{ scale: 0.95 }}
      style={{ x: position.x, y: position.y }}
    >
      {children}
    </motion.button>
  );
};

// Parallax Container
interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export const ParallaxContainer: React.FC<ParallaxProps> = ({ 
  children, 
  offset = 50, 
  className = '' 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  
  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
};

// Morphing Shape
export const MorphingShape: React.FC<{ className?: string }> = ({ className = '' }) => {
  const pathVariants = {
    initial: {
      d: "M50,50 Q60,40 70,50 T90,50 Q80,60 70,50 T50,50 Z",
    },
    animate: {
      d: [
        "M50,50 Q60,40 70,50 T90,50 Q80,60 70,50 T50,50 Z",
        "M40,60 Q50,30 60,60 T80,60 Q70,80 60,60 T40,60 Z",
        "M60,40 Q80,50 60,60 T60,80 Q40,70 60,60 T60,40 Z",
        "M50,50 Q60,40 70,50 T90,50 Q80,60 70,50 T50,50 Z"
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.svg
      className={`w-32 h-32 ${className}`}
      viewBox="0 0 100 100"
      initial="initial"
      animate="animate"
    >
      <motion.path
        variants={pathVariants}
        fill="url(#morphingGradient)"
        stroke="rgba(99,102,241,0.5)"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id="morphingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(99,102,241,0.2)" />
          <stop offset="50%" stopColor="rgba(168,85,247,0.2)" />
          <stop offset="100%" stopColor="rgba(245,158,11,0.2)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

// Staggered Text Animation
interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const StaggeredText: React.FC<StaggeredTextProps> = ({ 
  text, 
  className = '', 
  delay = 0 
}) => {
  const letters = text.split('');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Floating Elements - Simplified for SSR compatibility
export const FloatingElements: React.FC<{ count?: number; className?: string }> = ({ 
  count = 5, 
  className = '' 
}) => {
  const elements = Array.from({ length: count }, (_, i) => i);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((i) => {
        // Use deterministic positions to avoid hydration issues
        const x = (i * 234 + 123) % 90;
        const y = (i * 456 + 789) % 70;
        const delay = i * 0.8;
        const duration = 8 + (i % 4) * 2;
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500/20 rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              y: [0, -20, 10, 0],
              x: [0, 15, -10, 0],
              opacity: [0.2, 0.6, 0.3, 0.2],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          />
        );
      })}
    </div>
  );
};

// Scroll-triggered Counter
interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const ScrollCounter: React.FC<CounterProps> = ({
  from,
  to,
  duration = 2,
  suffix = '',
  className = ''
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [count, to, duration, inView]);

  useEffect(() => {
    const unsubscribe = rounded.onChange(setDisplayValue);
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref} className={className}>
      {displayValue}{suffix}
    </span>
  );
};

// Reveal Animation on Scroll
interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export const ScrollReveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

// Glowing Border Animation
export const GlowingBorder: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  glowColor?: string;
  intensity?: number;
}> = ({ 
  children, 
  className = '', 
  glowColor = '#6366f1',
  intensity = 0.5
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated glow border */}
      <motion.div
        className="absolute -inset-0.5 rounded-lg blur-sm"
        style={{
          background: `linear-gradient(45deg, ${glowColor}${Math.round(intensity * 255).toString(16)}, transparent, ${glowColor}${Math.round(intensity * 255).toString(16)})`,
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="relative bg-neutral-900 rounded-lg">
        {children}
      </div>
    </motion.div>
  );
};

// 3D Tilt Effect
interface TiltProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngle?: number;
  perspective?: number;
}

export const TiltCard: React.FC<TiltProps> = ({
  children,
  className = '',
  tiltMaxAngle = 15,
  perspective = 1000
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !mounted) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotX = ((e.clientY - centerY) / rect.height) * -tiltMaxAngle;
    const rotY = ((e.clientX - centerX) / rect.width) * tiltMaxAngle;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ 
        rotateX, 
        rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ 
        perspective,
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY
      }}
    >
      {children}
    </motion.div>
  );
};