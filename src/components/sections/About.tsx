import React from 'react';
import { motion } from 'framer-motion';

import abinImage from '../../assets/abin_new.png';

const founders = [
  {
    name: 'Abin R Philip',
    role: 'Founder & Developer',
    grad: 'BCA Graduate, University of Kerala',
    cert: 'IGNET Certified Python Full Stack Developer',
    skills: ['Backend Development', 'AI Integration', 'Django', 'Python', 'React'],
    image: abinImage,
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
            We are passionate software developers who build modern digital products for startups, businesses, and enterprises worldwide.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="glass p-6 md:p-12 rounded-[2.5rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
              
              <div className="flex flex-col gap-8 md:gap-12 relative z-10">
                {/* Top Section */}
                <div className={`grid grid-cols-1 ${founder.image ? 'md:grid-cols-[1fr_minmax(250px,_400px)]' : ''} gap-8 md:gap-12`}>
                  
                  {/* Text Section */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-primary">{founder.name}</h3>
                    <p className="text-secondary text-lg mb-8 font-medium tracking-wide">| {founder.role} |</p>
                    
                    <p className="text-secondary/80 leading-relaxed text-lg max-w-2xl">
                      Hi, I am {founder.name.split(' ')[0]}. I am a passionate developer holding a {founder.grad}. I am also an {founder.cert}. With extensive experience in modern web technologies, I focus on crafting scalable, high-performance solutions tailored to unique business needs.
                    </p>
                  </div>

                  {/* Image Section */}
                  {founder.image && (
                    <div className="rounded-3xl h-[350px] md:h-[400px] overflow-hidden">
                      <img src={founder.image} alt={founder.name} className="w-full h-full object-cover rounded-3xl grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10" />

                {/* Bottom Section */}
                <div className="flex flex-col items-center">
                  <h4 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-center text-primary">Areas of Expertise</h4>
                  <p className="text-secondary font-medium text-center text-lg md:text-xl mb-6 tracking-wide">
                    {founder.skills.join(' | ')}
                  </p>
                  <p className="text-secondary/80 leading-relaxed text-center max-w-4xl mx-auto">
                    {founder.name.split(' ')[0]} specializes in {founder.skills.slice(0, 2).join(' and ')}, helping clients navigate technical challenges and scale their platforms. Leveraging expertise in {founder.skills.slice(2).join(', ')}, {founder.name.split(' ')[0]} tailors approaches to ensure robust, maintainable, and modern digital architectures for every project.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
