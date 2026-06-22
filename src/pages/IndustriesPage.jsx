import { useEffect } from 'react';
import Industries from '../components/sections/Industries';
import { Reveal } from '../components/ui/Reveal';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function IndustriesPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="industries-page">
      <header className="page-header">
        <div className="page-header-inner">
          <Reveal direction="down">
            <h1>Industries <span>We Serve</span></h1>
            <p>
              Delivering high-compliance insulation, structural systems, and specialized
              engineering support across India's most critical industrial sectors.
            </p>
          </Reveal>
        </div>
      </header>

      <Industries />

      <section className="industries-compliance-section">
        <div className="container">
          <div className="compliance-grid">
            <Reveal direction="left" className="compliance-text">
              <div className="section-eyebrow">Sector Guidelines</div>
              <h2 className="section-title">Strict <span>Compliance & Safety</span></h2>
              <div className="divider" />
              <p>
                Operating in refineries, chemical plants, and clean room facilities requires
                stringent adherence to safety and operational guidelines. Eagle Star Enterprises ensures:
              </p>
              <ul>
                <li><strong>Licensed Company Auditing:</strong> Regular quality control updates for all steel and insulation materials.</li>
                <li><strong>On-Site Safety (HSE):</strong> 100% compliance with plant safety gear, fire watch protocols, and scaffolding security.</li>
                <li><strong>Acoustic & Fire Norms:</strong> Solutions designed to conform to ASTMs, EN standards, and national building codes.</li>
              </ul>
            </Reveal>
            <Reveal direction="right" className="compliance-stats-box">
              <div className="comp-item">
                <span className="num">0</span>
                <span className="lbl">LTI (Lost Time Incidents) over last 5 years</span>
              </div>
              <div className="comp-item">
                <span className="num">100%</span>
                <span className="lbl">Compliance with National Safety Standards</span>
              </div>
              <div className="comp-item">
                <span className="num">10</span>
                <span className="lbl">Indian States served with local mobilization</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
