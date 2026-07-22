import React from 'react';
import { ArrowUp } from 'lucide-react';

const socialLinks = [
  { label: 'GitHub', mark: 'GH' },
  { label: 'LinkedIn', mark: 'in' },
  { label: 'X', mark: 'X' },
  { label: 'Instagram', mark: 'IG' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface pt-20 pb-10 border-t border-border-glass relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Code Veno<span className="text-gray-500">.</span>
            </h2>
            <p className="text-secondary max-w-sm mb-8">
              A premium software agency founded by Abin R Philip and Prajith S Pradeep. We build scalable software, AI solutions, and web applications.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ label, mark }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-card border border-border-glass flex items-center justify-center text-xs font-semibold text-secondary hover:text-primary hover:bg-gray-800 transition-all"
                >
                  {mark}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-lg mb-6">Company</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#about" className="text-secondary hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-secondary hover:text-primary transition-colors">Services</a></li>
              <li><a href="#projects" className="text-secondary hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-secondary hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-lg mb-6">Contact</h3>
            <ul className="flex flex-col gap-4 text-secondary">
              <li>hello@codeveno.agency</li>
              <li>+91 123 456 7890</li>
              <li>Kerala, India</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-glass">
          <p className="text-secondary text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Code Veno Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-10 right-6 md:right-12 w-12 h-12 rounded-full bg-primary text-background flex items-center justify-center hover:scale-110 transition-transform z-20"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};
