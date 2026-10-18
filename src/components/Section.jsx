import { useReveal } from '../hooks.js';

export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section__title">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
