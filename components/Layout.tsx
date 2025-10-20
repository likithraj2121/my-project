import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReadingProgressBar, BackToTopButton } from './ui/ScrollComponents';
import { 
  Menu, 
  X,
  Home,
  Calendar,
  Users,
  BookOpen,
  FolderOpen,
  Trophy
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'About', href: '/about', icon: BookOpen },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'Team', href: '/team', icon: Users },
    { name: 'Contact', href: '/contact', icon: Trophy },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path: string) => {
    if (path === '/') {
      return router.pathname === path;
    }
    return router.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-200">
      {/* Reading Progress Bar */}
      <ReadingProgressBar />
      
      {/* Header */}
      <header className="bg-neutral-900/80 backdrop-blur border-b border-neutral-800 sticky top-0 z-50 text-neutral-200">
        <div className="container-fluid">
          <div className="flex items-center justify-between h-16 w-full">
            {/* Logo and Brand */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="DevCatalyst Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                    style={{
                      filter: 'brightness(1.1) contrast(1.2) saturate(0.9) drop-shadow(0 0 8px rgba(255,255,255,0.08))',
                      mixBlendMode: 'screen'
                    }}
                  />
                </div>
                <span className="text-xl font-bold text-white">DevCatalyst</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActivePath(item.href)
                        ? 'bg-neutral-800 text-white shadow-sm'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800/80 hover:shadow-sm'
                    }`}
                  >
                    <Icon className="h-4 w-4 transition-all duration-200 group-hover:scale-110" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors ml-auto"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 transition-transform duration-200 hover:rotate-90" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-200 hover:scale-110" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-t border-neutral-800"
          >
            <div className="container-fluid py-4">
              <nav className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActivePath(item.href)
                          ? 'bg-neutral-800 text-white'
                          : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                      }`}
                    >
                      <Icon className="h-5 w-5 transition-all duration-200" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800 text-neutral-300">
        <div className="container-fluid py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-8 h-8">
                  <Image
                    src="/logo.png"
                    alt="DevCatalyst Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                    style={{
                      filter: 'brightness(1.05) contrast(1.15) saturate(0.9) drop-shadow(0 0 6px rgba(255,255,255,0.08))',
                      mixBlendMode: 'screen'
                    }}
                  />
                </div>
                <span className="text-xl font-bold text-white">DevCatalyst</span>
              </div>
              <p className="text-neutral-400 text-sm">
                Fueling the Next Generation of Developers
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-neutral-400 hover:text-neutral-200">About Us</Link></li>
                <li><Link href="/team" className="text-neutral-400 hover:text-neutral-200">Our Team</Link></li>
                <li><Link href="#" className="text-neutral-400 hover:text-neutral-200">Blog</Link></li>
                <li><Link href="/contact" className="text-neutral-400 hover:text-neutral-200">Contact</Link></li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-semibold text-white mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/events" className="text-neutral-400 hover:text-neutral-200">Events</Link></li>
                <li><Link href="/events#workshops" className="text-neutral-400 hover:text-neutral-200">Workshops</Link></li>
                <li><Link href="/projects" className="text-neutral-400 hover:text-neutral-200">Projects</Link></li>
                <li><Link href="/events#hackathons" className="text-neutral-400 hover:text-neutral-200">Hackathons</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><button className="text-neutral-400 hover:text-neutral-200">Roadmaps</button></li>
                <li><button className="text-neutral-400 hover:text-neutral-200">Guides</button></li>
                <li><button className="text-neutral-400 hover:text-neutral-200">FAQ</button></li>
                <li><button className="text-neutral-400 hover:text-neutral-200">Code of Conduct</button></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-neutral-400">
                © 2025 DevCatalyst. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-xs text-neutral-400">
                  Fueling the Next Generation of Developers
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTopButton />

      {/* Click outside to close mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;