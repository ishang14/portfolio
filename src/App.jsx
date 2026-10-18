import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Journey from './components/Journey.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Hobbies from './components/Hobbies.jsx';
import { useActiveSection, useTheme } from './hooks.js';
import { profile } from './data.js';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
  { id: 'hobbies', label: 'Hobbies' },
];
const ids = ['home', ...sections.map((s) => s.id)];

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="progress" style={{ transform: `scaleX(${p})` }} />;
}

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const active = useActiveSection(ids);

  return (
    <>
      <ScrollProgress />
      <Nav sections={sections} active={active} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Skills />
        <Contact />
        <Hobbies />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>
      </footer>
    </>
  );
}
