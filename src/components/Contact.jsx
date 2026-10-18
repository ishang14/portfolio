import { useState } from 'react';
import Section, { Reveal } from './Section.jsx';
import { profile } from '../data.js';
import { GitHub, LinkedIn, Mail, Phone, Copy } from './Icons.jsx';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const links = [
    { icon: <Mail />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: <LinkedIn />, label: 'LinkedIn', value: 'in/ishaan-garg-ca', href: profile.linkedin },
    { icon: <GitHub />, label: 'GitHub', value: 'ishang14', href: profile.github },
    { icon: <Phone />, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
  ];

  return (
    <Section id="contact" eyebrow="05 · Contact" title="Let's build something">
      <Reveal className="contact glass">
        <div className="contact__left">
          <p className="contact__lead">
            I'm looking for software engineering and machine learning roles. If you have a role, a project or a question,
            send me a message.
          </p>
          <div className="contact__actions">
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              <Mail /> Say hello
            </a>
            <button className="btn btn--ghost" onClick={copyEmail}>
              <Copy /> {copied ? 'Copied!' : 'Copy email'}
            </button>
          </div>
        </div>
        <ul className="contact__links">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span className="contact__icon">{l.icon}</span>
                <span>
                  <small>{l.label}</small>
                  {l.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
