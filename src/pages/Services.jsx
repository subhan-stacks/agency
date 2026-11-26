import Reveal from '../components/Reveal.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CtaBand from '../components/CtaBand.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { services } from '../data/site.js';

export default function Services() {
  usePageTitle('Services');

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Services</span>
          <h1>Everything you need to grow online</h1>
          <p>From first sketch to launch and beyond, we cover the full digital journey.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
