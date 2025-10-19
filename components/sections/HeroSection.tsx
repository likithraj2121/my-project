import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar } from 'lucide-react';
import OptimizedImage from '../ui/OptimizedImage';
import { 
  MagneticButton, 
  ScrollReveal, 
  TiltCard, 
  GlowingBorder,
  StaggeredText,
  ScrollCounter,
  MorphingShape,
  FloatingElements
} from '../ui/AdvancedAnimations';
import { ClientOnly } from '../../hooks/useClientSide';
import { Card, CardContent } from '../ui/Card';
import Button from '../ui/Button';
import { useErrorHandler } from '../ErrorBoundary';

interface HeroSectionProps {
  mounted: boolean;
}

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ mounted }) => {
  const { handleError } = useErrorHandler();

  const stats: StatItem[] = [
    { icon: Users, label: 'Members', value: '500+', color: 'text-primary-500' },
    { icon: Calendar, label: 'Events', value: '25+', color: 'text-secondary-500' },
    { icon: Users, label: 'Projects', value: '40+', color: 'text-warning-500' }
  ];

  const handleExternalLink = (url: string) => {
    try {
      if (mounted) {
        window.open(url, '_blank');
      }
    } catch {
      handleError(new Error(`Failed to open external link: ${url}`));
    }
  };

  const handleNavigation = (path: string) => {
    try {
      if (mounted) {
        window.location.href = path;
      }
    } catch {
      handleError(new Error(`Failed to navigate to: ${path}`));
    }
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Floating Elements Background */}
      <FloatingElements count={8} className="opacity-30" />
      
      {/* Morphing Shape */}
      <div className="absolute top-10 right-10 opacity-20">
        <MorphingShape />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-secondary-900/20" />
        
        {/* Enhanced Floating Code Elements */}
        <motion.div 
          className="absolute top-1/4 left-10 text-primary-500/30 text-6xl font-mono"
          animate={{ 
            y: [0, -20, 0], 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {'<>'}
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-20 text-secondary-500/30 text-4xl font-mono"
          animate={{ 
            y: [0, 15, -10, 0], 
            rotate: [0, -3, 3, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          {'{ }'}
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-1/4 text-warning-500/30 text-5xl font-mono"
          animate={{ 
            y: [0, -25, 10, 0], 
            x: [0, 5, -5, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          {'</>'}
        </motion.div>
        <motion.div 
          className="absolute top-1/2 right-1/4 text-danger-500/30 text-3xl font-mono"
          animate={{ 
            y: [0, 20, -15, 0], 
            rotate: [0, 10, -5, 0]
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          {'[]'}
        </motion.div>
        
        {/* Enhanced Glowing Orbs */}
        <motion.div 
          className="absolute top-20 left-1/3 w-32 h-32 bg-primary-500/15 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 0.8, 1.2, 1],
            opacity: [0.15, 0.3, 0.1, 0.25, 0.15],
            x: [0, 20, -10, 0],
            y: [0, -15, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 right-1/3 w-48 h-48 bg-secondary-500/15 rounded-full blur-xl"
          animate={{ 
            scale: [1, 0.7, 1.4, 0.9, 1],
            opacity: [0.15, 0.35, 0.08, 0.28, 0.15],
            x: [0, -25, 15, 0],
            y: [0, 20, -25, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-10 w-24 h-24 bg-warning-500/15 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.5, 0.6, 1.1, 1],
            opacity: [0.15, 0.4, 0.05, 0.3, 0.15],
            rotate: [0, 180, 360],
            x: [0, 15, -20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      <div className="container-fluid relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Brand Logo with Enhanced Animation */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-40 h-40 flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900/20 via-neutral-800/10 to-neutral-900/30 backdrop-blur-sm border border-neutral-700/20">
                <OptimizedImage
                  src="/logo.png"
                  alt="DevCatalyst Logo"
                  width={150}
                  height={150}
                  className="rounded-2xl"
                  priority={true}
                  quality={90}
                  style={{
                    filter: 'brightness(1.05) contrast(1.15) saturate(0.95) blur(0px)',
                    mixBlendMode: 'screen',
                    maskImage: 'radial-gradient(circle at center, black 70%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 70%, transparent 100%)'
                  }}
                />
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </motion.div>

          {/* Main Heading with Enhanced Gradient and Loading Effect */}
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-primary-400 via-secondary-400 via-warning-400 to-primary-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              {'DevCatalyst'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="inline-block cursor-default"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <motion.div 
            className="text-xl lg:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative inline-block">
              Fueling the Next Generation of Developers
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />
            </div>
          </motion.div>

          {/* Stats Cards with Advanced Animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.2}>
                <TiltCard className="h-full">
                  <GlowingBorder intensity={0.3}>
                    <Card variant="glass" className="text-center group cursor-pointer p-6 h-full">
                      <CardContent className="p-0">
                        <motion.div
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="relative mb-4"
                        >
                          {/* Icon subtle glow */}
                          <motion.div
                            className={`absolute inset-0 ${stat.color.replace('text-', 'bg-').replace('-500', '-500/20')} rounded-full blur-lg`}
                            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                          />
                          <stat.icon className={`h-10 w-10 ${stat.color} mx-auto group-hover:drop-shadow-lg transition-all duration-300 relative z-10`} />
                        </motion.div>
                        
                        <div className="text-3xl font-bold text-white mb-2">
                          <ScrollCounter 
                            from={0} 
                            to={parseInt(stat.value)} 
                            suffix={stat.value.includes('+') ? '+' : ''}
                            duration={2}
                          />
                        </div>
                        
                        <StaggeredText 
                          text={stat.label}
                          className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300"
                          delay={0.5 + index * 0.2}
                        />
                      </CardContent>
                    </Card>
                  </GlowingBorder>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA Buttons with Magnetic Effect */}
          <ScrollReveal direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <ClientOnly 
                fallback={
                  <GlowingBorder intensity={0.4} glowColor="#6366f1">
                    <Button size="lg" rightIcon={Users} onClick={() => handleExternalLink('https://discord.gg/devcatalyst')} className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl transition-all duration-300">
                      Explore Our Community
                    </Button>
                  </GlowingBorder>
                }
              >
                <MagneticButton
                  className="group"
                  strength={0.15}
                  onClick={() => handleExternalLink('https://discord.gg/devcatalyst')}
                >
                  <GlowingBorder intensity={0.4} glowColor="#6366f1">
                    <Button size="lg" rightIcon={Users} className="relative z-10 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl transition-all duration-300 group-hover:scale-105">
                      Explore Our Community
                    </Button>
                  </GlowingBorder>
                </MagneticButton>
              </ClientOnly>
              
              <ClientOnly 
                fallback={
                  <GlowingBorder intensity={0.4} glowColor="#8b5cf6">
                    <Button variant="secondary" size="lg" rightIcon={Calendar} onClick={() => handleNavigation('/events')} className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-xl transition-all duration-300">
                      See Upcoming Events
                    </Button>
                  </GlowingBorder>
                }
              >
                <MagneticButton
                  className="group"
                  strength={0.15}
                  onClick={() => handleNavigation('/events')}
                >
                  <GlowingBorder intensity={0.4} glowColor="#8b5cf6">
                    <Button variant="secondary" size="lg" rightIcon={Calendar} className="relative z-10 bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-xl transition-all duration-300 group-hover:scale-105">
                      See Upcoming Events
                    </Button>
                  </GlowingBorder>
                </MagneticButton>
              </ClientOnly>
            </div>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;