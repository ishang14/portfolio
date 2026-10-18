import { useEffect, useRef, useState } from 'react';
import { ProjectVisual } from './Projects.jsx';
import { GitHub, Close, Chevron, External } from './Icons.jsx';

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const [closing, setClosing] = useState(false);
  const dialogRef = useRef(null);
  const count = project.images.length;

  const close = () => {
    setClosing(true);
    setTimeout(onClose, 220);
  };

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (count > 1 && e.key === 'ArrowRight') setIndex((i) => (i + 1) % count);
      if (count > 1 && e.key === 'ArrowLeft') setIndex((i) => (i - 1 + count) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className={`modal ${closing ? 'is-closing' : ''}`} onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div
        className="modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        ref={dialogRef}
        style={{ '--accent': project.accent }}
      >
        <button className="icon-btn modal__close" onClick={close} aria-label="Close">
          <Close />
        </button>

        <div className="modal__gallery">
          <div className="modal__image" key={index}>
            <ProjectVisual project={project} index={index} />
          </div>
          {count > 1 && (
            <>
              <button className="gallery-btn gallery-btn--prev" onClick={() => setIndex((i) => (i - 1 + count) % count)} aria-label="Previous screenshot">
                <Chevron dir="left" />
              </button>
              <button className="gallery-btn gallery-btn--next" onClick={() => setIndex((i) => (i + 1) % count)} aria-label="Next screenshot">
                <Chevron />
              </button>
              <div className="dots">
                {project.images.map((img, i) => (
                  <button key={img} className={i === index ? 'is-active' : ''} onClick={() => setIndex(i)} aria-label={`Screenshot ${i + 1}`} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="modal__body">
          <p className="eyebrow">{project.subtitle}</p>
          <h3 id="modal-title">{project.title}</h3>
          <p className="modal__summary">{project.summary}</p>

          <ul className="metrics">
            {project.metrics.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>

          <h4>What I did</h4>
          <ul className="bullets">
            {project.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <h4>Stack</h4>
          <ul className="tags">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn--primary modal__repo">
            <GitHub /> View on GitHub <External width={15} height={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
