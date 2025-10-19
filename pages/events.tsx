import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Search,
  Star
} from 'lucide-react';
import Layout from '../components/Layout';
import { Card } from '../components/ui/Card';
import Button from '../components/ui/Button';

interface Event {
  id: string;
  title: string;
  type: 'workshop' | 'hackathon' | 'meetup' | 'webinar';
  date: string;
  time: string;
  duration: string;
  location: string;
  description: string;
  instructor?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  maxParticipants: number;
  registeredCount: number;
  tags: string[];
  featured: boolean;
  price: number;
  image?: string;
}

const EventsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'workshop' | 'hackathon' | 'meetup' | 'webinar'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [registrationModal, setRegistrationModal] = useState<string | null>(null);

  const events: Event[] = [
    {
      id: '1',
      title: 'React.js Workshop: Building Modern Web Apps',
      type: 'workshop',
      date: '2025-02-15',
      time: '10:00 AM',
      duration: '4 hours',
      location: 'Main Auditorium, Matrusri Engineering College',
      description: 'Learn to build modern, responsive web applications using React.js. This hands-on workshop covers components, state management, hooks, and deployment.',
      instructor: 'Hemaditya Kalakota',
      level: 'intermediate',
      maxParticipants: 50,
      registeredCount: 32,
      tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
      featured: true,
      price: 0
    },
    {
      id: '2',
      title: 'DevCatalyst Hackathon 2025',
      type: 'hackathon',
      date: '2025-03-01',
      time: '9:00 AM',
      duration: '48 hours',
      location: 'Innovation Lab & Online',
      description: '48-hour coding marathon to build innovative solutions for real-world problems. Prizes worth ₹50,000 and internship opportunities.',
      level: 'intermediate',
      maxParticipants: 100,
      registeredCount: 67,
      tags: ['Hackathon', 'Innovation', 'Full Stack', 'AI/ML'],
      featured: true,
      price: 0
    },
    {
      id: '3',
      title: 'Python for Beginners: Data Structures & Algorithms',
      type: 'workshop',
      date: '2025-02-08',
      time: '2:00 PM',
      duration: '3 hours',
      location: 'Computer Lab 1',
      description: 'Perfect for beginners! Learn Python basics, data structures, and fundamental algorithms with practical coding exercises.',
      instructor: 'Divyansh Teja Edla',
      level: 'beginner',
      maxParticipants: 30,
      registeredCount: 28,
      tags: ['Python', 'DSA', 'Programming', 'Beginner'],
      featured: false,
      price: 0
    },
    {
      id: '4',
      title: 'UI/UX Design Thinking Workshop',
      type: 'workshop',
      date: '2025-02-20',
      time: '11:00 AM',
      duration: '5 hours',
      location: 'Design Studio',
      description: 'Learn the fundamentals of user experience design, design thinking process, and create stunning user interfaces using Figma.',
      instructor: 'Parimitha',
      level: 'beginner',
      maxParticipants: 25,
      registeredCount: 15,
      tags: ['UI/UX', 'Design', 'Figma', 'User Experience'],
      featured: false,
      price: 0
    },
    {
      id: '5',
      title: 'Cloud Computing with AWS - Tech Talk',
      type: 'webinar',
      date: '2025-02-12',
      time: '6:00 PM',
      duration: '2 hours',
      location: 'Online (Zoom)',
      description: 'Industry expert talk on cloud computing fundamentals, AWS services, and career opportunities in cloud technology.',
      instructor: 'Industry Expert',
      level: 'intermediate',
      maxParticipants: 200,
      registeredCount: 145,
      tags: ['AWS', 'Cloud Computing', 'Career', 'Industry Talk'],
      featured: false,
      price: 0
    },
    {
      id: '6',
      title: 'Open Source Contribution Meetup',
      type: 'meetup',
      date: '2025-02-25',
      time: '4:00 PM',
      duration: '3 hours',
      location: 'Community Center',
      description: 'Learn how to contribute to open source projects, understand Git workflows, and connect with maintainers.',
      level: 'beginner',
      maxParticipants: 40,
      registeredCount: 22,
      tags: ['Open Source', 'Git', 'GitHub', 'Community'],
      featured: false,
      price: 0
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesFilter = selectedFilter === 'all' || event.type === selectedFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredEvents = events.filter(event => event.featured);

  const getEventTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'workshop': return 'bg-primary-500';
      case 'hackathon': return 'bg-warning-500';
      case 'meetup': return 'bg-secondary-500';
      case 'webinar': return 'bg-danger-500';
      default: return 'bg-neutral-500';
    }
  };

  const getLevelColor = (level: Event['level']) => {
    switch (level) {
      case 'beginner': return 'text-secondary-400';
      case 'intermediate': return 'text-warning-400';
      case 'advanced': return 'text-danger-400';
      default: return 'text-neutral-400';
    }
  };

  const handleRegistration = (eventId: string) => {
    setRegistrationModal(eventId);
  };

  const closeRegistrationModal = () => {
    setRegistrationModal(null);
  };

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
              className="text-center mb-12"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="text-gradient bg-gradient-to-r from-primary-400 via-secondary-400 to-warning-400 bg-clip-text text-transparent">
                  Events & Workshops
                </span>
              </h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Join our community events, workshops, and hackathons to learn new technologies, 
                network with fellow developers, and grow your skills.
              </p>
            </motion.div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                {['all', 'workshop', 'hackathon', 'meetup', 'webinar'].map((filter) => (
                  <Button
                    key={filter}
                    variant={selectedFilter === filter ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedFilter(filter as 'all' | 'workshop' | 'hackathon' | 'meetup' | 'webinar')}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <section className="py-12 bg-neutral-950/50">
            <div className="container-fluid">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Featured Events</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card variant="glass" hover className="p-8 relative overflow-hidden">
                      <div className="absolute top-4 right-4">
                        <span className={`${getEventTypeColor(event.type)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                          {event.type.toUpperCase()}
                        </span>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                        <p className="text-neutral-300 mb-4">{event.description}</p>
                        
                        <div className="space-y-2 text-sm text-neutral-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{event.time} • {event.duration}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span>{event.registeredCount}/{event.maxParticipants} registered</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {event.tags.map(tag => (
                            <span key={tag} className="bg-neutral-800 text-neutral-300 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className={`font-medium ${getLevelColor(event.level)}`}>
                            {event.level.charAt(0).toUpperCase() + event.level.slice(1)}
                          </span>
                          {event.instructor && (
                            <p className="text-sm text-neutral-400 mt-1">by {event.instructor}</p>
                          )}
                        </div>
                        
                        <Button
                          variant="primary"
                          onClick={() => handleRegistration(event.id)}
                          disabled={event.registeredCount >= event.maxParticipants}
                        >
                          {event.registeredCount >= event.maxParticipants ? 'Full' : 'Register'}
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Events */}
        <section className="py-12">
          <div className="container-fluid">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                {selectedFilter === 'all' ? 'All Events' : `${selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)}s`}
              </h2>
              <span className="text-neutral-400">{filteredEvents.length} events found</span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card variant="glass" hover className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <span className={`${getEventTypeColor(event.type)} text-white px-2 py-1 rounded text-xs font-medium`}>
                        {event.type.toUpperCase()}
                      </span>
                      {event.featured && (
                        <Star className="h-4 w-4 text-warning-400" />
                      )}
                    </div>
                    
                    <h3 className="font-semibold text-white mb-3 line-clamp-2">{event.title}</h3>
                    <p className="text-neutral-300 text-sm mb-4 line-clamp-3 flex-grow">{event.description}</p>
                    
                    <div className="space-y-2 text-xs text-neutral-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3" />
                        <span>{event.registeredCount}/{event.maxParticipants}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className={`text-xs font-medium ${getLevelColor(event.level)}`}>
                        {event.level.toUpperCase()}
                      </span>
                      
                      <Button
                        size="sm"
                        variant={event.registeredCount >= event.maxParticipants ? 'outline' : 'primary'}
                        onClick={() => handleRegistration(event.id)}
                        disabled={event.registeredCount >= event.maxParticipants}
                      >
                        {event.registeredCount >= event.maxParticipants ? 'Full' : 'Register'}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-neutral-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No events found</h3>
                <p className="text-neutral-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Registration Modal */}
        {registrationModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-neutral-900 rounded-2xl p-8 max-w-md w-full"
            >
              <h3 className="text-xl font-bold text-white mb-4">Event Registration</h3>
              <p className="text-neutral-300 mb-6">
                Registration functionality will be implemented soon. Please contact us directly for now.
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Full Name
                  </label>
                  <input type="text" className="input" placeholder="Enter your name" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address
                  </label>
                  <input type="email" className="input" placeholder="Enter your email" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Phone Number
                  </label>
                  <input type="tel" className="input" placeholder="Enter your phone" />
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" fullWidth onClick={closeRegistrationModal}>
                  Cancel
                </Button>
                <Button fullWidth onClick={closeRegistrationModal}>
                  Register
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default EventsPage;