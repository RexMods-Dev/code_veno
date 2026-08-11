import React from 'react';
import { motion } from 'framer-motion';
import testimonialAnimation from '../../assets/testimonial card.json';
import { ErrorBoundary } from '../ui/ErrorBoundary';
import { ViewportLottie } from '../ui/ViewportLottie';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">What Our Clients Say.</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what founders and executives think about working with us.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full z-[-1]" />
          <ErrorBoundary fallback={null}>
            <ViewportLottie animationData={testimonialAnimation} loop={true} />
          </ErrorBoundary>
        </motion.div>
      </div>
    </section>
  );
};
