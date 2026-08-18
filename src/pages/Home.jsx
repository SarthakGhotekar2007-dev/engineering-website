import React from 'react';
import Hero from '../components/Hero/Hero';
import Capabilities from '../components/Capabilities/Capabilities';
import Machinery from '../components/Machinery/Machinery';
import Projects from '../components/Projects/Projects';
import WhyUs from '../components/WhyUs/WhyUs';
import Process from '../components/Process/Process';
import PremiumCTA from '../components/PremiumCTA/PremiumCTA';
import AnimatedSection from '../components/AnimatedSection/AnimatedSection';
import SEO from '../components/SEO/SEO';

const Home = () => {
  return (
    <div className="home-page">
      <SEO 
        title="Sai Krupa Engineering Works | Engineering Services & Precision Machining" 
        description="Sai Krupa Engineering Works provides reliable engineering and industrial services including precision machining, welding, drilling, fabrication, and custom components in Sinnar MIDC."
      />
      <Hero />
      <AnimatedSection><Capabilities /></AnimatedSection>
      <AnimatedSection><Machinery /></AnimatedSection>
      <AnimatedSection><Projects /></AnimatedSection>
      <AnimatedSection><WhyUs /></AnimatedSection>
      <AnimatedSection><Process /></AnimatedSection>
      <AnimatedSection><PremiumCTA /></AnimatedSection>
    </div>
  );
};

export default Home;
