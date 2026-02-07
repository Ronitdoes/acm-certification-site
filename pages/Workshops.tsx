import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Calendar, Clock, BarChart, Code, Terminal, Cpu } from 'lucide-react';
import { Workshop } from '../types';

const WORKSHOPS: Workshop[] = [
  {
    id: '1',
    title: 'Full-Stack React & Node',
    date: 'Dec 15, 2023',
    description: 'Build a production-ready application from scratch. Learn state management, API design, and deployment.',
    skills: ['React', 'Node.js', 'PostgreSQL'],
    level: 'Advanced',
    instructor: 'Alex Rivera',
    image: 'https://picsum.photos/400/200?random=10'
  },
  {
    id: '2',
    title: 'Intro to Machine Learning',
    date: 'Jan 12, 2024',
    description: 'Understand the basics of neural networks and train your first model using PyTorch.',
    skills: ['Python', 'PyTorch', 'Data Analysis'],
    level: 'Beginner',
    instructor: 'Dr. Sarah Lee',
    image: 'https://picsum.photos/400/200?random=11'
  },
  {
    id: '3',
    title: 'Cybersecurity Fundamentals',
    date: 'Feb 05, 2024',
    description: 'Learn how to secure web applications against common vulnerabilities like XSS and SQL Injection.',
    skills: ['Security', 'Networking', 'Ethical Hacking'],
    level: 'Intermediate',
    instructor: 'Mark Davis',
    image: 'https://picsum.photos/400/200?random=12'
  }
];

const LevelBadge = ({ level }: { level: string }) => {
  const colors = {
    Beginner: 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800',
    Advanced: 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800',
  };
  // @ts-ignore
  const style = colors[level] || colors.Beginner;
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide border ${style}`}>
      {level}
    </span>
  );
};

const Workshops: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Upcoming Workshops</h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Hands-on sessions led by industry experts. Earn certificates upon completion of final projects.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WORKSHOPS.map((workshop, idx) => (
          <AnimatedSection key={workshop.id} delay={idx * 0.1}>
            <Card className="h-full flex flex-col p-0 overflow-hidden border-0 shadow-lg group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={workshop.image} 
                  alt={workshop.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <LevelBadge level={workshop.level} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                    <p className="flex items-center text-sm font-medium mb-1"><Calendar size={14} className="mr-1.5 opacity-80"/> {workshop.date}</p>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{workshop.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {workshop.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">Skills You'll Gain</p>
                    <div className="flex flex-wrap gap-2">
                      {workshop.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-100 dark:border-slate-700 font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="primary" className="w-full mt-4" size="sm">
                    Register Now
                  </Button>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Workshops;