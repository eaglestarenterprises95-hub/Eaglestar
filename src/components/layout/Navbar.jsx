import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../data/site';
import { Logo } from '../ui/Logo';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav>
      <div className="nav-inner">
        <Logo href="/" />
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `${link.cta ? 'nav-cta' : ''}${isActive ? ' active' : ''}`
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={`hamburger${mobileOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.label}
            to={link.href}
            className={({ isActive }) =>
              `${link.cta ? 'nav-cta' : ''}${isActive ? ' active' : ''}`
            }
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
