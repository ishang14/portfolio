import Section, { Reveal } from './Section.jsx';
import { experience, education } from '../data.js';

export default function Journey() {
  return (
    <Section id="journey" eyebrow="03 · Experience & Education" title="Where I've been">
      <div className="journey">
        <div>
          <Reveal as="h3" className="journey__label">Experience</Reveal>
          {experience.map((e) => (
            <Reveal key={e.role} className="exp-card glass">
              <div className="exp-card__top">
                <span className="period">{e.period}</span>
              </div>
              <h4>{e.role}</h4>
              <p className="exp-card__org">{e.org}</p>
              <ul className="bullets">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div>
          <Reveal as="h3" className="journey__label">Education</Reveal>
          <ol className="timeline">
            {education.map((ed, i) => (
              <Reveal as="li" key={ed.school} className="timeline__item" delay={i * 110}>
                <span className="timeline__dot" />
                <span className="period">{ed.period}</span>
                <h4>{ed.school}</h4>
                <p>{ed.degree}</p>
                <p className="timeline__meta">
                  {ed.place}
                  {ed.score && <span className="score">GPA {ed.score}</span>}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
