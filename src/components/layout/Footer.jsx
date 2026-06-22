import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

const FOOTER_SERVICES = [
  'Industrial Insulation',
  'Building Insulation',
  'Pre-Engineered Buildings',
  'Cold Storage',
  'Fire Protection',
  'Energy Audit',
];

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand">
          <Logo variant="footer" href="/" />
          <p>
            A trusted provider of industrial insulation, structural, and energy-related
            solutions for manufacturing, infrastructure, and process industries since 1994.
          </p>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            {FOOTER_SERVICES.map((item) => (
              <li key={item}>
                <Link to="/services">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            {FOOTER_LINKS.map((item) => (
              <li key={item.label}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contact</h5>
          <ul>
            <li>
              <a href="tel:+919445120504">+91 94451 20504</a>
            </li>
            <li>
              <a href="tel:+919842770504">+91 98427 70504</a>
            </li>
            <li>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ntpanitha1@gmail.com" target="_blank" rel="noopener noreferrer">ntpanitha1@gmail.com</a>
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© 2025 Eagle Star Enterprises. All rights reserved.</span>
          <div className="footer-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Use</Link>
            <Link to="/contact">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
