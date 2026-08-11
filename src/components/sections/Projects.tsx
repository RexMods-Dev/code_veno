import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';

const projects = [
  {
    category: 'Real-time Platform',
    title: 'Auction Hub',
    description: 'Real-time bidding logic with Celery background task processing, multi-user auction sessions, OTP verification, and automated notification workflows.',
    tech: ['Django', 'Celery', 'Redis', 'PostgreSQL'],
  },
  {
    category: 'Healthcare / IoT',
    title: 'Smart RFID Hospital System',
    description: 'A full-stack HMS integrating web technologies with embedded hardware for faster patient identification. Uses RFID smart cards communicating via microcontrollers to a Django REST API.',
    tech: ['Django', 'IoT (ESP32)', 'Supabase', 'RFID'],
  },
  {
    category: 'Mobile Application',
    title: 'BikeTracker',
    description: 'Real-time GPS tracking, speed monitoring, and battery telemetry mobile interface built with clean and responsive architecture.',
    tech: ['React Native', 'Expo', 'Firebase', 'Redux'],
  },
  {
    category: 'Enterprise / AI',
    title: 'AssetGuard',
    description: 'An enterprise solution combining digital asset management with streamlined real estate workflows. Features secure document storage, multi-party automated approvals, and custom dual-OTP authentication.',
    tech: ['Advanced Django', 'Raw SQL', 'AI', 'Twilio'],
  },
  {
    category: 'Web Application',
    title: 'TourEase',
    description: 'Multi-role system (Admin/Vendor/User) built with Django REST Framework, Razorpay payment gateway integration, secure transactions, and optimized database queries.',
    tech: ['Django', 'DRF', 'MySQL', 'Razorpay'],
  },
  {
    category: 'Management System',
    title: 'Micro Rentals',
    description: 'A complete rental platform for laboratory equipment featuring independent branches with data isolation. Includes real-time inventory tracking and automated maintenance scheduling.',
    tech: ['Flask', 'Multi-tenant', 'Secure Auth'],
  }
];

type LiveExample = {
  title: string;
  url: string;
  active: boolean;
  note?: string;
};

const liveExamples: LiveExample[] = [
  {
    title: 'Real Estate Website',
    url: 'https://rexmods-dev.github.io/auren-dev/',
    active: true
  },
  {
    title: 'Game Studio Website',
    url: 'https://rexmods-dev.github.io/nexus/',
    active: true,
  },
  {
    title: 'UI/UX Website',
    url: 'https://rexmods-dev.github.io/veyra-studio/',
    active: true,
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">Selected Works.</h2>
          <p className="text-secondary max-w-2xl text-lg">
            A showcase of our sophisticated digital architectures, expertly crafted for scale and performance.
          </p>
        </motion.div>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col h-full bg-surface/40 backdrop-blur-sm border border-white/10 hover:border-white/20 p-6 md:p-8 rounded-3xl group transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-white/5"
            >
              <span className="text-xs font-serif uppercase tracking-widest text-secondary/70 mb-4 block">
                {project.category}
              </span>
              
              <h3 className="text-2xl font-heading font-bold mb-4 text-primary group-hover:text-white transition-colors">
                {project.title}
              </h3>
              
              <p className="text-secondary/80 text-sm leading-relaxed font-sans flex-grow">
                {project.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span 
                    key={t} 
                    className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs text-secondary/90 font-medium tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Industry Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-32 max-w-3xl"
        >
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-primary">Live Industry Examples</h3>
            <p className="text-secondary text-sm md:text-base">Explore our actively deployed platforms and demonstration environments.</p>
          </div>

          <div className="flex flex-col gap-3">
            {liveExamples.map((example) => (
              <div 
                key={example.title}
                className={`py-4 px-6 md:px-8 rounded-2xl border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 ${example.active ? 'bg-surface/50 hover:bg-surface hover:border-white/20' : 'bg-surface/20 opacity-70'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${example.active ? 'bg-primary/10 text-primary' : 'bg-white/5 text-secondary'}`}>
                    <Globe size={18} />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-heading font-semibold text-primary">{example.title}</h4>
                    {!example.active && (
                      <span className="text-xs text-secondary/60 font-medium">{example.note}</span>
                    )}
                  </div>
                </div>

                {example.active ? (
                  <a 
                    href={example.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary hover:text-background transition-colors inline-flex items-center gap-2 text-sm w-fit"
                  >
                    View Live <ExternalLink size={14} />
                  </a>
                ) : (
                  <div className="px-5 py-2.5 rounded-full border border-white/10 text-secondary/60 font-medium inline-flex items-center gap-2 text-sm w-fit cursor-not-allowed">
                    Coming Soon
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
