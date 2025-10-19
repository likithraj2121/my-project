import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  Target,
  Code,
  Palette,
  Heart,
  Zap,
  Award
} from 'lucide-react';
import Layout from '../components/Layout';
import { Card } from '../components/ui/Card';
import Button from '../components/ui/Button';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  department: 'leadership' | 'development' | 'design' | 'marketing' | 'community';
  avatar: string;
  bio: string;
  skills: string[];
  joinedDate: string;
  location: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  achievements: string[];
  favoriteQuote?: string;
  color: string;
}

const TeamPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<'all' | TeamMember['department']>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    // Leadership Team
    {
      id: '1',
      name: 'Divyansh Teja Edla',
      role: 'President & Founder',
      title: 'Community Leader',
      department: 'leadership',
      avatar: 'D',
      bio: 'Passionate about building inclusive developer communities and mentoring the next generation of tech innovators.',
      skills: ['Leadership', 'Community Building', 'Python', 'Web Development'],
      joinedDate: '2024-01-15',
      location: 'Hyderabad, India',
      social: {
        github: 'https://github.com/divyanshedla',
        linkedin: 'https://linkedin.com/in/divyanshedla',
        email: 'divyansh@devcatalyst.dev'
      },
      achievements: ['Founded DevCatalyst', '500+ Community Members', 'Organized 15+ Events'],
      favoriteQuote: "The best way to learn is by building together.",
      color: 'bg-primary-500'
    },
    {
      id: '2',
      name: 'Dhruv Gannaram',
      role: 'Vice President',
      title: 'Technical Strategist',
      department: 'leadership',
      avatar: 'DG',
      bio: 'Strategic thinker with expertise in mobile development and community growth initiatives.',
      skills: ['React Native', 'Flutter', 'Project Management', 'Mobile Development'],
      joinedDate: '2024-02-01',
      location: 'Hyderabad, India',
      social: {
        github: 'https://github.com/dhruvgannaram',
        linkedin: 'https://linkedin.com/in/dhruvgannaram',
        email: 'dhruv@devcatalyst.dev'
      },
      achievements: ['Led Mobile App Development', 'Mentored 50+ Developers', 'Hackathon Winner'],
      favoriteQuote: "Innovation happens when passion meets purpose.",
      color: 'bg-secondary-500'
    },
    {
      id: '3',
      name: 'Hemaditya Kalakota',
      role: 'Technical Lead',
      title: 'Full-Stack Architect',
      department: 'development',
      avatar: 'HK',
      bio: 'Full-stack developer with a passion for AI/ML and building scalable community platforms.',
      skills: ['React', 'Node.js', 'Python', 'AI/ML', 'System Design'],
      joinedDate: '2024-01-20',
      location: 'Hyderabad, India',
      social: {
        github: 'https://github.com/hemadityakalakota',
        linkedin: 'https://linkedin.com/in/hemadityakalakota',
        email: 'hemaditya@devcatalyst.dev'
      },
      achievements: ['Built Learning Platform', 'AI Code Mentor Creator', 'Workshop Instructor'],
      favoriteQuote: "Code is poetry written in logic.",
      color: 'bg-warning-500'
    },
    {
      id: '4',
      name: 'Parimitha',
      role: 'Event Planner & Designer',
      title: 'Creative Director',
      department: 'design',
      avatar: 'P',
      bio: 'Creative designer and event organizer who brings ideas to life through beautiful experiences.',
      skills: ['UI/UX Design', 'Event Management', 'Figma', 'Adobe Creative Suite'],
      joinedDate: '2024-01-25',
      location: 'Hyderabad, India',
      social: {
        linkedin: 'https://linkedin.com/in/parimitha',
        email: 'parimitha@devcatalyst.dev'
      },
      achievements: ['Designed Brand Identity', 'Organized 25+ Events', 'UI/UX Workshop Leader'],
      favoriteQuote: "Good design is not just what it looks like—it's how it works.",
      color: 'bg-danger-500'
    },
    
    // Development Team
    {
      id: '5',
      name: 'Arjun Reddy',
      role: 'Senior Backend Developer',
      title: 'API Architect',
      department: 'development',
      avatar: 'AR',
      bio: 'Backend specialist focused on building robust APIs and scalable microservices architecture.',
      skills: ['Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'GraphQL'],
      joinedDate: '2024-03-01',
      location: 'Bangalore, India',
      social: {
        github: 'https://github.com/arjunreddy',
        linkedin: 'https://linkedin.com/in/arjunreddy'
      },
      achievements: ['Built Community Platform API', 'Microservices Expert', 'Code Review Champion'],
      color: 'bg-primary-600'
    },
    {
      id: '6',
      name: 'Sneha Sharma',
      role: 'Frontend Developer',
      title: 'React Specialist',
      department: 'development',
      avatar: 'SS',
      bio: 'Frontend developer with expertise in React and modern web technologies.',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Testing'],
      joinedDate: '2024-03-15',
      location: 'Mumbai, India',
      social: {
        github: 'https://github.com/snehasharma',
        linkedin: 'https://linkedin.com/in/snehasharma',
        twitter: 'https://twitter.com/snehasharma'
      },
      achievements: ['Frontend Architecture', 'Component Library Creator', 'React Workshop Mentor'],
      color: 'bg-secondary-600'
    },
    {
      id: '7',
      name: 'Karthik Nair',
      role: 'Mobile Developer',
      title: 'Cross-Platform Expert',
      department: 'development',
      avatar: 'KN',
      bio: 'Mobile app developer specializing in React Native and Flutter applications.',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
      joinedDate: '2024-04-01',
      location: 'Chennai, India',
      social: {
        github: 'https://github.com/kartiknair',
        linkedin: 'https://linkedin.com/in/kartiknair'
      },
      achievements: ['DevCatalyst Mobile App', 'Cross-Platform Specialist', 'Mobile Workshop Leader'],
      color: 'bg-warning-600'
    },
    {
      id: '8',
      name: 'Priya Patel',
      role: 'DevOps Engineer',
      title: 'Infrastructure Specialist',
      department: 'development',
      avatar: 'PP',
      bio: 'DevOps engineer ensuring smooth deployments and robust infrastructure.',
      skills: ['AWS', 'Docker', 'Jenkins', 'Terraform', 'Monitoring'],
      joinedDate: '2024-04-15',
      location: 'Pune, India',
      social: {
        github: 'https://github.com/priyapatel',
        linkedin: 'https://linkedin.com/in/priyapatel'
      },
      achievements: ['CI/CD Pipeline Setup', 'Cloud Architecture', 'Infrastructure as Code'],
      color: 'bg-danger-600'
    },
    {
      id: '9',
      name: 'Rahul Kumar',
      role: 'AI/ML Developer',
      title: 'Data Science Lead',
      department: 'development',
      avatar: 'RK',
      bio: 'AI/ML engineer working on intelligent features for community platforms.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Analysis', 'NLP'],
      joinedDate: '2024-05-01',
      location: 'Delhi, India',
      social: {
        github: 'https://github.com/rahulkumar',
        linkedin: 'https://linkedin.com/in/rahulkumar'
      },
      achievements: ['AI Code Mentor', 'ML Workshop Series', 'Data Science Mentor'],
      color: 'bg-purple-500'
    },

    // Design Team
    {
      id: '10',
      name: 'Ananya Singh',
      role: 'UI/UX Designer',
      title: 'Design System Lead',
      department: 'design',
      avatar: 'AS',
      bio: 'UI/UX designer focused on creating intuitive and beautiful user experiences.',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems'],
      joinedDate: '2024-05-15',
      location: 'Gurgaon, India',
      social: {
        linkedin: 'https://linkedin.com/in/ananyasingh',
        twitter: 'https://twitter.com/ananyasingh'
      },
      achievements: ['Design System Creator', 'UX Research Expert', 'Design Workshop Mentor'],
      color: 'bg-pink-500'
    },
    {
      id: '11',
      name: 'Vikram Joshi',
      role: 'Visual Designer',
      title: 'Brand Creative',
      department: 'design',
      avatar: 'VJ',
      bio: 'Visual designer specializing in brand identity and marketing materials.',
      skills: ['Brand Design', 'Illustration', 'Adobe Creative Suite', 'Motion Graphics'],
      joinedDate: '2024-06-01',
      location: 'Mumbai, India',
      social: {
        linkedin: 'https://linkedin.com/in/vikramjoshi',
        twitter: 'https://twitter.com/vikramjoshi'
      },
      achievements: ['Brand Identity Design', 'Marketing Materials', 'Visual Content Creator'],
      color: 'bg-indigo-500'
    },
    {
      id: '12',
      name: 'Neha Agarwal',
      role: 'Product Designer',
      title: 'User Experience Strategist',
      department: 'design',
      avatar: 'NA',
      bio: 'Product designer with focus on user-centered design and product strategy.',
      skills: ['Product Design', 'User Testing', 'Journey Mapping', 'Strategy'],
      joinedDate: '2024-06-15',
      location: 'Bangalore, India',
      social: {
        linkedin: 'https://linkedin.com/in/nehaagarwal'
      },
      achievements: ['Product Strategy', 'User Experience Optimization', 'Design Thinking Workshops'],
      color: 'bg-teal-500'
    },

    // Community Team
    {
      id: '13',
      name: 'Siddharth Rao',
      role: 'Community Manager',
      title: 'Engagement Specialist',
      department: 'community',
      avatar: 'SR',
      bio: 'Community manager focused on member engagement and building connections.',
      skills: ['Community Building', 'Social Media', 'Event Planning', 'Communication'],
      joinedDate: '2024-07-01',
      location: 'Hyderabad, India',
      social: {
        linkedin: 'https://linkedin.com/in/siddharthrao',
        twitter: 'https://twitter.com/siddharthrao'
      },
      achievements: ['Community Growth', 'Member Engagement', 'Social Media Strategy'],
      color: 'bg-green-500'
    },
    {
      id: '14',
      name: 'Meera Reddy',
      role: 'Content Creator',
      title: 'Technical Writer',
      department: 'community',
      avatar: 'MR',
      bio: 'Content creator and technical writer helping community members learn and grow.',
      skills: ['Technical Writing', 'Content Strategy', 'Documentation', 'Blogging'],
      joinedDate: '2024-07-15',
      location: 'Chennai, India',
      social: {
        linkedin: 'https://linkedin.com/in/meerareddy',
        twitter: 'https://twitter.com/meerareddy'
      },
      achievements: ['Technical Blog Series', 'Documentation Lead', 'Writing Workshop Mentor'],
      color: 'bg-yellow-500'
    },
    {
      id: '15',
      name: 'Aditya Gupta',
      role: 'Workshop Coordinator',
      title: 'Learning Experience Manager',
      department: 'community',
      avatar: 'AG',
      bio: 'Workshop coordinator ensuring quality learning experiences for all members.',
      skills: ['Workshop Planning', 'Curriculum Design', 'Training', 'Assessment'],
      joinedDate: '2024-08-01',
      location: 'Delhi, India',
      social: {
        linkedin: 'https://linkedin.com/in/adityagupta'
      },
      achievements: ['Workshop Series Leader', 'Curriculum Developer', 'Learning Analytics'],
      color: 'bg-blue-500'
    },

    // Marketing Team
    {
      id: '16',
      name: 'Kavya Menon',
      role: 'Marketing Lead',
      title: 'Growth Strategist',
      department: 'marketing',
      avatar: 'KM',
      bio: 'Marketing lead focused on community growth and brand awareness.',
      skills: ['Digital Marketing', 'Growth Hacking', 'Analytics', 'Social Media'],
      joinedDate: '2024-08-15',
      location: 'Kochi, India',
      social: {
        linkedin: 'https://linkedin.com/in/kavyamenon',
        twitter: 'https://twitter.com/kavyamenon'
      },
      achievements: ['Growth Strategy', 'Brand Awareness', 'Marketing Campaigns'],
      color: 'bg-red-500'
    },
    {
      id: '17',
      name: 'Rohan Shah',
      role: 'Social Media Manager',
      title: 'Digital Engagement Lead',
      department: 'marketing',
      avatar: 'RS',
      bio: 'Social media manager building online presence and community engagement.',
      skills: ['Social Media Marketing', 'Content Planning', 'Engagement', 'Analytics'],
      joinedDate: '2024-09-01',
      location: 'Mumbai, India',
      social: {
        linkedin: 'https://linkedin.com/in/rohanshah',
        twitter: 'https://twitter.com/rohanshah'
      },
      achievements: ['Social Media Growth', 'Engagement Strategy', 'Content Creation'],
      color: 'bg-orange-500'
    },

    // Additional Team Members
    {
      id: '18',
      name: 'Shreya Iyer',
      role: 'Quality Assurance Lead',
      title: 'Testing Specialist',
      department: 'development',
      avatar: 'SI',
      bio: 'QA engineer ensuring high-quality software delivery across all projects.',
      skills: ['Manual Testing', 'Automation', 'Selenium', 'Quality Processes'],
      joinedDate: '2024-09-15',
      location: 'Bangalore, India',
      social: {
        github: 'https://github.com/shreyaiyer',
        linkedin: 'https://linkedin.com/in/shreyaiyer'
      },
      achievements: ['QA Process Setup', 'Test Automation', 'Quality Standards'],
      color: 'bg-cyan-500'
    },
    {
      id: '19',
      name: 'Akash Verma',
      role: 'Security Engineer',
      title: 'Cybersecurity Specialist',
      department: 'development',
      avatar: 'AV',
      bio: 'Security engineer focused on protecting community data and infrastructure.',
      skills: ['Cybersecurity', 'Penetration Testing', 'Security Audits', 'Risk Assessment'],
      joinedDate: '2024-10-01',
      location: 'Noida, India',
      social: {
        github: 'https://github.com/akashverma',
        linkedin: 'https://linkedin.com/in/akashverma'
      },
      achievements: ['Security Framework', 'Vulnerability Assessment', 'Security Training'],
      color: 'bg-gray-600'
    },
    {
      id: '20',
      name: 'Pooja Krishnan',
      role: 'Data Analyst',
      title: 'Analytics Specialist',
      department: 'development',
      avatar: 'PK',
      bio: 'Data analyst providing insights for community growth and engagement.',
      skills: ['Data Analysis', 'SQL', 'Python', 'Tableau', 'Statistics'],
      joinedDate: '2024-10-15',
      location: 'Chennai, India',
      social: {
        github: 'https://github.com/poojakrishnan',
        linkedin: 'https://linkedin.com/in/poojakrishnan'
      },
      achievements: ['Analytics Dashboard', 'Growth Insights', 'Data-Driven Decisions'],
      color: 'bg-emerald-500'
    },
    {
      id: '21',
      name: 'Manish Pandey',
      role: 'Partnership Manager',
      title: 'External Relations Lead',
      department: 'community',
      avatar: 'MP',
      bio: 'Partnership manager building relationships with industry and educational institutions.',
      skills: ['Partnership Development', 'Relationship Management', 'Networking'],
      joinedDate: '2024-11-01',
      location: 'Mumbai, India',
      social: {
        linkedin: 'https://linkedin.com/in/manishpandey'
      },
      achievements: ['Industry Partnerships', 'Educational Collaborations', 'Sponsorship Deals'],
      color: 'bg-violet-500'
    },
    {
      id: '22',
      name: 'Riya Malhotra',
      role: 'Event Coordinator',
      title: 'Experience Designer',
      department: 'community',
      avatar: 'RM',
      bio: 'Event coordinator creating memorable experiences for community members.',
      skills: ['Event Management', 'Logistics', 'Vendor Management', 'Experience Design'],
      joinedDate: '2024-11-15',
      location: 'Delhi, India',
      social: {
        linkedin: 'https://linkedin.com/in/riyamalhotra'
      },
      achievements: ['Event Excellence', 'Member Satisfaction', 'Experience Innovation'],
      color: 'bg-rose-500'
    },
    {
      id: '23',
      name: 'Sameer Ahmed',
      role: 'Mentor Coordinator',
      title: 'Learning Facilitator',
      department: 'community',
      avatar: 'SA',
      bio: 'Mentor coordinator connecting members with experienced industry professionals.',
      skills: ['Mentorship Programs', 'Career Guidance', 'Professional Development'],
      joinedDate: '2024-12-01',
      location: 'Hyderabad, India',
      social: {
        linkedin: 'https://linkedin.com/in/sameerahmed'
      },
      achievements: ['Mentorship Program', 'Career Success Stories', 'Professional Network'],
      color: 'bg-lime-500'
    },
    {
      id: '24',
      name: 'Nisha Gupta',
      role: 'Operations Manager',
      title: 'Process Optimizer',
      department: 'leadership',
      avatar: 'NG',
      bio: 'Operations manager streamlining processes and ensuring efficient community operations.',
      skills: ['Operations Management', 'Process Improvement', 'Project Management'],
      joinedDate: '2024-12-15',
      location: 'Pune, India',
      social: {
        linkedin: 'https://linkedin.com/in/nishagupta'
      },
      achievements: ['Process Optimization', 'Operational Excellence', 'Efficiency Improvements'],
      color: 'bg-amber-500'
    },
    {
      id: '25',
      name: 'Varun Reddy',
      role: 'Technology Evangelist',
      title: 'Innovation Champion',
      department: 'development',
      avatar: 'VR',
      bio: 'Technology evangelist exploring emerging technologies and fostering innovation.',
      skills: ['Technology Research', 'Innovation', 'Public Speaking', 'Trend Analysis'],
      joinedDate: '2025-01-01',
      location: 'Bangalore, India',
      social: {
        github: 'https://github.com/varunreddy',
        linkedin: 'https://linkedin.com/in/varunreddy',
        twitter: 'https://twitter.com/varunreddy'
      },
      achievements: ['Technology Innovation', 'Research Leadership', 'Tech Talk Series'],
      color: 'bg-slate-500'
    }
  ];

  const departments = [
    { key: 'all', label: 'All Team', icon: Users, count: teamMembers.length },
    { key: 'leadership', label: 'Leadership', icon: Target, count: teamMembers.filter(m => m.department === 'leadership').length },
    { key: 'development', label: 'Development', icon: Code, count: teamMembers.filter(m => m.department === 'development').length },
    { key: 'design', label: 'Design', icon: Palette, count: teamMembers.filter(m => m.department === 'design').length },
    { key: 'community', label: 'Community', icon: Heart, count: teamMembers.filter(m => m.department === 'community').length },
    { key: 'marketing', label: 'Marketing', icon: Zap, count: teamMembers.filter(m => m.department === 'marketing').length }
  ];

  const filteredMembers = teamMembers.filter(member => 
    selectedDepartment === 'all' || member.department === selectedDepartment
  );

  const getDepartmentIcon = (department: TeamMember['department']) => {
    const icons = {
      leadership: Target,
      development: Code,
      design: Palette,
      community: Heart,
      marketing: Zap
    };
    return icons[department] || Users;
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
                  Meet Our Team
                </span>
              </h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                The amazing people behind DevCatalyst who make our community thrive. 
                Each member brings unique skills and passion to help fellow developers grow.
              </p>
            </motion.div>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {departments.map((dept) => (
                <Button
                  key={dept.key}
                  variant={selectedDepartment === dept.key ? 'primary' : 'outline'}
                  size="sm"
                  leftIcon={dept.icon}
                  onClick={() => setSelectedDepartment(dept.key as 'all' | TeamMember['department'])}
                >
                  {dept.label} ({dept.count})
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-12">
          <div className="container-fluid">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMembers.map((member, index) => {
                const DeptIcon = getDepartmentIcon(member.department);
                return (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <Card 
                      variant="glass" 
                      hover 
                      className="p-6 h-full flex flex-col cursor-pointer"
                      onClick={() => setSelectedMember(member)}
                    >
                      {/* Avatar and Department */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 ${member.color} rounded-full flex items-center justify-center`}>
                          <span className="text-xl font-bold text-white">{member.avatar}</span>
                        </div>
                        <div className="text-neutral-400">
                          <DeptIcon className="h-5 w-5" />
                        </div>
                      </div>

                      {/* Member Info */}
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                        <p className="text-primary-400 font-medium text-sm mb-2">{member.role}</p>
                        <p className="text-neutral-400 text-sm mb-3">{member.title}</p>
                        
                        <p className="text-neutral-300 text-sm mb-4 line-clamp-2">{member.bio}</p>

                        {/* Top Skills */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {member.skills.slice(0, 3).map(skill => (
                            <span key={skill} className="bg-neutral-800 text-neutral-300 px-2 py-1 rounded text-xs">
                              {skill}
                            </span>
                          ))}
                          {member.skills.length > 3 && (
                            <span className="text-neutral-400 text-xs px-2 py-1">
                              +{member.skills.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex items-center gap-3 mt-auto">
                        {member.social.github && (
                          <a 
                            href={member.social.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a 
                            href={member.social.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a 
                            href={member.social.twitter} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Twitter className="h-4 w-4" />
                          </a>
                        )}
                        {member.social.email && (
                          <a 
                            href={`mailto:${member.social.email}`}
                            className="text-neutral-400 hover:text-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Mail className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Member Detail Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-neutral-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-6">
                  <div className={`w-20 h-20 ${selectedMember.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-2xl font-bold text-white">{selectedMember.avatar}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{selectedMember.name}</h3>
                    <p className="text-primary-400 font-medium mb-1">{selectedMember.role}</p>
                    <p className="text-neutral-400">{selectedMember.title}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-neutral-400">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedMember.location}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-neutral-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <p className="text-neutral-300 mb-6 leading-relaxed">{selectedMember.bio}</p>

              {selectedMember.favoriteQuote && (
                <blockquote className="border-l-4 border-primary-500 pl-4 mb-6 italic text-neutral-300">
                  &quot;{selectedMember.favoriteQuote}&quot;
                </blockquote>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-white mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map(skill => (
                      <span key={skill} className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Achievements</h4>
                  <ul className="space-y-1">
                    {selectedMember.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-neutral-300 text-sm">
                        <Award className="h-4 w-4 text-warning-400 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-neutral-800">
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {new Date(selectedMember.joinedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                </div>

                <div className="flex items-center gap-4">
                  {selectedMember.social.github && (
                    <a 
                      href={selectedMember.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {selectedMember.social.linkedin && (
                    <a 
                      href={selectedMember.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {selectedMember.social.twitter && (
                    <a 
                      href={selectedMember.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {selectedMember.social.email && (
                    <a 
                      href={`mailto:${selectedMember.social.email}`}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TeamPage;