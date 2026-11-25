import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { navLinks, site } from '../data/site.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('oryn-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('oryn-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={close}>
          <img src="/logo.webp" alt={site.name} className="brand-logo" />
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
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
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

