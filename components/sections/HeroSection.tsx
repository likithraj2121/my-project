import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar } from 'lucide-react';
import OptimizedImage from '../ui/OptimizedImage';
import { 
  MagneticButton, 
  ScrollReveal, 
  TiltCard, 
  HoverGlow,
  AnimatedCounter,
  ParticleBackground,
  StaggerContainer,
  StaggerItem
} from '../ui/AdvancedEffects';
import { ClientOnly } from '../../hooks/useClientSide';
import ClientWrapper from '../ui/ClientWrapper';
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
      {/* Advanced Particle Background */}
      <ClientWrapper>
        <ParticleBackground count={50} className="opacity-60" />
      </ClientWrapper>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-purple-900/20 to-secondary-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1)_0%,transparent_60%)]" />
        
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
        
        {/* Enhanced Grid Pattern with Animation */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
          animate={{ 
            backgroundPosition: ['0px 0px', '50px 50px', '0px 0px'],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-400/60 rounded-full"
          animate={{ 
            y: [0, -100, 0],
            x: [0, 50, -30, 0],
            scale: [1, 0.5, 1.2, 1],
            opacity: [0.6, 1, 0.4, 0.6]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-secondary-400/70 rounded-full"
          animate={{ 
            y: [0, 80, -40, 0],
            x: [0, -60, 20, 0],
            scale: [1, 1.5, 0.8, 1],
            opacity: [0.7, 0.3, 1, 0.7]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/4 w-2 h-2 bg-warning-400/80 rounded-full"
          animate={{ 
            y: [0, -120, 60, 0],
            x: [0, 40, -50, 0],
            scale: [1, 2, 0.3, 1],
            opacity: [0.8, 0.4, 0.9, 0.8]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
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
            className="text-5xl lg:text-8xl font-bold mb-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Floating accent elements around heading */}
            <motion.div 
              className="absolute -top-4 -left-4 w-8 h-8 border-2 border-primary-400/40 rounded rotate-45"
              animate={{ rotate: [45, 225, 45], scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -top-2 -right-6 w-6 h-6 bg-secondary-400/30 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
                y: [0, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div 
              className="absolute -bottom-3 left-1/4 w-4 h-1 bg-warning-400/50 rounded-full"
              animate={{ 
                scaleX: [1, 2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
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
            className="text-xl lg:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative inline-block">
              <span className="relative z-10">Fueling the Next Generation of Developers</span>
              <motion.div 
                className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-warning-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              {/* Sparkle effects */}
              <motion.div 
                className="absolute -top-2 left-1/4 w-1 h-1 bg-primary-400 rounded-full"
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              />
              <motion.div 
                className="absolute -top-1 right-1/3 w-1 h-1 bg-secondary-400 rounded-full"
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 3 }}
              />
            </div>
            <motion.p 
              className="text-base lg:text-lg text-neutral-400 mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Join a vibrant community of innovators, builders, and learners shaping the future of technology
            </motion.p>
          </motion.div>

          {/* Stats Cards with Advanced Animations */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12" staggerDelay={0.2}>
            {stats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <TiltCard className="h-full" glowOnHover>
                  <HoverGlow>
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
                          <AnimatedCounter 
                            from={0} 
                            to={parseInt(stat.value)} 
                            suffix={stat.value.includes('+') ? '+' : ''}
                            duration={2}
                          />
                        </div>
                        
                        <div className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </HoverGlow>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Enhanced CTA Section */}
          <ScrollReveal direction="up" delay={0.8}>
            <div className="relative">
              {/* CTA Buttons with Enhanced Effects */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <ClientOnly 
                  fallback={
                    <Button size="lg" rightIcon={Users} onClick={() => handleExternalLink('https://chat.whatsapp.com/devcatalyst')} className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl transition-all duration-300">
                      Explore Our Community
                    </Button>
                  }
                >
                  <HoverGlow>
                    <MagneticButton
                      className="group relative bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 hover:from-primary-600 hover:via-primary-700 hover:to-primary-600 text-white px-10 py-5 rounded-2xl transition-all duration-300 flex items-center gap-3 text-lg font-semibold shadow-2xl hover:shadow-primary-500/25 overflow-hidden"
                      strength={0.2}
                      onClick={() => handleExternalLink('https://chat.whatsapp.com/devcatalyst')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <span className="relative z-10">Explore Our Community</span>
                      <Users className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                    </MagneticButton>
                  </HoverGlow>
                </ClientOnly>
                
                <ClientOnly 
                  fallback={
                    <Button variant="secondary" size="lg" rightIcon={Calendar} onClick={() => handleNavigation('/events')} className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-xl transition-all duration-300">
                      See Upcoming Events
                    </Button>
                  }
                >
                  <HoverGlow>
                    <MagneticButton
                      className="group relative bg-gradient-to-r from-secondary-500 via-secondary-600 to-secondary-500 hover:from-secondary-600 hover:via-secondary-700 hover:to-secondary-600 text-white px-10 py-5 rounded-2xl transition-all duration-300 flex items-center gap-3 text-lg font-semibold shadow-2xl hover:shadow-secondary-500/25 overflow-hidden"
                      strength={0.2}
                      onClick={() => handleNavigation('/events')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <span className="relative z-10">See Upcoming Events</span>
                      <Calendar className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                    </MagneticButton>
                  </HoverGlow>
                </ClientOnly>
              </div>
              
              {/* Trust indicators */}
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Active Community</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span>Free to Join</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <span>Beginner Friendly</span>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;