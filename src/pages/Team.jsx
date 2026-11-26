import Reveal from '../components/Reveal.jsx';
import TeamCard from '../components/TeamCard.jsx';
import CtaBand from '../components/CtaBand.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { team } from '../data/site.js';

export default function Team() {
  usePageTitle('Team');

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Our team</span>
          <h1>The people behind the work</h1>
          <p>Designers, developers and marketers who care about your outcome.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <TeamCard {...m} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
