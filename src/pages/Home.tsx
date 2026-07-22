import React, { Suspense } from 'react';
import { Hero } from '../components/sections/Hero';

// Eagerly load Hero (above the fold). Lazy-load everything below.
const About = React.lazy(() => import('../components/sections/About').then(m => ({ default: m.About })));
const Skills = React.lazy(() => import('../components/sections/Skills').then(m => ({ default: m.Skills })));
const Services = React.lazy(() => import('../components/sections/Services').then(m => ({ default: m.Services })));
const Projects = React.lazy(() => import('../components/sections/Projects').then(m => ({ default: m.Projects })));
const Technologies = React.lazy(() => import('../components/sections/Technologies').then(m => ({ default: m.Technologies })));
const Process = React.lazy(() => import('../components/sections/Process').then(m => ({ default: m.Process })));
const Statistics = React.lazy(() => import('../components/sections/Statistics').then(m => ({ default: m.Statistics })));
const WhyChooseUs = React.lazy(() => import('../components/sections/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })));
const Contact = React.lazy(() => import('../components/sections/Contact').then(m => ({ default: m.Contact })));

// Invisible placeholder that matches the approximate height of a section
const SectionFallback = () => <div className="min-h-[50vh]" />;

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Skills />
        <Services />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Technologies />
        <Process />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Statistics />
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </>
  );
};

export default Home;
