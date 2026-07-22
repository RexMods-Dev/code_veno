import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Dashboard AI',
    category: 'Web Application / AI',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tech: ['React', 'Python', 'FastAPI', 'TensorFlow']
  },
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    tech: ['Next.js', 'Django', 'PostgreSQL', 'Stripe']
  },
  {
    title: 'HealthCare Mobile App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    tech: ['React Native', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    title: 'Enterprise CRM',
    category: 'Custom Software',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop',
    tech: ['React', 'Python', 'MySQL', 'Docker']
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">Selected Works.</h2>
            <p className="text-secondary max-w-xl text-lg">
              A glimpse into our portfolio of scalable software solutions and digital experiences.
            </p>
          </div>
          <a href="#contact" className="text-primary border-b border-primary pb-1 hover:text-gray-300 transition-colors inline-flex items-center gap-2">
            View All Projects <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 2) * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute top-6 right-6 z-20 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-background transition-colors">
                    <Code size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-background transition-colors">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-secondary text-sm font-medium tracking-wider uppercase">{project.category}</span>
                <h3 className="text-2xl md:text-3xl font-heading font-bold">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map(t => (
                    <span key={t} className="text-sm text-secondary/80 bg-surface px-3 py-1 rounded-full border border-border-glass">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
