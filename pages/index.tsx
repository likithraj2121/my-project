import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePerformanceMonitor, useLazyLoading, ResourceHints } from '../components/ui/PerformanceMonitor';
import ErrorBoundary from '../components/ErrorBoundary';
import HeroSection from '../components/sections/HeroSection';
import { 
  ScrollReveal, 
  TiltCard, 
  HoverGlow, 
  MagneticButton,
  SkeletonCard,
  PulseOnLoad,
  StaggerContainer,
  StaggerItem
} from '../components/ui/AdvancedEffects';
import { 
  Users, 
  Trophy,
  ArrowRight,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
  ExternalLink,
  CheckCircle,
  X,
  Star
} from 'lucide-react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';

const DevCatalyst: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [notification, setNotification] = useState<{show: boolean, message: string, type: 'success' | 'error'}>({
    show: false,
    message: '',
    type: 'success'
  });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Initialize performance monitoring
  usePerformanceMonitor();
  useLazyLoading();

  // Set mounted state to prevent hydration issues
  useEffect(() => {
    setMounted(true);
    
    // Page loading simulation
    const loadingTimer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1500);


    // Keyboard shortcuts
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && notification.show) {
        setNotification(prev => ({ ...prev, show: false }));
      }
      if (e.key === 'Home' || (e.ctrlKey && e.key === 'Home')) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (e.key === 'End' || (e.ctrlKey && e.key === 'End')) {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearTimeout(loadingTimer);
    };
  }, [notification.show]);


  // Countdown timer for next event (example date)
  useEffect(() => {
    if (!mounted) return;
    
    const targetDate = new Date('2025-02-15T10:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [mounted]);

  const teamMembers = [
    {
      name: 'Divyansh Teja Edla',
      role: 'President',
      avatar: 'D',
      color: 'bg-primary-500'
    },
    {
      name: 'Dhruv Gannaram',
      role: 'Vice President',
      avatar: 'DG',
      color: 'bg-secondary-500'
    },
    {
      name: 'Parimitha',
      role: 'Event Planner',
      avatar: 'P',
      color: 'bg-warning-500'
    },
    {
      name: 'Hemaditya Kalakota',
      role: 'Technical Lead',
      avatar: 'HK',
      color: 'bg-danger-500'
    }
  ];

  const getStartedSteps = [
    {
      step: '01',
      title: 'Explore Projects',
      description: 'Browse our collection of innovative projects and technical achievements.'
    },
    {
      step: '02',
      title: 'Attend Events',
      description: 'Join workshops, hackathons, and tech talks to enhance your skills.'
    },
    {
      step: '03',
      title: 'Connect & Learn',
      description: 'Network with fellow developers and access our technical resources.'
    }
  ];

  return (
    <Layout>
      <ResourceHints />
      {/* Page Loading Overlay */}
      {mounted && isPageLoading && (
        <motion.div
          className="fixed inset-0 bg-neutral-950 z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="text-center">
            <motion.div
              className="w-16 h-16 border-4 border-primary-500/30 border-t-primary-500 rounded-full mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.p
              className="text-neutral-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Loading DevCatalyst...
            </motion.p>
          </div>
        </motion.div>
      )}


      <div className="min-h-screen">
        {/* Hero Section */}
        <ErrorBoundary>
          <HeroSection mounted={mounted} />
        </ErrorBoundary>

        {/* Community Highlights */}
        <section className="py-20 bg-neutral-950/50">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Community Highlights
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                Stay updated with the latest events, achievements, and announcements from our growing developer community.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Achievement Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card variant="glass" hover className="p-8 group">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="w-12 h-12 bg-warning-500/20 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Trophy className="h-6 w-6 text-warning-500 group-hover:text-warning-400 transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <motion.span 
                        className="bg-warning-500/20 text-warning-400 px-3 py-1 rounded-full text-sm font-medium inline-block"
                        whileHover={{ scale: 1.05 }}
                      >
                        ACHIEVEMENT
                      </motion.span>
                      <div className="text-neutral-400 text-sm mt-1">Jan 10, 2025</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-warning-300 transition-colors duration-300">
                    Community Reaches 500+ Members
                  </h3>
                  <p className="text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300">
                    DevCatalyst community has grown to over 500 active members across all platforms!
                  </p>
                </Card>
              </motion.div>

              {/* Countdown Timer */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card variant="glass" hover className="p-8 group">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                    Next: React.js Workshop
                  </h3>
                  <p className="text-neutral-400 mb-6 group-hover:text-neutral-300 transition-colors duration-300">Countdown to the next upcoming event.</p>
                  
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                      { label: 'days', value: mounted ? timeLeft.days : 0 },
                      { label: 'hours', value: mounted ? timeLeft.hours : 0 },
                      { label: 'minutes', value: mounted ? timeLeft.minutes : 0 },
                      { label: 'seconds', value: mounted ? timeLeft.seconds : 0 }
                    ].map((time, index) => (
                      <motion.div 
                        key={time.label} 
                        className="text-center"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div 
                          className="text-2xl font-bold text-white bg-neutral-800 rounded-lg p-3 hover:bg-neutral-700 transition-colors duration-300"
                          animate={mounted ? { scale: [1, 1.02, 1] } : {}}
                          transition={{ duration: 1, repeat: Infinity, delay: index * 0.2 }}
                        >
                          {time.value.toString().padStart(2, '0')}
                        </motion.div>
                        <div className="text-xs text-neutral-400 mt-1 uppercase">{time.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="outline" fullWidth rightIcon={ExternalLink} onClick={() => mounted && (window.location.href = '/events')}>
                      View Details
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About DevCatalyst */}
        <section className="py-20">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                About DevCatalyst
              </h2>
              <p className="text-lg text-neutral-300 max-w-4xl mx-auto">
                DevCatalyst is a student-led developer community focused on learning-by-building. We bring together curious minds to explore modern technologies, collaborate on real projects, and become industry-ready through practice, mentorship, and events.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* What We Are */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
              >
                <Card variant="glass" hover className="p-8 group">
                  <CardHeader className="pb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CardTitle className="text-primary-400 text-xl group-hover:text-primary-300 transition-colors duration-300">What We Are</CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300">
                      A welcoming space for developers of all levels—beginners to advanced—to learn, experiment, and ship ideas together across web, mobile, AI/ML, and cloud.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Why Join */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.03, y: -8 }}
              >
                <Card variant="glass" hover className="p-8 group">
                  <CardHeader className="pb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CardTitle className="text-secondary-400 text-xl group-hover:text-secondary-300 transition-colors duration-300">Why Join</CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="text-neutral-300 space-y-2">
                      {[
                        "Hands-on workshops and guided learning paths",
                        "Real project experience for your portfolio",
                        "Mentorship from peers, seniors, and industry guests",
                        "Networking, internships, and referral opportunities",
                        "Teamwork, leadership, and public speaking practice"
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <CheckCircle className="h-4 w-4 text-secondary-500 mt-1 flex-shrink-0 group-hover:text-secondary-400 transition-colors duration-300" />
                          <span className="group-hover:text-neutral-200 transition-colors duration-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Activities */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.03, y: -8 }}
              >
                <Card variant="glass" hover className="p-8 group">
                  <CardHeader className="pb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CardTitle className="text-warning-400 text-xl group-hover:text-warning-300 transition-colors duration-300">Activities</CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="text-neutral-300 space-y-2">
                      {[
                        "Weekly workshops and code-alongs",
                        "Hackathons, coding challenges, and demo days",
                        "Speaker sessions and tech talks",
                        "Open-source sprints and study groups",
                        "Community projects with real users"
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <Star className="h-4 w-4 text-warning-500 mt-1 flex-shrink-0 group-hover:text-warning-400 transition-colors duration-300" />
                          <span className="group-hover:text-neutral-200 transition-colors duration-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-20 bg-neutral-950/50">
          <div className="container-fluid">
            <ScrollReveal direction="up" className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
            </ScrollReveal>

            {!mounted ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {Array.from({ length: 4 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            ) : (
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto" staggerDelay={0.15}>
                {teamMembers.map((member, index) => (
                  <StaggerItem key={member.name}>
                    <TiltCard className="h-full" glowOnHover>
                      <HoverGlow>
                        <Card variant="glass" hover className="text-center p-6 group cursor-pointer h-full">
                          <PulseOnLoad delay={index * 0.1}>
                            <motion.div 
                              className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300`}
                              whileHover={{ 
                                scale: 1.1, 
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.5 }
                              }}
                            >
                              <motion.span 
                                className="text-2xl font-bold text-white"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                              >
                                {member.avatar}
                              </motion.span>
                            </motion.div>
                            <motion.h3 
                              className="font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300"
                              whileHover={{ scale: 1.05 }}
                            >
                              {member.name}
                            </motion.h3>
                            <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors duration-300">{member.role}</p>
                          </PulseOnLoad>
                        </Card>
                      </HoverGlow>
                    </TiltCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}

            <ScrollReveal direction="up" className="text-center mt-12">
              <HoverGlow>
                <MagneticButton 
                  onClick={() => window.location.href = '/team'}
                  className="border border-neutral-600 hover:border-neutral-400 text-white px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 text-lg font-medium"
                >
                  Meet Our Team
                  <Users className="h-5 w-5" />
                </MagneticButton>
              </HoverGlow>
              <p className="text-neutral-400 text-sm mt-4">Connect to us on our Socials.</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Get Started in 3 Steps */}
        <section className="py-20">
          <div className="container-fluid">
            <ScrollReveal direction="up" className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Get Started in 3 Steps
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid lg:grid-cols-3 gap-8" staggerDelay={0.2}>
              {getStartedSteps.map((step, index) => (
                <StaggerItem key={step.step}>
                  <TiltCard className="h-full" glowOnHover>
                    <HoverGlow>
                      <Card variant="glass" hover className="p-8 text-center h-full">
                        <PulseOnLoad delay={index * 0.1}>
                          <motion.div 
                            className="text-4xl font-bold text-primary-500 mb-4"
                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.3 }}
                          >
                            {step.step}
                          </motion.div>
                          <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                          <p className="text-neutral-300">{step.description}</p>
                        </PulseOnLoad>
                      </Card>
                    </HoverGlow>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Join Our Community */}
        <section className="py-20 bg-neutral-950/50">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Join Our Community
              </h2>
              <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                Connect with like-minded developers, share your projects, and grow together in our vibrant community ecosystem.
              </p>
            </motion.div>

            <div className="flex justify-center mb-16">
              {/* WhatsApp Community - Enhanced with Border Light Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                whileHover={{ scale: 1.08, y: -12 }}
                className="relative max-w-md w-full"
              >
                {/* Animated Border Light */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-warning-500/20 via-primary-500/20 to-secondary-500/20 rounded-2xl blur-sm"
                  animate={{
                    background: [
                      'linear-gradient(0deg, rgba(245,158,11,0.2) 0%, rgba(99,102,241,0.2) 50%, rgba(168,85,247,0.2) 100%)',
                      'linear-gradient(90deg, rgba(245,158,11,0.2) 0%, rgba(99,102,241,0.2) 50%, rgba(168,85,247,0.2) 100%)',
                      'linear-gradient(180deg, rgba(245,158,11,0.2) 0%, rgba(99,102,241,0.2) 50%, rgba(168,85,247,0.2) 100%)',
                      'linear-gradient(270deg, rgba(245,158,11,0.2) 0%, rgba(99,102,241,0.2) 50%, rgba(168,85,247,0.2) 100%)',
                      'linear-gradient(360deg, rgba(245,158,11,0.2) 0%, rgba(99,102,241,0.2) 50%, rgba(168,85,247,0.2) 100%)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Corner Light Traces */}
                <motion.div
                  className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-warning-400/60 rounded-tl-2xl"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary-400/60 rounded-tr-2xl"
                  animate={{ opacity: [0.8, 0.3, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary-400/60 rounded-bl-2xl"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-warning-400/60 rounded-br-2xl"
                  animate={{ opacity: [0.8, 0.3, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
                
                <Card variant="glass" className="p-10 text-center group cursor-pointer relative z-10" onClick={() => mounted && window.open('https://chat.whatsapp.com/devcatalyst', '_blank')}>
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    {/* Icon Glow Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-warning-400/20 rounded-full blur-xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <MessageCircle className="h-16 w-16 text-warning-500 mx-auto mb-6 group-hover:text-warning-400 transition-colors duration-300 relative z-10" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 group-hover:text-warning-300 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    Join Our WhatsApp Community
                  </motion.h3>
                  
                  <p className="text-neutral-400 mb-6 group-hover:text-neutral-300 transition-colors duration-300 text-lg">
                    Connect instantly with fellow developers, get quick help, and stay updated with the latest announcements.
                  </p>
                  
                  {/* Enhanced Member Count with Animation */}
                  <motion.div 
                    className="flex items-center justify-center gap-3 text-warning-400 mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                    />
                    <span className="text-lg font-semibold">200+ Active Members</span>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-warning-500/10 hover:bg-warning-500/20 border border-warning-500/30 hover:border-warning-500/50 rounded-full transition-all duration-300 text-warning-400 hover:text-warning-300"
                  >
                    <span className="font-medium">Join Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Card>
              </motion.div>
            </div>

            {/* Quick Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-center"
            >
              <p className="text-neutral-400 mb-6">Follow us on social media for updates and announcements</p>
              <div className="flex justify-center gap-4 flex-wrap">
                {[
                  { icon: Instagram, color: "text-pink-500 hover:text-pink-400", url: "https://instagram.com/devcatalyst" },
                  { icon: Twitter, color: "text-blue-400 hover:text-blue-300", url: "https://twitter.com/devcatalyst" },
                  { icon: Linkedin, color: "text-blue-600 hover:text-blue-500", url: "https://linkedin.com/company/devcatalyst" },
                  { icon: Mail, color: "text-neutral-400 hover:text-neutral-300", url: "/contact" }
                ].map((social, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => mounted && (social.url.startsWith('http') ? window.open(social.url, '_blank') : window.location.href = social.url)}
                    className={`p-3 rounded-full bg-neutral-800/50 backdrop-blur border border-neutral-700 hover:border-neutral-600 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>



        {/* Notification Toast */}
        {mounted && notification.show && (
          <motion.div
            className={`fixed top-8 right-8 z-50 p-4 rounded-lg shadow-lg border max-w-sm ${
              notification.type === 'success' 
                ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                : 'bg-red-500/10 border-red-500/20 text-red-400'
            }`}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start gap-3">
              <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}>
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-medium">{notification.message}</p>
              </div>
              <button
                onClick={() => setNotification(prev => ({ ...prev, show: false }))}
                className="flex-shrink-0 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default DevCatalyst;
