import Section, { Reveal } from './Section.jsx';
import { hobbies } from '../data.js';

const stroke = { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };

const icons = {
  globe: (
    <svg {...stroke}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>
  ),
  book: (
    <svg {...stroke}><path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2ZM22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7Z" /></svg>
  ),
  plane: (
    <svg {...stroke}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2Z" /></svg>
  ),
  language: (
    <svg {...stroke}><path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" /></svg>
  ),
};

const colors = ['var(--c5)', 'var(--c4)', 'var(--c3)', 'var(--c2)'];

export default function Hobbies() {
  return (
    <Section id="hobbies" eyebrow="06 · Hobbies" title="Beyond the code">
      <div className="hobbies-grid">
        {hobbies.map((h, i) => (
          <Reveal key={h.title} className="hobby-card glass" style={{ '--accent': colors[i % colors.length], '--d': `${i * 90}ms` }}>
            <span className="hobby-card__icon">{icons[h.icon]}</span>
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
