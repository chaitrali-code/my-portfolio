import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="header">
      <Link to="/" className="header-logo" onClick={closeMobile}>
        Chaitrali
      </Link>

      <nav className="header-nav">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `header-link ${isActive ? 'active' : ''}`}
            end={link.to === '/'}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <button
        className={`hamburger ${mobileOpen ? 'open' : ''}`}
        onClick={toggleMobile}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => isActive ? 'active' : ''}
            end={link.to === '/'}
            onClick={closeMobile}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
