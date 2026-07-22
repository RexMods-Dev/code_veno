import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Three.js / WebGL', level: 80 }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python / Django', level: 95 },
      { name: 'Node.js', level: 85 },
      { name: 'FastAPI', level: 90 },
      { name: 'PostgreSQL', level: 85 }
    ]
  },
  {
    title: 'DevOps & AI',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS / GCP', level: 80 },
      { name: 'Machine Learning', level: 75 },
      { name: 'CI/CD Pipelines', level: 85 }
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative z-10 border-t border-border-glass">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Expertise.</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            A comprehensive skill set that enables us to build scalable, full-stack applications from the ground up.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, catIdx) => (
            <div key={category.title} className="space-y-8">
              <h3 className="text-2xl font-heading font-bold text-primary border-b border-white/10 pb-4">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 text-sm font-medium">
                      <span className="text-secondary">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.5, delay: (catIdx * 0.2) + (idx * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-gray-600 to-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
