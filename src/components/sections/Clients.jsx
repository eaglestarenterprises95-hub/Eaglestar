import { CLIENTS, PROJECTS } from '../../data/clients';
import { Reveal } from '../ui/Reveal';

function LocationIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

export default function Clients() {
  const tickerClients = [...CLIENTS, ...CLIENTS];

  return (
    <section className="clients" id="clients">
      <div className="container">
        <div className="section-eyebrow">Trusted by Industry Leaders</div>
        <h2 className="section-title">
          Proven <span>Project Delivery</span>
        </h2>
        <div className="divider" />

        <div className="clients-ticker clients-ticker-spaced">
          <div className="ticker-track">
            {tickerClients.map((client, index) => (
              <div className="client-logo" key={`${client}-${index}`}>
                {client}
              </div>
            ))}
          </div>
        </div>

        <div className="featured-projects-header">
          <div className="section-eyebrow">Selected Work</div>
          <h3 className="section-title featured-projects-title">
            Recent <span>Deliveries</span>
          </h3>
        </div>

        <div className="project-cards">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title} direction="up" delay={(index % 3) + 1} className="project-card">
              {project.image && (
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <div className="project-card-body">
                <div className="proj-tag">{project.tag}</div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="proj-loc">
                  <LocationIcon />
                  {project.location}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
