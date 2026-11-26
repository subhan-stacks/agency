import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CtaBand from '../components/CtaBand.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { site, stats, values } from '../data/site.js';

export default function About() {
  usePageTitle('About');

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">About us</span>
          <h1>A small team with big standards</h1>
          <p>
            {site.name} helps businesses turn ideas into fast, beautiful and profitable digital
            products.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-story-grid">
          <Reveal>
            <div className="about-story-content">
              <span className="dpo-eyebrow">Our Story</span>
              <h2>Built for speed, craft, and measurable growth</h2>
              <p>
                We started as a group of developers and designers who were tired of agencies that
                over-promise and under-deliver. So we built the kind of agency we wished existed:
                honest, quick, and obsessed with quality.
              </p>
              <p>
                Today we work with startups, clinics, shops and growing brands, combining web
                development, AI automation and marketing so every piece of your digital presence
                works together.
              </p>

              <dl className="about-stats-grid">
                {stats.map((s) => (
                  <div key={s.label} className="about-stat-item">
                    <dd>{s.value}</dd>
                    <dt>{s.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="about-portrait-frame">
              <img
                src="/001.png"
                alt="Subhan Ahmad — Founder & CEO of Oryn Solution"
                className="about-portrait-img"
              />
              <div className="about-portrait-overlay" />
              <div className="about-portrait-badge">
                <span className="about-portrait-role">Founder &amp; CEO · {site.name}</span>
                <strong>Subhan Ahmad</strong>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Our values" title="What we stand for" />
          <div className="grid grid-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
