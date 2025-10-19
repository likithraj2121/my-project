import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Search, Mail } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

const Custom404: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="container-fluid max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 404 Animation */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <div className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-warning-400 bg-clip-text text-transparent mb-4">
                404
              </div>
              <div className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Page Not Found
              </div>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-12">
                Oops! The page you&apos;re looking for seems to have wandered off into the digital void. 
                Don&apos;t worry, even the best developers encounter 404s sometimes.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link href="/">
                <Button size="lg" leftIcon={Home}>
                  Back to Home
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="secondary" size="lg" leftIcon={Search}>
                  Browse Events
                </Button>
              </Link>
            </motion.div>

            {/* Helpful Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card variant="glass" className="p-8 max-w-2xl mx-auto">
                <CardContent>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Looking for something specific?
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Link href="/about" className="text-left p-4 rounded-lg border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800/50 transition-colors">
                      <div className="font-medium text-white">About Us</div>
                      <div className="text-sm text-neutral-400 mt-1">Learn more about DevCatalyst</div>
                    </Link>
                    <Link href="/projects" className="text-left p-4 rounded-lg border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800/50 transition-colors">
                      <div className="font-medium text-white">Projects</div>
                      <div className="text-sm text-neutral-400 mt-1">Explore our community projects</div>
                    </Link>
                    <Link href="/team" className="text-left p-4 rounded-lg border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800/50 transition-colors">
                      <div className="font-medium text-white">Our Team</div>
                      <div className="text-sm text-neutral-400 mt-1">Meet the DevCatalyst team</div>
                    </Link>
                    <Link href="/contact" className="text-left p-4 rounded-lg border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800/50 transition-colors">
                      <div className="font-medium text-white">Contact</div>
                      <div className="text-sm text-neutral-400 mt-1">Get in touch with us</div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Support */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <p className="text-neutral-500 mb-4">
                Still can&apos;t find what you&apos;re looking for?
              </p>
              <Link href="/contact">
                <Button variant="outline" leftIcon={Mail}>
                  Contact Support
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;