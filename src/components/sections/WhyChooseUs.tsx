import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Zap, Shield, Cpu, Clock, Layout, MessageSquare } from 'lucide-react';

const reasons = [
  { icon: <Zap className="w-6 h-6 text-primary" />, title: 'Fast Delivery', desc: 'Agile methodologies ensure rapid deployment without compromising quality.' },
  { icon: <Shield className="w-6 h-6 text-primary" />, title: 'Secure Applications', desc: 'Enterprise-grade security practices integrated from day one.' },
  { icon: <Cpu className="w-6 h-6 text-primary" />, title: 'Latest Technologies', desc: 'We build with the modern stack: React, Next, Node, and Python.' },
  { icon: <Clock className="w-6 h-6 text-primary" />, title: 'Scalable Architecture', desc: 'Systems designed to grow seamlessly alongside your business.' },
  { icon: <Layout className="w-6 h-6 text-primary" />, title: 'Modern Design', desc: 'Awwwards-level UI/UX that delights users and drives conversion.' },
  { icon: <MessageSquare className="w-6 h-6 text-primary" />, title: 'Transparent Comm.', desc: 'Clear, consistent updates and direct access to the founders.' }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 lg:sticky lg:top-32"
          >
            <span className="text-xs uppercase tracking-widest text-primary/60 font-mono mb-4 block">
              Why Partner With Us
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">Why Choose Us.</h2>
            <p className="text-secondary text-lg mb-8 leading-relaxed">
              We don't just write code; we solve business problems. Our approach combines technical excellence with strategic thinking to deliver products that give you a competitive edge.
            </p>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full bg-primary text-background font-medium hover:bg-gray-200 transition-all duration-300 inline-flex items-center gap-2 group shadow-lg hover:shadow-white/10"
            >
              <span>Get in Touch</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={item}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass p-7 rounded-2xl flex gap-5 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-300 shadow-inner">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-white transition-colors">{reason.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

