import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Universal Reading Progress Bar
export const ReadingProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(Math.min(100, Math.max(0, scrollProgress)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-warning-500 z-[100] origin-left"
      style={{ width: `${progress}%` }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress / 100 }}
      transition={{ duration: 0.1 }}
    />
  );
};

// Universal Back to Top Button
interface BackToTopProps {
  showAfter?: number;
  className?: string;
}

export const BackToTopButton: React.FC<BackToTopProps> = ({ 
  showAfter = 300,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const toggleVisibility = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;

      setIsVisible(scrollTop > showAfter);
      setProgress(Math.min(100, Math.max(0, scrollProgress)));
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed bottom-8 right-8 z-[9999] ${className}`}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, type: 'spring', bounce: 0.3 }}
        >
          <div className="relative group">
            {/* Progress Ring */}
            <svg className="absolute inset-0 w-14 h-14 transform -rotate-90 pointer-events-none">
              <circle
                cx="28"
                cy="28"
                r="22"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-neutral-700/50"
              />
              <motion.circle
                cx="28"
                cy="28"
                r="22"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-primary-500"
                strokeLinecap="round"
                style={{
                  strokeDasharray: `${2 * Math.PI * 22}`,
                  strokeDashoffset: `${2 * Math.PI * 22 * (1 - progress / 100)}`
                }}
                transition={{ duration: 0.1 }}
              />
            </svg>

            {/* Button */}
            <motion.button
              onClick={scrollToTop}
              className="relative w-14 h-14 rounded-full bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/25 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary-500/40"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Back to top"
            >
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowUp className="h-5 w-5" />
              </motion.div>
            </motion.button>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-neutral-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Back to top ({Math.round(progress)}%)
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ScrollComponents = { ReadingProgressBar, BackToTopButton };
export default ScrollComponents;
