import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from './Icon.jsx';
import { navLinks, site } from '../data/site.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={close}>
          <img src="/Logo.png" alt={site.name} className="brand-logo" />
          <div className="brand-info">
            <span className="brand-name">{site.name}</span>
            <span className="brand-tagline">Hub of digital services</span>
          </div>
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={close}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary nav-cta" onClick={close}>
            Get a quote
          </Link>
        </nav>

        <button
          type="button"
          className={`menu-toggle ${open ? 'open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
}

