import { Link } from 'react-router-dom';
import { HERO_STATS } from '../../data/site';
import { CountUp } from '../ui/CountUp';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bar" />
      <div className="hero-accent" />
      <div className="hero-inner">
        <div className="hero-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Trusted Industrial Partner Since 1994
        </div>
        <h1>
          Reliable <em>Industrial</em> Solutions for High-Performance Facilities
        </h1>
        <p>
          From insulation and structural systems to turnkey execution, we support factories,
          plants, and infrastructure projects with dependable engineering and on-site delivery.
        </p>
        <div className="hero-btns">
          <Link to="/contact" className="btn-primary">
            Request a Proposal
          </Link>
          <Link to="/services" className="btn-outline">
            Explore Solutions
          </Link>
        </div>
        <div className="hero-stats">
          {HERO_STATS.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <CountUp count={stat.count} suffix={stat.suffix} />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
