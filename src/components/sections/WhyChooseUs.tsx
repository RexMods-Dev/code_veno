import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Clock, Layout, MessageSquare } from 'lucide-react';

const reasons = [
  { icon: <Zap className="w-6 h-6 text-primary" />, title: 'Fast Delivery', desc: 'Agile methodologies ensure rapid deployment without compromising quality.' },
  { icon: <Shield className="w-6 h-6 text-primary" />, title: 'Secure Applications', desc: 'Enterprise-grade security practices integrated from day one.' },
  { icon: <Cpu className="w-6 h-6 text-primary" />, title: 'Latest Technologies', desc: 'We build with the modern stack: React, Next, Node, and Python.' },
  { icon: <Clock className="w-6 h-6 text-primary" />, title: 'Scalable Architecture', desc: 'Systems designed to grow seamlessly alongside your business.' },
  { icon: <Layout className="w-6 h-6 text-primary" />, title: 'Modern Design', desc: 'Awwwards-level UI/UX that delights users and drives conversion.' },
  { icon: <MessageSquare className="w-6 h-6 text-primary" />, title: 'Transparent Comm.', desc: 'Clear, consistent updates and direct access to the founders.' }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Why Choose Us.</h2>
            <p className="text-secondary text-lg mb-8 leading-relaxed">
              We don't just write code; we solve business problems. Our approach combines technical excellence with strategic thinking to deliver products that give you a competitive edge.
            </p>
            <a href="#contact" className="px-8 py-3 rounded-full bg-primary text-background font-medium hover:bg-gray-200 transition-colors inline-block">
              Get in Touch
            </a>
          </motion.div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl flex gap-4 hover:bg-white/5 transition-colors group cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-white/30 transition-colors">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">{reason.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
