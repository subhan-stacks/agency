import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PricingCard from '../components/PricingCard.jsx';
import CtaBand from '../components/CtaBand.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { packages, faqs } from '../data/site.js';

export default function Packages() {
  usePageTitle('NexMove Developments | Packages');
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Packages</span>
          <h1>Simple pricing, serious results</h1>
          <p>Transparent monthly plans. Upgrade, downgrade or cancel whenever you need.</p>

          <div className="toggle" role="group" aria-label="Billing period">
            <button type="button" className={!yearly ? 'active' : ''} onClick={() => setYearly(false)}>
              Monthly
            </button>
            <button type="button" className={yearly ? 'active' : ''} onClick={() => setYearly(true)}>
              Yearly <small>-20%</small>
            </button>
          </div>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container grid grid-3 pricing-grid">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <PricingCard plan={p} yearly={yearly} />
            </Reveal>
          ))}
        </div>

        {/* Pricing Trust & Guarantees Strip */}
        <div className="container">
          <div className="pricing-trust-strip">
            <div className="pricing-trust-item">
              <span className="pricing-trust-icon">🛡️</span>
              <div>
                <strong>Zero Hidden Charges</strong>
                <span>Fixed milestone-based scope</span>
              </div>
            </div>
            <div className="pricing-trust-item">
              <span className="pricing-trust-icon">⚡</span>
              <div>
                <strong>Founder & CEO Oversight</strong>
                <span>Direct technical leadership</span>
              </div>
            </div>
            <div className="pricing-trust-item">
              <span className="pricing-trust-icon">📁</span>
              <div>
                <strong>100% Asset Ownership</strong>
                <span>Full code & IP transferred</span>
              </div>
            </div>
            <div className="pricing-trust-item">
              <span className="pricing-trust-icon">🔄</span>
              <div>
                <strong>Structured Revisions</strong>
                <span>Clear review & delivery cycle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow">
          <SectionHeading eyebrow="FAQ" title="Questions we hear a lot" />
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
