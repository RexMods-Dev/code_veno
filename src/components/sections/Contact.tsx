import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { CheckCircle2 } from 'lucide-react';
import contactAnimation from '../../assets/Contact Us.json';
import { ErrorBoundary } from '../ui/ErrorBoundary';
import { ViewportLottie } from '../ui/ViewportLottie';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  deadline: string;
  message: string;
  goals: string;
  targetAudience: string;
  agreement: boolean;
}

export const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'default_template';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default_public_key';
      
      if (serviceId === 'default_service') {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSuccess(true);
        reset();
        return;
      }
      
      await emailjs.send(serviceId, templateId, data as any, publicKey);
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-primary/5 blur-[120px] rounded-full z-[-1] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Let's Build Something Extraordinary.</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Ready to transform your ideas into reality? Fill out the form below, and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-12 max-w-7xl mx-auto">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full max-w-sm mx-auto relative pointer-events-none"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[80px] rounded-full z-[-1]" />
              <ErrorBoundary fallback={null}>
                <ViewportLottie animationData={contactAnimation} loop={true} />
              </ErrorBoundary>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/3 glass p-8 md:p-12 rounded-3xl relative z-10">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
                <h3 className="text-3xl font-heading font-bold mb-4">Inquiry Sent Successfully!</h3>
                <p className="text-secondary mb-8">We have received your project details and will be in touch shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="px-8 py-3 rounded-full bg-primary text-background font-medium hover:bg-gray-200 transition-colors">
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Basic Info */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary ml-1">Full Name *</label>
                    <input 
                      {...register('name', { required: true })} 
                      className="w-full bg-surface/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-red-500 text-xs ml-1">Required</span>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary ml-1">Email Address *</label>
                    <input 
                      type="email"
                      {...register('email', { required: true })} 
                      className="w-full bg-surface/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="john@company.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs ml-1">Required</span>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary ml-1">Phone Number</label>
                    <input 
                      {...register('phone')} 
                      className="w-full bg-surface/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary ml-1">Company Name</label>
                    <input 
                      {...register('company')} 
                      className="w-full bg-surface/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary ml-1">Project Type *</label>
                    <select 
                      {...register('projectType', { required: true })} 
                      className="w-full bg-surface/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
                    >
                      <option value="" className="bg-surface text-gray-500">Select Project Type</option>
                      <option value="web" className="bg-surface">Web Application</option>
                      <option value="mobile" className="bg-surface">Mobile App</option>
                      <option value="ai" className="bg-surface">AI Integration</option>
                      <option value="custom" className="bg-surface">Custom Software</option>
                      <option value="other" className="bg-surface">Other</option>
                    </select>
                    {errors.projectType && <span className="text-red-500 text-xs ml-1">Required</span>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary ml-1">Estimated Budget</label>
                    <select 
                      {...register('budget')} 
                      className="w-full bg-surface/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
                    >
                      <option value="" className="bg-surface text-gray-500">Select Budget Range</option>
                      <option value="<5k" className="bg-surface">Less than $5,000</option>
                      <option value="5k-15k" className="bg-surface">$5,000 - $15,000</option>
                      <option value="15k-50k" className="bg-surface">$15,000 - $50,000</option>
                      <option value="50k+" className="bg-surface">$50,000+</option>
                    </select>
                  </div>
                </div>

                {/* Detailed Questionnaire */}
                <div className="space-y-2 pt-4">
                  <label className="text-sm font-medium text-secondary ml-1">Business Goals</label>
                  <textarea 
                    {...register('goals')} 
                    rows={3}
                    className="w-full bg-surface/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="What are the main objectives of this project?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary ml-1">Target Audience</label>
                  <textarea 
                    {...register('targetAudience')} 
                    rows={2}
                    className="w-full bg-surface/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Who are the end users of this product?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary ml-1">Additional Details *</label>
                  <textarea 
                    {...register('message', { required: true })} 
                    rows={5}
                    className="w-full bg-surface/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Tell us everything we need to know about your requirements..."
                  />
                  {errors.message && <span className="text-red-500 text-xs ml-1">Required</span>}
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <input 
                    type="checkbox" 
                    {...register('agreement', { required: true })}
                    className="mt-1 w-5 h-5 rounded border-white/10 bg-surface/50 accent-primary cursor-pointer" 
                  />
                  <label className="text-sm text-secondary">
                    I agree to the privacy policy and consent to being contacted regarding my inquiry. *
                  </label>
                </div>

                <div className="pt-6 text-center md:text-left">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 py-4 rounded-full bg-primary text-background font-medium hover:bg-gray-200 transition-colors text-lg disabled:opacity-50 inline-flex items-center justify-center"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
