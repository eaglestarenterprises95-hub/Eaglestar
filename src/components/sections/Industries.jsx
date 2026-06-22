import { INDUSTRIES } from '../../data/industries';
import { Reveal } from '../ui/Reveal';

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <Reveal direction="up" className="section-eyebrow">
          Industries Served
        </Reveal>
        <Reveal direction="up" delay={1}>
          <h2 className="section-title">
            Our Industrial <span>Reach</span>
          </h2>
        </Reveal>
        <Reveal direction="up" delay={2}>
          <p className="section-sub">
            We serve a diverse cross-section of India&apos;s most critical industries, delivering
            engineering expertise where it matters most.
          </p>
        </Reveal>
        <div className="ind-grid">
          {INDUSTRIES.map((industry, index) => (
            <Reveal
              key={industry.name}
              direction={index === 0 ? 'scale' : 'up'}
              delay={index === 0 ? 1 : undefined}
              className="ind-cell"
            >
              <svg viewBox="0 0 24 24">
                <path d={industry.iconPath} />
              </svg>
              <strong>{industry.name}</strong>
              <ul>
                {industry.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
