import React from 'react';
import { motion } from 'framer-motion';
import codingAnimation from '../../assets/Coding.json';
import { ErrorBoundary } from '../ui/ErrorBoundary';
import { ViewportLottie } from '../ui/ViewportLottie';

const techs = [
  'Python', 'React', 'Node.js', 'Django', 'MongoDB', 
  'MySQL', 'PostgreSQL', 'Firebase', 'GitHub', 'Docker', 
  'AWS', 'Vercel'
];

export const Technologies: React.FC = () => {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Technologies We Use.</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            We build with the best modern technologies to ensure scalable, secure, and high-performance applications.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative pointer-events-none opacity-90 w-full max-w-lg mx-auto"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[350px] bg-primary/10 blur-[100px] rounded-full z-[-1]" />
              <ErrorBoundary fallback={null}>
                <ViewportLottie 
                  animationData={codingAnimation} 
                  loop={true} 
                  className="w-full h-auto drop-shadow-xl" 
                />
              </ErrorBoundary>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              {techs.map((tech, idx) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: idx * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                  className="glass px-5 py-3 md:px-6 md:py-4 rounded-2xl border border-white/5 flex items-center justify-center cursor-pointer flex-grow lg:flex-grow-0"
                >
                  <span className="text-base md:text-lg font-heading font-semibold text-primary/90">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
