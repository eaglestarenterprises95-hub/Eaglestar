import { useEffect } from 'react';
import Services from '../components/sections/Services';
import { Reveal } from '../components/ui/Reveal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

const SPECIALIZED_OFFERINGS = [
  {
    title: 'Thermal & Refractory Works',
    items: [
      'Hot & Cold Thermal Insulation (Lagging & Cladding)',
      'High-Temperature Pipe Insulation & Aluminium Cladding',
      'Firebrickworks & Refractory Lining for Furnaces/Boilers',
      'Underdeck & Overdeck Roof Thermal Insulation',
    ],
  },
  {
    title: 'Piping & Structural Works',
    items: [
      'All Kinds of Industrial Pipeline Fabrication & Erection',
      'Pre-Engineered Building (PEB) Factories & Sheds',
      'Heavy Structural Steel Work & Utility Supports',
      'High-Pressure Steam & Process Pipeline Routing',
    ],
  },
  {
    title: 'Asset Protection & Auditing',
    items: [
      'Structural Steel Fireproofing (Intumescent/Cementitious Coating)',
      'PUF Panel Cold Storage & Controlled Atmosphere Rooms',
      'Infrared Thermography & Industrial Heat Loss Auditing',
      'Active and Passive Industrial Fire Suppression Systems',
    ],
  },
];

export default function ServicesPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      <header className="page-header">
        <div className="page-header-inner">
          <Reveal direction="down">
            <h1>Industrial <span>Services & Capabilities</span></h1>
            <p>
              From engineering and insulation to PEB structures, we offer complete turnkey 
              solutions tailored for manufacturing plants, refineries, and infrastructure.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Main Grid Section */}
      <Services />

      {/* Detailed Capabilities section */}
      <section className="services-details-section">
        <div className="container">
          <div className="services-details-header">
            <Reveal direction="up">
              <div className="section-eyebrow">Detailed Capabilities</div>
              <h2 className="section-title">Specialized <span>Technical Offerings</span></h2>
              <div className="divider" />
            </Reveal>
          </div>

          <div className="about-grid-3">
            {SPECIALIZED_OFFERINGS.map((offering, idx) => (
              <Reveal key={offering.title} direction="up" delay={idx + 1} className="specialized-card">
                <h4>{offering.title}</h4>
                <ul>
                  {offering.items.map((item) => (
                    <li key={item}>
                      <span className="bullet">⚡</span> {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="cta-banner-box">
            <Reveal direction="scale">
              <h3>Need a tailored solution for your facility?</h3>
              <p>
                Our engineering team works closely with plant managers to design and execute
                solutions conforming to all international safety and quality standards.
              </p>
              <Link to="/contact" className="btn-primary">Request technical consultation</Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
