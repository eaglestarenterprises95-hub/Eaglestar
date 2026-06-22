import { useState } from 'react';
import { SERVICE_OPTIONS } from '../../data/services';
import { Reveal } from '../ui/Reveal';

const TAGLINES = [
  'Think Energy Conservation',
  'Think Environment Protection',
  'Think Eagle Star Enterprises',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    location: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you within 24 hours.');
    setForm({ name: '', mobile: '', email: '', service: '', location: '', details: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-eyebrow">Contact Us</div>
        <h2 className="section-title">
          Discuss Your <span>Project Requirements</span>
        </h2>
        <div className="contact-grid">
          <Reveal direction="left" className="contact-info">
            <p>
              Our team of industrial solutions experts is here to help at every stage — from design
              and engineering to supply and execution. Submit your requirements and we&apos;ll get
              back to you within 24 hours.
            </p>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
              </div>
              <div className="contact-detail-text">
                <strong>Phone</strong>
                <span>9445120504</span>
                <br />
                <span>9842770504</span>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="contact-detail-text">
                <strong>Email</strong>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ntpanitha1@gmail.com" target="_blank" rel="noopener noreferrer">
                  ntpanitha1@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="contact-detail-text">
                <strong>Head Office</strong>
                <a
                  href="https://maps.app.goo.gl/eQkrxLijcyTRjYHJ9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  24-A Bharathi Nagar,
                  <br />
                  Villarasampatti, Erode – 638107,
                  <br />
                  Tamil Nadu, India
                </a>
              </div>
            </div>
            <div className="contact-tagline">
              {TAGLINES.map((line) => (
                <div key={line} className="contact-tagline-line">
                  {line}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal direction="right" className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={form.mobile}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a service...</option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="location">Location / Project Site</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="City, State"
                  value={form.location}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="details">Project Details</label>
                <textarea
                  id="details"
                  name="details"
                  placeholder="Brief description of your project requirements..."
                  value={form.details}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="form-submit">
                Submit Request
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
