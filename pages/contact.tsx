import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Twitter,
  Linkedin,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Send,
  Clock,
  Users,
  Calendar,
  Star,
  Heart,
  ExternalLink
} from 'lucide-react';
import Layout from '../components/Layout';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/devcatalyst',
      icon: Instagram,
      color: 'hover:text-pink-400'
    },
    {
      name: 'Twitter (X)',
      url: 'https://twitter.com/devcatalyst',
      icon: Twitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/devcatalyst',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'WhatsApp Community',
      url: 'https://chat.whatsapp.com/devcatalyst',
      icon: MessageCircle,
      color: 'hover:text-green-400'
    }
  ];

  const faqItems = [
    {
      question: 'How do I join DevCatalyst?',
      answer: 'Simply join our WhatsApp Community or attend any of our events. Membership is completely free!'
    },
    {
      question: 'What skill level do I need?',
      answer: 'All skill levels are welcome! We have programs for complete beginners to advanced developers.'
    },
    {
      question: 'Are events free to attend?',
      answer: 'Yes, all our workshops, hackathons, and community events are completely free for members.'
    },
    {
      question: 'How can I contribute to projects?',
      answer: 'Check our GitHub organization or join our project discussions on WhatsApp Community to find contribution opportunities.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-12">
        {/* Header Section */}
        <section className="py-12">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient bg-gradient-to-r from-danger-400 via-warning-400 to-primary-400 bg-clip-text text-transparent">
                  GET IN TOUCH
                </span>
              </h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Have questions, suggestions, or want to collaborate? We&apos;d love to hear from you! 
                Reach out and let&apos;s build something amazing together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-12">
          <div className="container-fluid">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card variant="glass" className="p-8 border-2 border-secondary-500/20">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold text-secondary-400">
                      Send Message
                    </CardTitle>
                  </CardHeader>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-secondary-500/30 rounded-lg text-white placeholder-neutral-400 focus:border-secondary-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-secondary-500/30 rounded-lg text-white placeholder-neutral-400 focus:border-secondary-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary-400 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us what you&apos;re interested in..."
                        className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-secondary-500/30 rounded-lg text-white placeholder-neutral-400 focus:border-secondary-500 focus:outline-none transition-colors resize-none"
                        required
                      />
                    </div>
                    
                    {submitStatus === 'success' && (
                      <div className="flex items-center gap-2 text-secondary-400 bg-secondary-500/10 p-3 rounded-lg">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm">Message sent successfully! We&apos;ll get back to you soon.</span>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-2 text-danger-400 bg-danger-500/10 p-3 rounded-lg">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-sm">Failed to send message. Please try again.</span>
                      </div>
                    )}
                    
                    <Button
                      type="submit"
                      fullWidth
                      size="lg"
                      isLoading={isSubmitting}
                      className="bg-secondary-500 hover:bg-secondary-600 border-2 border-secondary-500 text-white font-semibold"
                      rightIcon={Send}
                    >
                      {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                    </Button>
                  </form>
                </Card>
              </motion.div>

              {/* Contact Info & Social */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Contact Info */}
                <Card variant="glass" className="p-8 border-2 border-primary-500/20">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold text-primary-400">
                      Contact Info
                    </CardTitle>
                  </CardHeader>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-400 mb-1">Email</h3>
                        <p className="text-neutral-300">devcatalyst.2025@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-danger-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-danger-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-danger-400 mb-1">Location</h3>
                        <p className="text-neutral-300">
                          Matrusri Engineering College<br />
                          Hyderabad, Telangana, 500059
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-secondary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-secondary-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary-400 mb-1">Response Time</h3>
                        <p className="text-neutral-300">Usually within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Social Links */}
                <Card variant="glass" className="p-8 border-2 border-warning-500/20">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold text-warning-400">
                      Social
                    </CardTitle>
                  </CardHeader>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <div className="flex items-center gap-3 p-3 bg-neutral-800/30 border-2 border-secondary-500/30 rounded-lg hover:border-secondary-500 hover:bg-neutral-800/50 transition-all duration-300">
                          <social.icon className={`h-5 w-5 text-neutral-400 group-hover:text-secondary-400 transition-colors`} />
                          <span className="text-neutral-300 group-hover:text-white transition-colors font-medium">
                            {social.name.toUpperCase()}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-neutral-950/50">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                Quick answers to common questions about joining and participating in our community.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card variant="glass" hover className="p-6 h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <HelpCircle className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                      <h3 className="font-semibold text-white">{faq.question}</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed pl-8">{faq.answer}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-20">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Join Our Growing Community
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                Be part of something bigger. Connect with fellow developers and grow together.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Users, label: 'Active Members', value: '500+', color: 'text-primary-500' },
                { icon: Calendar, label: 'Events Hosted', value: '25+', color: 'text-secondary-500' },
                { icon: Star, label: 'Projects Built', value: '40+', color: 'text-warning-500' },
                { icon: Heart, label: 'Happy Developers', value: '100%', color: 'text-danger-500' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card variant="glass" hover className="text-center p-6">
                    <stat.icon className={`h-10 w-10 ${stat.color} mx-auto mb-3`} />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-neutral-400 text-sm">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-neutral-950/50">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Card variant="glass" className="p-12 border-2 border-primary-500/20">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Start Your Journey?
                </h2>
                
                <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                  Don&apos;t wait! Join DevCatalyst today and start building, learning, and growing
                  with a community of passionate developers.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" rightIcon={MessageCircle}>
                    Join WhatsApp Community
                  </Button>
                  <Button variant="outline" size="lg" rightIcon={ExternalLink}>
                    Follow on Social Media
                  </Button>
                </div>
                
                <div className="mt-8 pt-8 border-t border-neutral-800">
                  <p className="text-sm text-neutral-400">
                    🚀 Free forever • 🌟 Beginner-friendly • 💡 Project-based learning
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;