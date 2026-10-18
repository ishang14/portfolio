import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, Close } from './Icons.jsx';

export default function Nav({ sections, active, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#home" className="nav__logo" aria-label="Back to top">
          <span className="logo-mark">IG</span>
          <span className="nav__name">Ishaan Garg</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button className="icon-btn nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
