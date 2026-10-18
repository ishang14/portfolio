import { profile, highlights } from '../data.js';
import { useTypewriter } from '../hooks.js';
import { GitHub, LinkedIn, Mail, Pin, Arrow } from './Icons.jsx';

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="blob blob--1" />
        <span className="blob blob--2" />
        <span className="blob blob--3" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero__content">
        <p className="hero__badge">
          <span className="pulse" /> Open to internships and co-op roles
        </p>
        <h1 className="hero__title">
          Hi, I'm <span className="gradient-text">{profile.name}</span>
        </h1>
        <p className="hero__role">
          <span className="mono">&gt;</span> {role}
          <span className="caret" />
        </p>
        <p className="hero__intro">{profile.intro}</p>
        <p className="hero__loc">
          <Pin width={16} height={16} /> {profile.location}
        </p>

        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">
            View my work <Arrow />
          </a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
          <div className="hero__socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHub /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
          </div>
        </div>

        <ul className="stats">
          {highlights.map((h, i) => (
            <li key={h.label} className="stat" style={{ '--d': `${i * 90 + 300}ms` }}>
              <strong>{h.value}</strong>
              <span>{h.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about">
        <span />
      </a>
    </section>
  );
}
