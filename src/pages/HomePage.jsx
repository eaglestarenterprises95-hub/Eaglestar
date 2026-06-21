import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import WhyUs from '../components/sections/WhyUs';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomePage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <Hero />
      <WhyUs />
      <Services />
      <Testimonials />
    </div>
  );
}
