import React from 'react';
import { motion } from 'framer-motion';
import CountUpModule from 'react-countup';
const CountUp = (CountUpModule as any).default || CountUpModule;
import { useInView } from 'react-intersection-observer';

export const Statistics: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    { value: 20, suffix: '+', label: 'Projects Completed' },
    { value: 100, suffix: '%', label: 'Client Satisfaction' },
    { value: 2, suffix: '', label: 'Passionate Founders' },
    { value: 5, suffix: '+', label: 'Years Experience' }
  ];

  return (
    <section className="py-20 relative z-10 border-y border-border-glass bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center flex flex-col items-center"
            >
              <div className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-2">
                {inView ? <CountUp end={stat.value} duration={2.5} /> : '0'}
                {stat.suffix}
              </div>
              <span className="text-secondary text-sm md:text-base font-medium tracking-wide uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
