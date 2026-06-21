import { useCallback } from 'react';
import { SERVICES } from '../../data/services';
import { Reveal } from '../ui/Reveal';
import { Link } from 'react-router-dom';

function ServiceCard({ service, delay }) {
  const handleMouseEnter = useCallback((e) => {
    const card = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.style.cssText = `position:absolute;border-radius:50%;background:rgba(200,146,42,.15);
      width:0;height:0;top:50%;left:50%;transform:translate(-50%,-50%);
      animation:ripple .6s ease forwards;pointer-events:none;`;
    if (getComputedStyle(card).position === 'static') {
      card.style.position = 'relative';
    }
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  }, []);

  return (
    <Reveal direction="up" delay={delay} className="service-card" onMouseEnter={handleMouseEnter}>
      <div className="service-img" style={{ background: service.gradient }}>
        <svg viewBox="0 0 24 24">
          <path d={service.iconPath} />
        </svg>
        <div className="s-label">
          <span>{service.title}</span>
        </div>
      </div>
      <div className="service-body">
        <p>{service.description}</p>
        <Link to="/contact">Learn More →</Link>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <Reveal direction="up" className="services-header">
          <div>
            <div className="section-eyebrow">Our Capabilities</div>
            <h2 className="section-title">
              Integrated <span>Industrial Services</span>
            </h2>
            <div className="divider" />
          </div>
          <p className="services-header-desc">
            We deliver end-to-end solutions across insulation, structural systems, and facility
            support services with a strong focus on quality, safety, and timely execution.
          </p>
        </Reveal>
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} delay={(index % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
