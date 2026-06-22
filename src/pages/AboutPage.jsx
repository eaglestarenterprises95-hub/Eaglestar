import { useEffect } from 'react';
import WhyUs from '../components/sections/WhyUs';
import { Reveal } from '../components/ui/Reveal';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <header className="page-header">
        <div className="page-header-inner">
          <Reveal direction="down">
            <h1>About <span>Eagle Star Enterprises</span></h1>
            <p>
              A trusted provider of industrial insulation, structural, and engineering solutions
              for demanding sectors across India since 1994.
            </p>
          </Reveal>
        </div>
      </header>

      <WhyUs />

      <section className="about-details-section">
        <div className="container">
          <div className="about-grid-3">
            <Reveal direction="up" delay={1} className="about-card">
              <div className="about-card-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.47 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver world-class engineering solutions that improve energy efficiency,
                safety, and sustainability across the industrial landscape of India.
              </p>
            </Reveal>

            <Reveal direction="up" delay={2} className="about-card">
              <div className="about-card-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most preferred and trusted partner for turnkey industrial execution,
                recognized for safety, technological excellence, and reliable project delivery.
              </p>
            </Reveal>

            <Reveal direction="up" delay={3} className="about-card">
              <div className="about-card-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-17h-2v2h2V5zm-2 14h2v-6h-2v6zm0-8h2V9h-2v2z" />
                </svg>
              </div>
              <h3>Core Values</h3>
              <p>
                Integrity in our partnerships, safety in our operations, quality in our
                engineering execution, and absolute commitment to our client timelines.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
