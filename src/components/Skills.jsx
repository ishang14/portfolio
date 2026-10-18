import Section, { Reveal } from './Section.jsx';
import { skills } from '../data.js';

const colors = ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)', 'var(--c5)'];

export default function Skills() {
  return (
    <Section id="skills" eyebrow="04 · Skills" title="My toolkit">
      <div className="skills-grid">
        {skills.map((s, i) => (
          <Reveal key={s.group} className="skill-card glass" delay={i * 80} style={{ '--accent': colors[i % colors.length], '--d': `${i * 80}ms` }}>
            <h3>
              <span className="skill-card__dot" /> {s.group}
            </h3>
            <ul className="skill-list">
              {s.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
