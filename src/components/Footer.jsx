import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { navLinks, site } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand">
            <img src="/Logo.png" alt={site.name} className="brand-logo" />
            <span className="brand-name">{site.name}</span>
          </Link>
          <p className="footer-text">{site.tagline}</p>
          <p className="footer-description">{site.description}</p>
        </div>

        <div>
          <h4>Pages</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="contact-list">
            <li><Icon name="mail" size={16} /> {site.email}</li>
            <li><Icon name="call" size={16} /> {site.phone}</li>
            <li><Icon name="pin" size={16} /> {site.address}</li>
          </ul>
        </div>

        <div>
          <h4>Follow</h4>
          <ul>
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <div className="footer-copy">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</div>
        <div className="footer-founder">Founder & CEO: Ali Hamza  |  Vision  ·  Leadership  ·  Innovation  ·  Growth</div>
      </div>

    </footer>
  );
}

