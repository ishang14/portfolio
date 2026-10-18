import { useState } from 'react';
import Section, { Reveal } from './Section.jsx';
import ProjectModal from './ProjectModal.jsx';
import { projects } from '../data.js';
import { GitHub, Arrow, Brain } from './Icons.jsx';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI / ML' },
  { id: 'fullstack', label: 'Full-stack' },
];

export const shot = (name) => `${import.meta.env.BASE_URL}shots/${name}.png`;

export function ProjectVisual({ project, index = 0 }) {
  if (project.images.length) {
    return <img src={shot(project.images[index])} alt={`${project.title} screenshot`} loading="lazy" />;
  }
  return (
    <div className="visual-placeholder">
      <Brain />
      <span className="mono">PubMedBERT → Atlas Vector Search → LLM</span>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [openId, setOpenId] = useState(null);

  const list = projects.filter((p) => filter === 'all' || p.category.includes(filter));
  const openProject = projects.find((p) => p.id === openId);

  return (
    <Section id="projects" eyebrow="02 · Projects" title="Things I've built">
      <Reveal className="filters" role="tablist" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            className={`chip-btn ${filter === f.id ? 'is-active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
            <span className="chip-btn__count">
              {f.id === 'all' ? projects.length : projects.filter((p) => p.category.includes(f.id)).length}
            </span>
          </button>
        ))}
      </Reveal>

      <div className="projects-grid">
        {list.map((p, i) => (
          <Reveal as="article" key={p.id} className="project-card" delay={(i % 2) * 100} style={{ '--accent': p.accent, '--d': `${(i % 2) * 100}ms` }}>
            <button className="project-card__media" onClick={() => setOpenId(p.id)} aria-label={`Open details for ${p.title}`}>
              <ProjectVisual project={p} />
              <span className="project-card__shade" />
              {p.images.length > 1 && <span className="project-card__count">{p.images.length} screens</span>}
            </button>

            <div className="project-card__body">
              <div className="project-card__head">
                <div>
                  <h3>{p.title}</h3>
                  <p className="project-card__sub">{p.subtitle}</p>
                </div>
                <a href={p.repo} target="_blank" rel="noreferrer" className="icon-btn" aria-label={`${p.title} on GitHub`}>
                  <GitHub />
                </a>
              </div>

              <p className="project-card__summary">{p.summary}</p>

              <ul className="metrics">
                {p.metrics.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>

              <ul className="tags">
                {p.tech.slice(0, 6).map((t) => (
                  <li key={t}>{t}</li>
                ))}
                {p.tech.length > 6 && <li className="tags__more">+{p.tech.length - 6}</li>}
              </ul>

              <button className="link-btn" onClick={() => setOpenId(p.id)}>
                Read case study <Arrow width={16} height={16} />
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      {openProject && <ProjectModal project={openProject} onClose={() => setOpenId(null)} />}
    </Section>
  );
}
