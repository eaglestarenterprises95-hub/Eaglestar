import { PILLARS } from '../../data/site';
import { Reveal } from '../ui/Reveal';

export default function WhyUs() {
  return (
    <section className="why-us" id="about">
      <div className="container">
        <div className="why-grid">
          <Reveal direction="left" className="why-img">
            <div className="why-img-block">
              <svg viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
              </svg>
            </div>
            <div className="why-badge-float">
              <div className="num">30+</div>
              <div className="lbl">
                Years of
                <br />
                Excellence
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="section-eyebrow">Why Choose Us</div>
            <h2 className="section-title">
              Built on <span>Engineering Discipline</span>
            </h2>
            <div className="divider" />
            <p className="section-sub">
              Our reputation is built on safe execution, consistent quality, and a practical
              approach to complex industrial requirements. We combine experienced teams with
              disciplined project delivery to keep operations moving.
            </p>
            <div className="pillars">
              {PILLARS.map((pillar, index) => (
                <Reveal key={pillar.title} direction="up" delay={(index % 4) + 1} className="pillar">
                  <div className="pillar-icon">
                    <svg viewBox="0 0 24 24">
                      <path d={pillar.iconPath} />
                    </svg>
                  </div>
                  <div className="pillar-text">
                    <strong>{pillar.title}</strong>
                    <span>{pillar.description}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
