import Section, { Reveal } from './Section.jsx';
import { about } from '../data.js';

const focus = [
  { title: 'Retrieval & RAG', text: 'Hybrid search, citation-backed answers, quote verification and evaluation sets.', color: 'var(--c1)' },
  { title: 'Full-stack products', text: 'React frontends, FastAPI / Express APIs, auth, background workers.', color: 'var(--c2)' },
  { title: 'Performance', text: 'Redis queues and caches, benchmarks, measurable latency wins.', color: 'var(--c3)' },
  { title: 'Deep learning', text: 'Transfer learning with PyTorch, model comparison and evaluation.', color: 'var(--c4)' },
];

export default function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="Engineer who ships, then measures">
      <div className="about">
        <Reveal className="about__text">
          {about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </Reveal>

        <div className="focus-grid">
          {focus.map((f, i) => (
            <Reveal key={f.title} className="focus-card glass" delay={i * 90} style={{ '--accent': f.color, '--d': `${i * 90}ms` }}>
              <span className="focus-card__bar" />
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
