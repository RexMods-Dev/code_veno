import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, BrainCircuit, Globe, Database, Server } from 'lucide-react';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Bespoke software solutions tailored to your unique business needs, ensuring scalability and robust performance.',
    icon: <Code className="w-8 h-8 text-primary" />
  },
  {
    title: 'Mobile App Development',
    description: 'High-performance iOS and Android applications built with modern frameworks for exceptional user experiences.',
    icon: <Smartphone className="w-8 h-8 text-primary" />
  },
  {
    title: 'AI Integration',
    description: 'Intelligent automation and machine learning models integrated directly into your existing platforms.',
    icon: <BrainCircuit className="w-8 h-8 text-primary" />
  },
  {
    title: 'Web Development',
    description: 'Beautiful, fast, and secure web applications using React, Next.js, and modern backend technologies.',
    icon: <Globe className="w-8 h-8 text-primary" />
  },
  {
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure setup, migration, and management on AWS, GCP, or Azure.',
    icon: <Server className="w-8 h-8 text-primary" />
  },
  {
    title: 'API Development',
    description: 'RESTful and GraphQL APIs built with Django and FastAPI for seamless third-party integrations.',
    icon: <Database className="w-8 h-8 text-primary" />
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Our Services.</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            We provide end-to-end software development services, from initial concept to deployment and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl group relative overflow-hidden transition-all duration-300 hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
              <p className="text-secondary leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
