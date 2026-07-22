import React from 'react';
import { motion } from 'framer-motion';
import processAnimation from '../../assets/Teamwork productivy.json';
import { ErrorBoundary } from '../ui/ErrorBoundary';
import { ViewportLottie } from '../ui/ViewportLottie';

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'Understanding your business, goals, and technical requirements.' },
  { step: '02', title: 'Planning', desc: 'Creating architecture design, project roadmaps, and UI/UX wireframes.' },
  { step: '03', title: 'Development', desc: 'Agile development with continuous integration and deployment (CI/CD).' },
  { step: '04', title: 'Testing', desc: 'Rigorous QA, security testing, and performance optimization.' },
  { step: '05', title: 'Deployment', desc: 'Smooth launch to production environments on modern cloud infrastructure.' },
  { step: '06', title: 'Maintenance', desc: 'Ongoing support, monitoring, and feature enhancements.' }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Process.</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            A systematic approach to delivering high-quality software on time and within budget.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-12 max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full max-w-md lg:max-w-lg mx-auto relative pointer-events-none opacity-90"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[100px] rounded-full z-[-1]" />
              <ErrorBoundary fallback={null}>
                <ViewportLottie animationData={processAnimation} loop={true} />
              </ErrorBoundary>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-white/10" />
            
            <div className="space-y-12">
              {processSteps.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="relative flex items-start gap-8"
                >
                  <div className="w-14 h-14 rounded-full glass border border-white/20 flex items-center justify-center font-heading font-bold text-xl z-10 bg-background text-primary shrink-0">
                    {item.step}
                  </div>
                  
                  <div className="flex flex-col pt-2">
                    <h3 className="text-2xl font-heading font-bold mb-2">{item.title}</h3>
                    <p className="text-secondary">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
