import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Database,
  Eye,
  Cookie,
  Share2,
  Lock,
  UserCheck,
  Baby,
  HelpCircle,
  Calendar,
  ArrowRight,
  FileText,
} from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { site } from '../data/site.js';

export default function PrivacyPolicy() {
  usePageTitle('Privacy Policy');
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: '1. Overview & Commitment', icon: Shield },
    { id: 'collection', title: '2. Information We Collect', icon: Database },
    { id: 'usage', title: '3. How We Use Information', icon: Eye },
    { id: 'cookies', title: '4. Cookies & Analytics', icon: Cookie },
    { id: 'sharing', title: '5. Data Sharing & Third Parties', icon: Share2 },
    { id: 'security', title: '6. Data Security & Retention', icon: Lock },
    { id: 'rights', title: '7. Your Privacy Rights', icon: UserCheck },
    { id: 'children', title: '8. Children’s Privacy', icon: Baby },
    { id: 'contact-privacy', title: '9. Updates & Contact', icon: HelpCircle },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="terms-page">
      {/* Page Hero */}
      <section className="page-hero terms-hero">
        <div className="container">
          <span className="eyebrow light">Legal &amp; Privacy</span>
          <h1>Privacy Policy</h1>
          <p>
            Learn how {site.name} collects, uses, protects, and respects your personal and business information across our website and digital services.
          </p>
          <div className="terms-meta-badges">
            <span className="terms-badge">
              <Calendar size={14} /> Last Updated: November 2026
            </span>
            <span className="terms-badge">
              <Shield size={14} /> Data Protection · Active
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section terms-content-section">
        <div className="container terms-layout">
          {/* Quick Nav Sidebar */}
          <aside className="terms-sidebar">
            <div className="terms-nav-box">
              <div className="terms-nav-header">
                <FileText size={18} className="terms-accent-icon" />
                <h4>Table of Contents</h4>
              </div>
              <ul className="terms-nav-list">
                {sections.map((sec) => {
                  const IconComponent = sec.icon;
                  return (
                    <li key={sec.id}>
                      <button
                        type="button"
                        onClick={() => scrollTo(sec.id)}
                        className={`terms-nav-btn ${activeSection === sec.id ? 'active' : ''}`}
                      >
                        <IconComponent size={15} />
                        <span>{sec.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="terms-help-card">
                <h5>Privacy Questions?</h5>
                <p>Want to request data access, deletion, or an NDA?</p>
                <Link to="/contact" className="btn btn-outline terms-help-btn">
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </aside>

          {/* Privacy Policy Body */}
          <div className="terms-body">
            {/* 1. Overview */}
            <Reveal>
              <article id="overview" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <Shield size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 01</span>
                    <h2>Overview &amp; Commitment</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    At <strong>{site.name}</strong>, we respect your privacy and are committed to safeguarding the personal and business information you share with us when visiting our website or engaging our digital services.
                  </p>
                  <p>
                    This Privacy Policy explains what information we collect, why we collect it, how we protect it, and the choices you have regarding your data. By using our website, you consent to the practices described in this policy.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* 2. Information We Collect */}
            <Reveal>
              <article id="collection" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <Database size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 02</span>
                    <h2>Information We Collect</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>We may collect the following categories of information depending on how you interact with us:</p>
                  <ul className="terms-bullet-list">
                    <li><strong>Contact &amp; Inquiry Details:</strong> Name, email address, phone number, company name, selected service, and project details submitted via our contact form, email, or WhatsApp.</li>
                    <li><strong>Project &amp; Account Materials:</strong> Branding assets, copy, technical requirements, and credentials necessary to deliver contracted web, software, AI, or marketing work.</li>
                    <li><strong>Technical &amp; Usage Data:</strong> Browser type, device information, IP address, referring pages, and interaction metrics collected automatically to keep our site secure and performant.</li>
                  </ul>
                </div>
              </article>
            </Reveal>

            {/* 3. How We Use Information */}
            <Reveal>
              <article id="usage" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <Eye size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 03</span>
                    <h2>How We Use Your Information</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>{site.name} uses collected data strictly for legitimate business and service-delivery purposes:</p>
                  <ul className="terms-bullet-list">
                    <li>Responding to consultation requests, quotes, and support inquiries.</li>
                    <li>Designing, developing, deploying, and maintaining your websites, apps, AI automations, and marketing campaigns.</li>
                    <li>Sending project updates, invoices, and essential service communications.</li>
                    <li>Improving website performance, user experience, and security.</li>
                  </ul>
                </div>
              </article>
            </Reveal>

            {/* 4. Cookies & Analytics */}
            <Reveal>
              <article id="cookies" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <Cookie size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 04</span>
                    <h2>Cookies &amp; Analytics</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    We may use essential cookies and privacy-conscious analytics tools to understand site traffic, remember preferences, and improve site responsiveness.
                  </p>
                  <p>
                    You can control or disable cookies at any time through your browser settings. Disabling certain cookies may affect minor interactive features on the site.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* 5. Data Sharing & Third Parties */}
            <Reveal>
              <article id="sharing" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <Share2 size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 05</span>
                    <h2>Data Sharing &amp; Third-Party Services</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    <strong>We never sell, rent, or trade your personal information.</strong> We only share data when necessary to operate our business or deliver your project:
                  </p>
                  <ul className="terms-bullet-list">
                    <li><strong>Trusted Service Providers:</strong> Hosting platforms, cloud infrastructure, email delivery, and analytics tools operating under strict confidentiality obligations.</li>
                    <li><strong>Client-Authorized Integrations:</strong> Third-party APIs or platforms (e.g., payment gateways, CRM, or AI providers) explicitly requested for your project.</li>
                    <li><strong>Legal Compliance:</strong> When required by applicable law, court order, or to protect our legal rights and prevent fraud.</li>
                  </ul>
                </div>
              </article>
            </Reveal>

            {/* 6. Data Security & Retention */}
            <Reveal>
              <article id="security" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <Lock size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 06</span>
                    <h2>Data Security &amp; Retention</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    We implement industry-standard administrative, technical, and organizational safeguards to protect your data against unauthorized access, alteration, or disclosure.
                  </p>
                  <p>
                    We retain personal and project information only for as long as necessary to fulfill the purposes outlined in this policy, deliver ongoing support, or meet legal and accounting obligations.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* 7. Your Privacy Rights */}
            <Reveal>
              <article id="rights" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <UserCheck size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 07</span>
                    <h2>Your Privacy Rights</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>Depending on your jurisdiction, you have the right to:</p>
                  <ul className="terms-bullet-list">
                    <li>Request access to the personal information we hold about you.</li>
                    <li>Request correction of inaccurate or incomplete details.</li>
                    <li>Request deletion of your personal data, subject to legal or contractual retention requirements.</li>
                    <li>Opt out of any non-essential communications at any time.</li>
                  </ul>
                </div>
              </article>
            </Reveal>

            {/* 8. Children's Privacy */}
            <Reveal>
              <article id="children" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <Baby size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 08</span>
                    <h2>Children&rsquo;s Privacy</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    Our website and services are intended for businesses and individuals aged 18 and older. We do not knowingly collect personal information from children under 13. If you believe a minor has provided us with personal data, please contact us so we can promptly remove it.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* 9. Updates & Contact */}
            <Reveal>
              <article id="contact-privacy" className="terms-card terms-contact-highlight">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <HelpCircle size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 09</span>
                    <h2>Policy Updates &amp; Contact</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised effective date. For any privacy-related questions or requests, please reach out to us:
                  </p>
                  <div className="terms-contact-info-grid">
                    <div className="terms-contact-item">
                      <span className="muted-label">Agency Name</span>
                      <strong>{site.name}</strong>
                    </div>
                    <div className="terms-contact-item">
                      <span className="muted-label">Founder &amp; CEO</span>
                      <strong>Subhan Ahmad</strong>
                    </div>
                    <div className="terms-contact-item">
                      <span className="muted-label">Official Email</span>
                      <a href={`mailto:${site.email}`} className="terms-link">{site.email}</a>
                    </div>
                    <div className="terms-contact-item">
                      <span className="muted-label">Phone &amp; WhatsApp</span>
                      <a href={`tel:${site.phone.replace(/\s+/g, '')}`} className="terms-link">{site.phone}</a>
                    </div>
                    <div className="terms-contact-item">
                      <span className="muted-label">Headquarters</span>
                      <strong>{site.address}</strong>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
