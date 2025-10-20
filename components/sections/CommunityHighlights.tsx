import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';
import OptimizedImage from '../ui/OptimizedImage';
import { ScrollReveal } from '../ui/AdvancedEffects';

interface CommunityHighlight {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  role: string;
  profileImage: string;
}

const highlights: CommunityHighlight[] = [
  {
    id: 1,
    title: "Building My First Startup",
    description: "Thanks to the DevCatalyst community, I was able to turn my idea into a reality. The mentorship and resources were invaluable!",
    image: "/achievements/startup.jpg",
    author: "Sarah Chen",
    role: "Startup Founder",
    profileImage: "/profiles/sarah.jpg"
  },
  {
    id: 2,
    title: "Landing My Dream Job",
    description: "The coding challenges and interview prep sessions helped me land a position at my dream company. Forever grateful!",
    image: "/achievements/job.jpg",
    author: "Mike Rodriguez",
    role: "Software Engineer",
    profileImage: "/profiles/mike.jpg"
  },
  {
    id: 3,
    title: "Open Source Contribution",
    description: "Started with small contributions and now I'm maintaining my own open source project with 2k+ stars!",
    image: "/achievements/opensource.jpg",
    author: "Alex Thompson",
    role: "Open Source Maintainer",
    profileImage: "/profiles/alex.jpg"
  }
];

export function CommunityHighlights() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent" />
      </div>

      <div className="container-fluid relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Community Success Stories
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Real achievements from our incredible community members
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {highlights.map((highlight, index) => (
            <ScrollReveal key={highlight.id} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card variant="glass" className="h-full group cursor-pointer overflow-hidden">
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <OptimizedImage
                        src={highlight.image}
                        alt={highlight.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                        {highlight.title}
                      </h3>
                      <p className="text-neutral-300 mb-6 leading-relaxed">
                        {highlight.description}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <OptimizedImage
                            src={highlight.profileImage}
                            alt={highlight.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-white">{highlight.author}</p>
                          <p className="text-sm text-neutral-400">{highlight.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}