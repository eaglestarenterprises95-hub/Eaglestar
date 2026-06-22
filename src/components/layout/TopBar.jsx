import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="inner">
        <div className="topbar-contacts">
          <a href="tel:+919445120504">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            +91 94451 20504
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ntpanitha1@gmail.com" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            ntpanitha1@gmail.com
          </a>
        </div>
        <Link to="/contact" className="cta-top">
          Request a Quote
        </Link>
      </div>
    </div>
  );
}
