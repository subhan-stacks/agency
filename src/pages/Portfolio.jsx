import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { portfolioProjects } from '../data/site.js';

const CATEGORIES = [
  'All Projects',
  'Web Development',
  'SEO Projects',
  'SMM Campaigns',
  'SaaS & Apps',
];

const TRUST_STATS = [
  { value: '120+', label: 'Delivered Projects' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '6+ Yrs', label: 'Industry Expertise' },
  { value: '100%', label: 'On-Time Execution' },
];

export default function Portfolio() {
  usePageTitle('NexMove Developments | Portfolio & Work Gallery');
  const [activeTab, setActiveTab] = useState('All Projects');

  const getCategoryCount = (cat) => {
    if (cat === 'All Projects') return portfolioProjects.length;
    return portfolioProjects.filter((p) => p.category === cat).length;
  };

  const filteredProjects =
    activeTab === 'All Projects'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeTab);

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero portfolio-hero">
        <div className="container">
          <span className="eyebrow light">Proof of Execution</span>
          <h1>
            Our Featured <span className="gradient-text">Portfolio & Client Work</span>
          </h1>
          <p className="portfolio-hero-desc">
            Explore our delivered client projects across Web Development, Technical SEO, Social Media
            Campaigns, and Software Solutions crafted for measurable business outcomes.
          </p>

          {/* Trust Highlights Strip */}
          <div className="portfolio-trust-strip">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="portfolio-trust-item">
                <span className="trust-stat-value">{stat.value}</span>
                <span className="trust-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Filter Tabs with Live Counts */}
          <div className="portfolio-filters" role="tablist" aria-label="Portfolio categories">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat;
              const count = getCategoryCount(cat);
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`portfolio-filter-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(cat)}
                >
                  <span className="filter-name">{cat}</span>
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="section portfolio-section">
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div className="portfolio-empty-state">
              <h3>No projects in this category yet</h3>
              <p>Check out our other featured work or explore all delivered projects.</p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setActiveTab('All Projects')}
              >
                View All Projects
              </button>
            </div>
          ) : (
            <div className="portfolio-grid">
              {filteredProjects.map((project, idx) => (
                <Reveal key={project.id} delay={(idx % 2) * 100}>
                  <div className="portfolio-card">
                    {/* Card Header */}
                    <div className="portfolio-card-header">
                      <span className="portfolio-tag">{project.tag}</span>
                      <div className="portfolio-status">
                        <span className="status-indicator"></span> Delivered
                      </div>
                    </div>

                    {/* Image Showcase */}
                    <div className="portfolio-image-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="portfolio-image"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="portfolio-image-gradient" />
                      <div className="portfolio-image-overlay">
                        <span className="portfolio-overlay-badge">{project.category}</span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="portfolio-card-body">
                      <h2 className="portfolio-title">{project.title}</h2>
                      <p className="portfolio-desc">{project.description}</p>
                    </div>

                    {/* Card Footer with Meta & Key Metric */}
                    <div className="portfolio-card-footer">
                      <div className="portfolio-platform">
                        <span className="platform-label">Platform:</span> {project.platform}
                      </div>

                      {project.impact && (
                        <div className="portfolio-impact">
                          <Icon name="trend" size={15} className="impact-icon" />
                          <span className="impact-label">Key Result:</span>
                          <span className="impact-value">{project.impact}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section portfolio-cta-section">
        <div className="container">
          <div className="portfolio-cta-box">
            <span className="eyebrow light">Let's Build Together</span>
            <h2>Ready to Scale Your Brand Online?</h2>
            <p>
              Partner with us for tailored digital solutions designed to grow your business, or consult directly with Founder & CEO Ali Hamza.
            </p>
            <div className="portfolio-cta-actions">
              <Link to="/packages" className="btn btn-ghost">
                Explore Packages
              </Link>
              <Link to="/contact" className="btn btn-light">
                Book Strategy Session <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
