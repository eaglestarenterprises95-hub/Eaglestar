import { useEffect } from 'react';
import Contact from '../components/sections/Contact';
import { Reveal } from '../components/ui/Reveal';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <header className="page-header">
        <div className="page-header-inner">
          <Reveal direction="down">
            <h1>Request a Quote & <span>Contact Us</span></h1>
            <p>
              Get in touch with our engineering team to discuss material supply, design consulting,
              or end-to-end turnkey project execution.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Renders the interactive Contact Form and basic Office contact details */}
      <Contact />

      {/* Map Placeholder & Additional Office Info */}
      <section className="contact-additional-section">
        <div className="container">
          <div className="about-grid-3">
            <Reveal direction="up" delay={1} className="contact-meta-card">
              <h4>Erode Head Office</h4>
              <a
                href="https://www.google.com/maps?q=11.345562,77.685943"
                target="_blank"
                rel="noopener noreferrer"
                className="address-link"
              >
                <p>
                  24-A Bharathi Nagar,<br />
                  Villarasampatti, Erode – 638107,<br />
                  Tamil Nadu, India
                </p>
              </a>
              <div className="meta-info">
                <span><strong>Hours:</strong> Mon - Sat (9:00 AM - 6:00 PM)</span>
                <span>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+919445120504">+91 94451 20504</a> /{' '}
                  <a href="tel:+919842770504">+91 98427 70504</a>
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={2} className="contact-meta-card">
              <h4>Technical Support Desk</h4>
              <p>
                For technical specifications of insulation materials, load calculations,
                or PEB design consultations.
              </p>
              <div className="meta-info">
                <span>
                  <strong>Email:</strong>{' '}
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ntpanitha1@gmail.com" target="_blank" rel="noopener noreferrer">
                    ntpanitha1@gmail.com
                  </a>
                </span>
                <span><strong>Turnaround:</strong> 24 to 48 Hours</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={3} className="contact-meta-card">
              <h4>Carrier Opportunities</h4>
              <p>
                We are constantly looking for certified safety engineers, mechanical fitters,
                and execution managers.
              </p>
              <div className="meta-info">
                <span>
                  <strong>Email:</strong>{' '}
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ntpanitha1@gmail.com" target="_blank" rel="noopener noreferrer">
                    ntpanitha1@gmail.com
                  </a>
                </span>
                <span><strong>Status:</strong> Hiring Site Supervisors</span>
              </div>
            </Reveal>
          </div>

          <div className="map-placeholder-box">
            <Reveal direction="scale" className="map-reveal">
              <div className="map-box">
                <div className="map-icon">📍</div>
                <h3>Eagle Star Enterprises Office Location</h3>
                <p>24-A Bharathi Nagar, Villarasampatti, Erode, Tamil Nadu 638107</p>
                <a
                  href="https://www.google.com/maps?q=11.345562,77.685943"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Open in Google Maps
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
