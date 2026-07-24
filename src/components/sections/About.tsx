import React from 'react';
import { motion } from 'framer-motion';


const founders = [
  {
    name: 'Abin R Philip',
    role: 'Founder &  Developer',
    grad: 'BCA Graduate, University of Kerala',
    cert: 'IGNET Certified Python Full Stack Developer',
    skills: ['Backend Development', 'AI Integration', 'Django', 'Python', 'React'],
  },
  {
    name: 'Prajith S Pradeep',
    role: 'Co-Founder & Developer',
    grad: 'BCA Graduate, University of Kerala',
    cert: 'IGNET Certified Python Full Stack Developer',
    skills: ['Frontend', 'Backend', 'Full Stack', 'React', 'Python'],
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">The Minds Behind Code Veno.</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            We are passionate software developer who build modern digital products for startups, businesses, and enterprises worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ rotateY: idx === 0 ? 5 : -5, rotateX: 5, scale: 1.02 }}
              className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group cursor-pointer"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />



              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">{founder.name}</h3>
              <p className="text-primary/80 font-medium mb-6">{founder.role}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-secondary">{founder.grad}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-secondary">{founder.cert}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {founder.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
