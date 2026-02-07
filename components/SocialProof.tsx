import React from 'react';
import Card from './ui/Card';
import AnimatedSection from './ui/AnimatedSection';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Software Engineer @ Google',
    quote: "The ACM React Workshop gave me the foundation I needed to crush my technical interviews. The certificate was a great talking point!",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    id: '2',
    name: 'David Miller',
    role: 'Data Scientist @ Amazon',
    quote: "I appreciated how practical the Python for Data Science certification was. It wasn't just theory; we built real models.",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    id: '3',
    name: 'Emily Davis',
    role: 'CS Junior',
    quote: "Collecting these certificates has motivated me to keep learning new tech stacks outside of my regular coursework.",
    avatar: "https://picsum.photos/100/100?random=3"
  }
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Student Success Stories</h2>
            <p className="text-slate-500 dark:text-slate-400 font-mono">Join 500+ students accelerating their careers.</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <AnimatedSection key={t.id} delay={idx * 0.1}>
              <Card className="h-full border-t-4 border-t-primary/20">
                <div className="flex items-start mb-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 mr-4" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</h4>
                    <p className="text-xs text-primary font-mono">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic text-sm leading-relaxed">"{t.quote}"</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;