import { TESTIMONIALS } from '../../data/testimonials';
import { Reveal } from '../ui/Reveal';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-eyebrow">Client Partnerships</div>
        <h2 className="section-title">
          Trusted by <span>Industrial Leaders</span>
        </h2>
        <div className="divider" />
        <div className="testi-grid">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} direction="up" delay={index + 1} className="testi-card">
              <p>{item.quote}</p>
              <div className="author">
                <div className="author-badge">{item.initials}</div>
                <div className="author-info">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
