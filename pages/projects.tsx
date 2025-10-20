import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code,
  ExternalLink,
  Github,
  Star,
  Eye,
  Users,
  Search,
  Globe,
  Smartphone,
  Brain,
  Database,
  Palette
} from 'lucide-react';
import Layout from '../components/Layout';
import { Card } from '../components/ui/Card';
import Button from '../components/ui/Button';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'web' | 'mobile' | 'ai-ml' | 'fullstack' | 'ui-ux' | 'opensource';
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  authors: {
    name: string;
    role: string;
    avatar?: string;
  }[];
  stats: {
    stars?: number;
    views?: number;
    forks?: number;
  };
  status: 'completed' | 'in-progress' | 'planning';
  featured: boolean;
  createdAt: string;
  tags: string[];
}

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | Project['category']>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Community Learning Platform',
      description: 'A comprehensive learning management system for our developer community with courses, assessments, and progress tracking.',
      longDescription: 'This platform serves as the central hub for all DevCatalyst learning resources. Built with React and Node.js, it features interactive courses, real-time progress tracking, peer collaboration tools, and integrated code editors. Students can join study groups, participate in coding challenges, and receive personalized learning recommendations.',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      githubUrl: 'https://github.com/devcatalyst/learning-platform',
      liveUrl: 'https://learn.devcatalyst.dev',
      authors: [
        { name: 'Hemaditya Kalakota', role: 'Full-stack Developer' },
        { name: 'Divyansh Teja Edla', role: 'Backend Developer' },
        { name: 'Parimitha', role: 'UI/UX Designer' }
      ],
      stats: { stars: 45, views: 1200, forks: 12 },
      status: 'in-progress',
      featured: true,
      createdAt: '2024-12-01',
      tags: ['Education', 'Community', 'Interactive Learning']
    },
    {
      id: '2',
      title: 'DevCatalyst Mobile App',
      description: 'Native mobile application for iOS and Android to stay connected with community events, projects, and discussions.',
      longDescription: 'Stay connected with the DevCatalyst community on the go! This React Native app provides push notifications for events, real-time chat with community members, project showcase, and offline access to learning materials. Features include event registration, community directory, and achievement tracking.',
      category: 'mobile',
      tech: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      githubUrl: 'https://github.com/devcatalyst/mobile-app',
      authors: [
        { name: 'Dhruv Gannaram', role: 'Mobile Developer' },
        { name: 'Parimitha', role: 'UI/UX Designer' }
      ],
      stats: { stars: 28, views: 850, forks: 8 },
      status: 'completed',
      featured: true,
      createdAt: '2024-11-15',
      tags: ['Mobile', 'Community', 'Real-time']
    },
    {
      id: '3',
      title: 'AI Code Mentor',
      description: 'Machine learning model that provides intelligent code reviews and suggestions for community members\' projects.',
      longDescription: 'An AI-powered coding assistant that analyzes code quality, suggests improvements, and provides personalized learning recommendations. Built using Python and TensorFlow, it can detect code smells, recommend best practices, and help beginners learn faster through intelligent feedback.',
      category: 'ai-ml',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'PostgreSQL'],
      githubUrl: 'https://github.com/devcatalyst/ai-code-mentor',
      authors: [
        { name: 'Hemaditya Kalakota', role: 'ML Engineer' },
        { name: 'Community Contributors', role: 'Data Scientists' }
      ],
      stats: { stars: 67, views: 2100, forks: 18 },
      status: 'in-progress',
      featured: true,
      createdAt: '2024-10-20',
      tags: ['AI', 'Machine Learning', 'Code Analysis']
    },
    {
      id: '4',
      title: 'Event Management Dashboard',
      description: 'Administrative dashboard for organizing and managing community events, workshops, and hackathons.',
      longDescription: 'A comprehensive event management system designed specifically for developer communities. Features include event creation, registration management, automated email notifications, resource allocation, and detailed analytics. Built with Vue.js and Laravel.',
      category: 'web',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/devcatalyst/event-management',
      liveUrl: 'https://events.devcatalyst.dev',
      authors: [
        { name: 'Divyansh Teja Edla', role: 'Frontend Developer' },
        { name: 'Community Contributors', role: 'Backend Developers' }
      ],
      stats: { stars: 34, views: 920, forks: 11 },
      status: 'completed',
      featured: false,
      createdAt: '2024-09-10',
      tags: ['Events', 'Management', 'Dashboard']
    },
    {
      id: '5',
      title: 'DevCatalyst Design System',
      description: 'Comprehensive UI component library and design system used across all community projects.',
      longDescription: 'A complete design system built with React and TypeScript, featuring reusable components, design tokens, icons, and comprehensive documentation. Includes accessibility guidelines, dark mode support, and extensive customization options.',
      category: 'ui-ux',
      tech: ['React', 'TypeScript', 'Storybook', 'Styled Components'],
      githubUrl: 'https://github.com/devcatalyst/design-system',
      liveUrl: 'https://design.devcatalyst.dev',
      authors: [
        { name: 'Parimitha', role: 'Design System Lead' },
        { name: 'Frontend Team', role: 'Contributors' }
      ],
      stats: { stars: 89, views: 3200, forks: 25 },
      status: 'completed',
      featured: false,
      createdAt: '2024-08-05',
      tags: ['Design System', 'Components', 'Documentation']
    },
    {
      id: '6',
      title: 'Open Source Contribution Tracker',
      description: 'Tool to track and gamify open source contributions from community members across various platforms.',
      longDescription: 'Motivate community members to contribute to open source projects! This tool tracks GitHub contributions, provides achievement badges, leaderboards, and personalized recommendations for projects to contribute to. Integrates with GitHub API and features real-time updates.',
      category: 'opensource',
      tech: ['Next.js', 'GitHub API', 'Supabase', 'Chart.js'],
      githubUrl: 'https://github.com/devcatalyst/oss-tracker',
      liveUrl: 'https://oss.devcatalyst.dev',
      authors: [
        { name: 'Community Contributors', role: 'Open Source Enthusiasts' }
      ],
      stats: { stars: 156, views: 4500, forks: 42 },
      status: 'completed',
      featured: false,
      createdAt: '2024-07-20',
      tags: ['Open Source', 'Gamification', 'GitHub']
    },
    {
      id: '7',
      title: 'Collaborative Code Editor',
      description: 'Real-time collaborative code editor for pair programming sessions and live coding workshops.',
      longDescription: 'Enable seamless collaboration during workshops and study sessions with this real-time code editor. Features include syntax highlighting for multiple languages, live cursors, chat integration, and session recording. Built with Socket.io for real-time synchronization.',
      category: 'web',
      tech: ['React', 'Socket.io', 'Monaco Editor', 'Node.js'],
      githubUrl: 'https://github.com/devcatalyst/collab-editor',
      authors: [
        { name: 'Hemaditya Kalakota', role: 'Lead Developer' },
        { name: 'Workshop Team', role: 'Contributors' }
      ],
      stats: { stars: 73, views: 1800, forks: 16 },
      status: 'in-progress',
      featured: false,
      createdAt: '2024-06-15',
      tags: ['Collaboration', 'Real-time', 'Code Editor']
    },
    {
      id: '8',
      title: 'Skills Assessment Platform',
      description: 'Automated coding assessment platform for evaluating technical skills and providing personalized learning paths.',
      longDescription: 'Comprehensive skills assessment platform that evaluates coding abilities across multiple programming languages. Features adaptive testing, automated code execution, detailed performance analytics, and AI-powered learning recommendations.',
      category: 'fullstack',
      tech: ['Django', 'React', 'Docker', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com/devcatalyst/skills-assessment',
      authors: [
        { name: 'Assessment Team', role: 'Full-stack Developers' }
      ],
      stats: { stars: 91, views: 2800, forks: 21 },
      status: 'planning',
      featured: false,
      createdAt: '2024-12-10',
      tags: ['Assessment', 'Skills', 'Learning Analytics']
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', icon: Code },
    { key: 'web', label: 'Web Development', icon: Globe },
    { key: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { key: 'ai-ml', label: 'AI & ML', icon: Brain },
    { key: 'fullstack', label: 'Full Stack', icon: Database },
    { key: 'ui-ux', label: 'UI/UX Design', icon: Palette },
    { key: 'opensource', label: 'Open Source', icon: Github }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  const getCategoryColor = (category: Project['category']) => {
    const colors = {
      web: 'bg-primary-500',
      mobile: 'bg-secondary-500',
      'ai-ml': 'bg-warning-500',
      fullstack: 'bg-danger-500',
      'ui-ux': 'bg-purple-500',
      opensource: 'bg-green-500'
    };
    return colors[category] || 'bg-neutral-500';
  };

  const getStatusColor = (status: Project['status']) => {
    const colors = {
      completed: 'text-secondary-400',
      'in-progress': 'text-warning-400',
      planning: 'text-neutral-400'
    };
    return colors[status];
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
                  Community Projects
                </span>
              </h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Explore the amazing projects built by our community members. From web applications 
                to AI models, discover what we&apos;re building together.
              </p>
            </motion.div>

            {/* Search Bar */}
            <div className="mb-8 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400 transition-colors duration-200 peer-focus:text-primary-400" />
                <input
                  type="text"
                  placeholder="Search projects, technologies, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="peer w-full px-6 py-4 pl-12 pr-6 text-base bg-neutral-800/80 border border-neutral-600 text-white placeholder-neutral-400 rounded-full focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 focus:outline-none shadow-lg focus:shadow-xl hover:shadow-xl backdrop-blur-sm focus:bg-neutral-800"
                />
              </div>
            </div>
            
            {/* Category Filter Tags */}
            <div className="flex gap-3 flex-wrap justify-center mb-12 max-w-4xl mx-auto">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? 'primary' : 'outline'}
                  size="sm"
                  leftIcon={category.icon}
                  onClick={() => setSelectedCategory(category.key as 'all' | Project['category'])}
                  className="transition-all duration-200 hover:scale-105"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="py-12 bg-neutral-950/50">
            <div className="container-fluid">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card variant="glass" hover className="p-6 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <span className={`${getCategoryColor(project.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                          {project.category.toUpperCase().replace('-', '/')}
                        </span>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-warning-400 drop-shadow-sm" />
                          <span className="text-sm text-neutral-400">{project.stats.stars || 0}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-neutral-300 mb-4 flex-grow">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map(tech => (
                          <span key={tech} className="bg-neutral-800 text-neutral-300 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-neutral-400 text-xs px-2 py-1">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="space-y-3 mt-auto">
                        <div className="flex items-center justify-between text-sm text-neutral-400">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-neutral-500" />
                            <span>{project.authors.length} contributor{project.authors.length !== 1 ? 's' : ''}</span>
                          </div>
                          <span className={`font-medium ${getStatusColor(project.status)}`}>
                            {project.status.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>

                        <div className="flex gap-2">
                          {project.githubUrl && (
                            <Button size="sm" variant="outline" leftIcon={Github} fullWidth>
                              Code
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button size="sm" variant="primary" leftIcon={ExternalLink} fullWidth>
                              Live Demo
                            </Button>
                          )}
                          {!project.liveUrl && (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              leftIcon={Eye} 
                              fullWidth
                              onClick={() => setSelectedProject(project)}
                            >
                              View Details
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Projects */}
        <section className="py-12">
          <div className="container-fluid">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                {selectedCategory === 'all' ? 'All Projects' : 
                  categories.find(cat => cat.key === selectedCategory)?.label || 'Projects'}
              </h2>
              <span className="text-neutral-400">{filteredProjects.length} projects found</span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card variant="glass" hover className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <span className={`${getCategoryColor(project.category)} text-white px-2 py-1 rounded text-xs font-medium`}>
                        {project.category.toUpperCase().replace('-', '/')}
                      </span>
                        {project.featured && (
                          <Star className="h-4 w-4 text-warning-400 drop-shadow-sm animate-pulse" />
                        )}
                    </div>
                    
                    <h3 className="font-semibold text-white mb-3 line-clamp-2">{project.title}</h3>
                    <p className="text-neutral-300 text-sm mb-4 line-clamp-3 flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 2).map(tech => (
                        <span key={tech} className="bg-neutral-800 text-neutral-300 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 2 && (
                        <span className="text-neutral-400 text-xs px-2 py-1">
                          +{project.tech.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-neutral-500">
                          <Github className="h-3 w-3" />
                          <span>{project.stats.stars || 0}</span>
                        </div>
                        <div className="flex items-center gap-1 text-neutral-500">
                          <Eye className="h-3 w-3" />
                          <span>{project.stats.views || 0}</span>
                        </div>
                      </div>
                      <span className={`font-medium ${getStatusColor(project.status)}`}>
                        {project.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="flex gap-2 mt-auto">
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" leftIcon={Github}>
                          Code
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="primary" 
                        leftIcon={project.liveUrl ? ExternalLink : Eye}
                        onClick={() => project.liveUrl ? window.open(project.liveUrl, '_blank') : setSelectedProject(project)}
                        fullWidth
                      >
                        {project.liveUrl ? 'Live' : 'Details'}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <Code className="h-16 w-16 text-neutral-600 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
                <p className="text-neutral-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-neutral-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <span className={`${getCategoryColor(selectedProject.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {selectedProject.category.toUpperCase().replace('-', '/')}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-neutral-400 hover:text-white"
                >
                  ×
                </button>
              </div>

              <p className="text-neutral-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(tech => (
                      <span key={tech} className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Contributors</h4>
                  <div className="space-y-2">
                    {selectedProject.authors.map((author, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            {author.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="text-white text-sm">{author.name}</div>
                          <div className="text-neutral-400 text-xs">{author.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" fullWidth onClick={() => setSelectedProject(null)}>
                  Close
                </Button>
                {selectedProject.githubUrl && (
                  <Button fullWidth leftIcon={Github}>
                    View Code
                  </Button>
                )}
                {selectedProject.liveUrl && (
                  <Button variant="primary" fullWidth leftIcon={ExternalLink}>
                    Live Demo
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProjectsPage;