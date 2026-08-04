import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Float, OrbitControls, PerformanceMonitor } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';
import heroAnimation from '../../assets/man_working_on_laptop.json';
import { ErrorBoundary } from '../ui/ErrorBoundary';
import { ViewportLottie } from '../ui/ViewportLottie';

const FloatingShapes = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[4, 2, -5]}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#333333" wireframe />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[-5, -1, -3]}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial color="#555555" wireframe />
        </mesh>
      </Float>
      
      <Float speed={1} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[3, -3, -4]}>
          <torusGeometry args={[1, 0.4, 16, 32]} />
          <meshStandardMaterial color="#222222" wireframe />
        </mesh>
      </Float>

      <Stars radius={50} depth={50} count={1500} factor={4} saturation={0} fade speed={1} />
    </>
  );
};

export const Hero: React.FC = () => {
  const [dpr, setDpr] = useState(1.5);
  // Pause WebGL render loop when Hero scrolls out of view
  const { ref: sectionRef, inView: heroInView } = useInView({
    threshold: 0.05,
    triggerOnce: false,
  });

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background — frameloop pauses when Hero is not visible */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ErrorBoundary fallback={<div className="w-full h-full bg-gradient-to-b from-blue-950/20 to-background" />}>
          <Canvas
            camera={{ position: [0, 0, 10], fov: 50 }}
            frameloop={heroInView ? 'always' : 'never'}
            dpr={dpr}
          >
            <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} />
            <FloatingShapes />
            <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          </Canvas>
        </ErrorBoundary>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mt-10">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-bold leading-tight"
          >
            We Engineer <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
              Digital Experiences
            </span> <br/>
            That Inspire.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-secondary max-w-xl font-sans"
          >
            We build scalable software, AI solutions, web applications, mobile apps, and business platforms for companies worldwide.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projects" className="px-8 py-4 rounded-full bg-primary text-background font-medium hover:bg-gray-200 transition-colors text-lg flex items-center gap-2 group">
              View Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full glass border border-border-glass text-primary font-medium hover:bg-white/5 transition-colors text-lg">
              Start a Project
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full max-w-lg mx-auto z-10 pointer-events-none"
        >
          {/* Lottie Animation — pauses when off-screen */}
          <div className="relative w-full h-auto drop-shadow-2xl opacity-80">
            <ErrorBoundary fallback={null}>
              <ViewportLottie animationData={heroAnimation} loop={true} />
            </ErrorBoundary>
          </div>
          
          {/* Glowing backdrop for Lottie */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[100px] rounded-full z-[-1]" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary"
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-border-glass overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/3 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};
