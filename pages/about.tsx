import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  Heart,
  Code,
  BookOpen,
  Trophy,
  Lightbulb,
  Calendar,
  CheckCircle
} from 'lucide-react';
import Layout from '../components/Layout';
import { Card } from '../components/ui/Card';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Members', value: '500+', color: 'text-primary-500' },
    { icon: Calendar, label: 'Events Hosted', value: '25+', color: 'text-secondary-500' },
    { icon: Code, label: 'Projects Built', value: '40+', color: 'text-warning-500' },
    { icon: Trophy, label: 'Awards Won', value: '12+', color: 'text-danger-500' }
  ];

  const values = [
    {
      icon: BookOpen,
      title: 'Learning First',
      description: 'We believe in continuous learning and sharing knowledge with the community.',
      color: 'text-primary-500'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Everything we do is powered by our amazing community of developers.',
      color: 'text-secondary-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We encourage creative thinking and innovative solutions to real problems.',
      color: 'text-warning-500'
    },
    {
      icon: Heart,
      title: 'Inclusivity',
      description: 'We welcome developers of all backgrounds, levels, and experience.',
      color: 'text-danger-500'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'Community Launch',
      description: 'DevCatalyst was founded with 50 passionate developers.'
    },
    {
      year: '2024',
      title: 'First Hackathon',
      description: 'Organized our first 24-hour hackathon with 100+ participants.'
    },
    {
      year: '2024',
      title: '200+ Members',
      description: 'Reached 200 active community members across platforms.'
    },
    {
      year: '2024',
      title: 'Industry Partnership',
      description: 'Partnered with leading tech companies for workshops.'
    },
    {
      year: '2025',
      title: '500+ Members',
      description: 'Achieved milestone of 500+ active community members.'
    },
    {
      year: '2025',
      title: 'Open Source Initiative',
      description: 'Launched community-driven open source projects.'
    }
  ];

  const programs = [
    {
      icon: Code,
      title: 'Weekly Workshops',
      description: 'Hands-on coding workshops covering latest technologies and frameworks.',
      features: ['React, Python, Java', 'Live coding sessions', 'Q&A with experts', 'Project-based learning']
    },
    {
      icon: Trophy,
      title: 'Hackathons',
      description: 'Competitive coding events to solve real-world problems and win prizes.',
      features: ['48-hour coding marathons', 'Industry mentors', 'Cash prizes', 'Internship opportunities']
    },
    {
      icon: Users,
      title: 'Mentorship Program',
      description: 'Connect with experienced developers and industry professionals.',
      features: ['1-on-1 mentoring', 'Career guidance', 'Code reviews', 'Interview preparation']
    },
    {
      icon: BookOpen,
      title: 'Study Groups',
      description: 'Collaborative learning sessions for competitive programming and concepts.',
      features: ['DSA practice', 'Mock interviews', 'Group projects', 'Peer learning']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-secondary-900/20" />
          
          <div className="container-fluid relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                About{' '}
                <span className="text-gradient bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent">
                  DevCatalyst
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-neutral-300 mb-12 font-light">
                Empowering the next generation of developers through community, 
                learning, and hands-on experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-neutral-950/50">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Our Mission</h2>
              
              <Card variant="glass" className="p-12">
                <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                  DevCatalyst is a student-led developer community focused on <strong className="text-white">learning-by-building</strong>. 
                  We bring together curious minds to explore modern technologies, collaborate on real projects, and become 
                  industry-ready through practice, mentorship, and events.
                </p>
                
                <p className="text-lg text-neutral-300 leading-relaxed">
                  Our goal is to create a welcoming space where developers of all levels—from beginners taking their first 
                  steps in programming to advanced developers looking to expand their skills—can learn, experiment, and ship 
                  ideas together across web, mobile, AI/ML, and cloud technologies.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Impact</h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                Numbers that reflect our growing community and the impact we&apos;re making together.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card variant="glass" hover className="text-center p-8">
                    <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-neutral-400">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-neutral-950/50">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                The principles that guide everything we do as a community.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card variant="glass" hover className="p-8 h-full">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${value.color.replace('text-', 'bg-')}/20 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <value.icon className={`h-6 w-6 ${value.color}`} />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                        <p className="text-neutral-300">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Programs</h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                Comprehensive programs designed to accelerate your development journey.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card variant="glass" hover className="p-8 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                        <program.icon className="h-6 w-6 text-primary-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{program.title}</h3>
                    </div>
                    
                    <p className="text-neutral-300 mb-6">{program.description}</p>
                    
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="h-4 w-4 text-secondary-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-neutral-950/50">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Journey</h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                Key milestones in our community&apos;s growth and impact.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`flex items-start gap-6 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{achievement.year}</span>
                        </div>
                      </div>
                      
                      <Card variant="glass" className="flex-1 p-6">
                        <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                        <p className="text-neutral-300">{achievement.description}</p>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Card variant="glass" className="p-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Join Our Community?
                </h2>
                
                <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                Whether you&apos;re just starting your coding journey or looking to level up your skills,
                  DevCatalyst has something for everyone. Join us and be part of something amazing.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" rightIcon={Users}>
                    Join Our Community
                  </Button>
                  <Button variant="outline" size="lg" rightIcon={Calendar}>
                    View Upcoming Events
                  </Button>
                </div>
                
                <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-neutral-800">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-500">Free</div>
                    <div className="text-sm text-neutral-400">Always</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-500">24/7</div>
                    <div className="text-sm text-neutral-400">Community Support</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-warning-500">100%</div>
                    <div className="text-sm text-neutral-400">Hands-on Learning</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;