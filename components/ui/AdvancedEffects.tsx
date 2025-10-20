import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';


// Device detection hook with hydration safety
const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted first to prevent hydration mismatches
    setMounted(true);
    
    // Use setTimeout to defer device detection until after hydration
    const timeoutId = setTimeout(() => {
      const checkDevice = () => {
        setIsMobile(window.innerWidth < 768);
        setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
      };

      checkDevice();
      window.addEventListener('resize', checkDevice);
      
      return () => {
        window.removeEventListener('resize', checkDevice);
      };
    }, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return { isMobile, isTouch, mounted };
};

// Particle Background System
interface ParticleProps {
  count?: number;
  className?: string;
}

export const ParticleBackground: React.FC<ParticleProps> = ({
  count = 50,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    speed: number;
    angle: number;
  }>>([]);
  const { isMobile, mounted } = useDeviceDetection();

  useEffect(() => {
    if (!mounted) return;
    
    const particleCount = isMobile ? Math.min(count, 25) : count;
    const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
    
    // Use deterministic values for SSR compatibility
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: (i * 23 + 17) % 100, // Deterministic positioning
      y: (i * 37 + 41) % 100,
      size: (i % 3) + 1,
      color: colors[i % colors.length],
      speed: 0.3 + (i % 5) * 0.1,
      angle: (i / particleCount) * Math.PI * 2
    }));
    
    setParticles(newParticles);
  }, [count, isMobile, mounted]);

  if (!mounted) {
    return (
      <div 
        ref={containerRef}
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      />
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-30 blur-[0.5px]"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, Math.cos(particle.angle) * 100, 0],
            y: [0, Math.sin(particle.angle) * 100, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10 + particle.speed * 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.id * 0.1,
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Scroll Reveal with mobile optimization
interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 50,
  className = '',
  threshold = 0.1
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isMobile, mounted } = useDeviceDetection();
  const inView = useInView(ref, { 
    once: true, 
    margin: '-50px',
    amount: threshold 
  });

  const getInitialState = () => {
    if (!mounted) return { opacity: 0 }; // Consistent initial state during SSR
    
    const mobileDistance = isMobile ? distance * 0.5 : distance;
    switch (direction) {
      case 'up':
        return { y: mobileDistance, opacity: 0 };
      case 'down':
        return { y: -mobileDistance, opacity: 0 };
      case 'left':
        return { x: mobileDistance, opacity: 0 };
      case 'right':
        return { x: -mobileDistance, opacity: 0 };
      case 'scale':
        return { scale: 0.8, opacity: 0 };
      case 'fade':
        return { opacity: 0 };
      default:
        return { y: mobileDistance, opacity: 0 };
    }
  };

  const getAnimateState = () => ({
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1
  });

  // Provide a simple fallback during SSR that matches the animated state
  if (!mounted) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialState()}
      animate={inView ? getAnimateState() : getInitialState()}
      transition={{
        duration: isMobile ? duration * 0.7 : duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic Button with mobile fallback
interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  strength = 0.3,
  disabled = false
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { isMobile, isTouch, mounted } = useDeviceDetection();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || !mounted || isMobile || isTouch || disabled) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    if (mounted && !isMobile && !isTouch) {
      setPosition({ x: 0, y: 0 });
    }
  };

  if (!mounted) {
    return (
      <button
        ref={ref}
        className={`${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  return (
    <motion.button
      ref={ref}
      className={`${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ 
        type: 'spring', 
        stiffness: 200, 
        damping: 10,
        duration: isMobile ? 0.1 : 0.3
      }}
      whileTap={{ scale: 0.95 }}
      whileHover={!isMobile && !isTouch ? { scale: 1.05 } : {}}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

// 3D Tilt Card with mobile optimization
interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltMaxAngle?: number;
  perspective?: number;
  glowOnHover?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  tiltMaxAngle = 15,
  perspective = 1000,
  glowOnHover = false
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile, isTouch, mounted } = useDeviceDetection();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !mounted || isMobile || isTouch) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotX = ((e.clientY - centerY) / rect.height) * -tiltMaxAngle;
    const rotY = ((e.clientX - centerX) / rect.width) * tiltMaxAngle;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  if (!mounted) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`${className} ${glowOnHover && isHovered && !isMobile ? 'shadow-2xl shadow-primary-500/20' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: !isMobile && !isTouch ? rotateX : 0,
        rotateY: !isMobile && !isTouch ? rotateY : 0,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{
        perspective: !isMobile && !isTouch ? perspective : 'none',
        transformStyle: !isMobile && !isTouch ? 'preserve-3d' : 'flat',
      }}
      whileHover={isMobile || isTouch ? { scale: 1.02 } : {}}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

// Loading Skeleton Components
export const SkeletonText: React.FC<{ 
  lines?: number; 
  className?: string;
  animate?: boolean;
}> = ({ 
  lines = 1, 
  className = '',
  animate = true 
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <motion.div
        key={i}
        className="h-4 bg-neutral-800 rounded"
        style={{ width: `${(i * 13 + 60) % 40 + 60}%` }} // Deterministic width
        animate={animate ? {
          opacity: [0.5, 1, 0.5],
        } : {}}
        transition={animate ? {
          duration: 1.5,
          repeat: Infinity,
          delay: i * 0.1,
        } : {}}
      />
    ))}
  </div>
);

export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div 
    className={`p-6 rounded-lg bg-neutral-900/50 border border-neutral-800 ${className}`}
    animate={{ opacity: [0.5, 1, 0.5] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-neutral-800 rounded-full animate-pulse" />
      <div className="flex-1">
        <SkeletonText lines={2} />
      </div>
    </div>
    <SkeletonText lines={3} />
  </motion.div>
);

// Micro-interactions
export const PulseOnLoad: React.FC<{ 
  children: ReactNode; 
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 200,
      damping: 10,
      delay
    }}
  >
    {children}
  </motion.div>
);

export const HoverGlow: React.FC<{ 
  children: ReactNode; 
  className?: string;
}> = ({ children, className = '' }) => {
  const { isMobile, isTouch, mounted } = useDeviceDetection();

  if (!mounted) {
    return (
      <div className={`relative ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={!isMobile && !isTouch ? {
        boxShadow: `0 0 20px rgba(99, 102, 241, 0.3)`
      } : {}}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

// Page Transition Component
export const PageTransition: React.FC<{ children: ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }}
  >
    {children}
  </motion.div>
);

// Staggered Children Animation
export const StaggerContainer: React.FC<{ 
  children: ReactNode; 
  staggerDelay?: number;
  className?: string;
}> = ({ children, staggerDelay = 0.1, className = '' }) => (
  <motion.div
    className={className}
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem: React.FC<{ 
  children: ReactNode; 
  className?: string;
}> = ({ children, className = '' }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

// Enhanced Counter with smooth animation
interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
  trigger?: boolean;
}

export const AnimatedCounter: React.FC<CounterProps> = ({
  from,
  to,
  duration = 2,
  suffix = '',
  className = '',
  trigger = true
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (inView && trigger) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [count, to, duration, inView, trigger]);

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