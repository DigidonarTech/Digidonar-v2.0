import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Features from '../sections/Features';
import Trust from '../sections/Trust';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';
const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Features />
      <Trust />
      <FAQ />
      <CTA />
    </main>
  );
};

export default Home;