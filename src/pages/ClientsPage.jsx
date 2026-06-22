import { useEffect } from 'react';
import Clients from '../components/sections/Clients';
import Testimonials from '../components/sections/Testimonials';
import { Reveal } from '../components/ui/Reveal';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ClientsPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="clients-page">
      <header className="page-header">
        <div className="page-header-inner">
          <Reveal direction="down">
            <h1>Clients & <span>Project Deliveries</span></h1>
            <p>
              Collaborating with India's top public sector undertakings, private developers,
              and multinational manufacturing firms since 1994.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Renders Client Ticker and Project Cards */}
      <Clients />

      {/* Renders testimonials */}
      <Testimonials />
    </div>
  );
}
